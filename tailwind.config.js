/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        wiggle: "wiggle 1s ease-in-out 1",
      },
      keyframes: {
        left: {
          "0%": { transform: "translatex(50px)" },
         
        },
      },
    },
  },
  plugins: [],
};
