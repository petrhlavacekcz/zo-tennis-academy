<script lang="ts">
	import { Instagram } from "@lucide/svelte";
	import * as m from "$lib/paraglide/messages";
	import { onMount } from "svelte";

	let instagramContainer: HTMLElement;

	onMount(() => {
		// Dynamically load and initialize the Instagram feed widget
		if (instagramContainer) {
			// @ts-ignore - External CDN module
			import("https://cdn.fouita.com/public/instagram-feed.js?11").then((module: any) => {
				const App = module.default;
				new App({
					target: instagramContainer,
					props: {
						settings: {
							layout: "masonry",
							source: "insta",
							selected: "uname",
							header: false,
							autoplay: true,
							zigzag: true,
							cols: 3,
							cardHeight: 300,
							gap: 0,
							direction: "down",
							height: 600,
							bgColor: "transparent",
							txtColor: "rgba(255, 255, 255, 0.9)",
							ukey: "93d287a6-4e72-4207-b9b2-ac4f5a8f7348"
						}
					}
				});
			});
		}
	});
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
		<div class="mb-8">
			<div bind:this={instagramContainer} id="ft-insta-app" class="instagram-feed-container"></div>
		</div>

		<!-- Instagram Handle -->
		<div class="text-center">
			<a href="https://www.instagram.com/zo_tennis_academy/" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 text-primary font-medium hover:text-primary/80 transition-colors">
				<Instagram size={18} />
				{m["instagram.handle"]()}
			</a>
		</div>
	</div>
</section>

<style>
	/* Custom styling for Instagram feed widget */
	:global(.instagram-feed-container) {
		background: transparent !important;
	}

	/* Hide or style the Fouita branding footer */
	:global(#ft-insta-brd) {
		display: none !important;
	}

	/* Ensure cards have proper styling within our dark theme */
	:global(.instagram-feed-container *) {
		color: rgba(255, 255, 255, 0.9) !important;
	}

	/* Add subtle hover effects to Instagram cards */
	:global(.instagram-feed-container img) {
		transition: transform 0.3s ease, opacity 0.3s ease;
	}

	:global(.instagram-feed-container img:hover) {
		transform: scale(1.05);
		opacity: 0.9;
	}
</style>
