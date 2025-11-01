import { sequence } from '@sveltejs/kit/hooks';
import type { Handle } from '@sveltejs/kit';
import { paraglideMiddleware } from '$lib/paraglide/server';

// Security headers handle - CSP for Instagram widget
const handleSecurityHeaders: Handle = async ({ event, resolve }) => {
	const response = await resolve(event);

	// Content Security Policy for Instagram widget (Fouita CDN) and Google Maps
	const cspDirectives = [
		"default-src 'self'",
		"script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cdn.fouita.com https://maps.googleapis.com https://maps.gstatic.com",
		"style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://maps.googleapis.com",
		"img-src 'self' data: https:",
		"media-src 'self' data: https://cdn.fouita.com https://*.fbcdn.net https://*.cdninstagram.com https://scontent.cdninstagram.com https://www.instagram.com",
		"font-src 'self' https://fonts.gstatic.com",
		"connect-src 'self' https://cdn.fouita.com https://api.fouita.com https://social-feed.fouita.com https://social-feed.fouita.net https://*.cdninstagram.com https://scontent.cdninstagram.com https://www.instagram.com https://maps.googleapis.com",
		"frame-src 'self' https://maps.google.com https://www.google.com",
		"object-src 'none'",
		"base-uri 'self'"
	].join('; ');

	response.headers.set('Content-Security-Policy', cspDirectives);

	// Additional security headers
	response.headers.set('X-Frame-Options', 'SAMEORIGIN');
	response.headers.set('X-Content-Type-Options', 'nosniff');
	response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');

	return response;
};

// Paraglide i18n handle
const handleParaglide: Handle = ({ event, resolve }) =>
	paraglideMiddleware(event.request, ({ request: localizedRequest, locale }) => {
		event.request = localizedRequest;

		return resolve(event, {
			transformPageChunk: ({ html }) => {
				return html.replace('%lang%', locale).replace('%dir%', 'ltr');
			}
		});
	});

// Chain handles: security headers first, then i18n
export const handle: Handle = sequence(handleSecurityHeaders, handleParaglide);
