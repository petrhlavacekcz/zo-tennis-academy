import { localizeHref as paraglideLocalizeHref } from "$lib/paraglide/runtime";
import { base } from "$app/paths";

/**
 * Localizes an href with Paraglide locale prefix and base path
 * @param href - The href to localize (e.g., "/contact", "/coaches")
 * @param options - Optional Paraglide options (e.g., { locale: "en" })
 * @returns The localized href with base path (e.g., "/zo-tennis-academy/en/contact")
 */
export function localizeHref(href: string, options?: { locale?: string }): string {
	const localizedPath = paraglideLocalizeHref(href, options);
	// If base is set and the path doesn't already include it, prepend it
	if (base && !localizedPath.startsWith(base)) {
		return `${base}${localizedPath}`;
	}
	return localizedPath;
}

