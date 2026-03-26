import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_ACTIONS === "true";
const repo = "OxEco"; // your repo name

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: isGithubPages ? `/${repo}` : "",
  assetPrefix: isGithubPages ? `/${repo}/` : "",
};

export default nextConfig;