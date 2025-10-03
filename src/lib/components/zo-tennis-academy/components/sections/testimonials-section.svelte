<script lang="ts">
	import { Quote } from "@lucide/svelte";

	interface Review {
		name: string;
		role: string;
		text: string;
	}

	const testimonials: Review[] = [
		{
			name: "Lukáš Kašparčík",
			role: "Rodič",
			text:
				"Tenisová škola byla pro naše holky skvělou volbou – tenis si zamilovaly a na tréninky chodí s nadšením. Trenéři Zuzka a Míša mají velmi hezký a trpělivý přístup k dětem. Pokroky byly viditelné už po několika lekcích.",
		},
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
