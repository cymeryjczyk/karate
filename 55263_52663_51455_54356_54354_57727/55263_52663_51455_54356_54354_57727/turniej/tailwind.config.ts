import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const config = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",

	extend: {
		colors: {
      mainPrimary: "#C0C0C0",
      mainSecondary: "#909090",
    },
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
