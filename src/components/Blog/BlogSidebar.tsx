import type { BlogPost } from "@/lib/blog";
import TOC from "@/components/Blog/TOC";

type BlogSidebarProps = {
  post: BlogPost;
};

export default function BlogSidebar({ post }: BlogSidebarProps) {
  return (
    <aside className="space-y-6 lg:sticky lg:top-28">
      <TOC items={post.toc} />

      <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5 backdrop-blur-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#f6c35b]">Category</p>
        <a
          href={`/blog?category=${encodeURIComponent(post.category)}`}
          className="mt-4 inline-flex rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-sm text-gray-200 transition hover:border-[#f39c12]/30 hover:text-[#f6c35b]"
        >
          {post.category}
        </a>

        <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-[#f6c35b]">Tags</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <a
              key={tag}
              href={`/blog?tag=${encodeURIComponent(tag)}`}
              className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-gray-300 transition hover:border-[#f39c12]/30 hover:text-[#f6c35b]"
            >
              #{tag}
            </a>
          ))}
        </div>
      </div>
    </aside>
  );
}
