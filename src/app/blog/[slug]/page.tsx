import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ArticleSchema from "@/components/Blog/ArticleSchema";
import AuthorBox from "@/components/Blog/AuthorBox";
import BlogCTA from "@/components/Blog/BlogCTA";
import BlogLayout from "@/components/Blog/BlogLayout";
import BlogSidebar from "@/components/Blog/BlogSidebar";
import NewsletterSection from "@/components/Blog/NewsletterSection";
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
      <article className="bg-[#040b17] pb-16 pt-20 text-white md:pb-20 md:pt-24">
        <ArticleSchema data={articleSchema} />
        <ArticleSchema data={breadcrumbSchema} />

        <Container>
          <header className="mx-auto max-w-4xl border-b border-white/10 pb-10">
            <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-sm text-gray-400">
              <Link href="/" className="transition hover:text-white">
                Home
              </Link>
              <span aria-hidden="true">/</span>
              <Link href="/blog" className="transition hover:text-white">
                Blog
              </Link>
              <span aria-hidden="true">/</span>
              <span className="text-gray-300">{post.category}</span>
            </nav>

            <div className="mt-8 flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.14em] text-gray-400">
              <Link
                href={`/blog?category=${encodeURIComponent(post.category)}`}
                className="rounded-full border border-[#f39c12]/25 bg-[#f39c12]/10 px-3 py-1 font-semibold text-[#f6c35b] transition hover:border-[#f39c12]/45"
              >
                {post.category}
              </Link>
              <span className="h-1 w-1 rounded-full bg-[#f39c12]" />
              <span>{formatDate(post.date)}</span>
              <span className="h-1 w-1 rounded-full bg-[#f39c12]" />
              <span>{post.readingTime}</span>
              {post.updatedAt ? (
                <>
                  <span className="h-1 w-1 rounded-full bg-[#f39c12]" />
                  <span>Updated {formatDate(post.updatedAt)}</span>
                </>
              ) : null}
            </div>

            <h1 className="mt-6 text-4xl font-extrabold leading-tight text-white sm:text-5xl">
              {post.title}
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-8 text-gray-300 sm:text-lg">{post.description}</p>

            <div className="mt-8 flex items-center gap-4 text-sm text-gray-300">
              <div className="relative h-12 w-12 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04]">
                <Image src="/mubashir.jpg" alt="Mubashir Babar" fill sizes="48px" className="object-cover" />
              </div>
              <div>
                <p className="font-semibold text-white">Mubashir Babar</p>
                <p className="mt-1 text-gray-400">Founder, CodeNexo</p>
              </div>
            </div>
          </header>

          <div className="mx-auto mt-10 max-w-5xl">
            <div className="relative overflow-hidden rounded-3xl border border-white/10 shadow-[0_28px_90px_rgba(0,0,0,0.28)]">
              <Image
                src={post.image}
                alt={post.title}
                width={1600}
                height={900}
                priority
                className="aspect-[16/9] w-full object-cover sm:aspect-[16/8]"
                sizes="(min-width: 1280px) 1024px, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050c18]/70 to-transparent" />
            </div>
          </div>

          <div className="mx-auto mt-12 grid max-w-6xl gap-10 lg:grid-cols-[minmax(0,768px)_260px] lg:justify-center">
            <div className="min-w-0 max-w-3xl">
              <div className="prose-codenexo prose prose-invert">
                <MDXContent />
              </div>

              <BlogCTA compact />

              <div className="mt-12">
                <ShareButtons title={post.title} url={articleUrl} />
              </div>

              <AuthorBox />

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
              <BlogCTA />
              <NewsletterSection />
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
