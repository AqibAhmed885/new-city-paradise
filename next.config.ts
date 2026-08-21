import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "encrypted-tbn0.gstatic.com",
                pathname: "/**",
            },
            {

                protocol: "https",
                hostname: "dastak.com.pk",
                pathname: "/**",
            }
        ],
    },
};

export default nextConfig;
