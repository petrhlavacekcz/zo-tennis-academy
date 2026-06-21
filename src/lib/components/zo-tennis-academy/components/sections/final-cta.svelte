<script lang="ts">
	import { Button } from "$lib/components/ui/button";
	import ArrowRight from "@lucide/svelte/icons/arrow-right";
	import Phone from "@lucide/svelte/icons/phone";
	import { localizeHref } from "$lib/utils/localize";
	import * as m from "$lib/paraglide/messages";
</script>

<section class="py-24 bg-primary text-primary-foreground relative overflow-hidden">
	<!-- Tennis Court SVG Pattern -->
	<div class="absolute inset-0 opacity-10" aria-hidden="true">
		<svg viewBox="0 0 800 300" preserveAspectRatio="xMidYMid slice" class="w-full h-full">
			<!-- Court outer boundary -->
			<rect x="50" y="30" width="700" height="240" fill="none" stroke="white" stroke-width="3"/>
			<!-- Net (center vertical line) -->
			<line x1="400" y1="30" x2="400" y2="270" stroke="white" stroke-width="2"/>
			<!-- Service line (horizontal) -->
			<line x1="50" y1="150" x2="750" y2="150" stroke="white" stroke-width="1.5"/>
			<!-- Left center service line -->
			<line x1="225" y1="150" x2="225" y2="270" stroke="white" stroke-width="1.5"/>
			<!-- Right center service line -->
			<line x1="575" y1="150" x2="575" y2="270" stroke="white" stroke-width="1.5"/>
			<!-- Center marks -->
			<line x1="400" y1="264" x2="400" y2="270" stroke="white" stroke-width="2.5"/>
			<line x1="400" y1="30" x2="400" y2="36" stroke="white" stroke-width="2.5"/>
		</svg>
	</div>

	<div class="mx-auto max-w-[1320px] px-6 md:px-12 text-center relative z-10 reveal">
		<h2 class="text-section-heading mb-6">{m["final_cta.heading"]()}</h2>

		<p class="text-lg mb-8 max-w-2xl mx-auto opacity-90 leading-relaxed">{m["final_cta.description"]()}</p>

		<div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
			<Button href={localizeHref("/contact")} variant="cta-inverse" size="xl" class="group">
				<Phone size={20} />
				{m["final_cta.cta_primary"]()}
				<ArrowRight size={20} class="group-hover:translate-x-1 transition-transform" />
			</Button>

			<Button href={localizeHref("/programs")} variant="outline-inverse" size="xl">
				{m["final_cta.cta_secondary"]()}
			</Button>
		</div>

		<!-- Contact Info -->
		<div class="mt-12 pt-8 border-t border-white/20">
			<p class="text-base opacity-90">
				{m["final_cta.contact_text"]()}
				<a href="tel:+420603441399" class="font-semibold hover:underline">{m["final_cta.phone"]()}</a>
			</p>
		</div>
	</div>
</section>
