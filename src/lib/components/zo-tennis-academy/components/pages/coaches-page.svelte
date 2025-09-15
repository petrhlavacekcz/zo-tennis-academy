<script lang="ts">
	import { Card, CardContent } from "$lib/components/ui/card";
	import { Button } from "$lib/components/ui/button";
	import { Award, Phone } from "@lucide/svelte";
	import { assets } from "$app/paths";


	let coaches = [
		{
			name: "Zuzana Ondraskova",
			role: "Hlavní trenérka & Zakladatelka",
			image: "/zuzka-dark.png",
			bio: "Zuzana je bývalá profesionální tenistka, která dosáhla 74. místa na WTA žebříčku. Během své kariéry (1997-2013) získala 20 ITF titulů a účastnila se všech Grand Slam turnajů. Po ukončení aktivní kariéry se věnuje koučování a předávání svých zkušeností mladé generaci.",
			achievements: ["74. místo WTA žebříčku (2005)", "20 ITF titulů", "Účast na všech Grand Slam turnajích", "Vítězství nad hráčkami TOP 50", "Reprezentace České republiky", "15+ let koučovacích zkušeností"],
		},
		{
			name: "Michał Kowalski",
			role: "Technický specialista",
			image: "/michal-dark.png",
			bio: "Michał je technický specialista s bohatými zkušenostmi z mezinárodního tenisu. Pracoval jako sparingpartner pro hráčky TOP 100 WTA a má za sebou úspěšnou trenérskou kariéru. Jeho perfekcionistický přístup a důraz na detaily pomáhají hráčům dosáhnout jejich maximálního potenciálu.",
			achievements: ["Sparingpartner TOP 100 WTA hráčky", "Vítěz národních turnajů", "10+ let mezinárodních zkušeností", "Trenér juniorských reprezentantů", "Specialista na technickou analýzu", "Certifikovaný kondičního trenér"],
		},
	];
</script>

<div class="min-h-screen bg-background">
	<!-- Page Header -->
	<section class="py-24 bg-card border-b border-primary/20">
		<div class="mx-auto max-w-[1320px] px-6 md:px-12 text-center">
			<h1 class="text-5xl md:text-6xl font-bold mb-4">
				NAŠI <span class="text-primary">TRENÉŘI</span>
			</h1>
			<p class="text-xl text-muted-foreground max-w-2xl mx-auto">Poznejte náš profesionální tým trenérů s bohatými zkušenostmi z mezinárodního tenisu</p>
		</div>
	</section>

	<!-- Coaches Profiles -->
	<section class="py-24">
		<div class="mx-auto max-w-[1320px] px-6 md:px-12">
			<div class="space-y-16">
				{#each coaches as coach}
					<Card class="glass overflow-hidden shadow-sm transition hover:shadow-md hover-scale p-0">
						<CardContent class="p-0">
							<div class="grid lg:grid-cols-5 items-stretch gap-0">
								<!-- Coach Image -->
								<div class="lg:col-span-2 relative aspect-[3/4] lg:aspect-auto lg:h-full">
									<img src={assets + coach.image} alt={coach.name} class="absolute inset-0 w-full h-full object-cover object-center block" />
									<div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent lg:hidden"></div>
								</div>

								<!-- Coach Information -->
								<div class="lg:col-span-3 p-8 lg:p-12">
									<div class="mb-6">
										<h2 class="text-3xl md:text-4xl font-bold mb-2">{coach.name}</h2>
										<p class="text-primary text-lg font-semibold">{coach.role}</p>
									</div>

									<!-- Biography -->
									<p class="text-muted-foreground mb-8 leading-relaxed text-lg">
										{coach.bio}
									</p>

														<!--

									<!-- Specializations removed -->
														-->




									<!-- Achievements -->
									<div class="mb-8">
										<h3 class="text-2xl md:text-3xl font-semibold mb-4 flex items-center gap-2">
											<Award size={20} class="text-primary" />
											Úspěchy a zkušenosti
										</h3>
										<ul class="space-y-2">
											{#each coach.achievements as achievement}
												<li class="flex items-start gap-2">
													<div class="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
													<span class="text-muted-foreground">{achievement}</span>
												</li>
											{/each}
										</ul>
									</div>

									<!-- Contact CTA -->
									<div class="flex flex-col sm:flex-row gap-4">
										<Button class="bg-primary hover:bg-primary/90 text-primary-foreground tennis-hover">
											<Phone size={16} class="mr-2" />
											Rezervovat lekci
										</Button>
														<!--

										<Button variant="outline" class="tennis-hover hidden">
											<MailIcon size={16} class="mr-2" />
											Kontaktovat
										</Button>
														-->

									</div>
								</div>
							</div>
						</CardContent>
					</Card>
				{/each}
			</div>
		</div>
	</section>
</div>
