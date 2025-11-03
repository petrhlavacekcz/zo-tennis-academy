<script lang="ts">
	import HomePage from "$lib/components/zo-tennis-academy/components/pages/home-page.svelte";
	import Seo from "$lib/components/zo-tennis-academy/components/seo/seo.svelte";
	import * as m from "$lib/paraglide/messages";

	const organizationSchema = {
		"@context": "https://schema.org",
		"@type": "SportsActivityLocation",
		"name": "ZO Tennis Academy",
		"description": m["footer.company_description"](),
		"url": "https://www.zotennisacademy.cz",
		"logo": "https://www.zotennisacademy.cz/zo-tennis-academy.jpg",
		"image": "https://www.zotennisacademy.cz/zo-tennis-academy.jpg",
		"address": {
			"@type": "PostalAddress",
			"streetAddress": "Ivana Kubince",
			"addressLocality": "Štítina",
			"postalCode": "747 91",
			"addressCountry": "CZ"
		},
		"telephone": "+420603441399",
		"email": "info@zotennisacademy.cz",
		"sport": "Tennis",
		"founder": {
			"@type": "Person",
			"name": "Zuzana Ondrášková",
			"jobTitle": "Head Coach & Founder",
			"description": "Former WTA player, career-high ranking 74"
		}
	};
</script>

<Seo
	title={m["seo.home.title"]()}
	description={m["seo.home.description"]()}
	keywords={m["seo.home.keywords"]()}
	structuredData={organizationSchema}
/>

<HomePage />

