import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        resilio: {
          // 1. Fondasi Hitam / Dark Mode (Obsidian Dark)
          black: {
            DEFAULT: "#050807",
            950: "#020403",
            900: "#050807",
            800: "#0A100D",
            700: "#0F1814",
            surface: "#0B130F",
            card: "#0E1A14",
            elevated: "#14241D",
            border: "#1C2E25",
          },
          // 2. Kombinasi 1: Hijau Hutan Gelap (Dark Forest Green)
          forest: {
            DEFAULT: "#0E2F22",
            950: "#03120B",
            900: "#072015",
            800: "#0C2E1F",
            700: "#12422D",
            600: "#1A5A3E",
            500: "#227551",
            400: "#2D9668",
            300: "#45BA86",
            200: "#7ED4AF",
            100: "#BEECD7",
            50: "#E6FAF2",
          },
          // 3. Kombinasi 2: Merah Darah Gelap (Dark Blood Red / Crimson)
          blood: {
            DEFAULT: "#540C0C",
            950: "#1A0303",
            900: "#2B0606",
            800: "#3F0909",
            700: "#570E0E",
            600: "#751414",
            500: "#9C1D1D",
            400: "#C42B2B",
            300: "#E35656",
            200: "#F08D8D",
            100: "#FACACA",
            50: "#FDF0F0",
          },
          // 4. Netral Teks Dark Mode (High Contrast & Low Eye-strain)
          charcoal: {
            950: "#080C0A",
            900: "#101614",
            800: "#18221E",
            700: "#24322C",
            600: "#374941",
            500: "#556C62",
            400: "#7E968B",
            300: "#A8BCB3",
            200: "#D0DDD7",
            100: "#E9F0EC",
            50: "#F5F8F6",
          },
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        subtle: "0 1px 3px 0 rgba(0, 0, 0, 0.4), 0 1px 2px -1px rgba(0, 0, 0, 0.4)",
        card: "0 4px 6px -1px rgba(0, 0, 0, 0.5), 0 2px 4px -2px rgba(0, 0, 0, 0.5)",
        elevated: "0 20px 25px -5px rgba(0, 0, 0, 0.7), 0 8px 10px -6px rgba(0, 0, 0, 0.7)",
        glowForest: "0 0 25px rgba(45, 150, 104, 0.25)",
        glowBlood: "0 0 25px rgba(196, 43, 43, 0.3)",
      },
    },
  },
  plugins: [],
};

export default config;
