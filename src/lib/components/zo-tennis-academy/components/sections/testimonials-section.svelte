<script lang="ts">
	import { Quote } from "@lucide/svelte";
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
</script>

<section class="py-24 bg-card">
	<div class="mx-auto max-w-[1320px] px-6 md:px-12">
		<div class="text-center mb-16">
			<h2 class="text-section-heading mb-4">
				{m["testimonials.heading"]()} <span class="text-primary">{m["testimonials.heading_highlight"]()}</span>
			</h2>
			<p class="text-lg text-muted-foreground max-w-2xl mx-auto">
				{m["testimonials.description"]()}
			</p>
		</div>

		<!-- Testimonials Grid -->
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
			{#each testimonials as testimonial}
				<div class="group relative">
					<!-- Large decorative quote mark -->
					<div class="absolute -top-2 -left-2 text-primary/10 transition-all duration-300 group-hover:text-primary/20 group-hover:scale-110">
						<Quote size={64} strokeWidth={2.5} />
					</div>

					<!-- Content -->
					<div class="relative pt-8 px-2">
						<!-- Testimonial text -->
						<blockquote class="text-base leading-relaxed text-foreground mb-6 relative z-10">
							{testimonial.text}
						</blockquote>

						<!-- Author with accent line -->
						<div class="relative pl-4">
							<!-- Orange accent line -->
							<div class="absolute left-0 top-1 bottom-1 w-0.5 bg-gradient-to-b from-primary to-primary/40"></div>

							<div class="font-semibold text-foreground text-base leading-tight">{testimonial.name}</div>
							<div class="text-xs text-muted-foreground/60 mt-1">{testimonial.role}</div>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
