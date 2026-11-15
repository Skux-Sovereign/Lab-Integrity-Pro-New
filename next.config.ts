import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Products was replaced by Services in the v2 redesign.
      { source: "/products", destination: "/services", permanent: true },
      { source: "/products/:path*", destination: "/services", permanent: true },
      // First Insights article was renamed to match its title.
      {
        source: "/insights/what-reviewers-check-before-a-run-is-accepted",
        destination: "/insights/common-qc-review-findings-ligand-binding-assays",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
