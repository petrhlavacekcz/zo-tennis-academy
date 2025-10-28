<script lang="ts">
	import { Card, CardContent, CardHeader, CardTitle } from "$lib/components/ui/card";
	import { Button } from "$lib/components/ui/button";
	import { Phone, Mail, MapPin, ChevronDown } from "@lucide/svelte";
	import { asset } from "$app/paths";
	import * as m from "$lib/paraglide/messages";

	let expandedFaq = $state<number | null>(null);

	let faqs = [
		{
			question: m["contact_page.faq.lesson_duration.question"](),
			answer: m["contact_page.faq.lesson_duration.answer"](),
		},
		{
			question: m["contact_page.faq.equipment.question"](),
			answer: m["contact_page.faq.equipment.answer"](),
		},
		{
			question: m["contact_page.faq.trial_lesson.question"](),
			answer: m["contact_page.faq.trial_lesson.answer"](),
		},
	];

	function toggleFaq(index: number) {
		expandedFaq = expandedFaq === index ? null : index;
	}
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
				<span class="text-primary">{m["contact_page.hero_title"]()}</span>
			</h1>
			<p class="text-lg text-white/90 max-w-2xl mx-auto">{m["contact_page.hero_description"]()}</p>
		</div>
	</section>

	<!-- Contact Content -->
	<section class="py-24">
		<div class="mx-auto max-w-[1180px] px-6 md:px-12">
			<div class="grid gap-10 lg:grid-cols-[1.1fr_1fr] items-stretch">
				<Card class="h-full rounded-3xl border border-border/50 bg-card/95 shadow-[0_24px_50px_rgba(15,15,15,0.12)]">
					<CardContent class="flex h-full flex-col gap-10 p-10 lg:p-12">
						<div class="space-y-4">
							<span class="text-xs font-semibold uppercase tracking-[0.35em] text-primary/70">{m["contact_page.contact_card_title"]()}</span>
							<h2 class="text-3xl lg:text-4xl font-semibold leading-tight">{m["contact_page.contact_card_description"]()}</h2>
						</div>

						<div class="space-y-6">
							<Button href="mailto:info@zotennisacademy.cz" size="lg" class="w-full sm:w-auto px-8 bg-primary text-primary-foreground hover:bg-primary/90">
								info@zotennisacademy.cz
							</Button>

							<div class="grid gap-4">
								<div class="flex items-center gap-4 rounded-2xl bg-primary/5 px-5 py-4">
									<div class="rounded-xl bg-primary/10 p-2">
										<Phone size={20} class="text-primary" />
									</div>
									<div class="flex flex-col">
										<p class="text-xs uppercase tracking-wide text-muted-foreground">{m["contact_page.phone_label"]()}</p>
										<a href="tel:+420603441399" class="text-base font-semibold text-foreground hover:text-primary transition-colors whitespace-nowrap">+420 603 441 399</a>
									</div>
								</div>
								<div class="flex items-center gap-4 rounded-2xl bg-primary/5 px-5 py-4">
									<div class="rounded-xl bg-primary/10 p-2">
										<MapPin size={20} class="text-primary" />
									</div>
									<div class="flex flex-col">
										<p class="text-xs uppercase tracking-wide text-muted-foreground">{m["contact_page.address_label"]()}</p>
										<p class="text-base font-semibold text-foreground">{m["contact_page.address_value"]()}</p>
									</div>
								</div>
							</div>
						</div>
					</CardContent>
				</Card>

				<Card class="h-full rounded-3xl border border-border/50 bg-card/95 shadow-[0_24px_50px_rgba(15,15,15,0.12)] overflow-hidden">
					<CardHeader class="p-8 pb-4">
						<CardTitle class="text-2xl">{m["contact_page.map_title"]()}</CardTitle>
					</CardHeader>
					<CardContent class="flex flex-1 flex-col p-0">
						<div class="h-full min-h-[320px] w-full overflow-hidden">
							<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d164414.26148944293!2d17.845595979753472!3d49.918084725551466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4713df4728419c79%3A0x9a86c21f4da6084c!2sZO%20TENNIS%20ACADEMY%20-%20Zuzana%20Ondr%C3%A1%C5%A1kov%C3%A1!5e0!3m2!1scs!2scz!4v1758808300951!5m2!1scs!2scz" width="100%" height="100%" style="border:0;" allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="ZO Tennis Academy location map"></iframe>
						</div>
					</CardContent>
				</Card>
			</div>

			<Card class="mt-12 rounded-3xl border border-border/50 bg-card/95 shadow-[0_18px_40px_rgba(15,15,15,0.08)]">
				<CardHeader class="px-8 pt-8 pb-4">
					<CardTitle class="text-2xl">{m["contact_page.faq_title"]()}</CardTitle>
				</CardHeader>
				<CardContent class="px-2 pb-8">
					<div class="space-y-3">
						{#each faqs as faq, index}
							<div class="rounded-2xl border border-border/60 bg-background/70 overflow-hidden">
								<button onclick={() => toggleFaq(index)} class="w-full px-6 py-4 text-left flex items-center justify-between gap-4 text-base font-medium text-foreground hover:bg-primary/5 transition-colors">
									<span>{faq.question}</span>
									<ChevronDown size={20} class={`text-primary transition-transform ${expandedFaq === index ? "rotate-180" : ""}`} />
								</button>
								{#if expandedFaq === index}
									<div class="px-6 pb-6 text-sm leading-relaxed text-muted-foreground">
										{faq.answer}
									</div>
								{/if}
							</div>
						{/each}
					</div>
				</CardContent>
			</Card>
		</div>
	</section>
</div>
