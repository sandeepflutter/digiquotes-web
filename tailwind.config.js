/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        hahmlet:["Hahmlet", "serif"],
        titillium: ["Titillium Web", "sans-serif"],
        lora: ["Lora", "serif"],
        crimson: ["Crimson Text", "serif"],
        alegreya: ["Alegreya", "serif"],
        amaranth: ["Amaranth", "sans-serif"],
        fredericka: ["Fredericka the Great", "cursive"],
        gentium: ["Gentium Book Basic", "serif"],
        oleo: ["Oleo Script", "cursive"],
        rancho: ["Rancho", "cursive"],
        rye: ["Rye", "cursive"],
        work: ["Work Sans", "sans-serif"],
      }
    },
  },
  plugins: [],
}
