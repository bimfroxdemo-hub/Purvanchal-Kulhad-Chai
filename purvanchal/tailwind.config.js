/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        maroon: '#4A0707',
        'coffee-dark': '#160D09',
        gold: '#D6A04B',
        cream: '#F7F0E5',
        'text-body': '#3C2A21',
        'text-muted': '#705B4A',
        navbar: '#120b08',
        // New colors for updated navbar
        'navbar-light': '#FAF8F5',
        'saffron': '#F7931E',
        'charcoal': '#222222',
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}