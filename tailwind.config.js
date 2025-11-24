/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Montserrat"', 'sans-serif'],
      },
      colors: {
        gucci: {
          bg: '#f6f5f1',
          text: '#1a1a1a',
          green: '#1a472a',
          red: '#c41e3a'
        }
      }
    },
  },
  plugins: [],
}