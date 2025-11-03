<script lang="ts">
	import ContactPage from "$lib/components/zo-tennis-academy/components/pages/contact-page.svelte";
	import Seo from "$lib/components/zo-tennis-academy/components/seo/seo.svelte";
	import * as m from "$lib/paraglide/messages";
	import { getLocale } from "$lib/paraglide/runtime";

	const locale = getLocale();
	const baseUrl = 'https://www.zotennisacademy.cz';
	const localePrefix = locale === 'cs' ? '' : `/${locale}`;

	const breadcrumbs = [
		{ name: m["nav.home"](), url: `${baseUrl}${localePrefix}/` },
		{ name: m["nav.contact"](), url: `${baseUrl}${localePrefix}/contact` }
	];

	const contactSchema = {
		"@context": "https://schema.org",
		"@type": "ContactPage",
		"mainEntity": {
			"@type": "SportsActivityLocation",
			"name": "ZO Tennis Academy",
			"address": {
				"@type": "PostalAddress",
				"streetAddress": "Ivana Kubince",
				"addressLocality": "Štítina",
				"postalCode": "747 91",
				"addressCountry": "CZ"
			},
			"telephone": "+420603441399",
			"email": "info@zotennisacademy.cz",
			"url": "https://www.zotennisacademy.cz"
		}
	};
</script>

<Seo
	title={m["seo.contact.title"]()}
	description={m["seo.contact.description"]()}
	keywords={m["seo.contact.keywords"]()}
	structuredData={contactSchema}
	breadcrumbs={breadcrumbs}
/>

<ContactPage />

