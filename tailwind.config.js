/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            keyframes: {
                "bg-position": {
                    "0%": { backgroundPosition: "0% 50%" },
                    "100%": { backgroundPosition: "100% 50%" },
                },
            },
            animation: {
                "bg-position": "bg-position 3s infinite alternate",
            },
        },
    },
    // eslint-disable-next-line no-undef
    plugins: [require("tailwindcss-animate")],
};
