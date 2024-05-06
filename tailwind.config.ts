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
        "gray-500": "#1E1E1E",
        "primary": "#FF5757",
        "secondary": "#9747FF",
        "gray-700": "#020F08",
        "gray-900": "#010A05"
      },
      screens: {
        sx: "320px",
        sm: "481px",
        md: "768px",
        lg: "1280px",
      },
      variants: {
        filter: ['responsive', 'hover', 'focus'], // додайте 'filter' до варіантів
      },     
    },
  },
  plugins: [],
};
export default config;
