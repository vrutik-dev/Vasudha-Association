/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./public/index.html"],
  theme: {
    extend: {
      animation: {
        pulseRing: "pulseRing 2s infinite",
      },
      keyframes: {
        pulseRing: {
          "0%": {
            boxShadow: "0 0 0 0 rgba(249,115,22, 0.7)",
          },
          "70%": {
            boxShadow: "0 0 0 15px rgba(249,115,22, 0)",
          },
          "100%": {
            boxShadow: "0 0 0 0 rgba(249,115,22, 0)",
          },
        },
      },
    },
  },
  plugins: [],
};
