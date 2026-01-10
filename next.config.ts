import type { NextConfig } from "next";

const nextConfig: NextConfig = {


  // Optimize production builds
  productionBrowserSourceMaps: false,



  // Compiler optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
};

export default nextConfig;
