"use client";

import { useMemo, useState } from "react";
import { ChevronDown } from "lucide-react";
import type { TableOfContentsItem } from "@/lib/blog";

type TOCProps = {
  items: TableOfContentsItem[];
};

export default function TOC({ items }: TOCProps) {
  const [open, setOpen] = useState(false);
  const hasItems = items.length > 0;
  const label = useMemo(() => `Table of contents (${items.length} sections)`, [items.length]);

  if (!hasItems) {
    return null;
  }

  return (
    <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5 backdrop-blur-sm">
      <button
        type="button"
        aria-expanded={open}
        aria-controls="blog-toc"
        aria-label={label}
        className="flex w-full items-center justify-between gap-4 text-left lg:pointer-events-none"
        onClick={() => setOpen((value) => !value)}
      >
        <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#f6c35b]">
          Table of contents
        </span>
        <ChevronDown
          className={`h-4 w-4 text-gray-300 transition lg:hidden ${open ? "rotate-180" : ""}`}
        />
      </button>

      <nav
        id="blog-toc"
        aria-label="Table of contents"
        className={`${open ? "mt-4 block" : "hidden"} lg:mt-4 lg:block`}
      >
        <ul className="space-y-2">
          {items.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`block rounded-xl px-3 py-2 text-sm leading-6 text-gray-300 transition hover:bg-white/5 hover:text-white ${
                  item.level === 3 ? "ml-4" : ""
                }`}
              >
                {item.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
