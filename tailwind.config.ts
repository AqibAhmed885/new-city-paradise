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
        serif: ["'Playfair Display'", "serif"],
        sans: ["Poppins", "sans-serif"],
      },
      boxShadow: {
        luxe: "0 30px 80px rgba(17, 15, 12, 0.13)",
      },
    },
  },
  plugins: [],
};

export default config;
