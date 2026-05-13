import Link from "next/link";
import type { BlogPostMeta } from "@/lib/blog";
import Container from "@/components/layout/Container";

type BlogHeroProps = {
  featuredPost: BlogPostMeta | null;
  totalPosts: number;
};

export default function BlogHero({ featuredPost, totalPosts }: BlogHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-gradient-to-b from-[#081223] via-[#071126] to-[#040c18] py-20 text-white md:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(243,156,18,0.12),transparent_38%),linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:auto,44px_44px,44px_44px]" />
      <Container className="relative">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div className="max-w-3xl">
            <div className="inline-flex rounded-full border border-[#f39c12]/30 bg-[#f39c12]/10 px-4 py-1 text-[0.72rem] font-semibold uppercase tracking-[0.26em] text-[#f6c35b]">
              CodeNexo Journal
            </div>
            <h1 className="mt-6 text-4xl font-extrabold leading-[0.95] tracking-[-0.05em] sm:text-5xl lg:text-6xl">
              Insights on AI systems, product delivery, and modern operations
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-gray-300 sm:text-lg">
              Practical guidance for teams building automation, custom software, and growth-ready digital systems.
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.28)] backdrop-blur-sm">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#f6c35b]">Featured insight</p>
                <p className="mt-2 text-2xl font-bold text-white">{totalPosts} published articles</p>
              </div>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-300">
                SEO-ready
              </span>
            </div>

            {featuredPost ? (
              <div className="mt-6 rounded-[1.5rem] border border-white/10 bg-[#091423] p-5">
                <p className="text-sm uppercase tracking-[0.18em] text-gray-400">{featuredPost.category}</p>
                <h2 className="mt-3 text-2xl font-bold tracking-[-0.03em] text-white">{featuredPost.title}</h2>
                <p className="mt-3 text-sm leading-7 text-gray-300">{featuredPost.excerpt}</p>
                <Link
                  href={featuredPost.url}
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#f6c35b] transition hover:text-[#ffd277]"
                >
                  Read featured article
                </Link>
              </div>
            ) : null}
          </div>
        </div>
      </Container>
    </section>
  );
}
