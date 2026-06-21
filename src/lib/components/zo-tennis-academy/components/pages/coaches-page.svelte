<script lang="ts">
	import { Card, CardContent } from "$lib/components/ui/card";
	import { Button } from "$lib/components/ui/button";
	import PageHero from "$lib/components/zo-tennis-academy/components/ui/page-hero.svelte";
	import IconTennisBall from "$lib/components/zo-tennis-academy/components/ui/icon-tennis-ball.svelte";
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
	<PageHero
		title={m["coaches_page.hero_title"]()}
		titleHighlight={m["coaches_page.hero_title_highlight"]()}
		description={m["coaches_page.hero_description"]()}
	/>

	<!-- Coaches Profiles -->
	<section class="py-24">
		<div class="container-section">
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
													<IconTennisBall size={18} class="text-primary flex-shrink-0 mt-0.5" />
													<span class="text-foreground text-base leading-relaxed">{achievement}</span>
												</div>
											{/each}
										</div>
									</div>

									<!-- Contact CTA -->
									<div class="flex flex-col sm:flex-row gap-4">
										<Button href={localizeHref("/contact")} variant="cta" size="xl">
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
