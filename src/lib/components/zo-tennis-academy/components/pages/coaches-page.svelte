<script lang="ts">
	import { Card, CardContent } from "$lib/components/ui/card";
	import { Button } from "$lib/components/ui/button";
	// @ts-ignore - lucide typed modules resolution
	import Phone from "@lucide/svelte/icons/phone";
	import { asset } from "$app/paths";
	import { localizeHref } from "$lib/utils/localize";
	import * as m from "$lib/paraglide/messages";

	let coaches = [
		{
			name: m["coaches_page.zuzana.name"](),
			role: m["coaches_page.zuzana.role"](),
			image: "/zuzka-dark.webp",
			bio: m["coaches_page.zuzana.bio"](),
			achievements: [
				m["coaches_page.zuzana.achievements.wta_ranking"](),
				m["coaches_page.zuzana.achievements.top10_wins"](),
				m["coaches_page.zuzana.achievements.itf_titles"](),
				m["coaches_page.zuzana.achievements.grand_slam"](),
				m["coaches_page.zuzana.achievements.czech_rep"](),
				m["coaches_page.zuzana.achievements.coaching_exp"]()
			],
		},
		{
			name: m["coaches_page.michal.name"](),
			role: m["coaches_page.michal.role"](),
			image: "/michal-dark.webp",
			bio: m["coaches_page.michal.bio"](),
			achievements: [
				m["coaches_page.michal.achievements.certified_trainer"](),
				m["coaches_page.michal.achievements.sparring_partner"](),
				m["coaches_page.michal.achievements.national_wins"](),
				m["coaches_page.michal.achievements.international_exp"](),
				m["coaches_page.michal.achievements.junior_coach"](),
				m["coaches_page.michal.achievements.technical_specialist"]()
			],
		},
	];
</script>

<div class="min-h-screen bg-background">
	<!-- Hero Section with Background -->
	<section class="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
		<!-- Background Image with Overlay -->
		<div class="absolute inset-0 z-0">
			<img
				src={asset("/zo-tennis-academy.webp")}
				alt="Tennis court background"
				class="w-full h-full object-cover block"
				loading="lazy"
				width="1920"
				height="1080"
				decoding="async"
				style="aspect-ratio: 16/9;"
			/>
			<div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-black/20"></div>
		</div>

		<!-- Tennis Court Grid Pattern -->
		<div class="absolute inset-0 z-10 opacity-10">
			<div class="w-full h-full" style="background-image: linear-gradient(rgba(255,106,0,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,106,0,0.3) 1px, transparent 1px); background-size: 50px 50px;"></div>
		</div>

		<!-- Content -->
		<div class="relative z-20 text-center px-4 max-w-4xl mx-auto">
			<h1 class="text-page-heading mb-4 text-white">
				{m["coaches_page.hero_title"]()} <span class="text-primary">{m["coaches_page.hero_title_highlight"]()}</span>
			</h1>
			<p class="text-lg text-white/90 max-w-2xl mx-auto">{m["coaches_page.hero_description"]()}</p>
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
								<img src={asset(coach.image)} alt={coach.name} loading="lazy" class="object-center" />
								<div class="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent lg:hidden"></div>
							</div>

								<!-- Coach Information -->
								<div class="lg:col-span-3 p-8 lg:p-12">
									<div class="mb-6">
										<h2 class="text-3xl font-bold mb-2 text-foreground">{coach.name}</h2>
										<p class="text-primary text-base font-semibold uppercase tracking-wide">{coach.role}</p>
									</div>

									<!-- Biography -->
									<p class="text-muted-foreground mb-10 leading-relaxed text-base">
										{coach.bio}
									</p>

									<!-- Achievements -->
									<div class="mb-10">
										<h3 class="text-xl font-bold mb-6 text-foreground">
											{m["coaches_page.achievements_title"]()}
										</h3>
										<div class="grid gap-3">
											{#each coach.achievements as achievement}
												<div class="flex items-start gap-3">
													<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 48 48" class="text-primary flex-shrink-0 mt-0.5">
														<g fill="none" stroke="currentColor" stroke-width="4">
															<path d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z" />
															<path stroke-linecap="round" stroke-linejoin="round" d="M24 4q-.15 10.003-4.912 15.004Q14.328 24.007 4 24.008" />
															<path stroke-linecap="round" d="M43.968 25.005q-9.768-.67-14.929 4.176Q23.88 34.026 24.004 44" />
														</g>
													</svg>
													<span class="text-foreground text-base leading-relaxed">{achievement}</span>
												</div>
											{/each}
										</div>
									</div>

									<!-- Contact CTA -->
									<div class="flex flex-col sm:flex-row gap-4">
										<Button href={localizeHref("/contact")} variant="cta" size="xl" class="tennis-hover">
											<Phone size={20} />
											{m["coaches_page.cta_reserve"]()}
										</Button>
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
