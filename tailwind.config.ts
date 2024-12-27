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
        "heartbeat": 'heartbeat 1.5s ease-in-out infinite',
        'fade-in': 'fadeIn 1.5s ease-in',
        'falling-hearts': 'fallingHearts 5s linear infinite',
        "shimmer": 'shimmer 2s infinite',
        "wordFade": "wordFade 1s ease forwards",
      },
      keyframes: {
        glow: {
          "0%": { boxShadow: "0 0 10px 2px #ffdd00" },
          "100%": { boxShadow: "0 0 20px 5px #ff8800" },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },

        heartbeat: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.2)' },
        },
        fadeIn: {
          '0%': { opacity: "0" },
          '100%': { opacity: "1" },
        },
        fallingHearts: {
          '0%': { transform: 'translateY(-100vh) rotate(0deg)', opacity: "1"},
          '100%': { transform: 'translateY(100vh) rotate(360deg)', opacity: "0"},
        },
        wordFade: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
