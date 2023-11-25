import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./stories/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: { max: "420px" },
      sm: "421px",
      md: "768px",
      lg: "992px",
      xl: "1025px",
      "2xl": "1280px",
      "3xl": "1367px",
      "4xl": "1600px",
      "5xl": "1900px",
    },
    extend: {
      colors: {
        blue: {
          DEFAULT: "#5981A0",
          100: "#C3D2DD",
          600: "#032138",
          700: "#01101c",
          // 800: "#0d141d",
        },
      },
      fontFamily: {
        avenir: "'Avenir Next LT Pro'",
        sig: "'Signifier'",
      },
    },
  },
  plugins: [],
};
export default config;
