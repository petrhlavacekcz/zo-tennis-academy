<script lang="ts">
	import { Button } from "$lib/components/ui/button";
	import { asset } from "$app/paths";
	import { localizeHref } from "$lib/utils/localize";
	import * as m from "$lib/paraglide/messages";
</script>

<section class="relative min-h-screen flex flex-col overflow-hidden">
	<!-- Background Image with Overlay -->
	<div class="absolute inset-0 z-0">
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
		<div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/20"></div>
	</div>

	<!-- Tennis Court Grid Pattern -->
	<div class="absolute inset-0 z-10 opacity-10">
		<div class="w-full h-full" style="background-image: linear-gradient(rgba(255,106,0,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,106,0,0.3) 1px, transparent 1px); background-size: 50px 50px;"></div>
	</div>

	<!-- Main Content — flex-grow centers it above the stats strip -->
	<div class="relative z-20 flex-1 flex items-center justify-center py-32 px-4">
		<div class="text-center max-w-4xl mx-auto">
			<!-- Main title -->
			<h1
				class="text-white mb-6 font-black"
				style="text-shadow: 0 2px 8px rgba(0,0,0,0.8), 0 4px 16px rgba(0,0,0,0.6), 0 0 40px rgba(255,106,0,0.4);"
			>
				<div class="text-hero" style="font-size: clamp(4rem, 10vw, 8rem); line-height: 0.85;">ZO</div>
				<div class="text-hero" style="font-size: clamp(2rem, 5vw, 3.5rem); line-height: 1.1; margin-top: 0.5rem;">TENNIS ACADEMY . CZ</div>
			</h1>

			<!-- Subtitle — clean text, no glass box -->
			<p
				class="text-xl md:text-3xl text-white font-bold mb-10 max-w-3xl mx-auto leading-relaxed"
				style="font-family: 'Space Grotesk', Inter, system-ui, sans-serif; text-shadow: 0 2px 12px rgba(0,0,0,0.9), 0 4px 24px rgba(0,0,0,0.8);"
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
	</div>

	<!-- Bottom Stats Strip -->
	<div class="relative z-20 bg-black/65 backdrop-blur-sm border-t border-white/15">
		<div class="mx-auto max-w-[1320px] px-4 md:px-12">
			<div class="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/15 py-5">
				<div class="text-center px-4 py-2">
					<div class="text-primary font-black text-2xl md:text-3xl leading-none">74</div>
					<div class="text-white/60 text-xs uppercase tracking-widest mt-1">WTA Ranking</div>
				</div>
				<div class="text-center px-4 py-2">
					<div class="text-primary font-black text-2xl md:text-3xl leading-none">20+</div>
					<div class="text-white/60 text-xs uppercase tracking-widest mt-1">ITF Titulů</div>
				</div>
				<div class="text-center px-4 py-2">
					<div class="text-primary font-black text-2xl md:text-3xl leading-none">12+</div>
					<div class="text-white/60 text-xs uppercase tracking-widest mt-1">Let Trenérství</div>
				</div>
				<div class="text-center px-4 py-2">
					<div class="text-primary font-black text-2xl md:text-3xl leading-none">★★★★★</div>
					<div class="text-white/60 text-xs uppercase tracking-widest mt-1">Hodnocení</div>
				</div>
			</div>
		</div>
	</div>
</section>
