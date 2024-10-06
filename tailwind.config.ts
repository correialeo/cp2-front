import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      Gruppo: ['"Gruppo"', "sans-serif"],
      Orbitron: ['"Orbitron"', "sans-serif"],
      Poppins: ['"Poppins"', "sans-serif"],
    },
    extend: {
      backgroundImage: {
        homeBackground: "url('/img/home-background.jpg')",
        errorBackground: "url('/img/error404.jpg')",
      },
    },
  },
  plugins: [],
};
export default config;
