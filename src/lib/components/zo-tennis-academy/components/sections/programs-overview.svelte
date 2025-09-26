<script lang="ts">
	import { Card, CardContent } from "$lib/components/ui/card";
	import { Button } from "$lib/components/ui/button";
	import { Users, Trophy, Clock, ArrowRight } from "@lucide/svelte";
	import { assets } from "$app/paths";

	interface Props {
		navigateTo: (page: string) => void;
	}

	let { navigateTo }: Props = $props();

	// First 3 programs (3 in row)
	let mainPrograms = [
		{
			title: "Juniorský rozvoj",
			subtitle: "Pro děti a mládež 4–18 let",
			description: "Komplexní program zaměřený na technický a taktický rozvoj mladých hráčů s důrazem na správné základy.",
			icon: Users,
			color: "text-blue-500",
			image: assets + "/junior.jpeg",
			features: ["Skupinové tréninky", "Individuální přístup", "Turnajová příprava"],
			duration: "60 minut",
			groupSize: "4–8 dětí",
			price: "800 Kč",
		},
		{
			title: "Lekce pro dospělé",
			subtitle: "Pro začátečníky a pokročilé",
			description: "Flexibilní program pro dospělé hráče všech úrovní s možností individuálního nebo skupinového tréninku.",
			icon: Trophy,
			color: "text-green-500",
			image: assets + "/adult.jpeg",
			features: ["Všechny úrovně", "Flexibilní časy", "Moderní metody"],
			duration: "60–90 minut",
			groupSize: "2–6 osob",
			price: "1 200 Kč",
		},
		{
			title: "Soukromé lekce",
			subtitle: "Individuální přístup",
			description: "Individuální lekce zaměřené na specifické potřeby každého hráče s maximální pozorností trenéra.",
			icon: Clock,
			color: "text-purple-500",
			image: assets + "/private.jpeg",
			features: ["1:1 trénink", "Rychlý pokrok", "Flexibilní rozvrh"],
			duration: "60 minut",
			groupSize: "1 osoba",
			price: "1 800 Kč",
		},
	];

	// Special programs (2 in row)
	let specialPrograms = [
		{
			title: "Profesionál",
			subtitle: "Program šitý na míru",
			description: "Program zaměřený na tenis na závodní úrovni, který je shodný s tréninkovým procesem špičkových hráčů.",
			icon: Trophy,
			color: "text-primary",
			image: assets + "/professional.jpeg",
			features: ["Závodní úroveň", "Individuální plán", "Profesionální přístup"],
			duration: "90 minut",
			groupSize: "1–2 osoby",
			price: "2 500 Kč",
		},
		{
			title: "Letní kempy",
			subtitle: "Intenzivní týdenní programy",
			description: "Týdenní kempy kombinující technický trénink, zápasy a zábavné aktivity pro děti všech věkových kategorií.",
			icon: Trophy,
			color: "text-primary",
			image: assets + "/camps.jpeg",
			features: ["Celotýdenní program", "Všestranný rozvoj", "Zábavné aktivity"],
			duration: "5 dní",
			groupSize: "12–16 dětí",
			price: "2 800 Kč",
		},
	];
</script>

<section class="py-24 bg-background">
	<div class="mx-auto max-w-[1320px] px-6 md:px-12">
		<!-- Section Header -->
		<div class="text-center mb-16">
			<h2 class="text-section-heading mb-4">
				NAŠE <span class="text-primary">PROGRAMY</span>
			</h2>
			<p class="text-lg text-muted-foreground max-w-2xl mx-auto">Vyberte si program, který nejlépe odpovídá vašim potřebám a tenisovým ambicím.</p>
		</div>

		<!-- Main Programs Grid (3 in row) -->
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
			{#each mainPrograms as program}
				<Card class="glass-modern h-full border-none shadow-none">
					<CardContent class="p-0">
						<!-- Program Image -->
						<div class="card-media aspect-[4/3]">
							<img src={program.image} alt={program.title} loading="lazy" />
							<div class="absolute inset-0 bg-gradient-to-t from-black/55 via-black/20 to-transparent"></div>
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

							<!-- Features -->
							<div class="space-y-2 mb-6">
								{#each program.features as feature}
									<div class="flex items-center gap-3">
										<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 48 48" class="text-primary flex-shrink-0">
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
					</CardContent>
				</Card>
			{/each}
		</div>

		<!-- Special Programs Grid (2 in row) -->
		<div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
			{#each specialPrograms as program}
				<Card class="glass-modern h-full border-none shadow-none">
					<CardContent class="p-0">
						<!-- Program Image -->
						<div class="card-media aspect-[4/3]">
							<img src={program.image} alt={program.title} loading="lazy" />
							<div class="absolute inset-0 bg-gradient-to-t from-black/55 via-black/20 to-transparent"></div>
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

							<!-- Features -->
							<div class="space-y-2">
								{#each program.features as feature}
									<div class="flex items-center gap-2">
										<div class="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
										<span class="text-sm">{feature}</span>
									</div>
								{/each}
							</div>
						</div>
					</CardContent>
				</Card>
			{/each}
		</div>

		<!-- Main CTA -->
		<div class="text-center">
			<Button onclick={() => navigateTo("programs")} size="lg" class="tennis-hover group">
				ZOBRAZIT VŠECHNY PROGRAMY
				<ArrowRight size={20} class="ml-2 group-hover:translate-x-1 transition-transform" />
			</Button>
		</div>
	</div>
</section>
