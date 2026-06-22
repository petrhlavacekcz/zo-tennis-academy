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

	<!-- Tennis Court Grid Pattern (subtle) -->
	<div class="absolute inset-0 z-10 opacity-[0.06]">
		<div class="w-full h-full" style="background-image: linear-gradient(rgba(255,106,0,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,106,0,0.3) 1px, transparent 1px); background-size: 56px 56px;"></div>
	</div>

	<!-- Content -->
	<div class="hero-enter relative z-20 text-center px-4 max-w-4xl mx-auto">
		<!-- Brand wordmark: ZO TENNIS ACADEMY (single line, uniform light color) -->
		<h1
			class="text-hero text-white mb-5 whitespace-nowrap"
			style="font-size: clamp(1.6rem, 6.6vw, 4.5rem); letter-spacing: 0.03em; text-shadow: 0 2px 10px rgba(0, 0, 0, 0.55), 0 6px 28px rgba(0, 0, 0, 0.4);"
		>
			ZO TENNIS ACADEMY
		</h1>

		<!-- Subtitle -->
		<p
			class="text-lg sm:text-xl md:text-2xl text-white/95 font-semibold mb-10 max-w-2xl mx-auto leading-relaxed"
			style="text-shadow: 0 2px 14px rgba(0, 0, 0, 0.85), 0 4px 24px rgba(0, 0, 0, 0.6);"
		>
			{m["hero.subtitle"]()}
		</p>

		<!-- CTA button -->
		<div class="flex justify-center items-center">
			<Button href={localizeHref("/contact")} variant="cta" size="xl" class="tennis-hover">
				{m["hero.cta"]()}
			</Button>
		</div>
	</div>

	<!-- Scroll cue -->
	<div class="hero-scroll-cue absolute bottom-7 left-1/2 z-20 -translate-x-1/2" aria-hidden="true">
		<div class="flex h-10 w-6 items-start justify-center rounded-full border-2 border-white/55 p-1.5">
			<span class="hero-scroll-dot block h-1.5 w-1.5 rounded-full bg-white/85"></span>
		</div>
	</div>
</section>

<style>
	/* Confident, calm entrance — no bounce */
	.hero-enter {
		animation: hero-enter 0.9s cubic-bezier(0.4, 0, 0.2, 1) both;
	}
	@keyframes hero-enter {
		from {
			opacity: 0;
			transform: translateY(18px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	.hero-scroll-dot {
		animation: hero-scroll 1.8s cubic-bezier(0.4, 0, 0.2, 1) infinite;
	}
	@keyframes hero-scroll {
		0% {
			opacity: 0;
			transform: translateY(0);
		}
		35% {
			opacity: 1;
		}
		100% {
			opacity: 0;
			transform: translateY(10px);
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.hero-enter,
		.hero-scroll-dot {
			animation: none;
		}
	}
</style>
