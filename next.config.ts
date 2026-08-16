import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // This project sits one level below the folder it is usually opened from.
  // Pinning the tracing root stops Next from inferring the parent directory
  // if a stray lockfile ever appears up there again.
  outputFileTracingRoot: path.join(__dirname),
  // `next build` and `next dev` sharing one .next corrupts the dev server's
  // chunk manifests (ChunkLoadError on app/layout.js). Set NEXT_DIST_DIR to
  // build into a separate directory while dev is running — `npm run build:check`
  // does this. Deploys are unaffected: the var is unset, so .next is used.
  distDir: process.env.NEXT_DIST_DIR || ".next",
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
};

export default nextConfig;
