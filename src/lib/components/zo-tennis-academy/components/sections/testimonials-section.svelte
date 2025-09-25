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
		{
			name: "Veronika Hlaváčková",
			role: "Pokročilá hráčka",
			text:
				"Tenisu se věnuji od svého mládí a Zuzka s Míšou mě u každého tréninku dokážou zase o něco posunout. Už jsem nevěřila, že si backhand můžu zlepšit, ale podařilo se. Moc díky a doporučuji.",
		},
	];
</script>

<section class="py-24 bg-muted/25">
	<div class="mx-auto max-w-[1240px] px-6 md:px-12">
		<!-- Section Header -->
		<div class="text-center mb-14">
			<h2 class="text-section-heading mb-2">
				NAŠE <span class="text-primary">REFERENCE</span>
			</h2>
			<p class="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
				Jak naši hráči i rodiče popisují spolupráci se ZO Tennis Academy.
			</p>
		</div>

		<!-- Testimonials Grid -->
		<div class="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
			{#each testimonials as testimonial}
				<Card class="rounded-[36px] border border-border/40 bg-card shadow-[0_20px_45px_rgba(20,20,20,0.08)]">
					<CardContent class="flex h-full flex-col gap-6 p-8 md:p-10">
						<div class="flex items-center gap-4 text-primary">
							<div class="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
								<Quote size={26} class="text-primary/80" />
							</div>
							<div class="text-sm font-semibold tracking-[0.35em] text-primary/70 uppercase">Reference</div>
						</div>
						<blockquote class="flex-1 text-base leading-relaxed text-muted-foreground">
							“{testimonial.text}”
						</blockquote>
						<div>
							<div class="text-lg font-semibold text-foreground">{testimonial.name}</div>
							<div class="text-sm text-muted-foreground">{testimonial.role}</div>
						</div>
					</CardContent>
				</Card>
			{/each}
		</div>
	</div>
</section>
