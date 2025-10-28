<script lang="ts">
	import { Card, CardContent } from "$lib/components/ui/card";
	import { Button } from "$lib/components/ui/button";
	import Users from "@lucide/svelte/icons/users";
	import Trophy from "@lucide/svelte/icons/trophy";
	import Clock from "@lucide/svelte/icons/clock";
	import ArrowRight from "@lucide/svelte/icons/arrow-right";
	import { asset } from "$app/paths";
	import { localizeHref } from "$lib/utils/localize";
	import * as m from "$lib/paraglide/messages";

	// First 3 programs (3 in row)
	let mainPrograms = [
		{
			title: m["programs_page.junior.title"](),
			subtitle: m["programs_page.junior.subtitle"](),
			description: m["programs_page.junior.description"](),
			icon: Users,
			color: "text-blue-500",
			image: asset("/junior.jpeg"),
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
			icon: Trophy,
			color: "text-green-500",
			image: asset("/adult.jpeg"),
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
			icon: Clock,
			color: "text-purple-500",
			image: asset("/private.jpeg"),
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
			icon: Trophy,
			color: "text-primary",
			image: asset("/professional.jpeg"),
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
			icon: Trophy,
			color: "text-primary",
			image: asset("/camps.jpeg"),
			features: [
				m["programs_page.camps.features.full_day"](),
				m["programs_page.camps.features.various_games"](),
				m["programs_page.camps.features.match_experience"]()
			],
		},
	];
</script>

<section class="py-24 bg-background">
	<div class="mx-auto max-w-[1320px] px-6 md:px-12">
		<!-- Section Header -->
		<div class="text-center mb-16">
			<h2 class="text-section-heading mb-4">
				{m["programs_overview.heading"]()} <span class="text-primary">{m["programs_overview.heading_highlight"]()}</span>
			</h2>
			<p class="text-lg text-muted-foreground max-w-2xl mx-auto">{m["programs_overview.description"]()}</p>
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

		<!-- Main CTA -->
		<div class="text-center">
			<Button href={localizeHref("/programs")} variant="cta" size="xl" class="tennis-hover group">
				{m["programs_overview.cta"]()}
				<ArrowRight size={20} class="group-hover:translate-x-1 transition-transform" />
			</Button>
		</div>
	</div>
</section>
