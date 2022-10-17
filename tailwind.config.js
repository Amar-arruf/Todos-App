/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      mobile: "375px",
      laptop: "1024px",
    },
    extend: {
      colors: {
        mainBackground: "hsl(235, 21%, 11%)",
        secondBackground: "hsl(0, 0%, 98%)",
      },
      backgroundImage: {
        "hero-dark": "url('../public/bg-desktop-dark.jpg')",
        "hero-mobile-dark": "url('../public/bg-mobile-dark.jpg')",
        "hero-light": "url('../public/bg-desktop-light.jpg')",
        "hero-mobile-light": "url('../public/bg-mobile-light.jpg',)",
      },
      fontSize: {
        regular: [
          "18px",
          {
            fontWeight: "400",
          },
        ],
        bold: [
          "18px",
          {
            fontWeight: "700",
          },
        ],
      },
      fontFamily: {
        josefin: ['"Josefin Sans"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
