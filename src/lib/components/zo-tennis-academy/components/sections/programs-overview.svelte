<script lang="ts">
	import { Card, CardContent } from "$lib/components/ui/card";
	import { Button } from "$lib/components/ui/button";
	import ArrowRight from "@lucide/svelte/icons/arrow-right";
	import CheckIcon from "./check-icon.svelte";
	import { asset } from "$app/paths";
	import { localizeHref } from "$lib/utils/localize";
	import * as m from "$lib/paraglide/messages";

	// First 3 programs (3 in row)
	let mainPrograms = [
		{
			title: m["programs_page.junior.title"](),
			subtitle: m["programs_page.junior.subtitle"](),
			description: m["programs_page.junior.description"](),
			image: asset("/junior.webp"),
			features: [
				m["programs_page.junior.features.group_training"](),
				m["programs_page.junior.features.basic_skills"](),
				m["programs_page.junior.features.teamwork"]()
			],
		},
		{
			title: m["programs_page.adult.title"](),
			subtitle: m["programs_page.adult.subtitle"](),
			description: m["programs_page.adult.description"](),
			image: asset("/adult.webp"),
			features: [
				m["programs_page.adult.features.technique"](),
				m["programs_page.adult.features.flexible_training"](),
				m["programs_page.adult.features.friendly_environment"]()
			],
		},
		{
			title: m["programs_page.private.title"](),
			subtitle: m["programs_page.private.subtitle"](),
			description: m["programs_page.private.description"](),
			image: asset("/private.webp"),
			features: [
				m["programs_page.private.features.full_attention"](),
				m["programs_page.private.features.fast_progress"](),
				m["programs_page.private.features.flexible_schedule"]()
			],
		},
	];

	// Special programs (2 in row)
	let specialPrograms = [
		{
			title: m["programs_page.professional.title"](),
			subtitle: m["programs_page.professional.subtitle"](),
			description: m["programs_page.professional.description"](),
			image: asset("/professional.webp"),
			features: [
				m["programs_page.professional.features.competitive_level"](),
				m["programs_page.professional.features.custom_plan"](),
				m["programs_page.professional.features.top_level"]()
			],
		},
		{
			title: m["programs_page.camps.title"](),
			subtitle: m["programs_page.camps.subtitle"](),
			description: m["programs_page.camps.description"](),
			image: asset("/camps.webp"),
			features: [
				m["programs_page.camps.features.full_day"](),
				m["programs_page.camps.features.various_games"](),
				m["programs_page.camps.features.match_experience"]()
			],
		},
	];
</script>

<section class="py-16 md:py-24 bg-background">
	<div class="mx-auto max-w-[1320px] px-6 md:px-12">
		<!-- Section Header -->
		<div class="mb-12 md:mb-16">
			<h2 class="text-section-heading mb-4">
				{m["programs_overview.heading"]()} <span class="text-primary">{m["programs_overview.heading_highlight"]()}</span>
			</h2>
			<p class="text-lg text-muted-foreground max-w-2xl">{m["programs_overview.description"]()}</p>
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
								<h3 class="font-space text-2xl font-semibold uppercase tracking-wide leading-tight">{program.title}</h3>
								<p class="text-base text-muted-foreground mt-1">{program.subtitle}</p>
							</div>

							<p class="text-base text-muted-foreground mb-6 leading-relaxed">
								{program.description}
							</p>

							<!-- Features -->
							<div class="space-y-2 mb-6">
								{#each program.features as feature}
									<div class="flex items-center gap-3">
										<CheckIcon size={14} />
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
								<h3 class="font-space text-2xl font-semibold uppercase tracking-wide leading-tight">{program.title}</h3>
								<p class="text-base text-muted-foreground mt-1">{program.subtitle}</p>
							</div>

							<p class="text-base text-muted-foreground mb-6 leading-relaxed">
								{program.description}
							</p>

							<!-- Features -->
							<div class="space-y-2">
								{#each program.features as feature}
									<div class="flex items-center gap-3">
										<CheckIcon size={14} />
										<span class="text-sm leading-relaxed">{feature}</span>
									</div>
								{/each}
							</div>
						</div>
					</CardContent>
				</Card>
			{/each}
		</div>

		<!-- Main CTA -->
		<div>
			<Button href={localizeHref("/programs")} variant="cta" size="xl" class="tennis-hover group">
				{m["programs_overview.cta"]()}
				<ArrowRight size={20} class="group-hover:translate-x-1 transition-transform" />
			</Button>
		</div>
	</div>
</section>
