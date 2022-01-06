module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            transitionProperty: {
                "width": "width",
                "backdrop": "backdrop-filter"
            },
            fontFamily: {
                "title" : ["Amatic SC"]
            }
        },
    },
    plugins: [require("@tailwindcss/typography")],
};
