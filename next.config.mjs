// When building for GitHub Pages we emit a fully static site under a repo
// subpath; otherwise we keep the standalone server build (local / Docker).
const isPages = process.env.GITHUB_PAGES === "true";
const repo = "frontend-portfolio";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: isPages ? "export" : "standalone",
  basePath: isPages ? `/${repo}` : undefined,
  assetPrefix: isPages ? `/${repo}/` : undefined,
  trailingSlash: isPages,
  images: { unoptimized: true },
  reactStrictMode: true,
  poweredByHeader: false,
};

export default nextConfig;
