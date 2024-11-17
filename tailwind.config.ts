import type { Config } from "tailwindcss";

export default {
  darkMode: ["selector"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        dark_mode_white: "hsl(0, 0%, 100%)",
        light_mode_bg: "hsl(0, 0%, 98%)",
        light_mode_input: "hsl(0, 0%, 52%)",
        light_mode_text: "hsl(200, 15%, 8%)",
        dark_mode_bg: "hsl(207, 26%, 17%)",
        dark_mode_elements: "hsl(209, 23%, 22%)",
      },
      fontFamily: {
        nunito: ["Nunito Sans", "san-serrif"],
      },
      boxShadow: {
        country: "0px 0px 5px 0px lightgray"
      },
      gridTemplateColumns:{
        details: "1.5fr 2fr"
      }
    },
  },
  plugins: [],
} satisfies Config;
