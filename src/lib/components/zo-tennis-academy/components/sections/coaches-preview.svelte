<script lang="ts">
	import { Card, CardContent } from "$lib/components/ui/card";
	import { Button } from "$lib/components/ui/button";
	import { ArrowRight } from "@lucide/svelte";
	import { assets } from "$app/paths";


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

<section class="py-24 bg-background">
	<div class="mx-auto max-w-[1320px] px-6 md:px-12">
		<!-- Section Header -->
		<div class="text-center mb-16">
			<h2 class="uppercase font-extrabold tracking-tight text-[clamp(1.75rem,3.5vw,2.5rem)] leading-tight mb-4">
				NAŠI <span class="text-primary">TRENÉŘI</span>
			</h2>
			<p class="text-lg text-muted-foreground max-w-2xl mx-auto">Učte se od nejlepších. Naši trenéři kombinují profesionální zkušenosti s vášní pro tenis.</p>
		</div>

		<!-- Coaches Grid -->
		<div class="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 mb-12 max-w-4xl mx-auto">
			{#each coaches as coach}
				<Card class="group glass overflow-hidden shadow-sm transition hover:shadow-md hover-scale p-0">
					<CardContent class="p-0">
						<!-- Coach Image -->
						<div class="relative overflow-hidden aspect-[3/4] -mx-6">
							<img src={assets + coach.image} alt={coach.name} class="w-full h-full object-cover block group-hover:scale-105 transition-transform duration-500" />
							<!-- Minimal gradient overlay with name/role -->
							<div class="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/60 via-black/10 to-transparent">
								<h3 class="text-sm md:text-base font-semibold text-white leading-tight break-words">{coach.name}</h3>
								<p class="text-xs md:text-sm text-white/90 break-words">{coach.role}</p>
							</div>
						</div>

						<!-- Coach Details -->
						<div class="p-6">
							<div class="mb-3">
								<span class="label">Klíčové úspěchy</span>
							</div>

							<ul class="space-y-2 mb-6 text-muted-foreground">
								{#each coach.achievements as achievement}
									<li class="flex items-start gap-2 text-sm leading-relaxed break-words">
										<div class="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
										<span>{achievement}</span>
									</li>
								{/each}
							</ul>
						</div>
					</CardContent>
				</Card>
			{/each}
		</div>

		<!-- CTA -->
		<div class="text-center">
			<Button onclick={() => navigateTo("coaches")} size="lg" class="tennis-hover group">
				Více o našich trenérech
				<ArrowRight size={20} class="ml-2 group-hover:translate-x-1 transition-transform" />
			</Button>
		</div>
	</div>
</section>
