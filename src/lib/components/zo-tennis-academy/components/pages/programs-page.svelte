<script lang="ts">
	import { Card, CardContent } from "$lib/components/ui/card";
	import { Button } from "$lib/components/ui/button";

	import { Users, Coins, Trophy, Clock, ArrowRight } from "@lucide/svelte";

	interface Props {
		navigateTo: (page: string) => void;
	}

	let { navigateTo }: Props = $props();

	// Regular programs (first 4)
	let regularPrograms = [
		{
			id: "junior",
			title: "Juniorský rozvoj",
			subtitle: "Pro děti a mládež 4–18 let",
			description: "Komplexní program zaměřený na technický a taktický rozvoj mladých hráčů s důrazem na správné základy.",
			icon: Users,
			color: "text-blue-500",
			image: "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=600&h=400&fit=crop&crop=center",
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
			icon: Trophy,
			color: "text-green-500",
			image: "https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?w=600&h=400&fit=crop&crop=center",
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
			image: "https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?w=600&h=400&fit=crop&crop=center",
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
			image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=600&h=400&fit=crop&crop=center",
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
	];

	// Kempy program (separate for special layout)
	let kempyProgram = {
		id: "camps",
		title: "Letní kempy",
		subtitle: "Intenzivní týdenní programy",
		description: "Týdenní kempy kombinující technický trénink, zápasy a zábavné aktivity pro děti všech věkových kategorií.",
		icon: Trophy,
		color: "text-primary",
		image: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=800&h=500&fit=crop&crop=center",
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
	};
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
			<!-- Regular Programs Grid (2x2) -->
			<div class="grid md:grid-cols-2 gap-8 mb-16">
				{#each regularPrograms as program}
					<Card class="group glass-modern h-full overflow-hidden shadow-sm transition hover:shadow-md p-0">
						<CardContent class="p-0">
							<!-- Program Image -->
							<div class="relative aspect-[4/3] overflow-hidden">
								<img
									src={program.image}
									alt={program.title}
									class="w-full h-full object-cover block group-hover:scale-105 transition-transform duration-500"
								/>
								<div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
								<div class="absolute top-4 left-4">
									<div class="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
										<program.icon size={24} class="text-white" />
									</div>
								</div>
							</div>

							<!-- Program Details -->
							<div class="p-6">
								<div class="mb-4">
									<h3 class="text-xl font-semibold leading-tight tracking-wide">{program.title}</h3>
									<p class="text-base text-muted-foreground mt-1">{program.subtitle}</p>
								</div>

								<p class="text-base text-muted-foreground mb-6 leading-relaxed">
									{program.description}
								</p>

								<!-- Program Details -->
								<div class="bg-gradient-to-r from-primary/5 to-primary/10 rounded-xl p-4 mb-6">
									<div class="grid grid-cols-3 gap-4">
										<div class="text-center">
											<div class="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
												<Clock size={18} class="text-primary" />
											</div>
											<div class="text-sm font-semibold">{program.duration}</div>
										</div>
										<div class="text-center">
											<div class="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
												<Users size={18} class="text-primary" />
											</div>
											<div class="text-sm font-semibold">{program.groupSize}</div>
										</div>
										<div class="text-center">
											<div class="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
												<Coins size={18} class="text-primary" />
											</div>
											<div class="text-sm font-bold text-primary">{program.price}</div>
										</div>
									</div>
								</div>

								<!-- Features -->
								<div class="space-y-3 mb-8">
									{#each program.features as feature}
										<div class="flex items-start gap-3">
											<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 48 48" class="text-primary flex-shrink-0 mt-1">
												<g fill="none" stroke="currentColor" stroke-width="4">
													<path d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z" />
													<path stroke-linecap="round" stroke-linejoin="round" d="M24 4q-.15 10.003-4.912 15.004Q14.328 24.007 4 24.008" />
													<path stroke-linecap="round" d="M43.968 25.005q-9.768-.67-14.929 4.176Q23.88 34.026 24.004 44" />
												</g>
											</svg>
											<span class="text-sm leading-relaxed">{feature}</span>
										</div>
									{/each}
								</div>

								<!-- CTAs -->
								<div class="flex gap-3">
									<Button onclick={() => navigateTo("contact")} class="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground">Rezervovat</Button>
								</div>
							</div>
						</CardContent>
					</Card>
				{/each}
			</div>

			<!-- Kempy Card (Full Width) -->
			<div class="mb-16">
				<Card class="group glass-kempy h-full overflow-hidden shadow-sm transition hover:shadow-md p-0">
					<CardContent class="p-0">
						<div class="grid lg:grid-cols-2 gap-0 items-stretch">
							<!-- Left side: Image -->
							<div class="relative aspect-[4/3] lg:aspect-auto lg:h-full overflow-hidden">
								<img
									src={kempyProgram.image}
									alt={kempyProgram.title}
									class="w-full h-full object-cover block group-hover:scale-105 transition-transform duration-500"
								/>
								<div class="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-transparent lg:bg-gradient-to-r lg:from-black/60 lg:via-black/30 lg:to-transparent"></div>
								<div class="absolute top-4 left-4">
									<div class="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
										<kempyProgram.icon size={24} class="text-white" />
									</div>
								</div>
							</div>

							<!-- Right side: Content -->
							<div class="p-8 flex flex-col justify-center">
								<div class="mb-6">
									<h3 class="text-2xl font-bold leading-tight tracking-wide mb-2">{kempyProgram.title}</h3>
									<p class="text-lg text-muted-foreground">{kempyProgram.subtitle}</p>
								</div>

								<p class="text-base text-muted-foreground mb-6 leading-relaxed">
									{kempyProgram.description}
								</p>

								<!-- Program Details -->
								<div class="bg-gradient-to-r from-primary/5 to-primary/10 rounded-xl p-4 mb-6">
									<div class="grid grid-cols-3 gap-4">
										<div class="text-center">
											<div class="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
												<Clock size={18} class="text-primary" />
											</div>
											<div class="text-sm font-semibold">{kempyProgram.duration}</div>
										</div>
										<div class="text-center">
											<div class="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
												<Users size={18} class="text-primary" />
											</div>
											<div class="text-sm font-semibold">{kempyProgram.groupSize}</div>
										</div>
										<div class="text-center">
											<div class="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
												<Coins size={18} class="text-primary" />
											</div>
											<div class="text-sm font-bold text-primary leading-tight">{kempyProgram.price}</div>
										</div>
									</div>
								</div>

								<!-- Features -->
								<div class="mb-6">
									<h4 class="font-semibold mb-4 text-lg">Co kemp zahrnuje:</h4>
									<div class="space-y-3">
										{#each kempyProgram.features as feature}
											<div class="flex items-start gap-3">
												<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 48 48" class="text-primary flex-shrink-0 mt-1">
													<g fill="none" stroke="currentColor" stroke-width="4">
														<path d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z" />
														<path stroke-linecap="round" stroke-linejoin="round" d="M24 4q-.15 10.003-4.912 15.004Q14.328 24.007 4 24.008" />
														<path stroke-linecap="round" d="M43.968 25.005q-9.768-.67-14.929 4.176Q23.88 34.026 24.004 44" />
													</g>
												</svg>
												<span class="text-sm leading-relaxed">{feature}</span>
											</div>
										{/each}
									</div>
								</div>

								<!-- CTAs -->
								<div class="flex gap-3">
									<Button onclick={() => navigateTo("contact")} class="bg-primary hover:bg-primary/90 text-primary-foreground">Rezervovat kemp</Button>
								</div>
							</div>
						</div>
					</CardContent>
				</Card>
			</div>

			<!-- Bottom CTA -->
			<Card class="bg-primary text-primary-foreground tennis-hover">
				<CardContent class="p-8 text-center">
					<h3 class="font-bold mb-4">Nevíte, který program je pro vás ten pravý?</h3>
					<p class="text-base mb-6 opacity-90">Kontaktujte nás a my vám pomůžeme vybrat ideální program podle vašich potřeb a cílů.</p>
					<Button onclick={() => navigateTo("contact")} variant="secondary" size="lg" class="bg-white text-primary hover:bg-gray-100 font-semibold tennis-hover">
						KONTAKTOVAT NÁS
						<ArrowRight size={20} class="ml-2" />
					</Button>
				</CardContent>
			</Card>
		</div>
	</section>
</div>
