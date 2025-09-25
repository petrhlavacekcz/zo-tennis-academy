<script lang="ts">
	import { Card, CardContent, CardHeader, CardTitle } from "$lib/components/ui/card";
	import { Button } from "$lib/components/ui/button";
	import { Input } from "$lib/components/ui/input";
	import { Textarea } from "$lib/components/ui/textarea";
	import { Label } from "$lib/components/ui/label";
	import { Phone, Mail, MapPin, ChevronDown } from "@lucide/svelte";

	let formData = $state({
		name: "",
		email: "",
		phone: "",
		message: "",
	});

	let expandedFaq = $state<number | null>(null);

	let faqs = [
		{
			question: "Jak dlouho trvá jedna lekce?",
			answer: "Standardní lekce trvá 60 minut. Pro juniory nabízíme také kratší 45minutové lekce a pro pokročilé hráče delší 90minutové tréninky.",
		},
		{
			question: "Potřebuji vlastní vybavení?",
			answer: "Pro první lekce můžeme zapůjčit raketu. Doporučujeme však co nejdříve pořídit vlastní vybavení přizpůsobené vaší úrovni a stylu hry.",
		},
		{
			question: "Můžu si vybrat trenéra?",
			answer: "Ano, můžete si vybrat konkrétního trenéra podle vašich preferencí. Rádi vám také doporučíme trenéra na základě vašich cílů a úrovně.",
		},
		{
			question: "Nabízíte zkušební lekci?",
			answer: "Ano, pro všechny nové studenty nabízíme bezplatnou zkušební lekci, kde si můžete vyzkoušet náš přístup a poznat trenéra.",
		},
	];

	function handleSubmit(event: Event) {
		event.preventDefault();
		console.log("Form submitted:", formData);
		// Handle form submission
	}

	function toggleFaq(index: number) {
		expandedFaq = expandedFaq === index ? null : index;
	}
</script>

<div class="min-h-screen bg-background">
	<!-- Page Header -->
	<section class="py-24 bg-card border-b border-primary/20">
		<div class="mx-auto max-w-[1320px] px-6 md:px-12 text-center">
			<h1 class="text-page-heading mb-4">
				<span class="text-primary">KONTAKT</span>
			</h1>
			<p class="text-lg text-muted-foreground max-w-2xl mx-auto">Máte otázky nebo chcete rezervovat lekci? Jsme tu pro vás!</p>
		</div>
	</section>

	<!-- Contact Content -->
	<section class="py-24">
		<div class="mx-auto max-w-[1320px] px-6 md:px-12">
			<div class="grid lg:grid-cols-2 gap-12">
				<!-- Contact Form -->
				<Card class="shadow-sm bg-card/95">
					<CardHeader>
						<CardTitle class="text-2xl">Napište nám</CardTitle>
						<p class="text-muted-foreground">Vyplňte formulář a my se vám ozveme do 24 hodin.</p>
					</CardHeader>
					<CardContent>
						<form onsubmit={handleSubmit} class="space-y-6">
							<div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
								<div>
									<Label for="name">Jméno *</Label>
									<Input id="name" bind:value={formData.name} placeholder="Vaše jméno" required class="mt-1" />
								</div>
								<div>
									<Label for="phone">Telefon</Label>
									<Input id="phone" bind:value={formData.phone} placeholder="+420 603 441 399" class="mt-1" />
								</div>
							</div>

							<div>
								<Label for="email">Email *</Label>
								<Input id="email" type="email" bind:value={formData.email} placeholder="vas@email.cz" required class="mt-1" />
							</div>

							<div>
								<Label for="message">Zpráva *</Label>
								<Textarea id="message" bind:value={formData.message} placeholder="Napište nám vaši zprávu..." required class="mt-1 min-h-32" />
							</div>

							<Button type="submit" class="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold tennis-hover">ODESLAT ZPRÁVU</Button>
						</form>
					</CardContent>
				</Card>

				<!-- Contact Information -->
				<div class="space-y-8">
					<!-- Contact Details -->
					<Card class="shadow-sm bg-card/95">
						<CardHeader>
							<CardTitle class="text-2xl">Kontaktní údaje</CardTitle>
						</CardHeader>
						<CardContent class="space-y-6">
							<div class="flex items-start gap-4">
								<Phone size={24} class="text-primary mt-1" />
								<div>
									<h4 class="font-semibold mb-1">Telefon</h4>
									<p class="text-muted-foreground">+420 603 441 399</p>

								</div>
							</div>

							<div class="flex items-start gap-4">
								<Mail size={24} class="text-primary mt-1" />
								<div>
									<h4 class="font-semibold mb-1">Email</h4>
									<p class="text-muted-foreground">tenis@zotennisacademy.cz</p>

								</div>
							</div>

							<div class="flex items-start gap-4">
								<MapPin size={24} class="text-primary mt-1" />
								<div>
									<h4 class="font-semibold mb-1">Adresa</h4>
									<p class="text-muted-foreground">
										Ivana Kubince
										<br />
										747 91 Štítina
									</p>
								</div>
							</div>

						</CardContent>
					</Card>

					<!-- Map -->
					<Card class="shadow-sm bg-card/95">
						<CardHeader>
							<CardTitle class="text-2xl">Kde nás najdete</CardTitle>
						</CardHeader>
						<CardContent class="p-0">
							<div class="h-80 bg-muted rounded-b-lg overflow-hidden">
								<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d164414.26148944293!2d17.845595979753472!3d49.918084725551466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4713df4728419c79%3A0x9a86c21f4da6084c!2sZO%20TENNIS%20ACADEMY%20-%20Zuzana%20Ondr%C3%A1%C5%A1kov%C3%A1!5e0!3m2!1scs!2scz!4v1757861654340!5m2!1scs!2scz" width="100%" height="100%" style="border:0;" allowfullscreen title="ZO Tennis Academy - mapa" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
							</div>
						</CardContent>
					</Card>

					<!-- FAQ -->
					<Card class="shadow-sm bg-card/95">
						<CardHeader>
							<CardTitle class="text-2xl">Často kladené otázky</CardTitle>
						</CardHeader>
						<CardContent class="space-y-4">
							{#each faqs as faq, index}
								<div class="border border-border rounded-lg">
									<button onclick={() => toggleFaq(index)} class="w-full p-4 text-left flex items-center justify-between hover:bg-accent transition-colors">
										<span class="font-medium">{faq.question}</span>
										<ChevronDown size={20} class={`text-primary transition-transform ${expandedFaq === index ? "rotate-180" : ""}`} />
									</button>
									{#if expandedFaq === index}
										<div class="px-4 pb-4 text-muted-foreground">
											{faq.answer}
										</div>
									{/if}
								</div>
							{/each}
						</CardContent>
					</Card>
				</div>
			</div>
		</div>
	</section>
</div>
