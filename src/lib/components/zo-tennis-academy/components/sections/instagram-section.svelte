<script lang="ts">
	import { Instagram } from "@lucide/svelte";
	import * as m from "$lib/paraglide/messages";
	import { onMount } from "svelte";

	let widgetContainer: HTMLElement;
	let widgetLoaded = $state(false);

	onMount(() => {
		// Lazy load Fouita widget using Intersection Observer
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting && !widgetLoaded) {
						widgetLoaded = true;
						loadFouitaWidget();
						observer.disconnect();
					}
				});
			},
			{
				rootMargin: "200px", // Load 200px before section is visible
			}
		);

		if (widgetContainer) {
			observer.observe(widgetContainer);
		}

		return () => {
			observer.disconnect();
		};
	});

	async function loadFouitaWidget() {
		// Dynamically load Fouita widget script
		// @ts-ignore - Dynamic import of external module
		const module = await import("https://cdn.fouita.com/public/instagram-feed.js?11");
		const App = module.default;
		new App({
			target: document.getElementById("ft-insta-app"),
			props: {
				settings: {
					layout: "masonry",
					source: "insta",
					selected: "uname",
					header: false,
					autoplay: true,
					zigzag: false,
					cols: 3,
					cardHeight: 300,
					gap: 1,
					direction: "down",
					height: 800,
					bgColor: "",
					txtColor: "",
					ukey: "93d287a6-4e72-4207-b9b2-ac4f5a8f7348",
				},
			},
		});
	}
</script>

<section class="py-24 bg-neutral-950 text-white">
	<div class="mx-auto max-w-[1320px] px-6 md:px-12">
		<!-- Section Header -->
		<div class="text-center mb-12">
			<div class="flex items-center justify-center gap-3 mb-3">
				<Instagram size={24} class="text-primary" />
				<h2 class="text-section-heading">{m["instagram.heading"]()} <span class="text-primary">{m["instagram.heading_highlight"]()}</span></h2>
			</div>
			<p class="text-white/70 max-w-2xl mx-auto">{m["instagram.description"]()}</p>
		</div>

		<!-- Instagram Feed Widget -->
		<div class="mb-8" bind:this={widgetContainer}>
			<div id="ft-insta-app">
				{#if !widgetLoaded}
					<!-- Loading placeholder -->
					<div class="flex items-center justify-center min-h-[400px]">
						<div class="text-white/50 text-center">
							<Instagram size={48} class="mx-auto mb-4 animate-pulse" />
							<p>Loading Instagram feed...</p>
						</div>
					</div>
				{/if}
			</div>
		</div>

		<!-- Fouita branding (hidden by CSS) -->
		<div id="ft-insta-brd" class="text-center text-xs text-white/40 mt-4">
			<a href="https://fouita.com/website-widgets/instagram-feed" target="_blank" rel="noopener noreferrer" class="hover:text-primary transition-colors">Embed Instagram Feed</a>
			<span class="mx-2">with</span>
			<a href="https://fouita.com" target="_blank" rel="noopener noreferrer" class="hover:text-primary transition-colors">Fouita</a>
		</div>

		<!-- Instagram Handle -->
		<div class="text-center mt-8">
			<a href="https://www.instagram.com/zo_tennis_academy/" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 text-primary font-medium hover:text-primary/80 transition-colors">
				<Instagram size={18} />
				{m["instagram.handle"]()}
			</a>
		</div>
	</div>
</section>

<style>
	/* Minimal styling - let Fouita handle most of it */
	:global(#ft-insta-app) {
		min-height: 400px;
	}

	/* Hide Fouita branding */
	:global(#ft-insta-brd) {
		display: none !important;
	}
</style>
