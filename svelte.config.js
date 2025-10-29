import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter(),
		paths: {
			base: '',
			relative: false
		},
		prerender: {
			entries: [
				// Czech (base locale at root)
				'/',
				'/coaches',
				'/programs',
				'/contact',
				// English
				'/en',
				'/en/coaches',
				'/en/programs',
				'/en/contact',
				// German
				'/de',
				'/de/coaches',
				'/de/programs',
				'/de/contact',
				// Polish
				'/pl',
				'/pl/coaches',
				'/pl/programs',
				'/pl/contact',
				// Sitemap
				'/sitemap.xml'
			]
		}
	}
};

export default config;
