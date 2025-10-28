<script lang="ts">
	import { Card, CardContent } from "$lib/components/ui/card";
	import { Button } from "$lib/components/ui/button";

	// @ts-ignore - lucide typed modules resolution
	import Users from "@lucide/svelte/icons/users";
	// @ts-ignore - lucide typed modules resolution
	import Coins from "@lucide/svelte/icons/coins";
	// @ts-ignore - lucide typed modules resolution
	import Trophy from "@lucide/svelte/icons/trophy";
	// @ts-ignore - lucide typed modules resolution
	import Clock from "@lucide/svelte/icons/clock";
	// @ts-ignore - lucide typed modules resolution
	import ArrowRight from "@lucide/svelte/icons/arrow-right";
	import { asset } from "$app/paths";
	import { localizeHref } from "$lib/utils/localize";
	import * as m from "$lib/paraglide/messages";

	// First 3 programs (3 in row)
	let mainPrograms = [
		{
			id: "junior",
			title: m["programs_page.junior.title"](),
			subtitle: m["programs_page.junior.subtitle"](),
			description: m["programs_page.junior.description"](),
			icon: Users,
			color: "text-blue-500",
			image: asset("/junior.jpeg"),
			duration: m["programs_page.junior.duration"](),
			groupSize: m["programs_page.junior.group_size"](),
			price: m["programs_page.junior.price"](),
			features: [
				m["programs_page.junior.features.group_training"](),
				m["programs_page.junior.features.basic_skills"](),
				m["programs_page.junior.features.movement_habits"](),
				m["programs_page.junior.features.physical_fitness"](),
				m["programs_page.junior.features.teamwork"]()
			],
		},
		{
			id: "adult",
			title: m["programs_page.adult.title"](),
			subtitle: m["programs_page.adult.subtitle"](),
			description: m["programs_page.adult.description"](),
			icon: Trophy,
			color: "text-green-500",
			image: asset("/adult.jpeg"),
			duration: m["programs_page.adult.duration"](),
			groupSize: m["programs_page.adult.group_size"](),
			price: m["programs_page.adult.price"](),
			features: [
				m["programs_page.adult.features.technique"](),
				m["programs_page.adult.features.regular_lessons"](),
				m["programs_page.adult.features.basic_elements"](),
				m["programs_page.adult.features.tactics"](),
				m["programs_page.adult.features.flexible_training"](),
				m["programs_page.adult.features.friendly_environment"]()
			],
		},
		{
			id: "private",
			title: m["programs_page.private.title"](),
			subtitle: m["programs_page.private.subtitle"](),
			description: m["programs_page.private.description"](),
			icon: Clock,
			color: "text-purple-500",
			image: asset("/private.jpeg"),
			duration: m["programs_page.private.duration"](),
			groupSize: m["programs_page.private.group_size"](),
			price: m["programs_page.private.price"](),
			features: [
				m["programs_page.private.features.full_attention"](),
				m["programs_page.private.features.customized_program"](),
				m["programs_page.private.features.fast_progress"](),
				m["programs_page.private.features.flexible_schedule"](),
				m["programs_page.private.features.video_analysis"](),
				m["programs_page.private.features.best_path"]()
			],
		},
	];

	// Special programs (2 in row)
	let specialPrograms = [
		{
			id: "pro",
			title: m["programs_page.professional.title"](),
			subtitle: m["programs_page.professional.subtitle"](),
			description: m["programs_page.professional.description"](),
			icon: Trophy,
			color: "text-primary",
			image: asset("/professional.jpeg"),
			duration: m["programs_page.professional.duration"](),
			groupSize: m["programs_page.professional.group_size"](),
			price: m["programs_page.professional.price"](),
			features: [
				m["programs_page.professional.features.custom_process"](),
				m["programs_page.professional.features.competitive_level"](),
				m["programs_page.professional.features.custom_plan"](),
				m["programs_page.professional.features.full_package"](),
				m["programs_page.professional.features.top_level"](),
				m["programs_page.professional.features.accommodation"]()
			],
		},
		{
			id: "camps",
			title: m["programs_page.camps.title"](),
			subtitle: m["programs_page.camps.subtitle"](),
			description: m["programs_page.camps.description"](),
			icon: Trophy,
			color: "text-primary",
			image: asset("/camps.jpeg"),
			duration: m["programs_page.camps.duration"](),
			groupSize: m["programs_page.camps.group_size"](),
			price: m["programs_page.camps.price"](),
			features: [
				m["programs_page.camps.features.rich_program"](),
				m["programs_page.camps.features.full_day"](),
				m["programs_page.camps.features.various_games"](),
				m["programs_page.camps.features.balanced_combo"](),
				m["programs_page.camps.features.match_experience"](),
				m["programs_page.camps.features.meals"](),
				m["programs_page.camps.features.tshirt"]()
			],
		},
	];
</script>

<div class="min-h-screen bg-background">
	<!-- Hero Section with Background -->
	<section class="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
		<!-- Background Image with Overlay -->
		<div class="absolute inset-0 z-0">
			<img src={asset("/zo-tennis-academy.jpg")} alt="Tennis court background" class="w-full h-full object-cover block" />
			<div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-black/20"></div>
		</div>

		<!-- Tennis Court Grid Pattern -->
		<div class="absolute inset-0 z-10 opacity-10">
			<div class="w-full h-full" style="background-image: linear-gradient(rgba(255,106,0,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,106,0,0.3) 1px, transparent 1px); background-size: 50px 50px;"></div>
		</div>

		<!-- Content -->
		<div class="relative z-20 text-center px-4 max-w-4xl mx-auto">
			<h1 class="text-page-heading mb-4 text-white">
				{m["programs_page.hero_title"]()} <span class="text-primary">{m["programs_page.hero_title_highlight"]()}</span>
			</h1>
			<p class="text-lg text-white/90 max-w-2xl mx-auto">{m["programs_page.hero_description"]()}</p>
		</div>
	</section>

	<!-- Programs Grid -->
	<section class="py-24">
		<div class="mx-auto max-w-[1320px] px-6 md:px-12">
			<!-- Main Programs Grid (3 in row) -->
			<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
			{#each mainPrograms as program}
				<Card class="glass-modern h-full border-none shadow-none">
					<CardContent class="p-0">
						<!-- Program Image -->
						<div class="card-media aspect-[4/3]">
							<img src={program.image} alt={program.title} loading="lazy" />
							<div class="absolute inset-0 bg-gradient-to-t from-black/55 via-black/25 to-transparent"></div>
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

								<!-- Program Details -->
								<div class="bg-gradient-to-r from-primary/5 to-primary/10 rounded-xl p-4 mb-6">
									<div class="grid grid-cols-3 gap-4">
										<div class="text-center">
											<div class="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
												<Clock size={18} class="text-primary" />
											</div>
											<div class="text-sm font-semibold">{program.duration}</div>
										</div>
										<div class="text-center">
											<div class="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
												<Users size={18} class="text-primary" />
											</div>
											<div class="text-sm font-semibold">{program.groupSize}</div>
										</div>
										<div class="text-center">
											<div class="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
												<Coins size={18} class="text-primary" />
											</div>
											<div class="text-sm font-bold text-primary">{program.price}</div>
										</div>
									</div>
								</div>

								<!-- Features -->
								<div class="space-y-3 mb-8">
									{#each program.features as feature}
										<div class="flex items-start gap-3">
											<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 48 48" class="text-primary flex-shrink-0 mt-1">
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

								<!-- CTAs -->
								<div class="flex gap-3">
									<Button href={localizeHref("/contact")} variant="cta" size="xl" class="flex-1 tennis-hover">{m["programs_page.cta_reserve"]()}</Button>
								</div>
							</div>
						</CardContent>
					</Card>
				{/each}
			</div>

			<!-- Special Programs Grid (2 in row) -->
			<div class="grid md:grid-cols-2 gap-8 mb-16">
			{#each specialPrograms as program}
				<Card class="glass-modern h-full border-none shadow-none">
					<CardContent class="p-0">
						<!-- Program Image -->
						<div class="card-media aspect-[4/3]">
							<img src={program.image} alt={program.title} loading="lazy" />
							<div class="absolute inset-0 bg-gradient-to-t from-black/55 via-black/25 to-transparent"></div>
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

							<!-- Program Details -->
							<div class="bg-gradient-to-r from-primary/5 to-primary/10 rounded-xl p-4 mb-6">
								<div class="grid grid-cols-3 gap-4">
									<div class="text-center">
										<div class="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
											<Clock size={16} class="text-primary" />
										</div>
										<div class="text-xs font-semibold">{program.duration}</div>
									</div>
									<div class="text-center">
										<div class="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
											<Users size={16} class="text-primary" />
										</div>
										<div class="text-xs font-semibold">{program.groupSize}</div>
									</div>
									<div class="text-center">
										<div class="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
											<Coins size={16} class="text-primary" />
										</div>
										<div class="text-xs font-bold text-primary leading-tight">{program.price}</div>
									</div>
								</div>
							</div>

							<!-- Features -->
							<div class="mb-6">
								<div class="space-y-2">
									{#each program.features as feature}
										<div class="flex items-start gap-3">
											<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 48 48" class="text-primary flex-shrink-0 mt-1">
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

							<!-- CTA -->
							<div class="mt-auto">
								<Button href={localizeHref("/contact")} variant="cta" size="xl" class="w-full tennis-hover">
									{program.id === "camps" ? m["programs_page.cta_reserve_camp"]() : m["programs_page.cta_more_info"]()}
								</Button>
							</div>
						</div>
					</CardContent>
				</Card>
			{/each}
			</div>

			<!-- Bottom CTA -->
			<Card class="bg-primary text-primary-foreground">
				<CardContent class="p-8 text-center">
					<h3 class="font-bold mb-4">{m["programs_page.bottom_cta_title"]()}</h3>
					<p class="text-base mb-6 opacity-90">{m["programs_page.bottom_cta_description"]()}</p>
					<Button href={localizeHref("/contact")} variant="cta-inverse" size="xl" class="tennis-hover">
						{m["programs_page.bottom_cta_button"]()}
						<ArrowRight size={20} />
					</Button>
				</CardContent>
			</Card>
		</div>
	</section>
</div>
