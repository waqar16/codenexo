import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
   eslint: {
    ignoreDuringBuilds: true,
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'codenexo.tech',
          },
        ],
        destination: 'https://codenexo.tech/:path*',
        permanent: true, // 301 redirect
      },
    ];
  },
};

export default nextConfig;
