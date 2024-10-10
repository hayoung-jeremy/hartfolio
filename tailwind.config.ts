import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      "Pretendard-Thin": ["Pretendard-Thin", "sans-serif"],
      "Pretendard-ExtraLight": ["Pretendard-ExtraLight", "sans-serif"],
      "Pretendard-Light": ["Pretendard-Light", "sans-serif"],
      "Pretendard-Regular": ["Pretendard-Regular", "sans-serif"],
      "Pretendard-Medium": ["Pretendard-Medium", "sans-serif"],
      "Pretendard-SemiBold": ["Pretendard-SemiBold", "sans-serif"],
      "Pretendard-Bold": ["Pretendard-Bold", "sans-serif"],
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;
