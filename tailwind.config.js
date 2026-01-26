/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        nameCycle: {
          "0%, 100%": { color: "#f97316" }, // orange
          "33%": { color: "#000000" },      // black
          "66%": { color: "#ef4444" },      // red
        },
      },
      animation: {
        nameCycle: "nameCycle 3s infinite linear",
      },
      screens: {
        sm: '640px', // mobile
        md: '768px', // tablet
        lg: '1024px', // laptop
        xl: '1280px', // desktop
      },
    },
  },
  plugins: [],
};

