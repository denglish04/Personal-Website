/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
	sm: '640px', //mobile
	md: '768px', //tablet
	lg: '1024', //laptop 
	xl: '1280', //desktop
    }
  },
  plugins: [],
}

