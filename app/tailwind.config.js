const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: [...defaultTheme.fontFamily.sans],
        serif: [...defaultTheme.fontFamily.sans],
      },
      colors: {
      }
    },
  },
  plugins: [],
}