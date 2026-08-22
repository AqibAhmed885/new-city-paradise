"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGsap } from "@/hooks/useGsap";
import SectionHeading from "./SectionHeading";
import {
  MapPin,
  TrendingUp,
  KeyRound,
  ShieldCheck,
  Building2,
  Sparkles,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const reasons = [
  {
    num: "01",
    title: "Prime Location",
    desc: "Direct M-1 access with Islamabad and Rawalpindi within easy reach.",
    icon: MapPin,
    color: "#8B5CF6", // Purple
    side: "right",
  },
  {
    num: "02",
    title: "High ROI Potential",
    desc: "A growth corridor supported by infrastructure and expanding demand.",
    icon: TrendingUp,
    color: "#059669", // Emerald
    side: "right",
  },
  {
    num: "03",
    title: "Flexible Ownership",
    desc: "Considered payment plans that make premium property more accessible.",
    icon: KeyRound,
    color: "#F59E0B", // Amber
    side: "right",
  },
  {
    num: "04",
    title: "Future-Ready Plan",
    desc: "A long-term urban vision designed around liveability and resilience.",
    icon: Building2,
    color: "#2563EB", // Blue
    side: "left",
  },
  {
    num: "05",
    title: "Trusted Developers",
    desc: "A proven team with a commitment to quality and transparent delivery.",
    icon: ShieldCheck,
    color: "#EF4444", // Red/Coral
    side: "left",
  },
  {
    num: "06",
    title: "Modern Amenities",
    desc: "World-class facilities blending luxury living with sustainable standards.",
    icon: Sparkles,
    color: "#0D9488", // Teal
    side: "left",
  },
];

export default function Investment() {
  const root = useRef<HTMLElement>(null);
  const diagramRef = useRef<HTMLDivElement>(null);

  useGsap(() => {
    if (!root.current) return;

    gsap.from(root.current.querySelectorAll("[data-hex-petal]"), {
      scale: 0.7,
      opacity: 0,
      stagger: 0.08,
      duration: 0.8,
      ease: "back.out(1.4)",
      scrollTrigger: {
        trigger: root.current,
        start: "top 75%",
      },
    });

    gsap.from(root.current.querySelectorAll("[data-reason-card]"), {
      y: 25,
      opacity: 0,
      stagger: 0.1,
      duration: 0.7,
      ease: "power2.out",
      scrollTrigger: {
        trigger: root.current,
        start: "top 70%",
      },
    });
  }, []);

  const leftReasons = reasons.filter((r) => r.side === "left");
  const rightReasons = reasons.filter((r) => r.side === "right");

  return (
    <section ref={root} className="relative overflow-hidden bg-white py-20 sm:py-28">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Section Header */}
        <div className="mb-14 text-center md:text-left">
          <SectionHeading
            eyebrow="Investment"
            title={
              <>
                Why Invest In<br />{" "}
                <span className="italic text-champagne">New City Paradise</span>
              </>
            }
            description="More than a place to live, it is a stake in one of the region’s most considered growth stories."
          />
        </div>

        {/* Desktop Hexagonal Infographic Layout */}
        <div className="relative hidden lg:grid lg:grid-cols-12 items-center gap-4">
          {/* Left Reasons */}
          <div className="col-span-3 space-y-16 text-right">
            {leftReasons.map((item) => (
              <article data-reason-card key={item.num} className="space-y-1.5">
                <h3 className="text-2xl font-medium text-gray-900">{item.title}</h3>
                <p className="text-base leading-relaxed text-gray-500">{item.desc}</p>
              </article>
            ))}
          </div>

          {/* Central Flower Hexagon Infographic */}
          <div ref={diagramRef} className="col-span-6 flex justify-center items-center py-6">
            <div className="relative w-full max-w-[500px] aspect-square flex items-center justify-center">
              {/* Central Hexagon */}
              <div
                style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}
                className="absolute z-20 w-44 h-48 bg-white shadow-2xl flex flex-col items-center justify-center text-center p-4"
              >
                <span className="text-2xl  text-gray-900 leading-tight mt-0.5">
                  WHY<br />CHOOSE US
                </span>
              </div>

              {/* 6 Radiating Petals */}
              {reasons.map((item, idx) => {
                const angle = idx * 60 - 90; // Starting from top
                const rad = (angle * Math.PI) / 180;
                const distance = 145; // Petal offset from center
                const x = Math.cos(rad) * distance;
                const y = Math.sin(rad) * distance;
                const Icon = item.icon;

                return (
                  <div
                    key={item.num}
                    data-hex-petal
                    style={{
                      transform: `translate(${x}px, ${y}px)`,
                    }}
                    className="absolute z-10 w-40 h-48 flex flex-col items-center justify-center transition-transform hover:scale-105 duration-300"
                  >
                    {/* Hexagonal Petal Shape */}
                    <div
                      style={{
                        clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                        background: "linear-gradient(145deg, #ffffff 0%, #f5f1eb 100%)",
                      }}
                      className="w-full h-full shadow-lg border border-slate-100 flex flex-col items-center justify-center relative p-3 text-center"
                    >
                      {/* Number Tag */}
                      {/* <span
                        style={{ backgroundColor: item.color }}
                        className="text-[11px] font-bold text-white px-2 py-0.5 rounded-full shadow-sm mb-1.5"
                      >
                        {item.num}
                      </span> */}

                      {/* Icon */}
                      <div
                        style={{ color: item.color }}
                        className=" "
                      >
                        <Icon className="w-10 h-10 stroke-[1.2]" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Reasons */}
          <div className="col-span-3 space-y-16 text-left">
            {rightReasons.map((item) => (
              <article data-reason-card key={item.num} className="space-y-1.5">
                <h3 className="text-2xl font-medium text-gray-900">{item.title}</h3>
                <p className="text-base leading-relaxed text-gray-500">{item.desc}</p>
              </article>
            ))}
          </div>
        </div>

        {/* Mobile & Tablet Responsive Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:hidden mt-8">
          {reasons.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.num}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-100 flex items-start gap-4"
              >
                <div
                  style={{ backgroundColor: `${item.color}15`, color: item.color }}
                  className="p-3 rounded-xl flex-shrink-0"
                >
                  <Icon className="w-10 h-10" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span
                      style={{ color: item.color }}
                      className="text-xs font-bold tracking-wider"
                    >
                      {item.num}
                    </span>
                    <h3 className="font-medium text-gray-900 text-lg">{item.title}</h3>
                  </div>
                  <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}