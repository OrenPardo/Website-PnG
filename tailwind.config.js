/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./public/index.html"],
    safelist: [
        // Added dynamically by JS (not present in initial HTML)
        "translate-y-0",
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                primary: "#5A6337",
                secondary: "#D4AF37",
                "brand-bg": "#EFE6DE",
                "background-light": "#FFFFFF",
                "background-dark": "#0A1128",
                "text-light": "#333333",
                "text-dark": "#F3F4F6",
                "accent-gray": "#F5F5F5",
            },
            fontFamily: {
                serif: ["'Playfair Display'", "serif"],
                sans: ["'Heebo'", "sans-serif"],
                script: ["'Great Vibes'", "cursive"],
            },
            borderRadius: {
                DEFAULT: "0.25rem",
            },
        },
    },
    plugins: [],
};
