import type { NextConfig } from "next";

const nextConfig: NextConfig = {


  // Optimize production builds
  productionBrowserSourceMaps: false,
  compress: true, // Enable Gzip compression

  // Compiler optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
};

export default nextConfig;
