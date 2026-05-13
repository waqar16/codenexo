import "server-only";

import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import readingTime from "reading-time";
import { COMPANY } from "@/constants/company";

const BLOG_CONTENT_DIR = path.join(process.cwd(), "src", "content", "blog");

export type TableOfContentsItem = {
  id: string;
  text: string;
  level: 2 | 3;
};

export type BlogFrontmatter = {
  title: string;
  description: string;
  date: string;
  updatedAt?: string;
  author: string;
  category: string;
  tags: string[];
  featured?: boolean;
  image: string;
  canonical?: string;
  excerpt: string;
  readingTime?: string;
};

export type BlogPostMeta = BlogFrontmatter & {
  slug: string;
  url: string;
  readingTime: string;
};

export type BlogPost = BlogPostMeta & {
  content: string;
  toc: TableOfContentsItem[];
};

function getBlogFilePath(slug: string) {
  return path.join(BLOG_CONTENT_DIR, `${slug}.mdx`);
}

function stripCodeBlocks(content: string) {
  return content.replace(/```[\s\S]*?```/g, "");
}

function slugifyHeading(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

function extractTOC(content: string): TableOfContentsItem[] {
  const counts = new Map<string, number>();
  const clean = stripCodeBlocks(content);
  const matches = clean.matchAll(/^(##|###)\s+(.+)$/gm);

  return Array.from(matches).map((match) => {
    const level = match[1] === "##" ? 2 : 3;
    const text = match[2].trim();
    const baseId = slugifyHeading(text);
    const seen = counts.get(baseId) ?? 0;
    counts.set(baseId, seen + 1);

    return {
      id: seen === 0 ? baseId : `${baseId}-${seen}`,
      text,
      level,
    };
  });
}

function normalizeFrontmatter(slug: string, data: Record<string, unknown>, content: string): BlogPostMeta {
  const stats = readingTime(content);
  const category = String(data.category ?? "").trim();
  const tags = Array.isArray(data.tags)
    ? data.tags.map((tag) => String(tag).trim()).filter(Boolean)
    : [];
  const canonical = typeof data.canonical === "string" && data.canonical.trim().length > 0
    ? data.canonical
    : `${COMPANY.website}/blog/${slug}`;

  return {
    slug,
    title: String(data.title ?? ""),
    description: String(data.description ?? ""),
    date: String(data.date ?? ""),
    updatedAt: data.updatedAt ? String(data.updatedAt) : undefined,
    author: String(data.author ?? ""),
    category,
    tags,
    featured: Boolean(data.featured),
    image: String(data.image ?? COMPANY.ogImage),
    canonical,
    excerpt: String(data.excerpt ?? ""),
    readingTime: data.readingTime ? String(data.readingTime) : stats.text,
    url: `/blog/${slug}`,
  };
}

function comparePosts(a: BlogPostMeta, b: BlogPostMeta) {
  return new Date(b.date).getTime() - new Date(a.date).getTime();
}

function readPostFile(slug: string) {
  const source = fs.readFileSync(getBlogFilePath(slug), "utf8");
  const { data, content } = matter(source);

  return {
    source,
    content,
    meta: normalizeFrontmatter(slug, data, content),
  };
}

export function getAllPostSlugs() {
  return fs
    .readdirSync(BLOG_CONTENT_DIR)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""))
    .sort();
}

export function getAllPosts(): BlogPostMeta[] {
  return getAllPostSlugs().map((slug) => readPostFile(slug).meta).sort(comparePosts);
}

export function getPostBySlug(slug: string): BlogPost | null {
  const filePath = getBlogFilePath(slug);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const { meta, content } = readPostFile(slug);

  return {
    ...meta,
    content,
    toc: extractTOC(content),
  };
}

export async function getPostComponent(slug: string) {
  try {
    const importedPost = await import(`@/content/blog/${slug}.mdx`);
    return importedPost.default;
  } catch {
    return null;
  }
}

export function getFeaturedPost() {
  return getAllPosts().find((post) => post.featured) ?? getAllPosts()[0] ?? null;
}

export function getAllCategories() {
  return Array.from(new Set(getAllPosts().map((post) => post.category))).sort((a, b) =>
    a.localeCompare(b),
  );
}

export function getAllTags() {
  return Array.from(new Set(getAllPosts().flatMap((post) => post.tags))).sort((a, b) =>
    a.localeCompare(b),
  );
}

export function filterPosts(posts: BlogPostMeta[], filters: { q?: string; category?: string; tag?: string }) {
  const query = filters.q?.trim().toLowerCase();
  const category = filters.category?.trim().toLowerCase();
  const tag = filters.tag?.trim().toLowerCase();

  return posts.filter((post) => {
    const matchesQuery =
      !query ||
      [post.title, post.description, post.excerpt, post.category, ...post.tags]
        .join(" ")
        .toLowerCase()
        .includes(query);
    const matchesCategory = !category || post.category.toLowerCase() === category;
    const matchesTag = !tag || post.tags.some((item) => item.toLowerCase() === tag);

    return matchesQuery && matchesCategory && matchesTag;
  });
}

export function getRelatedPosts(slug: string, limit = 3) {
  const posts = getAllPosts();
  const current = posts.find((post) => post.slug === slug);

  if (!current) {
    return [];
  }

  return posts
    .filter((post) => post.slug !== slug)
    .map((post) => {
      let score = 0;

      if (post.category === current.category) {
        score += 3;
      }

      score += post.tags.filter((tag) => current.tags.includes(tag)).length * 2;

      return { post, score };
    })
    .filter(({ score }) => score > 0)
    .sort((a, b) => {
      if (b.score !== a.score) {
        return b.score - a.score;
      }

      return comparePosts(a.post, b.post);
    })
    .slice(0, limit)
    .map(({ post }) => post);
}

export function getAdjacentPosts(slug: string) {
  const posts = getAllPosts();
  const index = posts.findIndex((post) => post.slug === slug);

  if (index === -1) {
    return {
      previous: null,
      next: null,
    };
  }

  return {
    previous: posts[index + 1] ?? null,
    next: posts[index - 1] ?? null,
  };
}

export function getBlogIndexMetadata() {
  const featured = getFeaturedPost();

  return {
    totalPosts: getAllPosts().length,
    featured,
  };
}
