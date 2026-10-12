"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import * as THREE from "three";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AMENITIES_DATA, AmenityItem } from "@/lib/amenitiesData";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Azimute Helix specifications
const HELIX = {
  step: 1.12,
  pitch: 3.05,
  top: 24.4,
  radius: 5.25,
  width: 7.8,
  height: (7.8 * 941) / 1672,
};

const clamp = (x: number, a: number, b: number) => Math.max(a, Math.min(b, x));
const smooth = (a: number, b: number, x: number) => {
  const t = clamp((x - a) / (b - a), 0, 1);
  return t * t * (3 - 2 * t);
};
const damping = (speed: number, dt: number) => 1 - Math.exp(-speed * dt);

function railPoint(angle: number, inset = 0) {
  const r = 2.2 + 0.23 * Math.sin(angle * 0.68) - inset;
  return new THREE.Vector3(
    Math.sin(angle) * r,
    HELIX.top - (angle / HELIX.step) * HELIX.pitch,
    Math.cos(angle) * r
  );
}

function roundedPath(
  PathClass: typeof THREE.Shape | typeof THREE.Path,
  width: number,
  height: number,
  radius: number
) {
  const p = new PathClass();
  const x = -width / 2;
  const y = -height / 2;
  const r = radius;
  p.moveTo(x + r, y);
  p.lineTo(x + width - r, y);
  p.quadraticCurveTo(x + width, y, x + width, y + r);
  p.lineTo(x + width, y + height - r);
  p.quadraticCurveTo(x + width, y + height, x + width - r, y + height);
  p.lineTo(x + r, y + height);
  p.quadraticCurveTo(x, y + height, x, y + height - r);
  p.lineTo(x, y + r);
  p.quadraticCurveTo(x, y, x + r, y);
  p.closePath();
  return p;
}

function makeRibbon(count: number, inset = 0, halfWidth = 0.48, halfDepth = 0.105) {
  const steps = 360;
  const start = -0.65;
  const end = (count - 1) * HELIX.step + 0.75;
  const b = Math.min(0.035, halfDepth * 0.4);
  const profile = [
    [-halfWidth + b, -halfDepth],
    [halfWidth - b, -halfDepth],
    [halfWidth, -halfDepth + b],
    [halfWidth, halfDepth - b],
    [halfWidth - b, halfDepth],
    [-halfWidth + b, halfDepth],
    [-halfWidth, halfDepth - b],
    [-halfWidth, -halfDepth + b],
  ];
  const vertices: number[] = [];
  const uvs: number[] = [];
  const indices: number[] = [];
  const tangent = new THREE.Vector3();
  const radial = new THREE.Vector3();
  const binormal = new THREE.Vector3();

  for (let i = 0; i <= steps; i++) {
    const t = i / steps;
    const a = THREE.MathUtils.lerp(start, end, t);
    const c = railPoint(a, inset);
    tangent.copy(railPoint(a + 0.001, inset)).sub(railPoint(a - 0.001, inset)).normalize();
    radial.set(Math.sin(a), 0, Math.cos(a));
    binormal.crossVectors(tangent, radial).normalize();
    for (const [x, y] of profile) {
      const p = c.clone().addScaledVector(radial, x).addScaledVector(binormal, y);
      vertices.push(p.x, p.y, p.z);
      uvs.push(t, (x / halfWidth + 1) / 2);
    }
  }

  const geometry = new THREE.BufferGeometry();
  for (let side = 0; side < 8; side++) {
    const offset = indices.length;
    for (let i = 0; i < steps; i++) {
      const a = i * 8 + side;
      const b = i * 8 + ((side + 1) % 8);
      const c = a + 8;
      const d = b + 8;
      indices.push(a, c, b, b, c, d);
    }
    geometry.addGroup(offset, indices.length - offset, side === 0 || side === 4 ? 1 : 0);
  }

  const capOffset = indices.length;
  for (let j = 1; j < 7; j++) {
    indices.push(0, j, j + 1);
    const n = steps * 8;
    indices.push(n, n + j + 1, n + j);
  }
  geometry.addGroup(capOffset, indices.length - capOffset, 0);

  for (let i = 0; i < indices.length; i += 3) {
    const next = indices[i + 1];
    indices[i + 1] = indices[i + 2];
    indices[i + 2] = next;
  }

  geometry.setAttribute("position", new THREE.Float32BufferAttribute(vertices, 3));
  geometry.setAttribute("uv", new THREE.Float32BufferAttribute(uvs, 2));
  geometry.setIndex(indices);
  geometry.computeVertexNormals();
  geometry.computeBoundingSphere();
  return geometry;
}

function tourIndex(progress: number, count: number) {
  const travel = clamp((progress - 0.075) / 0.87, 0, 1) * (count - 1);
  const floor = Math.floor(travel);
  const fraction = travel - floor;
  return floor + smooth(0.18, 0.82, fraction);
}

const progressForPhoto = (index: number, count: number) =>
  0.075 + (0.87 * clamp(index, 0, count - 1)) / (count - 1);

function cameraPose(progress: number, mobile: boolean, count: number, aspect = 1.78) {
  const enter = smooth(0, 0.105, progress);
  const exit = smooth(0.955, 1, progress);
  const index = tourIndex(progress, count);
  const y = HELIX.top - index * HELIX.pitch;
  const tan = Math.tan((42 * Math.PI) / 360);
  const safeAspect = Math.max(0.3, aspect);
  const distance = Math.max(
    HELIX.width / (2 * tan * safeAspect * (mobile ? 0.96 : 0.74)),
    HELIX.height / (2 * tan * (mobile ? 0.54 : 0.63))
  );
  return {
    index,
    rotation: -index * HELIX.step,
    x: mobile ? 0 : 2.1 * (1 - enter),
    y,
    z: HELIX.radius + distance + 3.7 * (1 - enter) + 1.8 * exit,
    lookX: 0,
    lookY: y + (mobile ? 0.2 : 0.25),
    copyOpacity: 1 - smooth(0.005, 0.065, progress),
    expansion: enter,
  };
}

export default function AzimutePerspectiveExperience() {
  const chapterRef = useRef<HTMLElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const hostRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<ScrollTrigger | null>(null);
  const [mounted, setMounted] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [modalItem, setModalItem] = useState<AmenityItem | null>(null);

  const total = AMENITIES_DATA.length;
  const currentItem = AMENITIES_DATA[currentIndex] || AMENITIES_DATA[0];

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || !chapterRef.current || !hostRef.current) return;
    const chapter = chapterRef.current;
    const host = hostRef.current;

    let dead = false;
    let raf = 0;
    let last = 0;
    let elapsed = 0;
    let phase = 0;
    let drawPhase = 0;
    const pointer = { x: 0, y: 0 };
    const target = { x: 0, y: 0 };

    // THREE.JS RENDERER
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: false,
      powerPreference: "high-performance",
    });
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.05;
    renderer.setClearColor(0x000000);

    const canvas = renderer.domElement;
    canvas.className = "w-full h-full block absolute inset-0 touch-pan-y cursor-pointer";
    host.innerHTML = "";
    host.appendChild(canvas);

    const scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0x000000, 45, 120);

    const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 120);

    // Realistic RoomEnvironment reflection map matching Azimute
    const room = new RoomEnvironment();
    const pmrem = new THREE.PMREMGenerator(renderer);
    const envTexture = pmrem.fromScene(room, 0.055).texture;
    scene.environment = envTexture;
    room.dispose();
    pmrem.dispose();

    // LIGHTING MATCHING AZIMUTE
    scene.add(new THREE.HemisphereLight(0xe5e8df, 0x3d2d21, 2.4));
    const key = new THREE.DirectionalLight(0xffd7a9, 4.2);
    key.position.set(-6, 9, 10);
    scene.add(key);

    const rim = new THREE.DirectionalLight(0xd4e2e9, 3.5);
    rim.position.set(7, 2, -5);
    scene.add(rim);

    const light = new THREE.PointLight(0xffc48a, 115, 23, 2);
    scene.add(light);

    // MATERIALS
    const crystal = new THREE.MeshPhysicalMaterial({
      color: 0xf5f5ed,
      metalness: 0,
      roughness: 0.065,
      transmission: 0.94,
      thickness: 0.48,
      ior: 1.46,
      clearcoat: 1,
      clearcoatRoughness: 0.045,
      envMapIntensity: 1.7,
    });

    const bronze = new THREE.MeshPhysicalMaterial({
      color: 0xb18b62,
      metalness: 0.86,
      roughness: 0.28,
      clearcoat: 0.7,
      clearcoatRoughness: 0.16,
      envMapIntensity: 1.35,
    });

    const shadowMetal = new THREE.MeshStandardMaterial({
      color: 0x252827,
      metalness: 0.66,
      roughness: 0.32,
    });

    const cutEdge = new THREE.MeshPhysicalMaterial({
      color: 0xe6d5b8,
      metalness: 0.18,
      roughness: 0.1,
      transmission: 0.65,
      thickness: 0.18,
      ior: 1.5,
      clearcoat: 1,
      envMapIntensity: 2,
    });

    const glass = new THREE.MeshPhysicalMaterial({
      color: 0xe0dacf,
      metalness: 0.12,
      roughness: 0.16,
      transparent: true,
      opacity: 0.025,
      clearcoat: 1,
      clearcoatRoughness: 0.1,
      depthWrite: false,
      envMapIntensity: 1.1,
    });

    // ARCHITECTURAL HELIX SCULPTURE
    const sculptureGroup = new THREE.Group();
    scene.add(sculptureGroup);

    // Bevelled Ribbon rails exactly following Azimute's sculpture
    sculptureGroup.add(new THREE.Mesh(makeRibbon(total, 0, 0.62, 0.19), [cutEdge, crystal]));
    sculptureGroup.add(new THREE.Mesh(makeRibbon(total, 0.59, 0.055, 0.06), [shadowMetal, bronze]));

    // CARDS & BEVELLED FRAMES (Authentic ExtrudeGeometry with hole)
    const frameShape = roundedPath(THREE.Shape, HELIX.width + 0.16, HELIX.height + 0.16, 0.075) as THREE.Shape;
    frameShape.holes.push(roundedPath(THREE.Path, HELIX.width - 0.035, HELIX.height - 0.035, 0.024));
    const frameGeometry = new THREE.ExtrudeGeometry(frameShape, {
      depth: 0.22,
      steps: 1,
      bevelEnabled: true,
      bevelSegments: 3,
      bevelSize: 0.023,
      bevelThickness: 0.025,
      curveSegments: 5,
    });
    frameGeometry.translate(0, 0, -0.11);

    const photoGeometry = new THREE.PlaneGeometry(
      HELIX.width - 0.02,
      HELIX.height - 0.02
    );
    const backGeometry = new THREE.BoxGeometry(
      HELIX.width - 0.012,
      HELIX.height - 0.012,
      0.2
    );
    const armGeometry = new THREE.CylinderGeometry(0.044, 0.044, 1, 8);

    const loader = new THREE.TextureLoader();
    const cards: THREE.Group[] = [];

    AMENITIES_DATA.forEach((item, index) => {
      const angle = index * HELIX.step;
      const card = new THREE.Group();
      card.userData = { mediaId: item.id, photoIndex: index };

      card.position.set(
        Math.sin(angle) * HELIX.radius,
        HELIX.top - index * HELIX.pitch,
        Math.cos(angle) * HELIX.radius
      );
      card.rotation.y = angle;

      // Crystal Bevel Frame
      card.add(new THREE.Mesh(frameGeometry, crystal));
      // Back panel
      card.add(new THREE.Mesh(backGeometry, shadowMetal));

      // Photo Texture Material with toneMapped: false for bright authentic photo rendering
      const photoMaterial = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        toneMapped: false,
      });

      loader.load(
        item.image,
        (texture) => {
          if (dead) return;
          texture.colorSpace = THREE.SRGBColorSpace;
          photoMaterial.map = texture;
          photoMaterial.needsUpdate = true;
        },
        undefined,
        (err) => {
          console.warn("Failed loading texture", item.image, err);
        }
      );

      const photoMesh = new THREE.Mesh(photoGeometry, photoMaterial);
      photoMesh.position.z = 0.14;
      card.add(photoMesh);

      // Reverse photo
      const reversePhoto = new THREE.Mesh(photoGeometry, photoMaterial);
      reversePhoto.position.z = -0.14;
      reversePhoto.rotation.y = Math.PI;
      card.add(reversePhoto);

      // Glass glaze
      const glaze = new THREE.Mesh(photoGeometry, glass);
      glaze.position.z = 0.145;
      card.add(glaze);

      // Structural arm connecting card to central rail
      const anchor = railPoint(angle);
      const direction = card.position.clone().sub(anchor);
      const arm = new THREE.Mesh(armGeometry, bronze);
      arm.position.copy(anchor).addScaledVector(direction, 0.5);
      arm.scale.y = direction.length();
      arm.quaternion.setFromUnitVectors(
        new THREE.Vector3(0, 1, 0),
        direction.normalize()
      );
      sculptureGroup.add(arm);

      sculptureGroup.add(card);
      cards.push(card);
    });

    // RESIZE LOGIC
    const resize = () => {
      if (dead || !host) return;
      const width = host.clientWidth || window.innerWidth || 1920;
      const height = host.clientHeight || window.innerHeight || 1080;
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };

    // POINTER LISTENER
    const onPointerMove = (e: PointerEvent) => {
      const box = host.getBoundingClientRect();
      target.x = Math.max(-0.5, Math.min(0.5, (e.clientX - box.left) / box.width - 0.5));
      target.y = Math.max(-0.5, Math.min(0.5, 0.5 - (e.clientY - box.top) / box.height));
    };
    window.addEventListener("pointermove", onPointerMove, { passive: true });

    // SCROLL TRIGGER PROGRESS SYNC (Native CSS Sticky with Lenis compatibility, matching Azimute)
    const trigger = ScrollTrigger.create({
      trigger: chapter,
      start: "top top",
      end: "bottom bottom",
      scrub: true,
      onUpdate: (self) => {
        phase = self.progress;
      },
    });

    triggerRef.current = trigger;
    phase = drawPhase = trigger.progress;
    resize();

    // MAIN RENDER LOOP (Azimute Engine)
    const render = (now: number) => {
      if (dead) return;
      const raw = last ? now - last : 16.667;
      const dt = Math.min(raw, 64) / 1000;
      last = now;
      elapsed += dt;

      drawPhase += (phase - drawPhase) * damping(9, dt);
      pointer.x += (target.x - pointer.x) * damping(2.7, dt);
      pointer.y += (target.y - pointer.y) * damping(2.7, dt);

      const isMobile = window.innerWidth <= 700;
      const actualPose = cameraPose(drawPhase, isMobile, total, camera.aspect);
      const activeIdx = Math.max(0, Math.min(total - 1, Math.round(actualPose.index)));

      setCurrentIndex(activeIdx);

      // Exact Azimute Sculpture Rotation & Camera Tracking
      sculptureGroup.rotation.y = actualPose.rotation + Math.sin(elapsed * 0.11) * 0.009;
      sculptureGroup.position.x = actualPose.x;

      camera.position.set(
        pointer.x * 0.24,
        actualPose.y + pointer.y * 0.16,
        actualPose.z
      );
      camera.lookAt(actualPose.lookX, actualPose.lookY, 0);

      light.position.set(
        actualPose.x + 4.1 * Math.sin(elapsed * 0.16 + 0.8),
        actualPose.y + 2.5,
        8.5 + Math.cos(elapsed * 0.12)
      );

      renderer.render(scene, camera);
      raf = requestAnimationFrame(render);
    };

    raf = requestAnimationFrame(render);

    const onWindowResize = () => {
      resize();
    };
    window.addEventListener("resize", onWindowResize);

    return () => {
      dead = true;
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("resize", onWindowResize);
      trigger.kill();
      renderer.dispose();
      envTexture.dispose();
    };
  }, [mounted, total]);

  // Jump smoothly to image using ScrollTrigger's exact start and pin distance
  const jumpTo = (index: number) => {
    const st = triggerRef.current;
    if (!st) return;
    const progress = progressForPhoto(index, total);
    const targetScroll = st.start + (st.end - st.start) * progress;
    window.scrollTo({
      top: targetScroll,
      behavior: "smooth",
    });
  };

  const skipTour = () => {
    const st = triggerRef.current;
    if (st) {
      window.scrollTo({
        top: st.end + 20,
        behavior: "smooth",
      });
      return;
    }
    if (chapterRef.current?.nextElementSibling) {
      (chapterRef.current.nextElementSibling as HTMLElement).scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <>
      <section
        ref={chapterRef}
        id="perspectiva"
        aria-label="New City Paradise Architectural Experience"
        className="relative bg-black text-[#f5f1eb] select-none"
        style={{ height: `${total * 68}vh` }}
      >
        <div
          ref={stickyRef}
          className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-between"
        >
          {/* THREE.JS WebGL Depth Canvas */}
          <div ref={hostRef} className="absolute inset-0 z-0 pointer-events-auto" />

          {/* TOP BAR / Chapter Header */}
          <header className="relative z-20 flex items-center justify-between px-5 sm:px-12 pt-5 sm:pt-8 text-[10px] sm:text-xs font-menu uppercase tracking-[0.22em] sm:tracking-[0.25em] text-[#e8e0d4] pointer-events-none">
            <div className="flex items-center gap-2 sm:gap-3 pointer-events-auto">
              <span className="w-1.5 h-1.5 rounded-full bg-champagne animate-pulse" />
              <span>NEW CITY PARADISE / EXPERIENCE</span>
            </div>

            <button
              onClick={skipTour}
              className="group flex items-center gap-1.5 sm:gap-2 text-[#e8e0d4] hover:text-champagne transition-colors cursor-pointer pointer-events-auto"
            >
              <span className="hidden xs:inline">SCROLL TO EXPLORE</span>
              <span className="xs:hidden">EXPLORE</span>
              <span className="text-sm transition-transform duration-300 group-hover:translate-y-0.5">
                ↓
              </span>
            </button>
          </header>

          {/* EDITORIAL OVERLAY COPY: "A new perspective" (Fades smoothly on initial scroll) */}
          <div
            className="relative z-10 px-6 sm:px-12 max-w-7xl mx-auto w-full my-auto pointer-events-none transition-opacity duration-300"
            style={{ opacity: Math.max(0, 1 - currentIndex * 0.9) }}
          >
            <div className="max-w-xl space-y-3 sm:space-y-4">
              <p className="eyebrow text-champagne text-[10px] sm:text-xs uppercase tracking-[0.3em] font-semibold">
                ARCHITECTURE · LIGHT · LIFE
              </p>

              <h2 className="display text-[clamp(2.5rem,6vw,5.5rem)] leading-[0.92] tracking-tight text-white drop-shadow-[0_10px_25px_rgba(0,0,0,0.9)]">
                A new
                <br />
                <span className="italic text-champagne">perspective.</span>
              </h2>

              <p className="text-sm sm:text-lg text-[#e8e0d4]/80 leading-relaxed max-w-md drop-shadow-md">
                Where visionary architecture meets harmonious everyday living.
              </p>
            </div>
          </div>

          {/* BOTTOM CONTROLS & PHOTO CAPTION */}
          <footer className="relative z-20 px-4 sm:px-12 pb-5 sm:pb-8 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-5 border-t border-white/10 bg-gradient-to-t from-black via-black/85 to-transparent pt-4">
            {/* Title & Counter */}
            <div className="flex items-center gap-3 sm:gap-6 w-full sm:w-auto min-w-0">
              <span className="text-xs sm:text-sm font-menu text-champagne tracking-widest tabular-nums font-semibold shrink-0">
                {String(currentIndex + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
              </span>
              <div className="h-4 w-[1px] bg-white/20 shrink-0" />
              <h3 className="text-base sm:text-2xl font-normal text-white tracking-tight truncate">
                {currentItem.title}
              </h3>
              <span className="hidden md:inline-block px-2.5 py-0.5 rounded text-[10px] font-menu uppercase tracking-wider bg-champagne/20 text-champagne border border-champagne/30 shrink-0">
                Planned Masterplan Amenity
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-2 sm:gap-3 w-full sm:w-auto justify-between sm:justify-end pointer-events-auto">
              {/* Previous */}
              <button
                onClick={() => jumpTo(currentIndex - 1)}
                disabled={currentIndex === 0}
                aria-label="Previous view"
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg border border-champagne/30 bg-black/80 hover:bg-[#1a1917] hover:border-champagne disabled:opacity-25 disabled:cursor-not-allowed flex items-center justify-center text-white transition-all cursor-pointer"
              >
                ←
              </button>

              {/* Dropdown Jump */}
              <div className="relative flex-1 sm:flex-initial">
                <select
                  value={currentIndex}
                  onChange={(e) => jumpTo(Number(e.target.value))}
                  aria-label="Select view"
                  className="w-full appearance-none h-10 sm:h-11 px-3 sm:px-4 pr-7 sm:pr-8 rounded-lg border border-champagne/30 bg-black/80 text-[11px] sm:text-xs font-menu text-[#e8e0d4] tracking-wider uppercase hover:border-champagne focus:outline-none cursor-pointer truncate"
                >
                  {AMENITIES_DATA.map((item, idx) => (
                    <option key={item.id} value={idx} className="bg-black text-white">
                      {String(idx + 1).padStart(2, "0")} · {item.title}
                    </option>
                  ))}
                </select>
                <span className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-champagne">
                  ⌄
                </span>
              </div>

              {/* Next */}
              <button
                onClick={() => jumpTo(currentIndex + 1)}
                disabled={currentIndex === total - 1}
                aria-label="Next view"
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg border border-champagne/30 bg-black/80 hover:bg-[#1a1917] hover:border-champagne disabled:opacity-25 disabled:cursor-not-allowed flex items-center justify-center text-white transition-all cursor-pointer"
              >
                →
              </button>

              {/* View Fullscreen / Enlarge */}
              <button
                onClick={() => setModalItem(currentItem)}
                className="h-10 sm:h-11 px-3 sm:px-5 rounded-lg border border-champagne/40 bg-gradient-to-r from-[#1b1915] to-[#12110f] hover:bg-black hover:border-champagne text-[10px] sm:text-[11px] font-menu uppercase tracking-wider text-[#f5f1eb] flex items-center gap-1.5 sm:gap-2 transition-all shadow-lg cursor-pointer shrink-0"
              >
                <span className="hidden xs:inline">Enlarge view</span>
                <span className="xs:hidden">Enlarge</span>
                <span className="text-champagne">↗</span>
              </button>
            </div>
          </footer>

          {/* Skip link on bottom left (Desktop only to prevent cluttering mobile footer) */}
          <div className="hidden sm:block absolute bottom-2 left-12 z-30">
            <button
              onClick={skipTour}
              className="text-[10px] font-menu tracking-wider text-[#e8e0d4]/60 hover:text-white underline underline-offset-4 cursor-pointer"
            >
              Continue website exploration ↓
            </button>
          </div>
        </div>
      </section>

      {/* LIGHTBOX MODAL */}
      {modalItem && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-2xl flex flex-col justify-between p-4 sm:p-10 animate-fade-in"
        >
          <div className="flex items-center justify-between text-white border-b border-white/10 pb-4">
            <div>
              <p className="eyebrow text-champagne text-[10px] uppercase tracking-widest font-semibold">
                Architectural View · New City Paradise
              </p>
              <h3 className="text-xl sm:text-2xl font-normal mt-1">{modalItem.title}</h3>
            </div>
            <button
              onClick={() => setModalItem(null)}
              className="px-4 py-2 rounded-full border border-champagne/40 bg-white/5 hover:bg-white/10 text-xs font-menu uppercase tracking-widest cursor-pointer text-white transition-colors"
            >
              Close &times;
            </button>
          </div>

          <div className="relative flex-1 my-4 sm:my-6 w-full max-w-6xl mx-auto rounded-xl overflow-hidden shadow-2xl">
            <Image
              src={modalItem.image}
              alt={modalItem.title}
              fill
              sizes="90vw"
              className="object-contain"
            />
          </div>

          <div className="max-w-3xl mx-auto text-center border-t border-white/10 pt-4">
            <p className="text-sm sm:text-base text-[#e8e0d4]/85 leading-relaxed">
              {modalItem.description}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
