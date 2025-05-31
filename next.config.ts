import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/alfangr.dev",
  assetPrefix: "/alfangr.dev/",
  distDir: "dir",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
