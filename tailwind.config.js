module.exports = {
  content: ["./pages/**/*.{html,js}", "./components/**/*.{html,js}"],
  theme: {
    fontFamily: {
      HKGrotesk: ["HKGrotesk"],
      Wagon: ["Wagon"],
    },
    extend: {
      gridTemplateColumns: {
        "50/50": "50% 50%",
      },
      gridTemplateRows: {
        "50/50": "50% 50%",
      },
      screens: {
        "intro-br": { max: "1140px", min: "951px" },
        "intro-tablet": { max: "950px" },
        md: { max: "1024px" },
        "collection-text": { max: "1141px" },
        "hand-order": { max: "1300px" },
        "end-break": { max: "1050px" },
        "footer-break": { max: "1140px" },
        "header-break": { max: "1010px" },
        "graphics-height": { raw: "(max-height: 900px)" },
        "intro-text": { max: "710px" },
        "footer-width": { max: "740px" },
        "footer-smaller-text": { max: "590px" },
        "collection-one-col": { max: "900px" },
        "header-smallest-text": { max: "700px" },
        "ourlabs-smaller": { max: "530px" },
      },
      colors: {
        "main-red": "#EE555E",
        green: "#345353",
        "blue-green": "#1DB7B7",
        grey: "#262626",
        "light-blue": "#40DADA",
      },
    },
  },
  plugins: [],
};
