<script lang="ts">
	import { Card, CardContent } from "$lib/components/ui/card";
	import { Quote } from "@lucide/svelte";

	let testimonials = [
		{
			name: "Lukáš Hahn",
			role: "Rodič",
			text:
				"Naše tři děti trénují u Zuzky už více než tři roky a jsme naprosto spokojeni. Zuzka je skvělá trenérka, která k dětem přistupuje s trpělivostí, respektem a zároveň je dokáže motivovat k výkonu. Její tréninky jsou pestré, zábavné a přitom velmi kvalitní – vidíme u dětí obrovský pokrok jak v technice, tak v celkovém vztahu ke sportu. Díky Zuzce si tenis zamilovaly a na každou lekci se těší. Velké díky za profesionální a zároveň lidský přístup!",
		},
		{
			name: "Petr Hlaváček",
			role: "Začátečník",
			text:
				"S tenisem jsem začal pozdě, ale díky Zuzce a Míšovi mě tenis strašně baví a užívám si, že si zahraju i s kamarády kteří hrají tenis celý život. Těším se na každý trénink. Moc děkuji za všechno.",
		},
	];
</script>

<section class="py-24 bg-card relative overflow-hidden">
	<!-- Tennis Net Background -->
	<div class="absolute inset-0 opacity-5">
		<div class="w-full h-full" style="background-image: repeating-linear-gradient(0deg, transparent, transparent 10px, rgba(255,106,0,0.3) 10px, rgba(255,106,0,0.3) 11px); background-size: 100% 20px;"></div>
	</div>

	<div class="mx-auto max-w-[1320px] px-6 md:px-12 relative z-10">
		<!-- Section Header -->
		<div class="text-center mb-16">
			<h2 class="text-section-heading mb-4">
				REFERENCE
			</h2>
			<p class="text-lg text-muted-foreground max-w-2xl mx-auto">Co o nás říkají naši hráči a rodiče.</p>
		</div>

		<!-- Testimonials Grid -->
		<div class="grid md:grid-cols-2 gap-8">
			{#each testimonials as testimonial}
				<Card class="group overflow-hidden shadow-sm transition hover:shadow-md hover-scale">
					<CardContent class="p-8">
						<!-- Quote Icon -->
						<div class="flex justify-center mb-6">
							<div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
								<Quote size={24} class="text-primary" />
							</div>
						</div>

						<!-- Rating removed for text-only references -->

						<!-- Reference Text -->
						<blockquote class="text-center text-lg mb-6 leading-relaxed text-foreground/80">
							“{testimonial.text}”
						</blockquote>

						<!-- Author -->
						<div class="text-center">
							<div class="font-semibold">{testimonial.name}</div>
							<div class="text-base text-muted-foreground">{testimonial.role}</div>
						</div>
					</CardContent>
				</Card>
			{/each}
		</div>
	</div>
</section>
