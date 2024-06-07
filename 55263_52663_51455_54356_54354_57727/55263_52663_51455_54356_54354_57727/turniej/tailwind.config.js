/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {colors: {
      mainPrimary: "#C0C0C0",
      mainSecondary: "#909090",
    }},
  },
  plugins: [require("tailwindcss-animate")],
}

