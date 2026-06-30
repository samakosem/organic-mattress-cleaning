import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.join(__dirname),
  },
  async redirects() {
    return [
      // Redirect non-www to www (both http and https) — 308 permanent
      {
        source: "/:path*",
        has: [{ type: "host", value: "organicmattresscleaning.com" }],
        destination: "https://www.organicmattresscleaning.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
