<script lang="ts">
	import CoachesPage from "$lib/components/zo-tennis-academy/components/pages/coaches-page.svelte";
	import Seo from "$lib/components/zo-tennis-academy/components/seo/seo.svelte";
	import * as m from "$lib/paraglide/messages";

	const coachesSchema = {
		"@context": "https://schema.org",
		"@type": "ItemList",
		"itemListElement": [
			{
				"@type": "Person",
				"name": "Zuzana Ondrášková",
				"jobTitle": "Head Coach & Founder",
				"description": "Former WTA player, career-high ranking 74 (2004, 2010). Victories over TOP 10 players. Grand Slam participant.",
				"image": "https://petrhlavacekcz.github.io/zo-tennis-academy/zuzana-ondraskova.jpg",
				"worksFor": {
					"@type": "SportsActivityLocation",
					"name": "ZO Tennis Academy"
				}
			},
			{
				"@type": "Person",
				"name": "Michal Ondrášek",
				"jobTitle": "ITF Coach",
				"description": "ITF certified coach with extensive experience in player development.",
				"image": "https://petrhlavacekcz.github.io/zo-tennis-academy/michal-ondrasek.jpg",
				"worksFor": {
					"@type": "SportsActivityLocation",
					"name": "ZO Tennis Academy"
				}
			}
		]
	};
</script>

<Seo
	title={m["seo.coaches.title"]()}
	description={m["seo.coaches.description"]()}
	keywords={m["seo.coaches.keywords"]()}
	structuredData={coachesSchema}
/>

<CoachesPage />

