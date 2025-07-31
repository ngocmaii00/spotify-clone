import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "qfywmztxalqgqodinhyn.supabase.co",
        port: "",
        pathname: "/**",
      },
    ]
  }
};

export default nextConfig;
