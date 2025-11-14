import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

/** @type {import('@sveltejs/kit').Config} */

const __dirname = dirname(fileURLToPath(import.meta.url));
const path_to_layout = join(__dirname, "src/lib/layouts/MDLayout.svelte");

const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: [vitePreprocess(), mdsvex({
		highlight: {
			theme: 'github-dark'
		},
		layout: {
			// Default layout for all markdown files
			//https://mdsvex.pngwn.io/docs#layout
			_: path_to_layout
		}
	})],
	kit: {
		// https://svelte.dev/docs/kit/adapter-static
		// Using adapter-static (SSG) to deploy to GitHub Pages
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: '404.html',
			precompress: false,
			strict: true,
		}),
		paths: {
			base: process.env.NODE_ENV === 'production' ? process.env.BASE_PATH : ''		}
		},
	extensions: ['.svelte', '.svx', '.md']
};

export default config;
