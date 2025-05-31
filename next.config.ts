import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/alfangr.dev",
  assetPrefix: "/alfangr.dev/",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
