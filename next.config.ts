import type { NextConfig } from "next";

const isProduction = true;

const nextConfig: NextConfig = {
  output: "export",
  basePath: isProduction ? "/resume" : "",
  assetPrefix: isProduction ? "/resume/" : "",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
