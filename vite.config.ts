import tailwindcss from '@tailwindcss/vite';
import { paraglideVitePlugin } from '@inlang/paraglide-js';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		tailwindcss(),
		sveltekit(),
		paraglideVitePlugin({
			project: './project.inlang',
			outdir: './src/lib/paraglide',
			strategy: ['url', 'cookie', 'baseLocale']
		})
	],
	preview: {
		host: '0.0.0.0',
		allowedHosts: [
			'acko4g0080sc8skg84ck40gw.116.202.98.243.sslip.io',
			'www.zotennisacademy.cz',
			'zotennisacademy.cz'
		]
	}
});
