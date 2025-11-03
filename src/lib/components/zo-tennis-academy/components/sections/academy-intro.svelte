<script lang="ts">
	import { Card, CardContent } from "$lib/components/ui/card";
	import { asset } from "$app/paths";
	import * as m from "$lib/paraglide/messages";

	let features = [
		{ title: () => m["academy_intro.features.experienced_coaches.title"](), description: () => m["academy_intro.features.experienced_coaches.description"]() },
		{ title: () => m["academy_intro.features.pleasant_facilities.title"](), description: () => m["academy_intro.features.pleasant_facilities.description"]() },
		{ title: () => m["academy_intro.features.all_levels.title"](), description: () => m["academy_intro.features.all_levels.description"]() },
		{ title: () => m["academy_intro.features.flexible_schedule.title"](), description: () => m["academy_intro.features.flexible_schedule.description"]() },
	];
</script>

<section class="py-24 bg-card">
	<div class="mx-auto max-w-[1320px] px-6 md:px-12">
		<div class="grid lg:grid-cols-2 gap-12 items-center">
			<!-- Left Column - Content -->
			<div>
				<h2 class="text-section-heading mb-6">
					{m["academy_intro.heading"]()} <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-500">{m["academy_intro.heading_highlight"]()}</span>
				</h2>
				<p class="text-lg text-muted-foreground mb-8 leading-relaxed">{m["academy_intro.description"]()}</p>

				<!-- Features -->
				<div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
					{#each features as feature}
						<div class="flex items-start gap-3">
							<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 48 48" class="text-primary flex-shrink-0 mt-1">
								<g fill="none" stroke="currentColor" stroke-width="4">
									<path d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z" />
									<path stroke-linecap="round" stroke-linejoin="round" d="M24 4q-.15 10.003-4.912 15.004Q14.328 24.007 4 24.008" />
									<path stroke-linecap="round" d="M43.968 25.005q-9.768-.67-14.929 4.176Q23.88 34.026 24.004 44" />
								</g>
							</svg>
							<div>
								<h4 class="font-semibold mb-1">{feature.title()}</h4>
								<p class="text-base text-muted-foreground">{feature.description()}</p>
							</div>
						</div>
					{/each}
				</div>
			</div>

			<!-- Right Column - Image -->
			<div class="relative">
				<Card class="overflow-hidden border-none shadow-none bg-transparent">
					<CardContent class="p-0">
						<div class="card-media aspect-[4/3] w-full">
							<img
								src={asset("/zuzana-ondraskova-2.webp")}
								alt="Tennis training session"
								loading="lazy"
								class="object-cover w-full h-full"
							/>
						</div>
					</CardContent>
				</Card>
			</div>
		</div>
	</div>
</section>
