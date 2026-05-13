import Image from "next/image";
import Link from "next/link";
import type { BlogPostMeta } from "@/lib/blog";

type BlogCardProps = {
  post: BlogPostMeta;
  priority?: boolean;
};

function formatDate(date: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(date));
}

export default function BlogCard({ post, priority = false }: BlogCardProps) {
  return (
    <article className="group overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.04] shadow-[0_24px_70px_rgba(0,0,0,0.22)] backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-white/20">
      <Link href={post.url} className="block">
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            fill
            priority={priority}
            className="object-cover transition duration-500 group-hover:scale-[1.03]"
            sizes="(min-width: 1280px) 384px, (min-width: 768px) 50vw, 100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#05101f] via-[#05101f]/20 to-transparent" />
          <div className="absolute left-4 top-4 inline-flex rounded-full border border-[#f39c12]/25 bg-[#0f1724]/80 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[#f6c35b] backdrop-blur-sm">
            {post.category}
          </div>
        </div>
      </Link>

      <div className="p-6">
        <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.18em] text-gray-400">
          <span>{formatDate(post.date)}</span>
          <span className="h-1 w-1 rounded-full bg-[#f39c12]" />
          <span>{post.readingTime}</span>
        </div>

        <h3 className="mt-4 text-2xl font-bold tracking-[-0.03em] text-white">
          <Link href={post.url} className="transition hover:text-[#f6c35b]">
            {post.title}
          </Link>
        </h3>

        <p className="mt-3 text-sm leading-7 text-gray-300 sm:text-base">{post.excerpt}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <Link
              key={tag}
              href={`/blog?tag=${encodeURIComponent(tag)}`}
              className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-gray-300 transition hover:border-[#f39c12]/30 hover:text-[#f6c35b]"
            >
              #{tag}
            </Link>
          ))}
        </div>
      </div>
    </article>
  );
}
