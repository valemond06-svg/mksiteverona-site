import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable SWC minification for better performance
  swcMinify: true,

  // Optimize production builds
  productionBrowserSourceMaps: false,



  // Compiler optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
};

export default nextConfig;
