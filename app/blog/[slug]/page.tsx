import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import SmoothScroll from "@/components/SmoothScroll";
import { blogPosts } from "@/lib/data";
import Heading from "@/components/ui/heading";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) return {};

  return {
    title: `${post.title} | New City Paradise`,
    description: post.excerpt,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      url: `https://newcityparadise.com/blog/${post.slug}`,
      publishedTime: post.date,
      images: [post.image],
    },
  };
}

export default async function BlogArticlePage({ params }: Props) {
  const { slug } = await params;
  const postIndex = blogPosts.findIndex((item) => item.slug === slug);

  if (postIndex === -1) notFound();

  const post = blogPosts[postIndex];
  const relatedPosts = blogPosts.filter((item) => item.slug !== post.slug).slice(0, 2);

  return (
    <SmoothScroll>
      <Navbar />
      <main className="overflow-hidden bg-white">
        <article>
          <header className="relative flex min-h-[46rem] items-end overflow-hidden bg-ink pb-12 pt-36 text-white sm:min-h-[53rem] sm:pb-20">
            <Image
              src={post.image}
              alt={post.title}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,.52)_0%,rgba(0,0,0,.2)_35%,rgba(0,0,0,.88)_100%)]" />
            <div className="grain absolute inset-0" />

            <div className="container-pad relative z-10">
              <Link
                href="/blog"
                className="inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.1em] text-white/60 transition-colors hover:text-white"
              >
                <span>←</span> Back 
              </Link>
              <div className="mt-10 max-w-6xl">
                <div className="flex flex-wrap items-center gap-4 text-xs font-semibold">
                  <span className="rounded-full border border-white/25 bg-white/10 px-4 py-2 backdrop-blur-md">
                    {post.category}
                  </span>
                  {/* <time dateTime={post.date} className="text-white/55">
                    {post.displayDate}
                  </time> */}
                </div>
                <Heading
                  className="mt-5 text-[clamp(2rem,8vw,5rem)]  text-white "
                  size="xl"
                >
                  {post.title}
                </Heading>
              
                {/* <h1 className="mt-7  text-[clamp(2rem,8vw,4rem)] leading-[0.88] tracking-[0.02em]">
                  {post.title}
                </h1> */}
              </div>
            </div>
          </header>

          <div className="container-pad py-20 sm:py-28">
            <div className="grid gap-14 lg:grid-cols-[16rem_minmax(0,52rem)] lg:justify-center lg:gap-20">
              <aside className="h-fit border-t border-black/20 pt-6 lg:sticky lg:top-28">
                <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-champagne">
                  Article details
                </p>
                <dl className="mt-7 space-y-6 text-sm">
                  <div>
                    <dt className="text-[9px] uppercase tracking-[0.18em] text-black/35">Published</dt>
                    <dd className="mt-2 text-black/70">{post.displayDate}</dd>
                  </div>
                  <div>
                    <dt className="text-[9px] uppercase tracking-[0.18em] text-black/35">Category</dt>
                    <dd className="mt-2 text-black/70">{post.category}</dd>
                  </div>
                  <div>
                    <dt className="text-[9px] uppercase tracking-[0.18em] text-black/35">Publisher</dt>
                    <dd className="mt-2 text-black/70">New City Paradise</dd>
                  </div>
                </dl>
                <a
                  href={post.sourceUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="link-line mt-8 inline-flex items-center gap-3 text-[9px] font-semibold uppercase tracking-[0.18em]"
                >
                  Original article <span>↗</span>
                </a>
              </aside>

              <div>
                <h1 className="border-b border-black/15 pb-8 text-[clamp(1rem,3vw,2rem)] leading-[1.35] tracking-[-0.025em] text-black/75">
                  {post.excerpt}
                </h1>

                <div className="mt-8 space-y-8">
                  {post.content.map((section, index) => (
                    <section key={section.heading} className="scroll-mt-28">
                      <h2 className="mt-2 text-[clamp(1.6rem,4vw,1.8rem)] leading-[1.02] tracking-[-0.03em]">
                        {section.heading}
                      </h2>
                      <div className="mt-2 space-y-4">
                        {section.paragraphs.map((paragraph) => (
                          <p key={paragraph} className="text-base text-black/50  sm:text-lg">
                            {paragraph}
                          </p>
                        ))}
                      </div>
                      {section.bullets && (
                        <ul className="mt-2">
                          {section.bullets.map((bullet) => (
                            <li
                              key={bullet}
                              className="flex gap-4 rounded-2xl   px-4 text-sm leading-9 text-black/65"
                            >
                              <span className=" text-champagne">✦</span>
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </section>
                  ))}
                </div>

                
              </div>
            </div>
            <div className="mt-10 flex items-center justify-between rounded-[1.75rem] bg-ink p-7 text-white sm:p-10">
              {/* <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-champagne">
                Plan your next step
              </p> */}
              <div>
                <h2 className="mt-4 text-[clamp(2.25rem,5vw,4rem)] leading-none tracking-[-0.045em]">
                  Visit New City Paradise.
                </h2>
                <p className="mt-5 max-w-xl text-sm leading-7 text-white/55">
                  Speak with our team for the latest availability, official payment plans, and a guided project visit.
                </p>
              </div>
              
              <Link
                href="/contact"
                className=" inline-flex items-center gap-5 rounded-2xl bg-white px-6 py-4 text-sm font-semibold  text-ink transition-transform hover:-translate-y-1"
              >
                Contact our Team 
              </Link>
            </div>
          </div>
        </article>

        <section className=" bg-gray-50 py-8">
          <div className="container-pad">
            <div className="flex items-end justify-between gap-6">
              <div>
                <h2 className="mt-3 text-[clamp(2rem,6vw,4rem)] font-normal leading-none tracking-[-0.03em]">Related stories</h2>
              </div>
              <Link href="/blog" className="link-line hidden text-[9px] font-semibold uppercase tracking-[0.18em] sm:block">
                View all
              </Link>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {relatedPosts.map((related) => (
                <Link
                  key={related.slug}
                  href={`/blog/${related.slug}`}
                  className="group relative min-h-[26rem] overflow-hidden rounded-[1.75rem]  text-white"
                >
                  <Image
                    src={related.image}
                    alt={related.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-black/15" />
                  <div className="absolute inset-x-0 bottom-0 p-7 sm:p-9">
                    <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/55">
                      {related.category} · {related.displayDate}
                    </p>
                    <h3 className="mt-4 max-w-xl text-[clamp(2rem,4vw,3.25rem)] leading-[1.02] tracking-[-0.08em]">
                      {related.title}
                    </h3>
                  </div>
                  <span className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full bg-white text-lg text-ink transition-transform group-hover:-translate-y-1 group-hover:translate-x-1">
                    ↗
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </SmoothScroll>
  );
}
