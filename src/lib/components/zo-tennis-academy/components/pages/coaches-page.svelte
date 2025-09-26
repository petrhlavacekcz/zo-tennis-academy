<script lang="ts">
	import { Card, CardContent } from "$lib/components/ui/card";
	import { Button } from "$lib/components/ui/button";
	import { Award, Phone } from "@lucide/svelte";
	import { assets } from "$app/paths";


	let coaches = [
		{
			name: "Zuzana Ondrášková",
			role: "hlavní trenérka a zakladatelka",
			image: "/zuzka-dark.png",
			bio: "Zuzana je bývalá profesionální tenistka, která dosáhla 74. místa na WTA žebříčku. Během své kariéry (1997-2013) získala 20 ITF titulů a účastnila se všech Grand Slam turnajů. Po ukončení aktivní kariéry se věnuje koučování a předávání svých zkušeností mladé generaci.",
			achievements: ["74. místo WTA žebříčku (2005)", "20 ITF titulů", "Účast na všech Grand Slam turnajích", "Vítězství nad hráčkami TOP 50", "Reprezentace České republiky", "15+ let koučovacích zkušeností"],
		},
		{
			name: "Michał Kowalski",
			role: "trenér a technický specialista",
			image: "/michal-dark.png",
			bio: "Michał je technický specialista s bohatými zkušenostmi z mezinárodního tenisu. Pracoval jako sparingpartner pro hráčky TOP 100 WTA a má za sebou úspěšnou trenérskou kariéru. Jeho perfekcionistický přístup a důraz na detaily pomáhají hráčům dosáhnout jejich maximálního potenciálu.",
			achievements: ["Sparingpartner TOP 100 WTA hráčky", "Vítěz národních turnajů", "10+ let mezinárodních zkušeností", "Trenér juniorských reprezentantů", "Specialista na technickou analýzu", "Certifikovaný kondičního trenér"],
		},
	];
</script>

<div class="min-h-screen bg-background">
	<!-- Hero Section with Background -->
	<section class="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
		<!-- Background Image with Overlay -->
		<div class="absolute inset-0 z-0">
			<img src="/zo-tennis-academy.jpg" alt="Tennis court background" class="w-full h-full object-cover block" />
			<div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-black/20"></div>
		</div>

		<!-- Tennis Court Grid Pattern -->
		<div class="absolute inset-0 z-10 opacity-10">
			<div class="w-full h-full" style="background-image: linear-gradient(rgba(255,106,0,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,106,0,0.3) 1px, transparent 1px); background-size: 50px 50px;"></div>
		</div>

		<!-- Content -->
		<div class="relative z-20 text-center px-4 max-w-4xl mx-auto">
			<h1 class="text-page-heading mb-4 text-white">
				NAŠI <span class="text-primary">TRENÉŘI</span>
			</h1>
			<p class="text-lg text-white/90 max-w-2xl mx-auto">Poznejte náš profesionální tým trenérů s bohatými zkušenostmi z mezinárodního tenisu</p>
		</div>
	</section>

	<!-- Coaches Profiles -->
	<section class="py-24">
		<div class="mx-auto max-w-[1320px] px-6 md:px-12">
			<div class="space-y-16">
			{#each coaches as coach}
				<Card class="glass overflow-hidden shadow-sm border-none">
					<CardContent class="p-0">
						<div class="grid lg:grid-cols-5 items-stretch gap-0">
							<!-- Coach Image -->
							<div class="card-media lg:col-span-2 aspect-[3/4] lg:aspect-auto lg:h-full">
								<img src={assets + coach.image} alt={coach.name} loading="lazy" class="object-center" />
								<div class="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent lg:hidden"></div>
							</div>

								<!-- Coach Information -->
								<div class="lg:col-span-3 p-8 lg:p-12">
									<div class="mb-6">
										<h3 class="font-bold mb-2">{coach.name}</h3>
										<p class="text-primary text-base font-semibold">{coach.role}</p>
									</div>

									<!-- Biography -->
									<p class="text-muted-foreground mb-8 leading-relaxed text-base">
										{coach.bio}
									</p>

														<!--

									<!-- Specializations removed -->
														-->




									<!-- Achievements -->
									<div class="mb-8">
										<h4 class="font-semibold mb-4 flex items-center gap-2">
											<Award size={20} class="text-primary" />
											Úspěchy a zkušenosti
										</h4>
										<ul class="space-y-2">
											{#each coach.achievements as achievement}
												<li class="flex items-start gap-2">
													<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 48 48" class="text-primary flex-shrink-0 mt-1">
														<g fill="none" stroke="currentColor" stroke-width="4">
															<path d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z" />
															<path stroke-linecap="round" stroke-linejoin="round" d="M24 4q-.15 10.003-4.912 15.004Q14.328 24.007 4 24.008" />
															<path stroke-linecap="round" d="M43.968 25.005q-9.768-.67-14.929 4.176Q23.88 34.026 24.004 44" />
														</g>
													</svg>
													<span class="text-muted-foreground">{achievement}</span>
												</li>
											{/each}
										</ul>
									</div>

									<!-- Contact CTA -->
									<div class="flex flex-col sm:flex-row gap-4">
										<Button class="bg-primary hover:bg-primary/90 text-primary-foreground tennis-hover">
											<Phone size={16} class="mr-2" />
											REZERVOVAT LEKCI
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
