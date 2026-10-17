import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // A static site for GitHub Pages: every route becomes out/<route>/index.html.
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  poweredByHeader: false,
  // Two root layouts (English and Malay) need a 404 outside both.
  experimental: { globalNotFound: true },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
