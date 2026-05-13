import type { BlogPostMeta } from "@/lib/blog";
import BlogCard from "@/components/Blog/BlogCard";

type RelatedPostsProps = {
  posts: BlogPostMeta[];
};

export default function RelatedPosts({ posts }: RelatedPostsProps) {
  if (posts.length === 0) {
    return null;
  }

  return (
    <section className="mt-16 border-t border-white/10 pt-12">
      <div className="mb-8">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#f6c35b]">Continue reading</p>
        <h2 className="mt-3 text-3xl font-extrabold tracking-normal text-white">Related articles</h2>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {posts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </section>
  );
}
