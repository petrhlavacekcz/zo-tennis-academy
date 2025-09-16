<script lang="ts">
	import { Card, CardContent, CardHeader, CardTitle } from "$lib/components/ui/card";
	import { Button } from "$lib/components/ui/button";

	import { Users, Target, Trophy, Clock, ArrowRight, Check } from "@lucide/svelte";

	interface Props {
		navigateTo: (page: string) => void;
	}

	let { navigateTo }: Props = $props();

	let programs = [
		{
			id: "junior",
			title: "Juniorský rozvoj",
			subtitle: "Pro děti a mládež 4–18 let",
			description: "Komplexní program zaměřený na technický a taktický rozvoj mladých hráčů s důrazem na správné základy.",
			icon: Users,
			color: "text-blue-500",
			duration: "60–90 minut",
			groupSize: "3–5 hráčů",
			price: "od 250 Kč / lekce",
			features: [
				"Skupinové tréninky podle věku a úrovně.",
				"Rozvoj základních tenisových dovedností.",
				"Budování správných pohybových návyků.",
				"Zlepšování fyzické kondice a obratnosti.",
				"Podpora týmové spolupráce a fair play."
			],
		},
		{
			id: "adult",
			title: "Lekce pro dospělé",
			subtitle: "Pro začátečníky a pokročilé",
			description: "Flexibilní program pro dospělé hráče všech úrovní s možností individuálního nebo skupinového tréninku.",
			icon: Target,
			color: "text-green-500",
			duration: "60–90 minut",
			groupSize: "1–4 hráči",
			price: "od 300 Kč / lekce",
			features: [
				"Důraz na správnou techniku úderů.",
				"Pravidelné lekce pro trvalý pokrok.",
				"Osvojení základních technických prvků.",
				"Rozvoj taktiky pro lepší hru.",
				"Flexibilní tréninky podle možností hráčů.",
				"Přátelské a motivující prostředí."
			],
		},
		{
			id: "private",
			title: "Soukromé lekce",
			subtitle: "Individuální přístup",
			description: "Individuální lekce zaměřené na specifické potřeby každého hráče s maximální pozorností trenéra.",
			icon: Clock,
			color: "text-purple-500",
			duration: "60–90 minut",
			groupSize: "1 hráč",
			price: "600 Kč / lekce",
			features: [
				"100% pozornost trenéra.",
				"Přizpůsobený tréninkový program.",
				"Rychlý a efektivní pokrok.",
				"Flexibilní termíny.",
				"Video analýza techniky.",
				"Nejlepší cesta k rychlému zlepšení."
			],
		},
		{
			id: "pro",
			title: "Profesionál",
			subtitle: "Program šitý na míru",
			description: "Program zaměřený na tenis na závodní úrovni, který je shodný s tréninkovým procesem špičkových hráčů.",
			icon: Trophy,
			color: "text-primary",
			duration: "Denní / Týdenní / Měsíční – program šitý na míru",
			groupSize: "Individuální",
			price: "Cena na vyžádání",
			features: [
				"Na míru vytvořený každodenní tréninkový proces.",
				"Program zaměřený na tenis na závodní úrovni.",
				"Denní, týdenní i měsíční plán přizpůsobený hráči.",
				"Tréninky, sparingy, kondiční příprava, fyzioterapie a masáže.",
				"Program shodný s přípravou špičkových hráčů.",
				"Možnost zajištění ubytování."
			],
		},
		{
			id: "camps",
			title: "Letní kempy",
			subtitle: "Intenzivní týdenní programy",
			description: "Týdenní kempy kombinující technický trénink, zápasy a zábavné aktivity pro děti všech věkových kategorií.",
			icon: Trophy,
			color: "text-primary",
			duration: "5 dní",
			groupSize: "12–16 dětí",
			price: "Půldenní kemp / 2 800 Kč · Celodenní / 4 500 Kč",
			features: [
				"Bohatý program pro nezapomenutelné letní zážitky.",
				"Celodenní tréninky pod vedením zkušených trenérů.",
				"Různorodé hry a soutěže pro rozvoj dovedností.",
				"Vyvážená kombinace obratnosti, vytrvalosti a koordinace.",
				"Získání cenných zápasových zkušeností.",
				"Obědy a svačiny zajištěny.",
				"Každý účastník obdrží speciální tričko"
			],
		},
	];
</script>

<div class="min-h-screen bg-background">
	<!-- Page Header -->
	<section class="py-24 bg-card border-b border-primary/20">
		<div class="mx-auto max-w-[1320px] px-6 md:px-12 text-center">
			<h1 class="text-page-heading mb-4">
				NAŠE <span class="text-primary">PROGRAMY</span>
			</h1>
			<p class="text-lg text-muted-foreground max-w-2xl mx-auto">Vyberte si program, který nejlépe odpovídá vašim potřebám a tenisovým ambicím</p>
		</div>
	</section>

	<!-- Programs Grid -->
	<section class="py-24">
		<div class="mx-auto max-w-[1320px] px-6 md:px-12">
			<div class="grid md:grid-cols-2 gap-8 mb-16">
				{#each programs as program}
					<Card class="group h-full overflow-hidden shadow-sm transition hover:shadow-md hover-scale">
						<CardHeader class="pb-6">
							<div class="flex items-center gap-4 mb-4">
								<div class="w-16 h-16 bg-accent rounded-xl flex items-center justify-center">
									<program.icon size={32} class={program.color} />
								</div>
								<div>
									<CardTitle class="text-2xl">{program.title}</CardTitle>
									<p class="text-muted-foreground">{program.subtitle}</p>
								</div>
							</div>
						</CardHeader>

						<CardContent class="pt-0">
							<p class="text-muted-foreground mb-6 leading-relaxed">
								{program.description}
							</p>

							<!-- Program Details -->
							<div class="grid grid-cols-3 gap-4 mb-6 p-4 bg-accent/50 rounded-lg">
								<div class="text-center">
									<Clock size={20} class="text-primary mx-auto mb-1" />
									<div class="text-sm font-medium">{program.duration}</div>
								</div>
								<div class="text-center">
									<Users size={20} class="text-primary mx-auto mb-1" />
									<div class="text-sm font-medium">{program.groupSize}</div>
								</div>
								<div class="text-center">
									<Target size={20} class="text-primary mx-auto mb-1" />
									<div class="text-sm font-medium text-primary">{program.price}</div>
								</div>
							</div>

							<!-- Features -->
							<div class="space-y-3 mb-8">
								{#each program.features as feature}
									<div class="flex items-start gap-3">
										<Check size={16} class="text-primary mt-0.5 flex-shrink-0" />
										<span class="text-sm">{feature}</span>
									</div>
								{/each}
							</div>

							<!-- CTAs -->
							<div class="flex gap-3">
								<Button onclick={() => navigateTo("contact")} class="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground">Rezervovat</Button>
							</div>
						</CardContent>
					</Card>
				{/each}


			</div>

			<!-- Bottom CTA -->
			<Card class="bg-primary text-primary-foreground tennis-hover">
				<CardContent class="p-8 text-center">
					<h3 class="font-bold mb-4">Nevíte, který program je pro vás ten pravý?</h3>
					<p class="text-base mb-6 opacity-90">Kontaktujte nás a my vám pomůžeme vybrat ideální program podle vašich potřeb a cílů.</p>
					<Button onclick={() => navigateTo("contact")} variant="secondary" size="lg" class="bg-white text-primary hover:bg-gray-100 font-semibold tennis-hover">
						Kontaktovat nás
						<ArrowRight size={20} class="ml-2" />
					</Button>
				</CardContent>
			</Card>
		</div>
	</section>
</div>
