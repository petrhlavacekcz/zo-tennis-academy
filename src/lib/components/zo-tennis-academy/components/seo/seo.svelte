<script lang="ts">
	import { page } from "$app/state";
	import { getLocale } from "$lib/paraglide/runtime";

	interface Props {
		title: string;
		description: string;
		keywords?: string;
		image?: string;
		type?: 'website' | 'article';
		structuredData?: object;
		breadcrumbs?: Array<{ name: string; url: string }>;
	}

	let {
		title,
		description,
		keywords = '',
		image = '/zo-tennis-academy.webp',
		type = 'website',
		structuredData,
		breadcrumbs
	}: Props = $props();

	const locale = $derived(getLocale());
	const baseUrl = 'https://www.zotennisacademy.cz';
	
	// Get current URL with base path
	const currentUrl = $derived(() => {
		const pathname = page.url.pathname;
		return `${baseUrl}${pathname}`;
	});

	// Get full image URL
	const imageUrl = $derived(() => {
		if (image.startsWith('http')) return image;
		return `${baseUrl}${image}`;
	});

	// Language mapping for og:locale
	const localeMap: Record<string, string> = {
		'cs': 'cs_CZ',
		'en': 'en_US',
		'de': 'de_DE',
		'pl': 'pl_PL'
	};

	const ogLocale = $derived(localeMap[locale] || 'cs_CZ');

	// All supported locales for alternates
	const allLocales = ['cs', 'en', 'de', 'pl'];
	const alternateLocales = $derived(allLocales.filter(l => l !== locale));

	// Generate hreflang URLs
	const getHreflangUrl = (lang: string) => {
		const pathname = page.url.pathname;
		// Remove current language prefix if exists
		const cleanPath = pathname.replace(/^\/(cs|en|de|pl)/, '');
		// Add new language prefix (except for Czech which is at root)
		const newPath = lang === 'cs' ? cleanPath : `/${lang}${cleanPath}`;
		return `${baseUrl}${newPath}`;
	};

	// Canonical URL (always point to the current language version)
	const canonicalUrl = $derived(currentUrl());
</script>

<svelte:head>
	<!-- Primary Meta Tags -->
	<title>{title}</title>
	<meta name="title" content={title} />
	<meta name="description" content={description} />
	{#if keywords}
		<meta name="keywords" content={keywords} />
	{/if}
	<meta name="author" content="ZO Tennis Academy" />
	<meta name="robots" content="index, follow" />
	<link rel="canonical" href={canonicalUrl} />

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content={type} />
	<meta property="og:url" content={currentUrl()} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={imageUrl()} />
	<meta property="og:locale" content={ogLocale} />
	{#each alternateLocales as altLocale}
		<meta property="og:locale:alternate" content={localeMap[altLocale]} />
	{/each}

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content={currentUrl()} />
	<meta property="twitter:title" content={title} />
	<meta property="twitter:description" content={description} />
	<meta property="twitter:image" content={imageUrl()} />

	<!-- Language Alternates (hreflang) -->
	{#each allLocales as lang}
		<link rel="alternate" hreflang={lang} href={getHreflangUrl(lang)} />
	{/each}
	<link rel="alternate" hreflang="x-default" href={getHreflangUrl('cs')} />

	<!-- Structured Data (JSON-LD) -->
	{#if structuredData}
		{@html `<script type="application/ld+json">${JSON.stringify(structuredData)}</script>`}
	{/if}

	<!-- BreadcrumbList Schema -->
	{#if breadcrumbs && breadcrumbs.length > 0}
		{@html `<script type="application/ld+json">${JSON.stringify({
			"@context": "https://schema.org",
			"@type": "BreadcrumbList",
			"itemListElement": breadcrumbs.map((crumb, index) => ({
				"@type": "ListItem",
				"position": index + 1,
				"name": crumb.name,
				"item": crumb.url
			}))
		})}</script>`}
	{/if}
</svelte:head>

