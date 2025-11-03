<script lang="ts">
	import { Button } from "$lib/components/ui/button";
	import { asset } from "$app/paths";
	import { localizeHref } from "$lib/utils/localize";
	import * as m from "$lib/paraglide/messages";
</script>

<section class="relative min-h-screen flex items-center justify-center overflow-hidden">
	<!-- Background Image with Overlay -->
	<div class="absolute inset-0 z-0">
		<!-- Use base-aware assets path to avoid 404 under subpath deployments -->
		<img src={asset("/zo-tennis-academy.webp")} alt="Tennis action background" class="w-full h-full object-cover block" />
		<div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-black/20"></div>
	</div>

	<!-- Tennis Court Grid Pattern -->
	<div class="absolute inset-0 z-10 opacity-10">
		<div class="w-full h-full" style="background-image: linear-gradient(rgba(255,106,0,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,106,0,0.3) 1px, transparent 1px); background-size: 50px 50px;"></div>
	</div>

	<!-- Content -->
	<div class="relative z-20 text-center px-4 max-w-4xl mx-auto">
		<!-- Main title with enhanced visibility -->
		<h1
			class="text-white mb-6 font-black"
			style="text-shadow: 0 2px 8px rgba(0, 0, 0, 0.8), 0 4px 16px rgba(0, 0, 0, 0.6), 0 0 40px rgba(255, 106, 0, 0.4);"
		>
			<div class="text-hero" style="font-size: clamp(4rem, 10vw, 8rem); line-height: 0.85;">ZO</div>
			<div class="text-hero" style="font-size: clamp(2rem, 5vw, 3.5rem); line-height: 1.1; margin-top: 0.5rem;">TENNIS ACADEMY . CZ</div>
		</h1>

		<!-- Subtitle with maximum visibility -->
		<p
			class="text-xl md:text-3xl text-white font-bold mb-10 max-w-3xl mx-auto leading-relaxed px-6 py-4 rounded-lg"
			style="font-family: 'Space Grotesk', Inter, system-ui, sans-serif; text-shadow: 0 3px 12px rgba(0, 0, 0, 1), 0 6px 24px rgba(0, 0, 0, 0.9), 0 0 40px rgba(0, 0, 0, 0.8); background: linear-gradient(135deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)); backdrop-filter: blur(4px);"
		>
			{m["hero.subtitle"]()}
		</p>

		<!-- CTA button -->
		<div class="flex justify-center items-center">
			<Button href={localizeHref("/contact")} variant="cta" size="xl">
				{m["hero.cta"]()}
			</Button>
		</div>
	</div>

	<!-- Background animation removed by request -->
</section>
