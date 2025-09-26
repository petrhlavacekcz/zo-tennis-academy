<script lang="ts">
	import { Quote } from "@lucide/svelte";

	interface Review {
		name: string;
		role: string;
		text: string;
	}

	const testimonials: Review[] = [
		{
			name: "Kateřina Hečko",
			role: "Rodič",
			text:
				"Chtěla bych vyjádřit velkou pochvalu celému týmu tenisového klubu za jejich skvělou práci a profesionální přístup. Klub nabízí výborné zázemí, přátelskou atmosféru a kvalitní tréninky pro děti.",
		},
		{
			name: "Petr Moravec",
			role: "Rodič",
			text:
				"Dcera navštěvuje tenisové kurzy již dva roky a letos už podruhé absolvovala letní prázdninový kemp spolu s bráškou. Skvělý, laskavý a profesionální přístup celého týmu se promítl i do výsledků.",
		},
		{
			name: "Klára Kozačková",
			role: "Rodič",
			text:
				"Doporučujeme tuto tenisovou školu! Syn ji navštěvuje něco přes rok a za tu dobu se neskutečně posunul. Trenérka i trenér jsou naprostí profesionálové.",
		},
		{
			name: "Martin Peterek",
			role: "Rodič",
			text:
				"Kristýnka si z kempu přivezla pohár za 1. místo a my jsme nadšení z progresu i práce trenérského týmu. Děkujeme a věříme v další posun!",
		},
		{
			name: "Silvie Onderková",
			role: "Rodič",
			text:
				"Syn chodí do tenisové školy od úplného začátku a každa lekce ho baví víc a víc. Skvělý přístup trenérů, přátelská atmosféra a viditelný pokrok.",
		},
		{
			name: "Hana Salamon",
			role: "Rodič",
			text:
				"Tábor hodnotím velmi kladně, Emmička byla každý den nadšená a je vidět velký pokrok. Jinak vše moc chválím a doporučuji.",
		},
		{
			name: "Monika Sawicka",
			role: "Hráčka",
			text:
				"Zuzana má zkušenosti z čela žebříčku WTA, které se jinde hledají těžko. Množství péče, kterou věnuje rozvoji sportovců, je výjimečné.",
		},
		{
			name: "Bartek Kozina",
			role: "Rodič",
			text:
				"Velmi dobrá škola. Důsledná práce na technice a pěstování soutěžního ducha i v nejmladších skupinách. Vřele doporučuji.",
		},
		{
			name: "Lukáš Hahn",
			role: "Rodič",
			text:
				"Naše tři děti trénují u Zuzky už více než tři roky a jsme naprosto spokojeni. Zuzka je skvělá trenérka, která k dětem přistupuje s trpělivostí a respektem.",
		},
		{
			name: "Petr Hlaváček",
			role: "Hráč",
			text:
				"S tenisem jsem začal pozdě, ale díky Zuzce a Míšovi mě tenis strašně baví a užívám si, že si zahraju i s kamarády. Těším se na každý trénink.",
		},
		{
			name: "Veronika Hlaváčková",
			role: "Pokročilá hráčka",
			text:
				"Tenisu se věnuji od svého mládí a Zuzka s Míšou mě u každého tréninku dokážou zase o něco posunout. Už jsem nevěřila, že si backhand můžu zlepšit, ale podařilo se.",
		},
	];
</script>

<section class="py-24 bg-card">
	<div class="mx-auto max-w-[1320px] px-6 md:px-12">
		<div class="text-center mb-16">
			<h2 class="text-section-heading mb-4">
				NAŠE <span class="text-primary">REFERENCE</span>
			</h2>
			<p class="text-lg text-muted-foreground max-w-2xl mx-auto">
				Výběr skutečných zkušeností hráčů, rodičů i trenérů, kteří s námi trénují dlouhodobě.
			</p>
		</div>

		<!-- Testimonials Grid -->
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
			{#each testimonials as testimonial}
				<div class="bg-background/60 backdrop-blur-sm rounded-2xl p-6 transition-all duration-200 hover:bg-background/80 hover:shadow-lg">
					<!-- Quote icon -->
					<div class="mb-4">
						<div class="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
							<Quote size={16} class="text-primary" />
						</div>
					</div>

					<!-- Testimonial text -->
					<blockquote class="text-sm leading-relaxed text-muted-foreground mb-6">
						"{testimonial.text}"
					</blockquote>

					<!-- Author -->
					<div class="border-t border-border/20 pt-4">
						<div class="font-medium text-foreground text-sm">{testimonial.name}</div>
						<div class="text-xs text-muted-foreground/70 mt-1">{testimonial.role}</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
