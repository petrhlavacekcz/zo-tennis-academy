import { localizeHref as paraglideLocalizeHref } from "$lib/paraglide/runtime";
import { base } from "$app/paths";

/**
 * Localizes an href with Paraglide locale prefix and SvelteKit base path.
 *
 * This wrapper adds SvelteKit's base path to Paraglide's localized URLs.
 *
 * @param href - The href to localize (e.g., "/contact", "/coaches")
 * @param options - Optional Paraglide options (e.g., { locale: "en" })
 * @returns The localized href with base path (e.g., "/zo-tennis-academy/en/contact")
 *
 * @example
 * // Development (no base path)
 * localizeHref("/contact") // => "/contact" (cs) or "/en/contact" (en)
 *
 * @example
 * // Production (with base path)
 * localizeHref("/contact") // => "/zo-tennis-academy/contact" (cs) or "/zo-tennis-academy/en/contact" (en)
 */
export function localizeHref(href: string, options?: { locale?: string }): string {
	// Get the localized path from Paraglide
	const localizedPath = paraglideLocalizeHref(href, options);

	// If there's no base path, return as-is
	if (!base) {
		return localizedPath;
	}

	// If the path already starts with the base, return as-is
	if (localizedPath.startsWith(base + '/') || localizedPath === base) {
		return localizedPath;
	}

	// Prepend the base path
	return base + localizedPath;
}

