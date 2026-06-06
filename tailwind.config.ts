import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./data/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#050505",
        panel: "#111113",
        line: "rgba(255,255,255,0.09)",
        muted: "#a1a1aa",
        dim: "#71717a",
        accent: "#22d3ee",
        blue: "#3b82f6"
      },
      boxShadow: {
        soft: "0 18px 60px rgba(0,0,0,0.32)"
      }
    }
  },
  plugins: []
};

export default config;
