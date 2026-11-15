import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Products was replaced by Services in the v2 redesign.
      { source: "/products", destination: "/services", permanent: true },
      { source: "/products/:path*", destination: "/services", permanent: true },
    ];
  },
};

export default nextConfig;
