/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        braah: ["Braah One", "sans-serif"],
        BioRhyme: ["BioRhyme", "sans-serif"],
      },
      screens: {
        vsm: "400px",
        xmd: "900px",
      },
    },
  },
  plugins: [],
};
