import { COMPANY } from "@/constants/company";
import { getAllPosts } from "@/lib/blog";

function escapeXml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export async function GET() {
  const posts = getAllPosts();

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>${escapeXml(`${COMPANY.name} Blog`)}</title>
    <link>${COMPANY.website}/blog</link>
    <description>${escapeXml("Insights on AI automation, web development, product delivery, and business systems.")}</description>
    <language>en-us</language>
    ${posts
      .map(
        (post) => `
    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${COMPANY.website}${post.url}</link>
      <guid>${post.canonical ?? `${COMPANY.website}${post.url}`}</guid>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <description>${escapeXml(post.description)}</description>
      <category>${escapeXml(post.category)}</category>
    </item>`,
      )
      .join("")}
  </channel>
</rss>`;

  return new Response(rss, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
