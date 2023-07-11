/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      signupTable: { max: "550px" },
    },
    extend: {},
  },
  plugins: [],
};
