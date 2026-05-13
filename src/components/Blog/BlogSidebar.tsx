import type { BlogPost } from "@/lib/blog";
import TOC from "@/components/Blog/TOC";

type BlogSidebarProps = {
  post: BlogPost;
};

export default function BlogSidebar({ post }: BlogSidebarProps) {
  return (
    <aside className="space-y-5 lg:sticky lg:top-28">
      <TOC items={post.toc} />

      <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-4 backdrop-blur-sm">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#f6c35b]">Category</p>
        <a
          href={`/blog?category=${encodeURIComponent(post.category)}`}
          className="mt-3 inline-flex rounded-full border border-white/10 bg-white/[0.025] px-3 py-1 text-sm text-gray-300 transition hover:border-[#f39c12]/30 hover:text-[#f6c35b]"
        >
          {post.category}
        </a>

        <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-[#f6c35b]">Tags</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <a
              key={tag}
              href={`/blog?tag=${encodeURIComponent(tag)}`}
              className="rounded-full border border-white/10 bg-white/[0.025] px-3 py-1 text-xs text-gray-400 transition hover:border-[#f39c12]/30 hover:text-[#f6c35b]"
            >
              #{tag}
            </a>
          ))}
        </div>
      </div>
    </aside>
  );
}
