/** @type {import('tailwindcss').Config} */
const config = {
	content: ["./app/**/*.{ts,tsx,jsx,js}"],
	theme: {
		fontFamily: {
			sans: ["Nunito Sans", "Roboto", "Arial", "sans-serif"],
		},
		extend: {},
	},
	plugins: [],
};

module.exports = config;
