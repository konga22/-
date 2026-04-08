/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#844d74",
        "primary-light": "#f8eef9",
        "primary-dark": "#774167",
        "bubble-logo": "#b596f4",
        "bubble-pink": "#ffd8ef",
        "bubble-sky": "#cdefff",
        lavender: "#eef2ff",
        "lavender-dark": "#5f4b73",
        surface: "#ffffff",
        "surface-secondary": "#f7f9fc",
        muted: "#605e65",
        "muted-subtle": "#f1f3f5",
        heading: "#333238",
        urgent: "#a8364b",
      },
      fontFamily: {
        sans: ["Moneygraphy-Rounded"],
        brand: ["MoveSans-Bold"],
      },
    },
  },
  plugins: [],
};
