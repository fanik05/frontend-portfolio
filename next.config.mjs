// On GitHub Pages we emit a fully static site served at the custom domain
// root (fatinnooranik.is-a.dev); otherwise keep the standalone server build
// (local / Docker).
const isPages = process.env.GITHUB_PAGES === "true";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: isPages ? "export" : "standalone",
  trailingSlash: isPages,
  images: { unoptimized: true },
  reactStrictMode: true,
  poweredByHeader: false,
};

export default nextConfig;
