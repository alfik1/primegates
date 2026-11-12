import type { NextConfig } from "next";

const REACT_URL = "https://app.primegategeneral.com";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,

  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },

  async rewrites() {
    return {
      beforeFiles: [
        {
          source: "/about",
          destination: `${REACT_URL}/about`,
        },
        {
          source: "/gallery",
          destination: `${REACT_URL}/gallery`,
        },
        {
          source: "/blog",
          destination: `${REACT_URL}/blog`,
        },
        {
          source: "/blog/:slug",
          destination: `${REACT_URL}/blog/:slug`,
        },
        {
          source: "/contact",
          destination: `${REACT_URL}/contact`,
        },
        {
          source: "/assets/:path*",
          destination: `${REACT_URL}/assets/:path*`,
        },
      ],
      afterFiles: [
        {
          source: "/activities/:slug",
          destination: `${REACT_URL}/activities/:slug`,
        },
      ],
    };
  },
};

export default nextConfig;