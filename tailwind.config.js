/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./index.html",
  ],
  theme: {
    extend: {
      colors: {
        'primary-gold': '#FFD700',
        'secondary-gold': '#F4C430',
        'dark-blue': '#000000',
        'light-blue': '#121212',
        'hover-blue': '#1a1a1a',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
} 