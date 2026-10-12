import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#12110f",
        sand: "#e8e0d4",
        ivory: "#f5f1eb",
        champagne: "#b69b6c",
        smoke: "#d8d4ce",
      },
      fontFamily: {
        heading: ["var(--font-helvetica)", '"helvetica Fallback"', "Arial", "sans-serif"],
        sans: ["var(--font-helvetica)", '"helvetica Fallback"', "Arial", "sans-serif"],
        serif: ["Adobe Garamond Pro", "Georgia", "serif"],
        menu: ["var(--font-source-sans)", "Source Sans 3", "Segoe UI", "system-ui"],
      },
      boxShadow: {
        luxe: "0 30px 80px rgba(17, 15, 12, 0.13)",
      },
    },
  },
  plugins: [],
};

export default config;
