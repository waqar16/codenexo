import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ArticleSchema from "@/components/Blog/ArticleSchema";
import BlogLayout from "@/components/Blog/BlogLayout";
import BlogSidebar from "@/components/Blog/BlogSidebar";
import RelatedPosts from "@/components/Blog/RelatedPosts";
import ShareButtons from "@/components/Blog/ShareButtons";
import Container from "@/components/layout/Container";
import { COMPANY } from "@/constants/company";
import {
  getAdjacentPosts,
  getAllPostSlugs,
  getPostBySlug,
  getPostComponent,
  getRelatedPosts,
} from "@/lib/blog";

type BlogPostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

function formatDate(date: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(date));
}

export async function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "Blog Post Not Found",
      description: "The requested article could not be found.",
    };
  }

  return {
    title: post.title,
    description: post.description,
    keywords: post.tags,
    alternates: {
      canonical: post.canonical,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      url: post.canonical,
      type: "article",
      images: [post.image],
      publishedTime: post.date,
      modifiedTime: post.updatedAt ?? post.date,
      authors: [post.author],
      section: post.category,
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [post.image],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const MDXContent = await getPostComponent(slug);

  if (!MDXContent) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(slug, 3);
  const adjacent = getAdjacentPosts(slug);
  const articleUrl = post.canonical ?? `${COMPANY.website}${post.url}`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    image: [`${COMPANY.website}${post.image}`],
    datePublished: post.date,
    dateModified: post.updatedAt ?? post.date,
    author: {
      "@type": "Organization",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: COMPANY.name,
      logo: {
        "@type": "ImageObject",
        url: `${COMPANY.website}/logo.png`,
      },
    },
    mainEntityOfPage: articleUrl,
  };

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
        item: `${COMPANY.website}/blog`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: articleUrl,
      },
    ],
  };

  return (
    <BlogLayout>
      <article className="bg-[#040b17] pb-16 pt-24 text-white md:pb-20">
        <ArticleSchema data={articleSchema} />
        <ArticleSchema data={breadcrumbSchema} />

        <Container>
          <header className="mx-auto max-w-4xl">
            <Link
              href="/blog"
              className="inline-flex rounded-full border border-white/10 bg-white/[0.03] px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#f6c35b] transition hover:border-[#f39c12]/30"
            >
              Back to blog
            </Link>

            <div className="mt-6 flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.18em] text-gray-400">
              <span>{post.category}</span>
              <span className="h-1 w-1 rounded-full bg-[#f39c12]" />
              <span>{formatDate(post.date)}</span>
              <span className="h-1 w-1 rounded-full bg-[#f39c12]" />
              <span>{post.readingTime}</span>
            </div>

            <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-[-0.05em] text-white sm:text-5xl">
              {post.title}
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-8 text-gray-300 sm:text-lg">{post.description}</p>

            <div className="mt-8 flex flex-wrap items-center gap-3 text-sm text-gray-300">
              <span className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2">{post.author}</span>
              {post.updatedAt ? (
                <span className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2">
                  Updated {formatDate(post.updatedAt)}
                </span>
              ) : null}
            </div>
          </header>

          <div className="mx-auto mt-10 max-w-6xl">
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10">
              <Image
                src={post.image}
                alt={post.title}
                width={1600}
                height={900}
                priority
                className="aspect-[16/8] w-full object-cover"
                sizes="(min-width: 1280px) 1152px, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050c18]/70 to-transparent" />
            </div>
          </div>

          <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1fr)_300px]">
            <div className="min-w-0">
              <div className="prose-codenexo">
                <MDXContent />
              </div>

              <div className="mt-12">
                <ShareButtons title={post.title} url={articleUrl} />
              </div>

              <section className="mt-10 rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#f6c35b]">About the author</p>
                <h2 className="mt-3 text-2xl font-bold text-white">{post.author}</h2>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-gray-300 sm:text-base">
                  The CodeNexo editorial team writes from hands-on experience delivering AI automation, web
                  products, internal systems, and business workflow solutions for growth-focused teams.
                </p>
              </section>

              <nav
                aria-label="Article navigation"
                className="mt-10 grid gap-4 md:grid-cols-2"
              >
                {adjacent.previous ? (
                  <Link
                    href={adjacent.previous.url}
                    className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5 transition hover:border-white/20"
                  >
                    <p className="text-xs uppercase tracking-[0.18em] text-gray-400">Previous article</p>
                    <p className="mt-3 text-lg font-semibold text-white">{adjacent.previous.title}</p>
                  </Link>
                ) : <div />}

                {adjacent.next ? (
                  <Link
                    href={adjacent.next.url}
                    className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5 text-left transition hover:border-white/20"
                  >
                    <p className="text-xs uppercase tracking-[0.18em] text-gray-400">Next article</p>
                    <p className="mt-3 text-lg font-semibold text-white">{adjacent.next.title}</p>
                  </Link>
                ) : <div />}
              </nav>

              <RelatedPosts posts={relatedPosts} />
            </div>

            <div className="min-w-0">
              <BlogSidebar post={post} />
            </div>
          </div>
        </Container>
      </article>
    </BlogLayout>
  );
}
