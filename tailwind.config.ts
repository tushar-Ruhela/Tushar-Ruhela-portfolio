import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Playfair Display'", "Georgia", "serif"],
        body:    ["'DM Sans'", "system-ui", "sans-serif"],
        sans:    ["'DM Sans'", "system-ui", "sans-serif"],
      },
      colors: {
        bg:             "var(--bg)",
        "bg-2":         "var(--bg-2)",
        "bg-3":         "var(--bg-3)",
        surface:        "var(--surface)",
        "surface-2":    "var(--surface-2)",
        border:         "var(--border)",
        "border-2":     "var(--border-2)",
        text:           "var(--text)",
        "text-2":       "var(--text-2)",
        "text-3":       "var(--text-3)",
        accent:         "var(--accent)",
        "accent-2":     "var(--accent-2)",
        "accent-light": "var(--accent-light)",
        "accent-glow":  "var(--accent-glow)",
        green:          "var(--green)",
      },
      keyframes: {
        fadeup: {
          from: { opacity: "0", transform: "translateY(32px)" },
          to:   { opacity: "1", transform: "translateY(0)" },
        },
        fadein: {
          from: { opacity: "0" },
          to:   { opacity: "1" },
        },
        "pulse-green": {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(74,222,128,0.4)" },
          "50%":       { boxShadow: "0 0 0 6px rgba(74,222,128,0)" },
        },
        "scroll-anim": {
          "0%, 100%": { opacity: "0", transform: "translateX(-50%) scaleY(0.3)", transformOrigin: "top" },
          "50%":       { opacity: "1", transform: "translateX(-50%) scaleY(1)",   transformOrigin: "top" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%":       { transform: "translateY(-10px)" },
        },
        shimmer: {
          "0%":   { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition:  "200% 0"  },
        },
        "orb-pulse": {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%":       { opacity: "0.7", transform: "scale(1.08)" },
        },
      },
      animation: {
        fadeup:          "fadeup 0.8s ease forwards",
        "fadeup-delay":  "fadeup 0.8s ease 0.2s forwards",
        "fadeup-delay2": "fadeup 0.8s ease 0.4s forwards",
        fadein:          "fadein 1s ease forwards",
        "pulse-green":   "pulse-green 2s infinite",
        "scroll-anim":   "scroll-anim 2s ease-in-out infinite",
        float:           "float 4s ease-in-out infinite",
        shimmer:         "shimmer 3s linear infinite",
        "orb-pulse":     "orb-pulse 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
