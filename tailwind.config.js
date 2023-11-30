/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./src/**/*.{js,ts,jsx,tsx,mdx}",
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				"background-dark": "#111928",
				"text-dark": "#f5f5f5",
				"background-light": "#f5f5f5",
				"text-light": "#111928",
				"faq-background-dark": "#111827",
				"icon-fill-dark": "#93c5fd",
				"testimonial-citation": "#9ca3af",
				"testimonial-bg-dark": "#1F2937",
			},
		},
	},
	plugins: [],
};
