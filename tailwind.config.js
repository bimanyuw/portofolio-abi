/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lime: { 300: "#d8ff1f", 400: "#c8ef0f" },
      },
      fontFamily: {
        display: ["'Bebas Neue'", "cursive"],
        sans: ["'DM Sans'", "sans-serif"],
      },
    },
  },
  plugins: [],
};
