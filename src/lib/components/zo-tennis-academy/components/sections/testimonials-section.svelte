<script lang="ts">
	import { Quote, ChevronLeft, ChevronRight } from "@lucide/svelte";
	import { Card, CardContent } from "$lib/components/ui/card";
	import * as m from "$lib/paraglide/messages";

	interface Review {
		name: string;
		role: string;
		text: string;
	}

	const testimonials: Review[] = [
		{
			name: m["testimonials.reviews.lukas_kasparcik.name"](),
			role: m["testimonials.reviews.lukas_kasparcik.role"](),
			text: m["testimonials.reviews.lukas_kasparcik.text"](),
		},
		{
			name: m["testimonials.reviews.katerina_hecko.name"](),
			role: m["testimonials.reviews.katerina_hecko.role"](),
			text: m["testimonials.reviews.katerina_hecko.text"](),
		},
		{
			name: m["testimonials.reviews.petr_moravec.name"](),
			role: m["testimonials.reviews.petr_moravec.role"](),
			text: m["testimonials.reviews.petr_moravec.text"](),
		},
		{
			name: m["testimonials.reviews.klara_kozackova.name"](),
			role: m["testimonials.reviews.klara_kozackova.role"](),
			text: m["testimonials.reviews.klara_kozackova.text"](),
		},
		{
			name: m["testimonials.reviews.martin_peterek.name"](),
			role: m["testimonials.reviews.martin_peterek.role"](),
			text: m["testimonials.reviews.martin_peterek.text"](),
		},
		{
			name: m["testimonials.reviews.silvie_onderkova.name"](),
			role: m["testimonials.reviews.silvie_onderkova.role"](),
			text: m["testimonials.reviews.silvie_onderkova.text"](),
		},
		{
			name: m["testimonials.reviews.hana_salamon.name"](),
			role: m["testimonials.reviews.hana_salamon.role"](),
			text: m["testimonials.reviews.hana_salamon.text"](),
		},
		{
			name: m["testimonials.reviews.monika_sawicka.name"](),
			role: m["testimonials.reviews.monika_sawicka.role"](),
			text: m["testimonials.reviews.monika_sawicka.text"](),
		},
		{
			name: m["testimonials.reviews.bartek_kozina.name"](),
			role: m["testimonials.reviews.bartek_kozina.role"](),
			text: m["testimonials.reviews.bartek_kozina.text"](),
		},
		{
			name: m["testimonials.reviews.lukas_hahn.name"](),
			role: m["testimonials.reviews.lukas_hahn.role"](),
			text: m["testimonials.reviews.lukas_hahn.text"](),
		},
		{
			name: m["testimonials.reviews.petr_hlavacek.name"](),
			role: m["testimonials.reviews.petr_hlavacek.role"](),
			text: m["testimonials.reviews.petr_hlavacek.text"](),
		},
		{
			name: m["testimonials.reviews.veronika_hlavackova.name"](),
			role: m["testimonials.reviews.veronika_hlavackova.role"](),
			text: m["testimonials.reviews.veronika_hlavackova.text"](),
		},
	];

	let track: HTMLDivElement;

	function scrollByDir(dir: 1 | -1) {
		if (!track) return;
		const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
		track.scrollBy({ left: track.clientWidth * 0.9 * dir, behavior: reduce ? "auto" : "smooth" });
	}
</script>

<section class="py-16 md:py-24 bg-card">
	<div class="mx-auto max-w-[1320px] px-6 md:px-12">
		<div class="text-center mb-12 md:mb-16">
			<h2 class="text-section-heading mb-4">
				{m["testimonials.heading"]()} <span class="text-primary">{m["testimonials.heading_highlight"]()}</span>
			</h2>
			<p class="text-lg text-muted-foreground max-w-2xl mx-auto">
				{m["testimonials.description"]()}
			</p>
		</div>

		<!-- Desktop carousel controls -->
		<div class="hidden sm:flex justify-end gap-2 mb-6">
			<button
				type="button"
				onclick={() => scrollByDir(-1)}
				class="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background text-foreground transition-colors hover:border-primary hover:text-primary"
				aria-label="Previous testimonials"
			>
				<ChevronLeft size={20} />
			</button>
			<button
				type="button"
				onclick={() => scrollByDir(1)}
				class="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background text-foreground transition-colors hover:border-primary hover:text-primary"
				aria-label="Next testimonials"
			>
				<ChevronRight size={20} />
			</button>
		</div>

		<!-- Swipeable testimonials track -->
		<div
			bind:this={track}
			class="carousel-track flex gap-6 overflow-x-auto snap-x snap-mandatory pb-2"
			role="region"
			aria-roledescription="carousel"
			aria-label="Testimonials"
		>
			{#each testimonials as testimonial}
				<article class="snap-start shrink-0 basis-[85%] sm:basis-[calc(50%-0.75rem)] lg:basis-[calc(33.333%-1rem)]">
					<Card class="h-full shadow-soft">
						<CardContent class="flex h-full flex-col p-6">
							<Quote size={28} strokeWidth={2.5} class="text-primary mb-4 shrink-0" />
							<blockquote class="text-base leading-relaxed text-foreground mb-6 flex-1">
								{testimonial.text}
							</blockquote>
							<div class="relative pl-4">
								<div class="absolute left-0 top-1 bottom-1 w-0.5 rounded-full bg-primary"></div>
								<div class="font-semibold text-foreground text-base leading-tight">{testimonial.name}</div>
								<div class="text-xs text-muted-foreground mt-1">{testimonial.role}</div>
							</div>
						</CardContent>
					</Card>
				</article>
			{/each}
		</div>
	</div>
</section>

<style>
	.carousel-track {
		scrollbar-width: none;
		-ms-overflow-style: none;
		scroll-padding: 0;
	}
	.carousel-track::-webkit-scrollbar {
		display: none;
	}
</style>
