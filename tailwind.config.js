/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#844d74",
        "primary-light": "#fadaec",
        "primary-dark": "#774167",
        lavender: "#e1c8f8",
        "lavender-dark": "#5f4b73",
        surface: "#fcf8fc",
        "surface-secondary": "#f6f2f8",
        muted: "#605e65",
        "muted-subtle": "#eae7ed",
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
