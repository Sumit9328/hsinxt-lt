import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com", // ✅ Allow Cloudinary images
      },
      {
        protocol: "https",
        hostname: "example.com", // ⚠️ For testing only — remove later if not needed
      },
    ],
  },
};

export default nextConfig;
