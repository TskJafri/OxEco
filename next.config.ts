import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_ACTIONS === "true";
const repo = "OxEco"; // your repo name
const basePath = isGithubPages ? `/${repo}` : "";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath,
  assetPrefix: isGithubPages ? `/${repo}/` : "",
  // Expose the basePath to client/server code so we can prefix public-folder
  // asset URLs (next/image does not auto-prepend basePath the way next/link does).
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;