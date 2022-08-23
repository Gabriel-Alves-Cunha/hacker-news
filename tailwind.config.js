/** @type {import('tailwindcss').Config} */
const config = {
	content: ["./app/**/*.{ts,tsx,jsx,js}"],
	theme: {
		fontFamily: {
			sans: ["Nunito Sans", "Roboto", "Arial", "sans-serif"],
		},
		extend: {
			height: {
				header: "var(--header-height)",
				footer: "var(--footer-height)",
			},
			margin: {
				header: "var(--header-height)",
				footer: "var(--footer-height)",
			},
			padding: {
				header: "var(--header-height)",
				footer: "var(--footer-height)",
			},
		},
	},
	plugins: [],
};

module.exports = config;
