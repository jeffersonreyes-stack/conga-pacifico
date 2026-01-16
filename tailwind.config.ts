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
        primary: "#1B4D3E", // Forest Green (Institucional)
        accent: "#FF6B00",  // Safety Orange (Seguridad/CTA)
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        heading: ["var(--font-montserrat)", "sans-serif"],
        body: ["var(--font-open-sans)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
