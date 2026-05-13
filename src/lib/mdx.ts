export const mdxOptions = {
  remarkPlugins: ["remark-gfm"],
  rehypePlugins: [
    "rehype-slug",
    [
      "rehype-autolink-headings",
      {
        behavior: "append",
        properties: {
          className: ["blog-heading-anchor"],
          ariaLabel: "Link to section",
        },
        content: {
          type: "text",
          value: "#",
        },
      },
    ],
    [
      "rehype-pretty-code",
      {
        theme: "github-dark-default",
        keepBackground: false,
        defaultLang: "plaintext",
      },
    ],
  ],
};
