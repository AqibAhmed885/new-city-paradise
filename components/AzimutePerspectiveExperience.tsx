"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowLeft, ArrowRight, Expand } from "lucide-react";

import {
  AMENITIES_DATA,
  AmenityItem,
} from "@/lib/amenitiesData";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/* =========================================================
   REAL BUILDING CONFIG
========================================================= */

const BUILDING = {
  width: 13,
  depth: 9,
  height: 29,
  floors: 14,

  podiumWidth: 17,
  podiumDepth: 13,
  podiumHeight: 2.3,

  screenWidth: 6.4,
  screenHeight: 3.6,

  orbitRadius: 24,
};

/* =========================================================
   HELPERS
========================================================= */

const clamp = (
  value: number,
  min: number,
  max: number
) => Math.max(min, Math.min(max, value));

const smooth = (
  start: number,
  end: number,
  value: number
) => {
  const t = clamp(
    (value - start) / (end - start),
    0,
    1
  );

  return t * t * (3 - 2 * t);
};

const damping = (
  speed: number,
  dt: number
) => 1 - Math.exp(-speed * dt);

/* =========================================================
   SCREEN LOCATIONS
========================================================= */

type ScreenLayout = {
  side: "front" | "right" | "back" | "left";
  y: number;
};

function getScreenLayout(
  index: number,
  total: number
): ScreenLayout {
  const sides: ScreenLayout["side"][] = [
    "front",
    "right",
    "back",
    "left",
  ];

  /*
   * Descend through the tower while
   * alternating around its façades.
   */
  const normalized =
    total <= 1
      ? 0.5
      : index / (total - 1);

  const y = THREE.MathUtils.lerp(
    BUILDING.height * 0.34,
    -BUILDING.height * 0.3,
    normalized
  );

  return {
    side: sides[index % 4],
    y,
  };
}

/* =========================================================
   SCREEN WORLD POSE
========================================================= */

function getScreenPose(
  index: number,
  total: number
) {
  const layout =
    getScreenLayout(index, total);

  const offset = 0.22;

  switch (layout.side) {
    case "front":
      return {
        x: 0,
        y: layout.y,
        z:
          BUILDING.depth / 2 +
          offset,
        rotationY: 0,
        cameraAngle: 0,
      };

    case "right":
      return {
        x:
          BUILDING.width / 2 +
          offset,
        y: layout.y,
        z: 0,
        rotationY:
          Math.PI / 2,
        cameraAngle:
          Math.PI / 2,
      };

    case "back":
      return {
        x: 0,
        y: layout.y,
        z:
          -BUILDING.depth / 2 -
          offset,
        rotationY:
          Math.PI,
        cameraAngle:
          Math.PI,
      };

    case "left":
    default:
      return {
        x:
          -BUILDING.width / 2 -
          offset,
        y: layout.y,
        z: 0,
        rotationY:
          -Math.PI / 2,
        cameraAngle:
          -Math.PI / 2,
      };
  }
}

/* =========================================================
   SCROLL INDEX
========================================================= */

function getTourIndex(
  progress: number,
  total: number
) {
  if (total <= 1) return 0;

  /*
   * 0 → 10% drone entrance
   * 10 → 90% screens tour
   * 90 → 100% exit pull-back
   */

  const normalized =
    clamp(
      (progress - 0.1) / 0.8,
      0,
      1
    );

  const travel =
    normalized * (total - 1);

  const index =
    Math.floor(travel);

  const fraction =
    travel - index;

  return (
    index +
    smooth(
      0.08,
      0.92,
      fraction
    )
  );
}

function progressForScreen(
  index: number,
  total: number
) {
  if (total <= 1) return 0;

  return (
    0.1 +
    (0.8 * index) /
    (total - 1)
  );
}

/* =========================================================
   DRONE CAMERA
========================================================= */

function getCameraPose(
  progress: number,
  total: number
) {
  const tour =
    getTourIndex(
      progress,
      total
    );

  const current =
    Math.floor(tour);

  const next =
    Math.min(
      current + 1,
      total - 1
    );

  const local =
    tour - current;

  const t =
    smooth(
      0.05,
      0.95,
      local
    );

  const a =
    getScreenPose(
      current,
      total
    );

  const b =
    getScreenPose(
      next,
      total
    );

  /*
   * Angle interpolation needs wrapping,
   * otherwise camera can rotate the long way.
   */
  let delta =
    b.cameraAngle -
    a.cameraAngle;

  while (delta > Math.PI) {
    delta -= Math.PI * 2;
  }

  while (delta < -Math.PI) {
    delta += Math.PI * 2;
  }

  const angle =
    a.cameraAngle +
    delta * t;

  const focusY =
    THREE.MathUtils.lerp(
      a.y,
      b.y,
      t
    );

  /*
   * Wide aerial start.
   */
  const entry =
    1 -
    smooth(
      0,
      0.1,
      progress
    );

  /*
   * Wide pull-back at end.
   */
  const exit =
    smooth(
      0.9,
      1,
      progress
    );

  const radius =
    BUILDING.orbitRadius +
    entry * 11 +
    exit * 9;

  const cameraY =
    focusY +
    5.5 +
    entry * 12 +
    exit * 6;

  return {
    tour,

    cameraX:
      Math.sin(angle) *
      radius,

    cameraY,

    cameraZ:
      Math.cos(angle) *
      radius,

    lookX: 0,

    lookY:
      focusY - 0.6,

    lookZ: 0,

    angle,
  };
}

/* =========================================================
   COMPONENT
========================================================= */

export default function AzimutePerspectiveExperience() {
  const sectionRef =
    useRef<HTMLElement>(null);

  const hostRef =
    useRef<HTMLDivElement>(null);

  const triggerRef =
    useRef<ScrollTrigger | null>(
      null
    );

  const currentIndexRef =
    useRef(0);

  const [
    currentIndex,
    setCurrentIndex,
  ] = useState(0);

  const [
    modalItem,
    setModalItem,
  ] =
    useState<AmenityItem | null>(
      null
    );

  const total =
    AMENITIES_DATA.length;

  const currentItem =
    AMENITIES_DATA[
    currentIndex
    ] || AMENITIES_DATA[0];

  useEffect(() => {
    const section =
      sectionRef.current;

    const host =
      hostRef.current;

    if (
      !section ||
      !host ||
      !total
    ) {
      return;
    }

    let dead = false;
    let raf = 0;
    let previous = 0;
    let elapsed = 0;

    let scrollProgress = 0;
    let smoothProgress = 0;

    const pointer = {
      x: 0,
      y: 0,
    };

    const targetPointer = {
      x: 0,
      y: 0,
    };

    /* =====================================================
       RENDERER
    ===================================================== */

    const renderer =
      new THREE.WebGLRenderer({
        antialias: true,
        alpha: false,
        powerPreference:
          "high-performance",
      });

    renderer.outputColorSpace =
      THREE.SRGBColorSpace;

    renderer.toneMapping =
      THREE.ACESFilmicToneMapping;

    renderer.toneMappingExposure =
      1.05;

    renderer.shadowMap.enabled =
      true;

    renderer.shadowMap.type =
      THREE.PCFSoftShadowMap;

    renderer.setClearColor(
      0xbfc5c2,
      1
    );

    const canvas =
      renderer.domElement;

    canvas.className =
      "absolute inset-0 block h-full w-full";

    host.innerHTML = "";

    host.appendChild(canvas);

    /* =====================================================
       SCENE
    ===================================================== */

    const scene =
      new THREE.Scene();

    scene.background =
      new THREE.Color(
        0xbfc5c2
      );

    scene.fog =
      new THREE.FogExp2(
        0xc6cbc8,
        0.012
      );

    /* =====================================================
       CAMERA
    ===================================================== */

    const camera =
      new THREE.PerspectiveCamera(
        45,
        1,
        0.1,
        220
      );

    /* =====================================================
       ENVIRONMENT
    ===================================================== */

    const room =
      new RoomEnvironment();

    const pmrem =
      new THREE.PMREMGenerator(
        renderer
      );

    const environment =
      pmrem.fromScene(
        room,
        0.04
      ).texture;

    scene.environment =
      environment;

    room.dispose();
    pmrem.dispose();

    /* =====================================================
       LIGHT
    ===================================================== */

    const hemisphere =
      new THREE.HemisphereLight(
        0xe8eef0,
        0x504a42,
        2.2
      );

    scene.add(hemisphere);

    const sun =
      new THREE.DirectionalLight(
        0xffddb7,
        4.2
      );

    sun.position.set(
      -20,
      32,
      18
    );

    sun.castShadow = true;

    sun.shadow.mapSize.set(
      2048,
      2048
    );

    scene.add(sun);

    const rim =
      new THREE.DirectionalLight(
        0xcbdde6,
        2.4
      );

    rim.position.set(
      18,
      10,
      -16
    );

    scene.add(rim);

    /* =====================================================
       MATERIALS
    ===================================================== */

    const concrete =
      new THREE.MeshStandardMaterial({
        color: 0xb7b0a6,
        roughness: 0.86,
        metalness: 0.02,
      });

    const concreteDark =
      new THREE.MeshStandardMaterial({
        color: 0x7c7870,
        roughness: 0.82,
        metalness: 0.03,
      });

    const glass =
      new THREE.MeshPhysicalMaterial({
        color: 0x61716e,

        roughness: 0.12,

        metalness: 0.08,

        transmission: 0.32,

        thickness: 0.2,

        transparent: true,

        opacity: 0.88,

        clearcoat: 0.7,

        envMapIntensity: 1.3,
      });

    const mullionMaterial =
      new THREE.MeshStandardMaterial({
        color: 0x272d2b,
        roughness: 0.34,
        metalness: 0.72,
      });

    const champagne =
      new THREE.MeshStandardMaterial({
        color: 0xb89461,
        roughness: 0.3,
        metalness: 0.72,
      });

    const windowLightMaterial =
      new THREE.MeshStandardMaterial({
        color: 0xffd6a0,

        emissive:
          new THREE.Color(
            0xffb86d
          ),

        emissiveIntensity:
          1.25,

        roughness: 0.4,
      });

    /* =====================================================
       BUILDING GROUP
    ===================================================== */

    const building =
      new THREE.Group();

    scene.add(building);

    /* =====================================================
       PODIUM
    ===================================================== */

    const podium =
      new THREE.Mesh(
        new THREE.BoxGeometry(
          BUILDING.podiumWidth,
          BUILDING.podiumHeight,
          BUILDING.podiumDepth
        ),
        concreteDark
      );

    podium.position.y =
      -BUILDING.height /
      2 -
      BUILDING.podiumHeight /
      2;

    podium.castShadow = true;
    podium.receiveShadow = true;

    building.add(podium);

    /*
     * Podium second step.
     */

    const podiumUpper =
      new THREE.Mesh(
        new THREE.BoxGeometry(
          15.3,
          1.2,
          11.3
        ),
        concrete
      );

    podiumUpper.position.y =
      -BUILDING.height /
      2 +
      0.6;

    podiumUpper.castShadow =
      true;

    building.add(
      podiumUpper
    );

    /* =====================================================
       MAIN GLASS MASS
    ===================================================== */

    const tower =
      new THREE.Mesh(
        new THREE.BoxGeometry(
          BUILDING.width,
          BUILDING.height,
          BUILDING.depth
        ),
        glass
      );

    tower.castShadow = true;

    tower.receiveShadow = true;

    building.add(tower);

    /* =====================================================
       CONCRETE VERTICAL COLUMNS
    ===================================================== */

    const columnGeo =
      new THREE.BoxGeometry(
        0.45,
        BUILDING.height +
        0.5,
        0.45
      );

    const corners = [
      [
        -BUILDING.width / 2,
        -BUILDING.depth / 2,
      ],
      [
        BUILDING.width / 2,
        -BUILDING.depth / 2,
      ],
      [
        -BUILDING.width / 2,
        BUILDING.depth / 2,
      ],
      [
        BUILDING.width / 2,
        BUILDING.depth / 2,
      ],
    ];

    corners.forEach(
      ([x, z]) => {
        const column =
          new THREE.Mesh(
            columnGeo,
            concrete
          );

        column.position.set(
          x,
          0,
          z
        );

        column.castShadow =
          true;

        building.add(column);
      }
    );

    /* =====================================================
       FLOOR SLABS
    ===================================================== */

    const floorHeight =
      BUILDING.height /
      BUILDING.floors;

    const slabGeo =
      new THREE.BoxGeometry(
        BUILDING.width +
        0.35,
        0.16,
        BUILDING.depth +
        0.35
      );

    for (
      let floor = 0;
      floor <=
      BUILDING.floors;
      floor++
    ) {
      const slab =
        new THREE.Mesh(
          slabGeo,
          concrete
        );

      slab.position.y =
        -BUILDING.height /
        2 +
        floor *
        floorHeight;

      slab.castShadow = true;

      building.add(slab);
    }

    /* =====================================================
       WINDOW MULLIONS - FRONT/BACK
    ===================================================== */

    const verticalFrontGeo =
      new THREE.BoxGeometry(
        0.09,
        BUILDING.height,
        0.1
      );

    const columnsAcross = 8;

    for (
      let i = 1;
      i < columnsAcross;
      i++
    ) {
      const x =
        -BUILDING.width /
        2 +
        (BUILDING.width /
          columnsAcross) *
        i;

      ["front", "back"].forEach(
        (side) => {
          const mullion =
            new THREE.Mesh(
              verticalFrontGeo,
              mullionMaterial
            );

          mullion.position.set(
            x,
            0,
            side === "front"
              ? BUILDING.depth /
              2 +
              0.06
              : -BUILDING.depth /
              2 -
              0.06
          );

          building.add(
            mullion
          );
        }
      );
    }

    /* =====================================================
       WINDOW MULLIONS - LEFT/RIGHT
    ===================================================== */

    const verticalSideGeo =
      new THREE.BoxGeometry(
        0.1,
        BUILDING.height,
        0.09
      );

    const sideColumns = 6;

    for (
      let i = 1;
      i < sideColumns;
      i++
    ) {
      const z =
        -BUILDING.depth /
        2 +
        (BUILDING.depth /
          sideColumns) *
        i;

      ["left", "right"].forEach(
        (side) => {
          const mullion =
            new THREE.Mesh(
              verticalSideGeo,
              mullionMaterial
            );

          mullion.position.set(
            side === "right"
              ? BUILDING.width /
              2 +
              0.06
              : -BUILDING.width /
              2 -
              0.06,

            0,

            z
          );

          building.add(
            mullion
          );
        }
      );
    }

    /* =====================================================
       WARM INTERIOR WINDOWS
    ===================================================== */

    const litWindowGeo =
      new THREE.PlaneGeometry(
        0.75,
        floorHeight *
        0.52
      );

    /*
     * Random-looking but deterministic light pattern.
     */

    for (
      let floor = 1;
      floor <
      BUILDING.floors;
      floor++
    ) {
      for (
        let col = 0;
        col < 7;
        col++
      ) {
        if (
          (floor + col) % 3 !==
          0
        ) {
          continue;
        }

        const x =
          -BUILDING.width /
          2 +
          1 +
          col * 1.7;

        const y =
          -BUILDING.height /
          2 +
          floor *
          floorHeight +
          floorHeight *
          0.48;

        const windowMesh =
          new THREE.Mesh(
            litWindowGeo,
            windowLightMaterial
          );

        windowMesh.position.set(
          x,
          y,
          BUILDING.depth /
          2 +
          0.075
        );

        building.add(
          windowMesh
        );
      }
    }

    /* =====================================================
       ROOFTOP
    ===================================================== */

    const roof =
      new THREE.Mesh(
        new THREE.BoxGeometry(
          BUILDING.width -
          1.5,

          1.1,

          BUILDING.depth -
          1.4
        ),
        concreteDark
      );

    roof.position.y =
      BUILDING.height /
      2 +
      0.55;

    roof.castShadow = true;

    building.add(roof);

    /*
     * Rooftop mechanical core.
     */

    const roofCore =
      new THREE.Mesh(
        new THREE.BoxGeometry(
          4.2,
          2.4,
          3.4
        ),
        concrete
      );

    roofCore.position.y =
      BUILDING.height /
      2 +
      2;

    roofCore.castShadow =
      true;

    building.add(roofCore);

    /*
     * Rooftop antenna.
     */

    const mast =
      new THREE.Mesh(
        new THREE.CylinderGeometry(
          0.1,
          0.1,
          4,
          12
        ),
        mullionMaterial
      );

    mast.position.y =
      BUILDING.height /
      2 +
      5;

    building.add(mast);

    /* =====================================================
       GROUND
    ===================================================== */

    const ground =
      new THREE.Mesh(
        new THREE.PlaneGeometry(
          160,
          160
        ),
        new THREE.MeshStandardMaterial({
          color: 0x7c837c,
          roughness: 1,
        })
      );

    ground.rotation.x =
      -Math.PI / 2;

    ground.position.y =
      -BUILDING.height /
      2 -
      BUILDING.podiumHeight;

    ground.receiveShadow =
      true;

    scene.add(ground);

    /* =====================================================
       MEDIA SCREENS
    ===================================================== */

    const screenGroups: THREE.Group[] =
      [];

    const screenMaterials: THREE.MeshBasicMaterial[] =
      [];

    const loadedTextures: THREE.Texture[] =
      [];

    const screenPlaneGeo =
      new THREE.PlaneGeometry(
        BUILDING.screenWidth,
        BUILDING.screenHeight
      );

    const screenFrameGeo =
      new THREE.BoxGeometry(
        BUILDING.screenWidth +
        0.26,
        BUILDING.screenHeight +
        0.26,
        0.18
      );

    const loader =
      new THREE.TextureLoader();

    AMENITIES_DATA.forEach(
      (item, index) => {
        const pose =
          getScreenPose(
            index,
            total
          );

        const group =
          new THREE.Group();

        group.position.set(
          pose.x,
          pose.y,
          pose.z
        );

        group.rotation.y =
          pose.rotationY;

        /*
         * Frame is mounted into façade.
         */

        const frame =
          new THREE.Mesh(
            screenFrameGeo,
            mullionMaterial
          );

        frame.position.z =
          -0.09;

        frame.castShadow = true;

        group.add(frame);

        /*
         * LED image.
         */

        const material =
          new THREE.MeshBasicMaterial({
            color: 0xffffff,

            transparent: true,

            opacity: 0.42,

            toneMapped: false,
          });

        screenMaterials.push(
          material
        );

        const screen =
          new THREE.Mesh(
            screenPlaneGeo,
            material
          );

        screen.position.z =
          0.03;

        group.add(screen);

        loader.load(
          item.image,

          (texture) => {
            if (dead) {
              texture.dispose();
              return;
            }

            texture.colorSpace =
              THREE.SRGBColorSpace;

            texture.anisotropy =
              Math.min(
                renderer.capabilities.getMaxAnisotropy(),
                8
              );

            material.map =
              texture;

            material.needsUpdate =
              true;

            loadedTextures.push(
              texture
            );
          }
        );

        /*
         * Small champagne frame strip.
         */

        const bottomStrip =
          new THREE.Mesh(
            new THREE.BoxGeometry(
              BUILDING.screenWidth +
              0.3,

              0.08,

              0.1
            ),
            champagne
          );

        bottomStrip.position.set(
          0,
          -BUILDING.screenHeight /
          2 -
          0.1,
          0.02
        );

        group.add(
          bottomStrip
        );

        scene.add(group);

        screenGroups.push(
          group
        );
      }
    );

    /* =====================================================
       POINTER
    ===================================================== */

    const onPointerMove = (
      event: PointerEvent
    ) => {
      const rect =
        host.getBoundingClientRect();

      targetPointer.x =
        clamp(
          (event.clientX -
            rect.left) /
          rect.width -
          0.5,
          -0.5,
          0.5
        );

      targetPointer.y =
        clamp(
          0.5 -
          (event.clientY -
            rect.top) /
          rect.height,
          -0.5,
          0.5
        );
    };

    window.addEventListener(
      "pointermove",
      onPointerMove,
      {
        passive: true,
      }
    );

    /* =====================================================
       RESIZE
    ===================================================== */

    const resize = () => {
      if (dead) return;

      const width =
        host.clientWidth ||
        window.innerWidth;

      const height =
        host.clientHeight ||
        window.innerHeight;

      renderer.setPixelRatio(
        Math.min(
          window.devicePixelRatio ||
          1,
          1.7
        )
      );

      renderer.setSize(
        width,
        height,
        false
      );

      camera.aspect =
        width / height;

      camera.updateProjectionMatrix();
    };

    /* =====================================================
       SCROLL
    ===================================================== */

    const st =
      ScrollTrigger.create({
        trigger: section,

        start: "top top",

        end: "bottom bottom",

        scrub: true,

        invalidateOnRefresh:
          true,

        onUpdate: (self) => {
          scrollProgress =
            self.progress;
        },
      });

    triggerRef.current = st;

    scrollProgress =
      st.progress;

    smoothProgress =
      st.progress;

    resize();

    /* =====================================================
       RENDER
    ===================================================== */

    const render = (
      now: number
    ) => {
      if (dead) return;

      const raw =
        previous
          ? now - previous
          : 16.667;

      const dt =
        Math.min(raw, 64) /
        1000;

      previous = now;

      elapsed += dt;

      smoothProgress +=
        (scrollProgress -
          smoothProgress) *
        damping(6.5, dt);

      pointer.x +=
        (targetPointer.x -
          pointer.x) *
        damping(2.5, dt);

      pointer.y +=
        (targetPointer.y -
          pointer.y) *
        damping(2.5, dt);

      const pose =
        getCameraPose(
          smoothProgress,
          total
        );

      const activeIndex =
        clamp(
          Math.round(
            pose.tour
          ),
          0,
          total - 1
        );

      if (
        activeIndex !==
        currentIndexRef.current
      ) {
        currentIndexRef.current =
          activeIndex;

        setCurrentIndex(
          activeIndex
        );
      }

      /* ---------------------------------------------
         DRONE CAMERA
      --------------------------------------------- */

      camera.position.set(
        pose.cameraX +
        pointer.x * 0.42,

        pose.cameraY +
        pointer.y * 0.32,

        pose.cameraZ
      );

      /*
       * Target remains building/screen region.
       */

      camera.lookAt(
        pose.lookX,
        pose.lookY,
        pose.lookZ
      );

      /*
       * Very subtle drone roll.
       */

      camera.rotation.z +=
        Math.sin(
          elapsed * 0.55
        ) * 0.00028;

      /* ---------------------------------------------
         ACTIVE SCREEN
      --------------------------------------------- */

      screenGroups.forEach(
        (
          screen,
          index
        ) => {
          const distance =
            Math.abs(
              pose.tour -
              index
            );

          const focus =
            1 -
            clamp(
              distance,
              0,
              1
            );

          const material =
            screenMaterials[index];

          material.opacity =
            THREE.MathUtils.lerp(
              material.opacity,

              0.24 +
              focus *
              0.76,

              damping(
                6,
                dt
              )
            );

          /*
           * Active LED screen gets a tiny
           * realistic forward pop.
           */

          const scale =
            THREE.MathUtils.lerp(
              screen.scale.x,

              1 +
              focus *
              0.035,

              damping(
                5,
                dt
              )
            );

          screen.scale.setScalar(
            scale
          );
        }
      );

      renderer.render(
        scene,
        camera
      );

      raf =
        requestAnimationFrame(
          render
        );
    };

    raf =
      requestAnimationFrame(
        render
      );

    window.addEventListener(
      "resize",
      resize
    );

    /* =====================================================
       CLEANUP
    ===================================================== */

    return () => {
      dead = true;

      cancelAnimationFrame(
        raf
      );

      window.removeEventListener(
        "pointermove",
        onPointerMove
      );

      window.removeEventListener(
        "resize",
        resize
      );

      st.kill();

      triggerRef.current =
        null;

      loadedTextures.forEach(
        (texture) =>
          texture.dispose()
      );

      screenMaterials.forEach(
        (material) =>
          material.dispose()
      );

      scene.traverse(
        (object) => {
          if (
            object instanceof
            THREE.Mesh
          ) {
            object.geometry?.dispose();

            if (
              Array.isArray(
                object.material
              )
            ) {
              object.material.forEach(
                (material) =>
                  material.dispose()
              );
            }
          }
        }
      );

      concrete.dispose();
      concreteDark.dispose();
      glass.dispose();
      mullionMaterial.dispose();
      champagne.dispose();
      windowLightMaterial.dispose();

      environment.dispose();

      renderer.dispose();

      if (
        canvas.parentElement ===
        host
      ) {
        host.removeChild(
          canvas
        );
      }
    };
  }, [total]);

  /* =======================================================
     NAVIGATION
  ======================================================= */

  const jumpTo = (
    index: number
  ) => {
    const st =
      triggerRef.current;

    if (!st) return;

    const safeIndex =
      clamp(
        index,
        0,
        total - 1
      );

    const progress =
      progressForScreen(
        safeIndex,
        total
      );

    window.scrollTo({
      top:
        st.start +
        (st.end -
          st.start) *
        progress,

      behavior: "smooth",
    });
  };

  if (!currentItem) {
    return null;
  }

  return (
    <>
      <section
        ref={sectionRef}
        id="perspectiva"
        className="
          relative
          bg-[#bfc5c2]
          text-white
        "
        style={{
          height: `${Math.max(
            total * 90,
            400
          )}vh`,
        }}
      >
        <div
          className="
            sticky
            top-0

            h-screen
            w-full

            overflow-hidden
          "
        >
          <div
            ref={hostRef}
            className="
              absolute
              inset-0
              z-0
            "
          />

          {/* subtle cinematic grade */}

          <div
            className="
              pointer-events-none
              absolute
              inset-0
              z-[1]

              bg-gradient-to-r
              from-[#17231F]/48
              via-transparent
              to-[#17231F]/10
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              inset-0
              z-[1]

              bg-gradient-to-t
              from-[#17231F]/42
              via-transparent
              to-transparent
            "
          />

          {/* HEADER */}

          <header
            className="
              pointer-events-none
              absolute
              left-0
              right-0
              top-0
              z-20

              px-5
              pt-6

              sm:px-10
              lg:px-14
            "
          >
            <div
              className="
                mx-auto
                flex
                max-w-[1440px]
                items-center
                justify-between
              "
            >
              <div
                className="
                  flex
                  items-center
                  gap-3
                "
              >
                <span
                  className="
                    h-px
                    w-8
                    bg-champagne
                  "
                />

                <span
                  className="
                    text-[9px]
                    font-menu
                    font-semibold
                    uppercase
                    tracking-[0.2em]
                    text-white/80
                  "
                >
                  New City Paradise
                </span>
              </div>

              <span
                className="
                  hidden
                  text-[9px]
                  font-menu
                  uppercase
                  tracking-[0.18em]
                  text-white/55

                  sm:block
                "
              >
                Drone Amenities Experience
              </span>
            </div>
          </header>

          {/* CURRENT AMENITY */}

          <div
            className="
              pointer-events-none
              absolute
              inset-0
              z-10
            "
          >
            <div
              className="
                mx-auto
                flex
                h-full
                max-w-[1440px]
                items-end

                px-5
                pb-28

                sm:px-10
                lg:px-14
              "
            >
              <div className="max-w-[520px]">
                <div
                  className="
                    mb-4
                    flex
                    items-center
                    gap-4
                  "
                >
                  <span
                    className="
                      text-[10px]
                      font-menu
                      font-semibold
                      text-champagne
                    "
                  >
                    {String(
                      currentIndex + 1
                    ).padStart(
                      2,
                      "0"
                    )}
                  </span>

                  <span
                    className="
                      h-px
                      w-8
                      bg-champagne
                    "
                  />

                  <span
                    className="
                      text-[9px]
                      font-menu
                      uppercase
                      tracking-[0.17em]
                      text-white/55
                    "
                  >
                    Amenity
                  </span>
                </div>

                <h2
                  className="
                    text-[clamp(2.8rem,4.8vw,5.6rem)]
                    font-normal
                    leading-[0.9]
                    tracking-[-0.05em]
                    text-white
                    drop-shadow-[0_10px_35px_rgba(0,0,0,0.45)]
                  "
                >
                  {currentItem.title}
                </h2>

                <p
                  className="
                    mt-5
                    max-w-[440px]
                    font-serif
                    text-[14px]
                    leading-[1.8]
                    text-white/72

                    sm:text-[16px]
                  "
                >
                  {
                    currentItem.description
                  }
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT NAV */}

          <div
            className="
              absolute
              right-5
              top-1/2
              z-30

              hidden
              -translate-y-1/2
              flex-col
              gap-3

              md:flex
              lg:right-14
            "
          >
            {AMENITIES_DATA.map(
              (item, index) => {
                const active =
                  index ===
                  currentIndex;

                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() =>
                      jumpTo(index)
                    }
                    className="
                      pointer-events-auto
                      flex
                      cursor-pointer
                      items-center
                      gap-3
                    "
                  >
                    <span
                      className={`
                        h-px
                        transition-all
                        duration-500

                        ${active
                          ? "w-12 bg-champagne"
                          : "w-6 bg-white/30"
                        }
                      `}
                    />

                    <span
                      className={`
                        text-[8px]
                        font-menu
                        font-semibold

                        ${active
                          ? "text-champagne"
                          : "text-white/40"
                        }
                      `}
                    >
                      {String(
                        index + 1
                      ).padStart(
                        2,
                        "0"
                      )}
                    </span>
                  </button>
                );
              }
            )}
          </div>

          {/* CONTROLS */}

          <footer
            className="
              absolute
              bottom-0
              left-0
              right-0
              z-30

              border-t
              border-white/10

              bg-gradient-to-t
              from-[#17231F]/80
              via-[#17231F]/20
              to-transparent

              px-5
              pb-5
              pt-9

              sm:px-10
              lg:px-14
            "
          >
            <div
              className="
                mx-auto
                flex
                max-w-[1440px]
                items-center
                justify-between
              "
            >
              <span
                className="
                  hidden
                  text-[8px]
                  font-menu
                  uppercase
                  tracking-[0.17em]
                  text-white/45

                  sm:block
                "
              >
                Scroll to fly around the building
              </span>

              <div
                className="
                  pointer-events-auto
                  ml-auto
                  flex
                  items-center
                  gap-2
                "
              >
                <button
                  onClick={() =>
                    jumpTo(
                      currentIndex - 1
                    )
                  }
                  disabled={
                    currentIndex === 0
                  }
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/25
                    bg-[#17231F]/70
                    disabled:opacity-25
                  "
                >
                  <ArrowLeft
                    size={16}
                  />
                </button>

                <button
                  onClick={() =>
                    jumpTo(
                      currentIndex + 1
                    )
                  }
                  disabled={
                    currentIndex ===
                    total - 1
                  }
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/25
                    bg-[#17231F]/70
                    disabled:opacity-25
                  "
                >
                  <ArrowRight
                    size={16}
                  />
                </button>

                <button
                  onClick={() =>
                    setModalItem(
                      currentItem
                    )
                  }
                  className="
                    ml-1
                    flex
                    h-10
                    items-center
                    gap-2
                    rounded-full
                    bg-champagne
                    px-4
                    text-[8px]
                    font-menu
                    font-semibold
                    uppercase
                    tracking-[0.12em]
                  "
                >
                  <Expand size={13} />
                  Enlarge
                </button>
              </div>
            </div>
          </footer>
        </div>
      </section>

      {modalItem && (
        <div
          className="
            fixed
            inset-0
            z-[100]

            flex
            flex-col

            bg-black/95
            p-5

            backdrop-blur-2xl
          "
        >
          <div
            className="
              flex
              items-center
              justify-between

              border-b
              border-white/10
              pb-4

              text-white
            "
          >
            <h3 className="text-2xl">
              {modalItem.title}
            </h3>

            <button
              onClick={() =>
                setModalItem(null)
              }
              className="
                rounded-full
                border
                border-white/20
                px-4
                py-2
              "
            >
              Close ×
            </button>
          </div>

          <div
            className="
              relative
              my-5
              flex-1
              overflow-hidden
              rounded-2xl
            "
          >
            <Image
              src={modalItem.image}
              alt={modalItem.title}
              fill
              sizes="95vw"
              className="object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
}