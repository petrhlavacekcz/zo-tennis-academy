<script lang="ts">
	import { Card, CardContent } from "$lib/components/ui/card";
	import { Button } from "$lib/components/ui/button";
	import { ArrowRightIcon } from "lucide-svelte";

	interface Props {
		navigateTo: (page: string) => void;
	}

	let { navigateTo }: Props = $props();

	let coaches = [
		{
			name: "Zuzana Ondraskova",
			role: "Hlavní trenérka & Zakladatelka",
			image: "/zuzka-dark.png",
			achievements: ["Bývalá hráčka WTA", "74. místo světového žebříčku", "Účast na Grand Slam turnajích"],
			specialization: "Technická dokonalost, mentální příprava",
		},
		{
			name: "Michał Kowalski",
			role: "Technický specialista",
			image: "/michal-dark.png",
			achievements: ["Sparingpartner TOP 100 WTA", "Vítěz národních turnajů", "Mezinárodní zkušenosti"],
			specialization: "Taktická příprava, perfekcionistický přístup",
		},
	];
</script>

<section class="py-20 bg-background">
	<div class="container mx-auto px-4">
		<!-- Section Header -->
		<div class="text-center mb-16">
			<h2 class="text-4xl font-bold mb-4">
				Naši <span class="text-primary">trenéři</span>
			</h2>
			<p class="text-lg text-muted-foreground max-w-2xl mx-auto">Učte se od nejlepších. Naši trenéři kombinují profesionální zkušenosti s vášní pro tenis.</p>
		</div>

		<!-- Coaches Grid -->
		<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 mb-12">
			{#each coaches as coach}
				<Card class="group overflow-hidden rounded-2xl bg-white dark:bg-[#1E1E1E] shadow-sm transition hover:shadow-md hover-glow-orange hover-scale">
					<CardContent class="p-0">
						<!-- Coach Image -->
						<div class="relative overflow-hidden aspect-square">
							<img src={coach.image} alt={coach.name} class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
							<!-- Minimal gradient overlay with name/role -->
							<div class="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/60 via-black/10 to-transparent">
								<h3 class="text-sm md:text-base font-semibold text-white leading-tight">{coach.name}</h3>
								<p class="text-xs md:text-sm text-white/90">{coach.role}</p>
							</div>
						</div>

						<!-- Coach Details -->
						<div class="p-6">
							<div class="mb-3">
								<span class="font-semibold">Klíčové úspěchy</span>
							</div>

							<ul class="space-y-1.5 mb-6 text-muted-foreground">
								{#each coach.achievements as achievement}
									<li class="text-sm leading-relaxed">{achievement}</li>
								{/each}
							</ul>
						</div>
					</CardContent>
				</Card>
			{/each}
		</div>

		<!-- CTA -->
		<div class="text-center">
			<Button onclick={() => navigateTo("coaches")} size="lg" class="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold tennis-hover group">
				Poznejte naše trenéry
				<ArrowRightIcon size={20} class="ml-2 group-hover:translate-x-1 transition-transform" />
			</Button>
		</div>
	</div>
</section>
