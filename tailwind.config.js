/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'clash-grotesk': ['var(--font-clash-grotesk)'],
      },
    },
  },
  plugins: [],
};
