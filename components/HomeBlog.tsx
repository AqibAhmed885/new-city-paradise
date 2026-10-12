"use client";

import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGsap } from "@/hooks/useGsap";
import { blogPosts } from "@/lib/data";
import BlogCard from "./BlogCard";

gsap.registerPlugin(ScrollTrigger);

export default function HomeBlog() {
  const root = useRef<HTMLElement>(null);

  useGsap(() => {
    if (!root.current || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    gsap.from(root.current.querySelectorAll("[data-blog-intro]"), {
      y: 45,
      opacity: 0,
      duration: 0.9,
      stagger: 0.1,
      ease: "power3.out",
      immediateRender: false,
      scrollTrigger: {
        trigger: root.current,
        start: "top 76%",
        once: true,
      },
    });

    gsap.from(root.current.querySelectorAll("[data-blog-card]"), {
      y: 70,
      opacity: 0,
      duration: 1,
      stagger: 0.13,
      ease: "power3.out",
      immediateRender: false,
      scrollTrigger: {
        trigger: root.current.querySelector("[data-blog-grid]"),
        start: "top 82%",
        once: true,
      },
    });
  }, []);

  return (
    <section ref={root} id="journal" className="bg-ivory py-24 sm:py-32">
      <div className="container-pad">
        <div className="flex flex-col gap-8 border-b border-black/15 pb-10 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p data-blog-intro className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#1b3d2f]">
              Project News &amp; Dated Updates
            </p>
            <h2 data-blog-intro className="mt-4 max-w-4xl text-[clamp(2.5rem,5vw,4.5rem)] leading-[0.98] tracking-tight font-serif text-ink">
              Development Milestones
              <span className="block italic text-[#1b3d2f]">and Project Insights.</span>
            </h2>
          </div>
          <div data-blog-intro className="max-w-sm lg:pb-2">
            <p className="text-sm leading-7 text-black/50">
              Project stories, market perspectives, and practical guides from New City Paradise.
            </p>
            <Link
              href="/blog"
              className="mt-7 inline-flex items-center gap-5 rounded-full bg-ink px-6 py-3.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-white transition-colors hover:bg-champagne"
            >
              View all stories <span className="text-base">↗</span>
            </Link>
          </div>
        </div>

        <div data-blog-grid className="mt-10 grid gap-5 lg:grid-cols-2">
          <BlogCard post={blogPosts[0]} index={0} featured />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            {blogPosts.slice(1, 3).map((post, index) => (
              <BlogCard key={post.slug} post={post} index={index + 1} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
