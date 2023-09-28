/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primaryBlue: '#2776EA',
      },
      backgroundImage: {
        shortHero: "url('./src/assets/images/shortHero.png')"
      },
      aspectRatio: {
        vision: 1,
      }
    },
  },
  plugins: [],
};
