/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        default: "#fc3636",
        sideColor: "#F7F5E2",
        sideBtn: "#ECDE67",
      },
    },
  },
  plugins: [],
};
