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
            },
            {
                protocol: "https",
                hostname: "www.newcityparadise.com",
                pathname: "/wp-content/uploads/**",
            },
            {
                protocol: "https",
                hostname: "newcityparadise.com",
                pathname: "/wp-content/uploads/**",
            },
            {
                protocol: "https",
                hostname: "images.unsplash.com",
                pathname: "/**",
            },
        ],
    },
};

export default nextConfig;
