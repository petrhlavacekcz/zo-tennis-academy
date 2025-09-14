<script lang="ts">
	import { Card, CardContent, CardHeader, CardTitle } from "$lib/components/ui/card";
	import { Button } from "$lib/components/ui/button";
	import { UsersIcon, TargetIcon, TrophyIcon, ClockIcon, ArrowRightIcon } from "lucide-svelte";

	interface Props {
		navigateTo: (page: string) => void;
	}

	let { navigateTo }: Props = $props();

	let programs = [
		{
			title: "Juniorský rozvoj",
			subtitle: "Pro děti a mládež 4–18 let",
			description: "Komplexní program zaměřený na technický a taktický rozvoj mladých hráčů s důrazem na správné základy.",
			icon: UsersIcon,
			color: "text-blue-500",
			features: ["Skupinové tréninky", "Individuální přístup", "Turnajová příprava"],
		},
		{
			title: "Lekce pro dospělé",
			subtitle: "Pro začátečníky a pokročilé",
			description: "Flexibilní program pro dospělé hráče všech úrovní s možností individuálního nebo skupinového tréninku.",
			icon: TargetIcon,
			color: "text-green-500",
			features: ["Všechny úrovně", "Flexibilní časy", "Moderní metody"],
		},
		{
			title: "Soukromé lekce",
			subtitle: "Individuální přístup",
			description: "Individuální lekce zaměřené na specifické potřeby každého hráče s maximální pozorností trenéra.",
			icon: ClockIcon,
			color: "text-purple-500",
			features: ["1:1 trénink", "Rychlý pokrok", "Flexibilní rozvrh"],
		},
		{
			title: "Profesionál",
			subtitle: "Program šitý na míru",
			description: "Program zaměřený na tenis na závodní úrovni, který je shodný s tréninkovým procesem špičkových hráčů.",
			icon: TrophyIcon,
			color: "text-primary",
			features: ["Závodní úroveň", "Individuální plán", "Profesionální přístup"],
		},
		{
			title: "Letní kempy",
			subtitle: "Intenzivní týdenní programy",
			description: "Týdenní kempy kombinující technický trénink, zápasy a zábavné aktivity pro děti všech věkových kategorií.",
			icon: TrophyIcon,
			color: "text-primary",
			features: ["Celotýdenní program", "Všestranný rozvoj", "Zábavné aktivity"],
		},
	];
</script>

<section class="py-20 bg-background">
	<div class="container mx-auto px-4">
		<!-- Section Header -->
		<div class="text-center mb-16">
			<h2 class="text-4xl font-bold mb-4">
				Naše <span class="text-primary">programy</span>
			</h2>
			<p class="text-lg text-muted-foreground max-w-2xl mx-auto">Vyberte si program, který nejlépe odpovídá vašim potřebám a tenisovým ambicím.</p>
		</div>

		<!-- Programs Grid -->
		<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 mb-12">
			{#each programs as program}
				<Card class="group h-full overflow-hidden rounded-2xl bg-white dark:bg-[#1E1E1E] shadow-sm transition hover:shadow-md hover-glow-orange hover-scale">
					<CardHeader class="pb-4">
						<div class="flex items-center gap-4 mb-4">
							<div class="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
								<program.icon size={24} class={program.color} />
							</div>
							<div>
								<CardTitle class="text-xl">{program.title}</CardTitle>
								<p class="text-sm text-muted-foreground">{program.subtitle}</p>
							</div>
						</div>
					</CardHeader>

					<CardContent class="pt-0">
						<p class="text-muted-foreground mb-6 leading-relaxed">
							{program.description}
						</p>

						<!-- Features -->
						<div class="space-y-2 mb-6">
							{#each program.features as feature}
								<div class="flex items-center gap-2">
									<div class="w-1.5 h-1.5 bg-primary rounded-full"></div>
									<span class="text-sm">{feature}</span>
								</div>
							{/each}
						</div>

					</CardContent>
				</Card>
			{/each}
		</div>

		<!-- Main CTA -->
		<div class="text-center">
			<Button onclick={() => navigateTo("programs")} size="lg" class="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold tennis-hover group">
				Zobrazit všechny programy
				<ArrowRightIcon size={20} class="ml-2 group-hover:translate-x-1 transition-transform" />
			</Button>
		</div>
	</div>
</section>
