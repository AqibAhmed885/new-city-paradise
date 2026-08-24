import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/lib/data";

type Props = {
  post: BlogPost;
  index: number;
  featured?: boolean;
  className?: string;
};

export default function BlogCard({ post, index, featured = false, className = "" }: Props) {
  return (
    <article
      data-blog-card
      className={`group flex h-full flex-col overflow-hidden rounded-[1.75rem]  ${className}`}
    >
      <Link
        href={`/blog/${post.slug}`}
        aria-label={`Read ${post.title}`}
        className={`relative block overflow-hidden ${featured ? "min-h-[23rem] lg:min-h-[31rem]" : "min-h-[19rem]"}`}
      >
        <Image
          src={post.image}
          alt={post.title}
          fill
          sizes={featured ? "(max-width: 1024px) 100vw, 62vw" : "(max-width: 768px) 100vw, 40vw"}
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.045]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/5 to-transparent" />
        <span className="absolute left-5 top-5 rounded-full border border-white/25 bg-black/25 px-3.5 py-2 text-[9px] font-medium uppercase tracking-[0.2em] text-white backdrop-blur-md">
          {post.category}
        </span>
        <span className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full bg-white text-lg text-ink transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">
          ↗
        </span>
      </Link>

      <div className={`flex flex-1 flex-col ${featured ? "p-7 sm:p-9" : "p-6"}`}>
        <div className="flex items-center justify-between gap-4 text-[9px] uppercase tracking-[0.18em] text-black/45">
          <time dateTime={post.date}>{post.displayDate}</time>
        </div>
        <h3 className={`mt-4 leading-[1.05] tracking-[-0.05em]  ${featured ? "text-[clamp(2.2rem,4vw,2.65rem)]" : "text-[clamp(1.8rem,3vw,2.65rem)]"}`}>
          <Link
            href={`/blog/${post.slug}`}
            className="transition-colors hover:text-champagne"
          >
            {post.title}
          </Link>
        </h3>
        <p className="mt-5 max-w-2xl text-sm leading-7 text-black/55">{post.excerpt}</p>
        <Link
          href={`/blog/${post.slug}`}
          className="link-line mt-8 w-fit text-[10px] font-semibold uppercase tracking-[0.2em]"
        >
          Read article
        </Link>
      </div>
    </article>
  );
}
