import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        resilio: {
          // 1. Warna Utama (Primary): Emerald Green (#0F5132 / #0D6E6E)
          emerald: {
            DEFAULT: "#0F5132",
            50: "#E8F5E9",  // Mint / Soft Emerald Light
            100: "#D1E7DD", // Mint / Soft Emerald
            200: "#A3D4C0",
            300: "#70BFA0",
            400: "#3CA87E",
            500: "#1E875C",
            600: "#166C49",
            700: "#0D6E6E", // Deep Pine Emerald (#0D6E6E)
            800: "#0F5132", // Primary Emerald Green (#0F5132)
            900: "#0A3923",
            950: "#062416",
          },
          // 2. Warna Sekunder: Teal / Cyan Soft (#20B2AA)
          cyanSoft: {
            DEFAULT: "#20B2AA",
            50: "#E6F8F7",
            100: "#CEF1EF",
            200: "#9DE4E0",
            300: "#6CD6D1",
            400: "#3CC8C1",
            500: "#20B2AA", // Primary Cyan Soft Accent
            600: "#1A908A",
            700: "#146F6A",
            800: "#0E4D4A",
            900: "#082C2A",
          },
          // 3. Mint / Soft Emerald (#D1E7DD / #E8F5E9)
          mint: {
            DEFAULT: "#D1E7DD",
            50: "#F2F9F5",
            100: "#E8F5E9",
            200: "#D1E7DD",
            300: "#B6DCCB",
            400: "#98CFB7",
            500: "#76C0A0",
            600: "#54A883",
            700: "#3C8263",
            800: "#275C44",
            900: "#163A2A",
          },
          // Neutral soft backgrounds & borders
          slate: {
            50: "#F8FAFC",
            100: "#F1F5F9",
            200: "#E2E8F0",
            300: "#CBD5E1",
            400: "#94A3B8",
            500: "#64748B",
            600: "#475569",
            700: "#334155",
            800: "#1E293B",
            900: "#0F172A",
          },
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        subtle: "0 1px 3px 0 rgba(15, 81, 50, 0.06), 0 1px 2px -1px rgba(15, 81, 50, 0.06)",
        card: "0 4px 6px -1px rgba(15, 81, 50, 0.08), 0 2px 4px -2px rgba(15, 81, 50, 0.08)",
        elevated: "0 20px 25px -5px rgba(15, 81, 50, 0.12), 0 8px 10px -6px rgba(15, 81, 50, 0.08)",
        glow: "0 0 25px rgba(32, 178, 170, 0.3)",
      },
    },
  },
  plugins: [],
};

export default config;
