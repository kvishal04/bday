import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        "gradient-glow": "glow 2s infinite alternate",
        "grow-shrink": "scale 2s infinite ease-in-out",
      },
      keyframes: {
        glow: {
          "0%": { boxShadow: "0 0 10px 2px #ffdd00" },
          "100%": { boxShadow: "0 0 20px 5px #ff8800" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
