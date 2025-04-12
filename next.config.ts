import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  // image optimization
  images: {
    remotePatterns: [{
      protocol:"https",
      hostname: "media.rawg.io",
    }]
  }
};

export default nextConfig;
