/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Inter: ["Inter", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        Poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        primaryBlue: "#2776EA",
        recruitDetailsBg: "#F5F5F5",
      },
      backgroundImage: {
        customBg: "url('/src/assets/images/heroBg.png')",
      },
    },
  },
  plugins: [],
};
