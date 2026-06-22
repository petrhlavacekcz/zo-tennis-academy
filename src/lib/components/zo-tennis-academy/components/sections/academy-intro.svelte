<script lang="ts">
	import { asset } from "$app/paths";
	import CheckIcon from "./check-icon.svelte";
	import * as m from "$lib/paraglide/messages";

	let features = [
		{ title: () => m["academy_intro.features.experienced_coaches.title"](), description: () => m["academy_intro.features.experienced_coaches.description"]() },
		{ title: () => m["academy_intro.features.pleasant_facilities.title"](), description: () => m["academy_intro.features.pleasant_facilities.description"]() },
		{ title: () => m["academy_intro.features.all_levels.title"](), description: () => m["academy_intro.features.all_levels.description"]() },
		{ title: () => m["academy_intro.features.flexible_schedule.title"](), description: () => m["academy_intro.features.flexible_schedule.description"]() },
	];
</script>

<section class="py-16 md:py-24 bg-card">
	<div class="mx-auto max-w-[1320px] px-6 md:px-12">
		<div class="grid lg:grid-cols-2 gap-12 items-center">
			<!-- Left Column - Content -->
			<div>
				<h2 class="text-section-heading mb-6">
					{m["academy_intro.heading"]()} <span class="text-primary">{m["academy_intro.heading_highlight"]()}</span>
				</h2>
				<p class="text-lg text-muted-foreground mb-8 leading-relaxed">{m["academy_intro.description"]()}</p>

				<!-- Features -->
				<div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
					{#each features as feature}
						<div class="flex items-start gap-3">
							<CheckIcon size={16} class="text-primary flex-shrink-0 mt-1" />
							<div>
								<h3 class="font-semibold mb-1">{feature.title()}</h3>
								<p class="text-base text-muted-foreground">{feature.description()}</p>
							</div>
						</div>
					{/each}
				</div>
			</div>

			<!-- Right Column - Image -->
			<div class="relative">
				<div class="card-media aspect-[4/3] w-full overflow-hidden rounded-2xl">
					<img
						src={asset("/zuzana-ondraskova-2.webp")}
						alt="Tennis training session"
						loading="lazy"
						class="object-cover w-full h-full"
					/>
				</div>
			</div>
		</div>
	</div>
</section>
