import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: [vitePreprocess(), mdsvex()],
	kit: {
		// https://svelte.dev/docs/kit/adapter-static
		// Using adapter-static (SSG) to deploy to GitHub Pages
		adapter: adapter(),
		pages: 'build',
		assets: 'build',
		fallback: '404.html',
		precompress: 'false',
		strict: 'true',
		trailingSlash: 'always' //Github Pages compatible
	},
	paths: {
		base: process.argv.includes('dev') ? '' : process.env.BASE_PATH
	},
	extensions: ['.svelte', '.svx']
};

export default config;
