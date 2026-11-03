import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Devices on the LAN that may load dev resources (phones testing via the machine's IP).
  // Add your machine's current IP here when it changes; production is unaffected.
  allowedDevOrigins: ["192.168.101.9", "192.168.0.2"],
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
};

export default nextConfig;
