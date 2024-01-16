/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			boxShadow: {
				all: '0 0 10px 2px rgba(0,0,0,0.1)',
			},
			colors: {
				lightText: 'hsl(200, 15%, 8%)',
				lightBg: 'hsl(0, 0%, 98%)',
				darkElement: 'hsl(209, 23%, 22%)',
				darkBg: 'hsl(207, 26%, 17%)',
				darkText: 'hsl(0, 0%, 100%)',
			},
		},
	},
	plugins: [],
};

// - Dark Blue (Dark Mode Elements): hsl(209, 23%, 22%)
// - Very Dark Blue (Dark Mode Background): hsl(207, 26%, 17%)
// - Very Dark Blue (Light Mode Text): hsl(200, 15%, 8%)
// - Dark Gray (Light Mode Input): hsl(0, 0%, 52%)
// - Very Light Gray (Light Mode Background): hsl(0, 0%, 98%)
// - White (Dark Mode Text & Light Mode Elements): hsl(0, 0%, 100%)
