<script lang="ts">
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

	const row1 = testimonials.slice(0, 6);
	const row2 = testimonials.slice(6, 12);
</script>

<section class="py-24 bg-card overflow-hidden">
	<div class="mx-auto max-w-[1320px] px-6 md:px-12 mb-16">
		<div class="text-center">
			<h2 class="text-section-heading mb-4">
				{m["testimonials.heading"]()} <span class="text-primary">{m["testimonials.heading_highlight"]()}</span>
			</h2>
			<p class="text-lg text-muted-foreground max-w-2xl mx-auto">
				{m["testimonials.description"]()}
			</p>
		</div>
	</div>

	<!-- Marquee Rows -->
	<div class="space-y-5">
		<!-- Row 1: scrolls left -->
		<div class="overflow-hidden">
			<div class="marquee-track gap-5 px-5">
				{#each [...row1, ...row1] as testimonial}
					<div class="glass flex-none w-72 lg:w-80 rounded-2xl p-5">
						<!-- Stars -->
						<div class="text-primary text-sm mb-3 tracking-wide">★★★★★</div>
						<!-- Quote text -->
						<blockquote class="text-sm leading-relaxed text-foreground mb-4 line-clamp-4">
							{testimonial.text}
						</blockquote>
						<!-- Author -->
						<div class="relative pl-4">
							<div class="absolute left-0 top-0.5 bottom-0.5 w-0.5 bg-gradient-to-b from-primary to-primary/30 rounded-full"></div>
							<div class="font-semibold text-foreground text-sm leading-tight">{testimonial.name}</div>
							<div class="text-xs text-muted-foreground/60 mt-0.5">{testimonial.role}</div>
						</div>
					</div>
				{/each}
			</div>
		</div>

		<!-- Row 2: scrolls right -->
		<div class="overflow-hidden">
			<div class="marquee-track-reverse gap-5 px-5">
				{#each [...row2, ...row2] as testimonial}
					<div class="glass flex-none w-72 lg:w-80 rounded-2xl p-5">
						<!-- Stars -->
						<div class="text-primary text-sm mb-3 tracking-wide">★★★★★</div>
						<!-- Quote text -->
						<blockquote class="text-sm leading-relaxed text-foreground mb-4 line-clamp-4">
							{testimonial.text}
						</blockquote>
						<!-- Author -->
						<div class="relative pl-4">
							<div class="absolute left-0 top-0.5 bottom-0.5 w-0.5 bg-gradient-to-b from-primary to-primary/30 rounded-full"></div>
							<div class="font-semibold text-foreground text-sm leading-tight">{testimonial.name}</div>
							<div class="text-xs text-muted-foreground/60 mt-0.5">{testimonial.role}</div>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>
