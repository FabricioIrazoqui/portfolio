import type { Config } from "tailwindcss";

const config: Config = {
  reactStrictMode: true,
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        jersey: ["Jersey 15", 'sans-serif'],
      },
      colors: {
        color1: '#000000',
        color2: '#1d2025',
        color3: '#494f58',
        color4: '#7b8493',
        color5: '#b1bfd3',
      },
      
    }
  },
  plugins: [],
};
export default config;
