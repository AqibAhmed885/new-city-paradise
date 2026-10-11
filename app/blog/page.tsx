import type { Metadata } from "next";
import Image from "next/image";
import BlogCard from "@/components/BlogCard";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import SmoothScroll from "@/components/SmoothScroll";
import { blogPosts } from "@/lib/data";

export const metadata: Metadata = {
  title: "Latest News & Project Updates | New City Paradise",
  description:
    "Read the latest New City Paradise development updates, site progress, PHATA news, and real estate investment insights near Wah Cantt and Burhan.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "New City Paradise News & Articles",
    description:
      "Stay updated on development progress, project milestones, and masterplan news at New City Paradise.",
    url: "https://newcityparadise.com/blog",
  },
};

export default function BlogPage() {
  return (
    <SmoothScroll>
      <Navbar />
      <main className="overflow-hidden bg-ivory">
        <section className="relative flex min-h-[42rem] items-end overflow-hidden bg-ink px-5 pb-14 pt-36 text-white sm:min-h-[50rem] sm:px-8 sm:pb-20">
          <Image
            src="https://newcityparadise.com/wp-content/uploads/2023/05/Blog_Header-e1682941680273.jpg"
            alt="New City Paradise landscape"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,.38)_0%,rgba(0,0,0,.18)_38%,rgba(0,0,0,.82)_100%)]" />
          <div className="grain absolute inset-0" />

          <div className="container-pad relative z-10 !px-0">
            <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
              <div>
                {/* <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-champagne">
                  The Paradise Journal
                </p> */}
                <h1 className="mt-4 hero-title text-[clamp(4.5rem,12vw,5rem)] leading-[0.78]">
                  Stories That
                  <span className="block italic text-[#efc38f]">Shape Tomorrow.</span>
                </h1>
              </div>
              <p className="max-w-md border-l border-white/35 pl-6 text-sm leading-7 text-white/65 lg:mb-2">
                Explore informed perspectives on investment, connected living, and the vision behind New City Paradise.
              </p>
            </div>
          </div>
        </section>

        <section className="py-24 sm:py-16">
          <div className="container-pad">
            <div className="flex items-center justify-between  pb-4">
              <h2 className="text-3xl tracking-[-0.035em] sm:text-5xl">Latest stories</h2>
              
            </div>

            <div className="mt-10 grid gap-5 lg:grid-cols-2">
              <BlogCard post={blogPosts[0]} index={0} featured className="lg:col-span-2 lg:grid lg:grid-cols-[1fr_1fr]" />
              {blogPosts.slice(1).map((post, index) => (
                <BlogCard key={post.slug} post={post} index={index + 1} />
              ))}
            </div>

            <div className="mt-20 flex flex-col gap-7 rounded-[1.75rem] bg-ink px-7 py-10 text-white sm:px-10 lg:flex-row lg:items-center lg:justify-between lg:px-14">
              <div>
                <p className="text-[9px] font-semibold uppercase tracking-[0.24em] text-champagne">Start a conversation</p>
                <h2 className="mt-3 text-[clamp(2.25rem,5vw,4.5rem)] leading-none tracking-[-0.045em]">
                  Find your place in Paradise.
                </h2>
              </div>
              <a
                href="/contact"
                className="inline-flex w-fit items-center gap-5 rounded-2xl bg-[#efc38f] px-6 py-4 text-sm font-semibold   text-ink transition-transform hover:-translate-y-1"
              >
                Speak with our Team 
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </SmoothScroll>
  );
}
