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
        'dark-blue': '#1a1f2c',
        'light-blue': '#242937',
        'hover-blue': '#2a2f3c',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
} 