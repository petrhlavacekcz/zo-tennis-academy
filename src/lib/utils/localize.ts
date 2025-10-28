import { localizeHref as paraglideLocalizeHref } from "$lib/paraglide/runtime";

/**
 * Localizes an href with Paraglide locale prefix
 * @param href - The href to localize (e.g., "/contact", "/coaches")
 * @param options - Optional Paraglide options (e.g., { locale: "en" })
 * @returns The localized href (e.g., "/en/contact", "/de/coaches")
 */
export function localizeHref(href: string, options?: { locale?: string }): string {
	return paraglideLocalizeHref(href, options);
}

