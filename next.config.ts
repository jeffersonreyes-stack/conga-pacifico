import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true, // Force index.html for folders (S3 friendly)
  images: {
    unoptimized: true, // Disable Next.js Image Optimization API
  },
};

export default nextConfig;
