const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
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
    plugins: [
        require("@tailwindcss/forms"),
    ],
}