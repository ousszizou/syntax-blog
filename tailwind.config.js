module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.vue", "./src/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        helveticaRoman: ["HelveticaNeueLTRoman"],
        sans: [
          "HelveticaNeueLTRoman",
          "Roboto",
          "Arial",
          "sans-serif",
        ],
      },
    },
  },
  variants: {},
  plugins: [],
};
