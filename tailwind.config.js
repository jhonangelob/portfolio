/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    colors: {
      black: "#000000",
      black2: "#303030",
      black3: "#696969",
      white: "#ffffff",
      gray: "#c4c4c4",
      accent: "#ff0049",
      background: "#1A1A1A",
    },
  },
  plugins: [],
};
