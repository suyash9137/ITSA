import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0F1216",
        panel: "#171B22",
        panel2: "#1E232C",
        line: "#2B3140",
        paper: "#F4F2EA",
        copper: "#E3A857",
        copperDim: "#8C6B39",
        signal: "#7C93FF",
        mist: "#9AA3B2",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      maxWidth: {
        content: "1400px",
      },
    },
  },
  plugins: [],
};

export default config;
