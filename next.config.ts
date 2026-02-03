import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true, // Force index.html for folders (S3 friendly)
  images: {
    unoptimized: true, // Disable Next.js Image Optimization API
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'd2ldmbozza14uy.cloudfront.net',
      },
      {
        protocol: 'https',
        hostname: 'localhost',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
      },
    ],
  },
};

export default nextConfig;
