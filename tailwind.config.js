/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                dark: "#171717",
                "dark-light": "#1E1E1E",
                accent: "#2B86FD",
            },
            boxShadow: {
                button: "0 0 16px 0 rgba(43, 134, 253, 0.2)",
            },
        },
    },
    plugins: [],
};
