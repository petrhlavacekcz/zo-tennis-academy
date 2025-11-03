<script lang="ts">
	import ProgramsPage from "$lib/components/zo-tennis-academy/components/pages/programs-page.svelte";
	import Seo from "$lib/components/zo-tennis-academy/components/seo/seo.svelte";
	import * as m from "$lib/paraglide/messages";
	import { getLocale } from "$lib/paraglide/runtime";

	const locale = getLocale();
	const baseUrl = 'https://www.zotennisacademy.cz';
	const localePrefix = locale === 'cs' ? '' : `/${locale}`;

	const breadcrumbs = [
		{ name: m["nav.home"](), url: `${baseUrl}${localePrefix}/` },
		{ name: m["nav.programs"](), url: `${baseUrl}${localePrefix}/programs` }
	];

	const programsSchema = {
		"@context": "https://schema.org",
		"@type": "ItemList",
		"itemListElement": [
			{
				"@type": "Service",
				"name": "Individual Lessons",
				"provider": {
					"@type": "SportsActivityLocation",
					"name": "ZO Tennis Academy"
				},
				"description": "Personalized one-on-one tennis coaching tailored to your skill level and goals."
			},
			{
				"@type": "Service",
				"name": "Group Training",
				"provider": {
					"@type": "SportsActivityLocation",
					"name": "ZO Tennis Academy"
				},
				"description": "Small group tennis training sessions for players of similar skill levels."
			},
			{
				"@type": "Service",
				"name": "Junior Programs",
				"provider": {
					"@type": "SportsActivityLocation",
					"name": "ZO Tennis Academy"
				},
				"description": "Comprehensive tennis programs designed specifically for young players."
			},
			{
				"@type": "Service",
				"name": "Professional Preparation",
				"provider": {
					"@type": "SportsActivityLocation",
					"name": "ZO Tennis Academy"
				},
				"description": "Advanced training for competitive players aiming for professional tennis."
			}
		]
	};
</script>

<Seo
	title={m["seo.programs.title"]()}
	description={m["seo.programs.description"]()}
	keywords={m["seo.programs.keywords"]()}
	structuredData={programsSchema}
	breadcrumbs={breadcrumbs}
/>

<ProgramsPage />

