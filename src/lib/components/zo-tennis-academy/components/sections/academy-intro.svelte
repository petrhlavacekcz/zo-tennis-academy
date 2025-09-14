<script lang="ts">
	import { Card, CardContent } from "$lib/components/ui/card";

	let features = [
		{ title: "Zkušení trenéři", description: "Profesionální koučování od bývalých hráčů WTA" },
		{ title: "Příjemné zázemí", description: "Moderní kurty a špičkové vybavení" },
		{ title: "Všechny úrovně", description: "Od začátečníků po pokročilé hráče" },
		{ title: "Flexibilní rozvrh", description: "Přizpůsobíme se vašemu času" },
	];
</script>

<section class="py-24 bg-card">
	<div class="container mx-auto px-4">
		<div class="grid lg:grid-cols-2 gap-12 items-center">
			<!-- Left Column - Content -->
			<div>
				<h2 class="text-4xl font-bold mb-6">
					Personalizovaný přístup k <span class="text-primary">tenisu</span>
				</h2>
				<p class="text-lg text-muted-foreground mb-8 leading-relaxed">V ZO Tennis Academy věříme, že každý hráč je jedinečný. Naše programy jsou navrženy tak, aby maximalizovaly váš potenciál prostřednictvím individuálního přístupu a profesionálního vedení.</p>

				<!-- Features -->
				<div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
					{#each features as feature}
						<div class="flex items-start gap-3">
							<div class="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
							<div>
								<h4 class="font-semibold mb-1">{feature.title}</h4>
								<p class="text-sm text-muted-foreground">{feature.description}</p>
							</div>
						</div>
					{/each}
				</div>
			</div>

			<!-- Right Column - Image -->
			<div class="relative">
				<Card class="overflow-hidden rounded-xl shadow-none ring-1 ring-transparent hover:ring-border/30 bg-transparent transition">
					<CardContent class="p-0">
						<img src="https://c.svelte0.com/placeholder.svg?size=square" alt="Tennis training session" class="w-full h-96 object-cover" />
					</CardContent>
				</Card>

				<!-- Floating Stats Card -->
				<Card class="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 tennis-hover">
					<CardContent class="p-0 text-center">
						<div class="text-2xl font-bold">74th</div>
						<div class="text-sm opacity-90">WTA Ranking</div>
					</CardContent>
				</Card>
			</div>
		</div>
	</div>
</section>
