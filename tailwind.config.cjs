/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				darkGreen: '#84a59d',
				lightGreen: '#f7ede2'
			}
		}
	},
	plugins: [require('tailwind-scrollbar')]
};
