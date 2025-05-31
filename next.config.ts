import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "",
  assetPrefix: "",
  distDir: "dir",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
