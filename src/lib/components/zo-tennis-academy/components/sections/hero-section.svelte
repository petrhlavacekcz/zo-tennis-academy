<script lang="ts">
	import { Button } from "$lib/components/ui/button";
	import { asset } from "$app/paths";
	import { localizeHref } from "$lib/utils/localize";
	import * as m from "$lib/paraglide/messages";
</script>

<section class="relative min-h-screen flex items-center justify-center overflow-hidden">
	<!-- Background Image with Overlay -->
	<div class="absolute inset-0 z-0">
		<!-- Hero image with fetchpriority for LCP optimization -->
		<img
			src={asset("/zo-tennis-academy.webp")}
			alt="Tennis action background"
			class="w-full h-full object-cover block"
			width="1920"
			height="1080"
			fetchpriority="high"
			decoding="async"
			style="aspect-ratio: 16/9;"
		/>
		<div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-black/20"></div>
	</div>

	<!-- Tennis Court Grid Pattern -->
	<div class="absolute inset-0 z-10 opacity-10">
		<div class="w-full h-full court-grid-pattern"></div>
	</div>

	<!-- Content -->
	<div class="relative z-20 text-center px-4 max-w-4xl mx-auto">
		<!-- Main title -->
		<h1 class="text-white mb-6 font-black" style="text-shadow: 0 2px 8px rgba(0,0,0,0.8), 0 4px 16px rgba(0,0,0,0.6);">
			<div class="text-hero-xl">ZO</div>
			<div class="text-hero-sub mt-2">TENNIS ACADEMY . CZ</div>
		</h1>

		<!-- Subtitle -->
		<p class="text-xl md:text-3xl text-white font-bold mb-10 max-w-3xl mx-auto leading-relaxed px-6 py-4 rounded-lg font-space bg-black/50 backdrop-blur-sm"
			style="text-shadow: 0 3px 12px rgba(0,0,0,1), 0 6px 24px rgba(0,0,0,0.9);">
			{m["hero.subtitle"]()}
		</p>

		<!-- CTA button -->
		<div class="flex justify-center items-center">
			<Button href={localizeHref("/contact")} variant="cta" size="xl">
				{m["hero.cta"]()}
			</Button>
		</div>
	</div>
</section>
