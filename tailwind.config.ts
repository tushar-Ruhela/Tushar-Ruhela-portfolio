import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        "bg-2": "var(--bg-2)",
        "bg-3": "var(--bg-3)",
        surface: "var(--surface)",
        "surface-2": "var(--surface-2)",
        border: "var(--border)",
        text: "var(--text)",
        "text-2": "var(--text-2)",
        "text-3": "var(--text-3)",
        accent: "var(--accent)",
        "accent-2": "var(--accent-2)",
        "accent-glow": "var(--accent-glow)",
        green: "var(--green)",
      },
      keyframes: {
        fadeup: {
          from: { opacity: "0", transform: "translateY(28px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "pulse-green": {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(34,197,94,0.4)" },
          "50%": { boxShadow: "0 0 0 6px rgba(34,197,94,0)" },
        },
        "scroll-anim": {
          "0%, 100%": { opacity: "0", transform: "translateX(-50%) scaleY(0.3)", transformOrigin: "top" },
          "50%": { opacity: "1", transform: "translateX(-50%) scaleY(1)", transformOrigin: "top" },
        },
      },
      animation: {
        fadeup: "fadeup 0.7s ease forwards",
        "fadeup-delay": "fadeup 0.7s ease 0.2s forwards",
        "pulse-green": "pulse-green 2s infinite",
        "scroll-anim": "scroll-anim 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
