import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  ...(process.env.GITHUB_PAGES === "1"
    ? { basePath: "/portfolio", assetPrefix: "/portfolio/" }
    : {}),
};

export default nextConfig;
