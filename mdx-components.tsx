import type { ComponentPropsWithoutRef } from "react";
import type { MDXComponents } from "mdx/types";
import Image from "next/image";
import Link from "next/link";

function CTAAnchor(props: ComponentPropsWithoutRef<"a">) {
  const href = props.href ?? "";
  const isInternal = href.startsWith("/");

  if (isInternal) {
    return (
      <Link
        href={href}
        className="font-medium text-[#f6c35b] underline decoration-[#f39c12]/40 underline-offset-4 transition hover:text-[#ffd277]"
      >
        {props.children}
      </Link>
    );
  }

  return (
    <a
      {...props}
      target={props.target ?? "_blank"}
      rel={props.rel ?? "noreferrer"}
      className="font-medium text-[#f6c35b] underline decoration-[#f39c12]/40 underline-offset-4 transition hover:text-[#ffd277]"
    />
  );
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    a: CTAAnchor,
    img: ({ alt = "", src = "" }) => (
      <span className="my-10 block overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.03]">
        <Image
          alt={alt}
          src={src}
          width={1200}
          height={720}
          className="h-auto w-full object-cover"
          sizes="(min-width: 1024px) 896px, 100vw"
        />
      </span>
    ),
    blockquote: (props) => (
      <blockquote
        {...props}
        className="rounded-r-2xl border-l-4 border-[#f39c12]/45 bg-white/[0.03] px-6 py-2 text-gray-200"
      />
    ),
    table: (props) => (
      <div className="my-8 overflow-x-auto rounded-2xl border border-white/10">
        <table {...props} className="min-w-full text-sm" />
      </div>
    ),
    pre: (props) => <pre {...props} />,
    code: (props) => <code {...props} />,
    ...components,
  };
}
