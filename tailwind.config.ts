import type { Config } from "tailwindcss";
const twColors = require("tailwindcss/colors");

const colors = {
  transparent: twColors.transparent,
  black: "#000",
  "black-secondary": "#090909",
  gray: "#AFAFAF",
  "gray-secondary": "#444",
  "light-gray": "#6C6C6C",
  white: "#FFF",
};

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors,
  },
  plugins: [],
};
export default config;
