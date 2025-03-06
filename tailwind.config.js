/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-pastel-green': '#4CAF50',
      },
      fontFamily: {
        sans: ['Urbanist', 'sans-serif'],
      },
      boxShadow: {
        'custom': '0 10px 25px -5px rgba(76, 175, 80, 0.1), 0 8px 10px -6px rgba(76, 175, 80, 0.1)',
      },
    },
  },
  plugins: [],
}