
"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import * as THREE from "three";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowLeft, ArrowRight, X } from "lucide-react";
import {
  AMENITIES_DATA,
  type AmenityItem,
} from "@/lib/amenitiesData";

// ============================================
// GALLERY CONFIGURATION
// ============================================

const HELIX = {
  step: 1.3,
  pitch: 4.72,
  top: 24.4,
  radius: 5.75,

  width: 7.8,
  height: (7.8 * 941) / 1672,

  // NEW: ROUNDED GLASS SPIRAL
  glassRadius: 0.31,
  glassSegments: 14,
  glassTubularSegments: 480,

  // Inner bronze detail
  accentRadius: 0.045,
  accentInset: 0.43,

  // Ultra-slim LCD screens
  frameDepth: 0.055,
  backDepth: 0.045,
  frameBorder: 0.095,

  // Compact image holders
  armThickness: 0.038,
  armInset: 0.92,
};

// ============================================
// COLORS
// ============================================

const COLORS = {
  background: 0x0a0f1a,
  bronze: 0xb18b62,
  champagne: 0xd6a86a,
  blue: 0x477ad6,
  plum: 0x68428c,
};

// ============================================
// MATH HELPERS
// ============================================

const clamp = (x: number, a: number, b: number) =>
  Math.max(a, Math.min(b, x));

function smooth(a: number, b: number, x: number) {
  const t = clamp((x - a) / (b - a), 0, 1);
  return t * t * (3 - 2 * t);
}

function damping(speed: number, dt: number) {
  return 1 - Math.exp(-speed * dt);
}

// ============================================
// SPIRAL POSITION
// ============================================

function railPoint(angle: number, inset = 0) {
  const radius =
    2.2 + 0.23 * Math.sin(angle * 0.68) - inset;

  return new THREE.Vector3(
    Math.sin(angle) * radius,
    HELIX.top - (angle / HELIX.step) * HELIX.pitch,
    Math.cos(angle) * radius
  );
}

function cardPosition(index: number) {
  const angle = index * HELIX.step;

  return new THREE.Vector3(
    Math.sin(angle) * HELIX.radius,
    HELIX.top - index * HELIX.pitch,
    Math.cos(angle) * HELIX.radius
  );
}

// ============================================
// NEW ROUNDED GLASS HANGER
// ============================================

// The original spiral path is preserved.
// Only its cross-section becomes circular,
// creating a smooth polished glass sculpture.

function createRoundedGlassHanger(
  count: number,
  inset = 0,
  radius = HELIX.glassRadius
) {
  const start = -0.65;
  const end = (count - 1) * HELIX.step + 0.75;

  const points: THREE.Vector3[] = [];
  const segments = Math.max(
    HELIX.glassTubularSegments,
    count * 55
  );

  for (let i = 0; i <= segments; i++) {
    const t = i / segments;
    const angle = THREE.MathUtils.lerp(
      start,
      end,
      t
    );

    points.push(railPoint(angle, inset));
  }

  // CatmullRom gives a smooth continuous curve.
  const curve = new THREE.CatmullRomCurve3(
    points,
    false,
    "centripetal"
  );

  return new THREE.TubeGeometry(
    curve,
    segments,
    radius,
    HELIX.glassSegments,
    false
  );
}

// ============================================
// ROUNDED RECTANGLE FOR LCD FRAME
// ============================================

function roundedPath(
  PathClass: typeof THREE.Shape | typeof THREE.Path,
  width: number,
  height: number,
  radius: number
) {
  const path = new PathClass();

  const x = -width / 2;
  const y = -height / 2;
  const r = radius;

  path.moveTo(x + r, y);
  path.lineTo(x + width - r, y);
  path.quadraticCurveTo(x + width, y, x + width, y + r);

  path.lineTo(x + width, y + height - r);
  path.quadraticCurveTo(
    x + width,
    y + height,
    x + width - r,
    y + height
  );

  path.lineTo(x + r, y + height);
  path.quadraticCurveTo(
    x,
    y + height,
    x,
    y + height - r
  );

  path.lineTo(x, y + r);
  path.quadraticCurveTo(x, y, x + r, y);
  path.closePath();

  return path;
}

// ============================================
// CINEMATIC GLOW TEXTURE
// ============================================

function createGlowTexture() {
  const canvas = document.createElement("canvas");
  canvas.width = 256;
  canvas.height = 256;

  const ctx = canvas.getContext("2d");

  if (ctx) {
    const gradient = ctx.createRadialGradient(
      128, 128, 0,
      128, 128, 128
    );

    gradient.addColorStop(0, "rgba(255,255,255,0.9)");
    gradient.addColorStop(0.2, "rgba(255,255,255,0.5)");
    gradient.addColorStop(0.5, "rgba(255,255,255,0.1)");
    gradient.addColorStop(1, "rgba(255,255,255,0)");

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 256, 256);
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;

  return texture;
}

// ============================================
// SCROLL HELPERS
// ============================================

function tourIndex(progress: number, count: number) {
  if (count <= 1) return 0;

  const travel =
    clamp((progress - 0.065) / 0.89, 0, 1) *
    (count - 1);

  const floor = Math.floor(travel);
  return floor + smooth(0.18, 0.82, travel - floor);
}

function progressForPhoto(index: number, count: number) {
  if (count <= 1) return 0.5;

  return (
    0.065 +
    (0.89 * clamp(index, 0, count - 1)) /
    (count - 1)
  );
}

// ============================================
// CAMERA MOVEMENT
// ============================================

function cameraPose(
  progress: number,
  mobile: boolean,
  count: number,
  aspect = 1.78
) {
  const enter = smooth(0, 0.105, progress);
  const exit = smooth(0.955, 1, progress);

  const index = tourIndex(progress, count);
  const y = HELIX.top - index * HELIX.pitch;

  const tan = Math.tan((42 * Math.PI) / 360);
  const safeAspect = Math.max(0.3, aspect);

  const distance = Math.max(
    HELIX.width /
    (2 * tan * safeAspect * (mobile ? 0.96 : 0.74)),
    HELIX.height /
    (2 * tan * (mobile ? 0.54 : 0.63))
  );

  return {
    index,
    rotation: -index * HELIX.step,
    x: mobile ? 0 : 2.1 * (1 - enter),
    y,
    z:
      HELIX.radius +
      distance +
      3.7 * (1 - enter) +
      1.8 * exit,
    lookX: 0,
    lookY: y + (mobile ? 0.2 : 0.25),
  };
}

// ============================================
// SUPPORT ARM HELPER
// ============================================

function createSupportArm(
  start: THREE.Vector3,
  end: THREE.Vector3,
  geometry: THREE.CylinderGeometry,
  material: THREE.Material
) {
  const direction = end.clone().sub(start);

  const arm = new THREE.Mesh(geometry, material);

  arm.position.copy(start).addScaledVector(direction, 0.5);
  arm.scale.y = direction.length();

  arm.quaternion.setFromUnitVectors(
    new THREE.Vector3(0, 1, 0),
    direction.normalize()
  );

  return arm;
}

// ============================================
// MAIN COMPONENT
// ============================================

export default function AzimutePerspectiveExperience() {
  const chapterRef = useRef<HTMLElement>(null);
  const hostRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<ScrollTrigger | null>(null);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [modalItem, setModalItem] =
    useState<AmenityItem | null>(null);

  const total = AMENITIES_DATA.length;
  const currentItem = AMENITIES_DATA[currentIndex];

  // ==========================================
  // THREE.JS
  // ==========================================

  useEffect(() => {
    if (!chapterRef.current || !hostRef.current || !total) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const chapter = chapterRef.current;
    const host = hostRef.current;

    let dead = false;
    let raf = 0;
    let last = 0;
    let elapsed = 0;
    let phase = 0;
    let drawPhase = 0;
    let displayedIndex = -1;

    const pointer = { x: 0, y: 0 };
    const target = { x: 0, y: 0 };

    // ========================================
    // WEBGL RENDERER
    // ========================================

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: false,
      powerPreference: "high-performance",
    });

    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    renderer.setClearColor(COLORS.background, 1);

    const canvas = renderer.domElement;
    canvas.className = "absolute inset-0 block h-full w-full";

    host.replaceChildren(canvas);

    // ========================================
    // SCENE & CAMERA
    // ========================================

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(COLORS.background);
    scene.fog = new THREE.Fog(COLORS.background, 55, 145);

    const camera = new THREE.PerspectiveCamera(
      42,
      1,
      0.1,
      200
    );

    // ========================================
    // ENVIRONMENT REFLECTIONS
    // ========================================

    const room = new RoomEnvironment();
    const pmrem = new THREE.PMREMGenerator(renderer);
    const environment = pmrem.fromScene(room, 0.055).texture;

    scene.environment = environment;

    room.dispose();
    pmrem.dispose();

    // ========================================
    // CINEMATIC LIGHTS
    // ========================================

    scene.add(
      new THREE.HemisphereLight(
        0x8ea4d2,
        0x0d1018,
        1.9
      )
    );

    const keyLight = new THREE.DirectionalLight(
      0xffd6a3,
      3.8
    );

    keyLight.position.set(-6, 10, 11);
    scene.add(keyLight);

    const rimLight = new THREE.DirectionalLight(
      0x8fc7ff,
      3.2
    );

    rimLight.position.set(8, 3, -6);
    scene.add(rimLight);

    const champagneLight = new THREE.PointLight(
      0xf3c98b,
      95,
      26,
      2
    );

    scene.add(champagneLight);

    const blueLight = new THREE.PointLight(
      COLORS.blue,
      65,
      30,
      2
    );

    scene.add(blueLight);

    // ========================================
    // BACKGROUND ATMOSPHERE
    // ========================================

    const glowTexture = createGlowTexture();
    const glowMaterials: THREE.SpriteMaterial[] = [];

    function createGlow(
      color: number,
      opacity: number,
      scale: number
    ) {
      const material = new THREE.SpriteMaterial({
        map: glowTexture,
        color,
        transparent: true,
        opacity,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        depthTest: false,
        fog: false,
        toneMapped: false,
      });

      glowMaterials.push(material);

      const sprite = new THREE.Sprite(material);
      sprite.scale.set(scale, scale, 1);
      scene.add(sprite);

      return sprite;
    }

    const blueGlow = createGlow(0x315ba8, 0.22, 22);
    const goldGlow = createGlow(0xd6a86a, 0.15, 19);
    const purpleGlow = createGlow(0x68428c, 0.12, 24);

    // ========================================
    // MATERIALS
    // ========================================

    // NEW: Rounded glass material
    const roundedGlass = new THREE.MeshPhysicalMaterial({
      color: 0xe1eff5,
      metalness: 0,
      roughness: 0.045,
      transmission: 0.92,
      thickness: 0.85,
      ior: 1.48,
      clearcoat: 1,
      clearcoatRoughness: 0.025,
      envMapIntensity: 2.1,
    });

    const crystalFrame = new THREE.MeshPhysicalMaterial({
      color: 0xf5f5ed,
      metalness: 0,
      roughness: 0.065,
      transmission: 0.94,
      thickness: 0.25,
      ior: 1.46,
      clearcoat: 1,
      envMapIntensity: 1.9,
    });

    const bronze = new THREE.MeshPhysicalMaterial({
      color: COLORS.bronze,
      metalness: 0.86,
      roughness: 0.24,
      clearcoat: 0.8,
      clearcoatRoughness: 0.12,
      envMapIntensity: 1.55,
    });

    const darkMetal = new THREE.MeshStandardMaterial({
      color: 0x1c222b,
      metalness: 0.7,
      roughness: 0.3,
    });

    const glassOverlay = new THREE.MeshPhysicalMaterial({
      color: 0xe0dacf,
      metalness: 0.12,
      roughness: 0.16,
      transparent: true,
      opacity: 0.025,
      clearcoat: 1,
      depthWrite: false,
    });

    // ========================================
    // MAIN ROTATING GROUP
    // ========================================

    const sculptureGroup = new THREE.Group();
    scene.add(sculptureGroup);

    // ========================================
    // NEW ROUNDED GLASS SPIRAL HANGER
    // ========================================

    const glassHangerGeometry = createRoundedGlassHanger(
      total,
      0,
      HELIX.glassRadius
    );

    const glassHanger = new THREE.Mesh(
      glassHangerGeometry,
      roundedGlass
    );

    sculptureGroup.add(glassHanger);

    // Subtle inner champagne bronze spiral
    // This is a slim accent, not a replacement pipe.

    const accentGeometry = createRoundedGlassHanger(
      total,
      HELIX.accentInset,
      HELIX.accentRadius
    );

    const accentHanger = new THREE.Mesh(
      accentGeometry,
      bronze
    );

    sculptureGroup.add(accentHanger);

    // ========================================
    // ULTRA-SLIM LCD FRAMES
    // ========================================

    const outerWidth = HELIX.width + 0.16;
    const outerHeight = HELIX.height + 0.16;

    const innerWidth =
      outerWidth - HELIX.frameBorder * 2;

    const innerHeight =
      outerHeight - HELIX.frameBorder * 2;

    const frameShape = roundedPath(
      THREE.Shape,
      outerWidth,
      outerHeight,
      0.075
    ) as THREE.Shape;

    frameShape.holes.push(
      roundedPath(
        THREE.Path,
        innerWidth,
        innerHeight,
        0.024
      )
    );

    const frameGeometry = new THREE.ExtrudeGeometry(
      frameShape,
      {
        depth: HELIX.frameDepth,
        steps: 1,
        bevelEnabled: true,
        bevelSegments: 3,
        bevelSize: 0.012,
        bevelThickness: 0.008,
        curveSegments: 5,
      }
    );

    frameGeometry.translate(
      0,
      0,
      -HELIX.frameDepth / 2
    );

    const imageGeometry = new THREE.PlaneGeometry(
      innerWidth - 0.015,
      innerHeight - 0.015
    );

    const backingGeometry = new THREE.BoxGeometry(
      HELIX.width - 0.012,
      HELIX.height - 0.012,
      HELIX.backDepth
    );

    // ========================================
    // COMPACT BRACKETS
    // ========================================

    const armGeometry = new THREE.CylinderGeometry(
      HELIX.armThickness,
      HELIX.armThickness,
      1,
      12
    );

    const mountGeometry = new THREE.BoxGeometry(
      0.9,
      0.44,
      0.045
    );

    const trimGeometry = new THREE.BoxGeometry(
      0.96,
      0.49,
      0.025
    );

    const jointGeometry = new THREE.SphereGeometry(
      0.12,
      16,
      12
    );

    const loader = new THREE.TextureLoader();
    const loadedTextures: THREE.Texture[] = [];
    const imageMaterials: THREE.MeshBasicMaterial[] = [];

    // ========================================
    // CREATE IMAGES AND HOLDERS
    // ========================================

    AMENITIES_DATA.forEach((item, index) => {
      const angle = index * HELIX.step;

      const card = new THREE.Group();
      card.position.copy(cardPosition(index));
      card.rotation.y = angle;

      card.userData = {
        mediaId: item.id,
        photoIndex: index,
      };

      // Thin crystal frame
      card.add(new THREE.Mesh(frameGeometry, crystalFrame));

      // Thin black LCD body
      card.add(new THREE.Mesh(backingGeometry, darkMetal));

      // Image material
      const imageMaterial = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        toneMapped: false,
        side: THREE.FrontSide,
      });

      imageMaterials.push(imageMaterial);

      loader.load(
        item.image,
        (texture) => {
          if (dead) {
            texture.dispose();
            return;
          }

          texture.colorSpace = THREE.SRGBColorSpace;
          texture.anisotropy = Math.min(
            renderer.capabilities.getMaxAnisotropy(),
            8
          );

          imageMaterial.map = texture;
          imageMaterial.needsUpdate = true;
          loadedTextures.push(texture);
        },
        undefined,
        (error) => {
          console.warn(
            "Gallery image failed:",
            item.image,
            error
          );
        }
      );

      // Front image
      const frontImage = new THREE.Mesh(
        imageGeometry,
        imageMaterial
      );

      frontImage.position.z = 0.035;
      card.add(frontImage);

      // Rear image
      const backImage = new THREE.Mesh(
        imageGeometry,
        imageMaterial
      );

      backImage.position.z = -0.035;
      backImage.rotation.y = Math.PI;
      card.add(backImage);

      // Thin protective glass
      const glaze = new THREE.Mesh(
        imageGeometry,
        glassOverlay
      );

      glaze.position.z = 0.037;
      card.add(glaze);

      // =====================================
      // COMPACT SCREEN MOUNT
      // =====================================

      const mount = new THREE.Mesh(
        mountGeometry,
        darkMetal
      );

      mount.position.z = -0.085;
      card.add(mount);

      const trim = new THREE.Mesh(
        trimGeometry,
        bronze
      );

      trim.position.z = -0.13;
      card.add(trim);

      // =====================================
      // HOLDER CONNECTIONS
      // =====================================

      const outward = new THREE.Vector3(
        Math.sin(angle),
        0,
        Math.cos(angle)
      );

      const anchor = card.position
        .clone()
        .addScaledVector(
          outward,
          -HELIX.armInset
        );

      const armEnd = card.position
        .clone()
        .addScaledVector(outward, -0.13);

      // Double compact arms
      for (const offsetY of [-0.14, 0.14]) {
        const start = anchor.clone();
        start.y += offsetY;

        const end = armEnd.clone();
        end.y += offsetY;

        sculptureGroup.add(
          createSupportArm(
            start,
            end,
            armGeometry,
            bronze
          )
        );
      }

      // Rounded joint
      const joint = new THREE.Mesh(
        jointGeometry,
        bronze
      );

      joint.position.copy(anchor);
      sculptureGroup.add(joint);

      // Connect bracket to rounded glass spiral
      const glassAnchor = railPoint(angle);

      sculptureGroup.add(
        createSupportArm(
          glassAnchor,
          anchor,
          armGeometry,
          bronze
        )
      );

      sculptureGroup.add(card);
    });

    // ========================================
    // RESPONSIVE RESIZE
    // ========================================

    const resize = () => {
      if (dead) return;

      const width =
        host.clientWidth || window.innerWidth;

      const height =
        host.clientHeight || window.innerHeight;

      renderer.setPixelRatio(
        Math.min(window.devicePixelRatio || 1, 2)
      );

      renderer.setSize(width, height, false);

      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };

    resize();

    // ========================================
    // POINTER PARALLAX
    // ========================================

    const onPointerMove = (event: PointerEvent) => {
      const box = host.getBoundingClientRect();

      if (!box.width || !box.height) return;

      target.x = clamp(
        (event.clientX - box.left) / box.width - 0.5,
        -0.5,
        0.5
      );

      target.y = clamp(
        0.5 -
        (event.clientY - box.top) / box.height,
        -0.5,
        0.5
      );
    };

    window.addEventListener(
      "pointermove",
      onPointerMove,
      { passive: true }
    );

    // ========================================
    // GSAP SCROLL TRIGGER
    // ========================================

    const trigger = ScrollTrigger.create({
      trigger: chapter,
      start: "top top",
      end: "bottom bottom",
      invalidateOnRefresh: true,

      onUpdate: (self) => {
        phase = self.progress;
      },
    });

    triggerRef.current = trigger;
    phase = trigger.progress;
    drawPhase = phase;

    // ========================================
    // MAIN ANIMATION LOOP
    // ========================================

    const render = (now: number) => {
      if (dead) return;

      const raw = last ? now - last : 16.667;
      const dt = Math.min(raw, 64) / 1000;

      last = now;
      elapsed += dt;

      drawPhase +=
        (phase - drawPhase) * damping(9, dt);

      pointer.x +=
        (target.x - pointer.x) * damping(2.7, dt);

      pointer.y +=
        (target.y - pointer.y) * damping(2.7, dt);

      const mobile = window.innerWidth <= 700;

      const pose = cameraPose(
        drawPhase,
        mobile,
        total,
        camera.aspect
      );

      const activeIndex = clamp(
        Math.round(pose.index),
        0,
        total - 1
      );

      if (activeIndex !== displayedIndex) {
        displayedIndex = activeIndex;
        setCurrentIndex(activeIndex);
      }

      // =====================================
      // GLASS SPIRAL + SCREENS ROTATION
      // =====================================

      sculptureGroup.rotation.y =
        pose.rotation +
        Math.sin(elapsed * 0.11) * 0.009;

      sculptureGroup.position.x = pose.x;

      // Camera movement
      camera.position.set(
        pointer.x * 0.24,
        pose.y + pointer.y * 0.16,
        pose.z
      );

      camera.lookAt(
        pose.lookX,
        pose.lookY,
        0
      );

      // =====================================
      // CINEMATIC MOVING LIGHTS
      // =====================================

      champagneLight.position.set(
        pose.x +
        4.1 * Math.sin(elapsed * 0.16 + 0.8),
        pose.y + 2.5,
        8.5 + Math.cos(elapsed * 0.12)
      );

      blueLight.position.set(
        -7 + Math.sin(elapsed * 0.09) * 2,
        pose.y + 3,
        -2
      );

      blueGlow.position.set(
        -8 + Math.sin(elapsed * 0.08) * 1.5,
        pose.y + 3.5,
        -12
      );

      goldGlow.position.set(
        8 + Math.cos(elapsed * 0.06) * 1.5,
        pose.y - 1,
        -13
      );

      purpleGlow.position.set(
        Math.sin(elapsed * 0.045) * 3,
        pose.y - 6,
        -16
      );

      // Soft breathing atmosphere
      blueGlow.material.opacity =
        0.20 + Math.sin(elapsed * 0.55) * 0.035;

      goldGlow.material.opacity =
        0.15 + Math.sin(elapsed * 0.45 + 1) * 0.025;

      purpleGlow.material.opacity =
        0.12 + Math.sin(elapsed * 0.35 + 2) * 0.025;

      renderer.render(scene, camera);

      raf = requestAnimationFrame(render);
    };

    raf = requestAnimationFrame(render);

    window.addEventListener("resize", resize);

    // ========================================
    // CLEANUP
    // ========================================

    return () => {
      dead = true;
      cancelAnimationFrame(raf);

      window.removeEventListener(
        "pointermove",
        onPointerMove
      );

      window.removeEventListener("resize", resize);

      trigger.kill();
      triggerRef.current = null;

      loadedTextures.forEach((texture) => texture.dispose());
      imageMaterials.forEach((material) => material.dispose());
      glowMaterials.forEach((material) => material.dispose());

      glowTexture.dispose();

      [
        glassHangerGeometry,
        accentGeometry,
        frameGeometry,
        imageGeometry,
        backingGeometry,
        armGeometry,
        mountGeometry,
        trimGeometry,
        jointGeometry,
      ].forEach((geometry) => geometry.dispose());

      [
        roundedGlass,
        crystalFrame,
        bronze,
        darkMetal,
        glassOverlay,
      ].forEach((material) => material.dispose());

      environment.dispose();
      renderer.dispose();
      canvas.remove();
    };
  }, [total]);

  // ==========================================
  // PREVIOUS / NEXT
  // ==========================================

  const jumpTo = (index: number) => {
    const trigger = triggerRef.current;
    if (!trigger) return;

    const progress = progressForPhoto(index, total);

    window.scrollTo({
      top:
        trigger.start +
        (trigger.end - trigger.start) * progress,
      behavior: "smooth",
    });
  };

  // ==========================================
  // RENDER
  // ==========================================

  if (!currentItem) return null;

  return (
    <>
      <section
        ref={chapterRef}
        id="perspectiva"
        aria-label="New City Paradise Architectural Experience"
        className="relative select-none bg-[#0a0f1a] text-[#f5f1eb]"
        style={{
          height: `${Math.max(total, 2) * 68}vh`,
        }}
      >
        <div className="sticky top-0 flex h-screen w-full flex-col justify-between overflow-hidden">
          {/* THREE.JS CANVAS */}

          <div
            ref={hostRef}
            className="absolute inset-0 z-0"
          />

          {/* ATMOSPHERIC OVERLAYS */}

          <div className="pointer-events-none absolute inset-0 z-[1] overflow-hidden">
            <div className="absolute left-[-16%] top-[-20%] h-[55%] w-[55%] rounded-full bg-[#315ba8]/10 blur-[110px]" />

            <div className="absolute right-[-15%] top-[8%] h-[50%] w-[48%] rounded-full bg-[#d6a86a]/10 blur-[120px]" />

            <div className="absolute bottom-[-25%] left-[15%] h-[48%] w-[55%] rounded-full bg-[#6d4aa0]/[0.08] blur-[130px]" />

            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(3,6,12,0.35)_100%)]" />
          </div>

          {/* LEFT EDITORIAL TEXT */}

          <div
            className="pointer-events-none relative z-10 my-auto mx-auto w-full max-w-[1440px] px-6 sm:px-12"
            style={{
              opacity: Math.max(
                0,
                1 - currentIndex * 0.9
              ),
            }}
          >
            <div className="max-w-xl space-y-4">
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-[#d6a86a]" />

                <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#d6a86a] sm:text-xs">
                  New City Paradise
                </span>
              </div>

              <h2 className="display text-[clamp(3rem,7vw,6.5rem)] leading-[0.92] tracking-tight text-white drop-shadow-[0_10px_30px_rgba(0,0,0,0.55)]">
                A new
                <br />
                <span className="italic text-[#d6a86a]">
                  perspective.
                </span>
              </h2>

              <p className="max-w-md text-sm leading-relaxed text-white/75 drop-shadow-[0_4px_18px_rgba(0,0,0,0.45)] sm:text-lg">
                Where visionary architecture meets
                harmonious everyday living.
              </p>
            </div>
          </div>

          {/* BOTTOM NAVIGATION */}

          <footer className="relative z-20 flex flex-col items-center justify-between gap-3 border-t border-white/10 bg-gradient-to-t from-[#070b12]/95 via-[#0a0f1a]/70 to-transparent px-4 pb-5 pt-4 backdrop-blur-md sm:flex-row sm:gap-5 sm:px-12 sm:pb-8">
            <div className="flex w-full min-w-0 items-center gap-4 sm:w-auto sm:gap-6">
              {/* <div className="h-8 w-[2px] shrink-0 bg-[#d6a86a]" /> */}

              <div className="min-w-0">
                <p className="mb-1 text-[9px] uppercase tracking-[0.22em] text-[#d6a86a]/80">
                  Explore the experience
                </p>

                <h3 className="truncate text-base font-normal tracking-tight text-white sm:text-2xl">
                  {currentItem.title}
                </h3>
              </div>

              {/* <span className="hidden text-xs tabular-nums text-white/45 lg:block">
                {String(currentIndex + 1).padStart(2, "0")}
                {" / "}
                {String(total).padStart(2, "0")}
              </span> */}
            </div>

            <div className="pointer-events-auto flex w-full items-center justify-between gap-2 sm:w-auto sm:justify-end sm:gap-3">
              <button
                type="button"
                onClick={() => jumpTo(currentIndex - 1)}
                disabled={currentIndex === 0}
                aria-label="Previous image"
                className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg border border-[#d6a86a]/35 bg-[#0f1724]/80 text-white transition-all duration-300 hover:border-[#d6a86a] hover:bg-[#151e2d] disabled:cursor-not-allowed disabled:opacity-25 sm:h-11 sm:w-11"
              >
                <ArrowLeft size={19} />
              </button>

              <button
                type="button"
                onClick={() => jumpTo(currentIndex + 1)}
                disabled={currentIndex === total - 1}
                aria-label="Next image"
                className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg border border-[#d6a86a]/35 bg-[#0f1724]/80 text-white transition-all duration-300 hover:border-[#d6a86a] hover:bg-[#151e2d] disabled:cursor-not-allowed disabled:opacity-25 sm:h-11 sm:w-11"
              >
                <ArrowRight size={19} />
              </button>

              <button
                type="button"
                onClick={() => setModalItem(currentItem)}
                className="flex h-10 shrink-0 cursor-pointer items-center gap-2 border border-[#d6a86a]/50 bg-gradient-to-r from-[#1b2330] to-[#0e1420] px-4 text-[11px] font-medium uppercase tracking-wider text-white transition-all duration-300 hover:border-[#d6a86a] sm:h-11 sm:px-5"
              >
                Enlarge view
              </button>
            </div>
          </footer>
        </div>
      </section>

      {/* FULLSCREEN VIEWER */}

      {modalItem && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={modalItem.title}
          className="fixed inset-0 z-50 flex flex-col justify-between bg-[#080c14]/[0.97] p-4 text-white backdrop-blur-2xl sm:p-10"
        >
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#d6a86a]">
                Architectural View · New City Paradise
              </p>

              <h3 className="mt-2 text-xl font-normal sm:text-2xl">
                {modalItem.title}
              </h3>
            </div>

            <button
              type="button"
              onClick={() => setModalItem(null)}
              aria-label="Close fullscreen image"
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-[#d6a86a]/40 bg-white/5 text-white transition-colors hover:border-[#d6a86a] hover:bg-white/10"
            >
              <X size={20} />
            </button>
          </div>

          <div className="relative mx-auto my-4 w-full max-w-6xl flex-1 overflow-hidden rounded-xl border border-white/10 shadow-2xl sm:my-6">
            <Image
              src={modalItem.image}
              alt={modalItem.title}
              fill
              sizes="90vw"
              className="object-contain"
            />
          </div>

          <div className="mx-auto max-w-3xl border-t border-white/10 pt-4 text-center">
            <p className="text-sm leading-relaxed text-white/70 sm:text-base">
              {modalItem.description}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
  