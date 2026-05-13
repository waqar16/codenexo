import type { Metadata } from "next";
import Link from "next/link";
import BlogCard from "@/components/Blog/BlogCard";
import ArticleSchema from "@/components/Blog/ArticleSchema";
import BlogHero from "@/components/Blog/BlogHero";
import BlogLayout from "@/components/Blog/BlogLayout";
import Container from "@/components/layout/Container";
import { COMPANY } from "@/constants/company";
import { filterPosts, getAllCategories, getAllPosts, getAllTags, getBlogIndexMetadata } from "@/lib/blog";

type BlogPageProps = {
  searchParams: Promise<{
    q?: string;
    category?: string;
    tag?: string;
  }>;
};

const pageUrl = `${COMPANY.website}/blog`;

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Read CodeNexo insights on AI automation, MVP delivery, modern web platforms, integrations, and scalable business systems.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "CodeNexo Blog",
    description:
      "Read CodeNexo insights on AI automation, MVP delivery, modern web platforms, integrations, and scalable business systems.",
    url: pageUrl,
    type: "website",
    images: [COMPANY.ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "CodeNexo Blog",
    description:
      "Read CodeNexo insights on AI automation, MVP delivery, modern web platforms, integrations, and scalable business systems.",
    images: [COMPANY.ogImage],
  },
};

function buildFilterHref(filters: { q?: string; category?: string; tag?: string }) {
  const params = new URLSearchParams();

  if (filters.q) params.set("q", filters.q);
  if (filters.category) params.set("category", filters.category);
  if (filters.tag) params.set("tag", filters.tag);

  const query = params.toString();
  return query ? `/blog?${query}` : "/blog";
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const resolvedSearchParams = await searchParams;
  const q = resolvedSearchParams.q?.trim() ?? "";
  const category = resolvedSearchParams.category?.trim() ?? "";
  const tag = resolvedSearchParams.tag?.trim() ?? "";

  const posts = getAllPosts();
  const categories = getAllCategories();
  const tags = getAllTags();
  const filteredPosts = filterPosts(posts, { q, category, tag });
  const { featured, totalPosts } = getBlogIndexMetadata();

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: COMPANY.website,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: pageUrl,
      },
    ],
  };

  return (
    <BlogLayout>
      <BlogHero featuredPost={featured} totalPosts={totalPosts} />

      <main className="bg-[#040b17] py-14 md:py-16">
        <Container>
          <ArticleSchema data={breadcrumbSchema} />

          <section className="grid gap-8 lg:grid-cols-[280px_minmax(0,1fr)]">
            <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
              <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-5 backdrop-blur-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#f6c35b]">Search articles</p>
                <form action="/blog" className="mt-4 space-y-4">
                  <input type="hidden" name="category" value={category} />
                  <input type="hidden" name="tag" value={tag} />
                  <label className="block">
                    <span className="sr-only">Search blog posts</span>
                    <input
                      type="search"
                      name="q"
                      defaultValue={q}
                      placeholder="Search by topic or keyword"
                      className="h-12 w-full rounded-2xl border border-white/10 bg-[#07101d] px-4 text-sm text-white outline-none ring-0 placeholder:text-gray-500 focus:border-[#f39c12]/40"
                    />
                  </label>
                  <button
                    type="submit"
                    className="inline-flex h-11 items-center justify-center rounded-xl bg-[#f39c12] px-5 text-sm font-semibold text-black transition hover:bg-[#f6ad27]"
                  >
                    Apply search
                  </button>
                </form>
              </div>

              <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-5 backdrop-blur-sm">
                <div className="flex items-center justify-between gap-4">
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#f6c35b]">Categories</p>
                  {(category || tag || q) && (
                    <Link href="/blog" className="text-xs text-gray-400 transition hover:text-white">
                      Clear all
                    </Link>
                  )}
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {categories.map((item) => (
                    <Link
                      key={item}
                      href={buildFilterHref({ q, category: item, tag })}
                      className={`rounded-full border px-3 py-1 text-xs transition ${
                        item === category
                          ? "border-[#f39c12]/35 bg-[#f39c12]/10 text-[#f6c35b]"
                          : "border-white/10 bg-white/[0.03] text-gray-300 hover:border-[#f39c12]/30 hover:text-[#f6c35b]"
                      }`}
                    >
                      {item}
                    </Link>
                  ))}
                </div>

                <p className="mt-6 text-sm font-semibold uppercase tracking-[0.24em] text-[#f6c35b]">Tags</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {tags.map((item) => (
                    <Link
                      key={item}
                      href={buildFilterHref({ q, category, tag: item })}
                      className={`rounded-full border px-3 py-1 text-xs transition ${
                        item === tag
                          ? "border-[#f39c12]/35 bg-[#f39c12]/10 text-[#f6c35b]"
                          : "border-white/10 bg-white/[0.03] text-gray-300 hover:border-[#f39c12]/30 hover:text-[#f6c35b]"
                      }`}
                    >
                      #{item}
                    </Link>
                  ))}
                </div>
              </div>
            </aside>

            <section>
              <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.22em] text-gray-400">
                    {filteredPosts.length} result{filteredPosts.length === 1 ? "" : "s"}
                  </p>
                  <h2 className="mt-2 text-3xl font-extrabold tracking-[-0.04em] text-white">Latest articles</h2>
                </div>
                {(q || category || tag) && (
                  <p className="max-w-xl text-sm leading-7 text-gray-300">
                    Showing posts filtered by your current search and topic selections.
                  </p>
                )}
              </div>

              {filteredPosts.length > 0 ? (
                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-2">
                  {filteredPosts.map((post, index) => (
                    <BlogCard key={post.slug} post={post} priority={index < 2} />
                  ))}
                </div>
              ) : (
                <div className="rounded-[2rem] border border-dashed border-white/12 bg-white/[0.03] px-6 py-12 text-center">
                  <h3 className="text-2xl font-bold text-white">No blog posts matched your filters</h3>
                  <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-gray-300 sm:text-base">
                    Try a broader search term, remove one of the current filters, or return to the full blog index.
                  </p>
                  <Link
                    href="/blog"
                    className="mt-6 inline-flex rounded-xl bg-[#f39c12] px-5 py-3 text-sm font-semibold text-black transition hover:bg-[#f6ad27]"
                  >
                    View all articles
                  </Link>
                </div>
              )}
            </section>
          </section>
        </Container>
      </main>
    </BlogLayout>
  );
}
