<script lang="ts">
	import HeroSection from "../sections/hero-section.svelte";
	import AcademyIntro from "../sections/academy-intro.svelte";
	import CoachesPreview from "../sections/coaches-preview.svelte";
	import TestimonialsSection from "../sections/testimonials-section.svelte";
	import ProgramsOverview from "../sections/programs-overview.svelte";
	import InstagramSection from "../sections/instagram-section.svelte";
	import FinalCTA from "../sections/final-cta.svelte";

	interface Props {
		navigateTo: (page: string) => void;
	}

	let { navigateTo }: Props = $props();
</script>

<div class="relative">
	<HeroSection {navigateTo} />
	<AcademyIntro />
	<CoachesPreview {navigateTo} />
	<TestimonialsSection />
	<ProgramsOverview {navigateTo} />
	<InstagramSection />
	<FinalCTA {navigateTo} />
</div>
