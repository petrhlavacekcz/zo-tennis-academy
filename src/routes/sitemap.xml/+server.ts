import type { RequestHandler } from './$types';

const baseUrl = 'https://www.zotennisacademy.cz';
const locales = ['cs', 'en', 'de', 'pl'];
const pages = ['', 'coaches', 'programs', 'contact'];

export const GET: RequestHandler = () => {
	const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${locales
	.flatMap((locale) =>
		pages.map((page) => {
			// Czech is at root, others have language prefix
			const path = locale === 'cs' ? `/${page}` : `/${locale}/${page}`;
			const url = `${baseUrl}${path}`.replace(/\/$/, ''); // Remove trailing slash

			// Generate alternate links for all languages
			const alternates = locales
				.map((altLocale) => {
					const altPath = altLocale === 'cs' ? `/${page}` : `/${altLocale}/${page}`;
					const altUrl = `${baseUrl}${altPath}`.replace(/\/$/, '');
					return `    <xhtml:link rel="alternate" hreflang="${altLocale}" href="${altUrl}"/>`;
				})
				.join('\n');

			return `  <url>
    <loc>${url}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${page === '' ? '1.0' : '0.8'}</priority>
${alternates}
  </url>`;
		})
	)
	.join('\n')}
</urlset>`;

	return new Response(sitemap, {
		headers: {
			'Content-Type': 'application/xml',
			'Cache-Control': 'max-age=0, s-maxage=3600'
		}
	});
};

export const prerender = true;

