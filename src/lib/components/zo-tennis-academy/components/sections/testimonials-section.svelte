<script lang="ts">
	import { Card, CardContent } from "$lib/components/ui/card";
	import { QuoteIcon, StarIcon } from "lucide-svelte";

	let testimonials = [
		{
			name: "Anna Svobodová",
			role: "Rekreační hráčka",
			image: "https://c.svelte0.com/placeholder.svg?size=square",
			rating: 5,
			text: "Díky ZO Tennis Academy jsem se zlepšila více, než jsem si kdy myslela, že je možné. Zuzanin přístup je nejen profesionální, ale také velmi motivující.",
		},
		{
			name: "Tomáš Novák",
			role: "Junior hráč",
			image: "https://c.svelte0.com/placeholder.svg?size=square",
			rating: 5,
			text: "Trénink s Michałem mi pomohl vyhrát můj první turnaj. Jeho technické rady a taktické přípravy jsou neocenitelné.",
		},
	];
</script>

<section class="py-24 bg-card relative overflow-hidden">
	<!-- Tennis Net Background -->
	<div class="absolute inset-0 opacity-5">
		<div class="w-full h-full" style="background-image: repeating-linear-gradient(0deg, transparent, transparent 10px, rgba(255,106,0,0.3) 10px, rgba(255,106,0,0.3) 11px); background-size: 100% 20px;"></div>
	</div>

	<div class="container mx-auto px-4 relative z-10">
		<!-- Section Header -->
		<div class="text-center mb-16">
			<h2 class="text-4xl font-bold mb-4">
				Co říkají naši <span class="text-primary">studenti</span>
			</h2>
			<p class="text-lg text-muted-foreground max-w-2xl mx-auto">Přečtěte si zkušenosti našich studentů a zjistěte, jak jsme jim pomohli dosáhnout jejich tenisových cílů.</p>
		</div>

		<!-- Testimonials Grid -->
		<div class="grid md:grid-cols-2 gap-8">
			{#each testimonials as testimonial}
				<Card class="group overflow-hidden rounded-2xl bg-white dark:bg-[#1E1E1E] shadow-sm transition hover:shadow-md hover-glow-orange hover-scale">
					<CardContent class="p-8">
						<!-- Quote Icon -->
						<div class="flex justify-center mb-6">
							<div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
								<QuoteIcon size={24} class="text-primary" />
							</div>
						</div>

						<!-- Rating -->
						<div class="flex justify-center gap-1 mb-6">
							{#each Array(testimonial.rating) as _}
								<StarIcon size={20} class="text-primary fill-current" />
							{/each}
						</div>

						<!-- Testimonial Text -->
						<blockquote class="text-center text-lg mb-8 leading-relaxed text-muted-foreground">
							"{testimonial.text}"
						</blockquote>

						<!-- Author -->
						<div class="flex items-center justify-center gap-4">
							<img src={testimonial.image} alt={testimonial.name} class="w-12 h-12 rounded-full object-cover ring-2 ring-primary" />
							<div class="text-center">
								<div class="font-semibold">{testimonial.name}</div>
								<div class="text-sm text-muted-foreground">{testimonial.role}</div>
							</div>
						</div>
					</CardContent>
				</Card>
			{/each}
		</div>
	</div>
</section>
