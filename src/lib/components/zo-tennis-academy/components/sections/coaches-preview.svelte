<script lang="ts">
	import { Card, CardContent } from "$lib/components/ui/card";
	import { Button } from "$lib/components/ui/button";
	import { ArrowRight } from "@lucide/svelte";
	import CheckIcon from "./check-icon.svelte";
	import { asset } from "$app/paths";
	import { localizeHref } from "$lib/utils/localize";
	import * as m from "$lib/paraglide/messages";

	let coaches = [
		{
			name: m["coaches_preview.zuzana.name"](),
			role: m["coaches_preview.zuzana.role"](),
			image: "/zuzka-dark.webp",
			achievements: [
				m["coaches_preview.zuzana.achievements.wta_ranking"](),
				m["coaches_preview.zuzana.achievements.top10_wins"](),
				m["coaches_preview.zuzana.achievements.grand_slam"]()
			],
		},
		{
			name: m["coaches_preview.michal.name"](),
			role: m["coaches_preview.michal.role"](),
			image: "/michal-dark.webp",
			achievements: [
				m["coaches_preview.michal.achievements.certified_trainer"](),
				m["coaches_preview.michal.achievements.sparring_partner"](),
				m["coaches_preview.michal.achievements.international"]()
			],
		},
	];
</script>

<section class="py-16 md:py-24 bg-background">
	<div class="mx-auto max-w-[1320px] px-6 md:px-12">
		<!-- Section Header -->
		<div class="mb-12 md:mb-16">
			<h2 class="text-section-heading mb-4">
				{m["coaches_preview.heading"]()} <span class="text-primary">{m["coaches_preview.heading_highlight"]()}</span>
			</h2>
			<p class="text-lg text-muted-foreground max-w-2xl">{m["coaches_preview.description"]()}</p>
		</div>

		<!-- Coaches Grid -->
		<div class="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 mb-12 max-w-4xl mx-auto">
			{#each coaches as coach}
				<Card class="overflow-hidden shadow-soft">
					<CardContent class="p-0">
						<!-- Coach Image -->
						<div class="card-media aspect-[3/4]">
							<img src={asset(coach.image)} alt={coach.name} loading="lazy" />
							<!-- Enhanced gradient overlay with better positioned name/role -->
							<div class="absolute inset-x-0 bottom-0 px-6 pb-6 pt-12 bg-gradient-to-t from-black/85 via-black/55 to-transparent">
								<h3 class="font-space text-2xl md:text-3xl font-semibold uppercase tracking-wide text-white leading-tight break-words mb-2">{coach.name}</h3>
								<p class="text-base md:text-lg text-white/95 font-semibold break-words leading-snug">{coach.role}</p>
							</div>
						</div>

						<!-- Coach Details -->
						<div class="p-6">
							<div class="mb-3">
								<span class="label">{m["coaches_preview.label_achievements"]()}</span>
							</div>

							<ul class="space-y-2 mb-6 text-muted-foreground">
								{#each coach.achievements as achievement}
									<li class="flex items-start gap-2 text-base leading-relaxed break-words">
										<CheckIcon size={14} class="text-primary flex-shrink-0 mt-1" />
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
		<div>
			<Button href={localizeHref("/coaches")} variant="cta" size="xl" class="group">
				{m["coaches_preview.cta"]()}
				<ArrowRight size={20} class="group-hover:translate-x-1 transition-transform" />
			</Button>
		</div>
	</div>
</section>
