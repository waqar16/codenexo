import createMDX from "@next/mdx";
import type { NextConfig } from "next";
import { mdxOptions } from "./src/lib/mdx";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "codenexo.tech",
          },
        ],
        destination: "https://codenexo.tech/:path*",
        permanent: true,
      },
    ];
  },
};

const withMDX = createMDX({
  options: mdxOptions,
});

export default withMDX(nextConfig);
