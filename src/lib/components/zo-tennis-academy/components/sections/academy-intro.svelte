<script lang="ts">
	import { Card, CardContent } from "$lib/components/ui/card";
	import { assets } from "$app/paths";

	let features = [
		{ title: "Zkušení trenéři", description: "Profesionální koučování od bývalých hráčů WTA" },
		{ title: "Příjemné zázemí", description: "Moderní kurty a špičkové vybavení" },
		{ title: "Všechny úrovně", description: "Od začátečníků po pokročilé hráče" },
		{ title: "Flexibilní rozvrh", description: "Přizpůsobíme se vašemu času" },
	];
</script>

<section class="py-24 bg-card">
	<div class="mx-auto max-w-[1320px] px-6 md:px-12">
		<div class="grid lg:grid-cols-2 gap-12 items-center">
			<!-- Left Column - Content -->
			<div>
				<h2 class="uppercase font-extrabold tracking-tight text-[clamp(1.75rem,3.5vw,2.5rem)] leading-tight mb-6">
					PERSONALIZOVANÝ PŘÍSTUP K <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-500">TENISU</span>
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
						<img src={assets + "/zo-tennis-academy.jpg"} alt="Tennis training session" class="w-full h-96 object-cover" />
					</CardContent>
				</Card>


			</div>
		</div>
	</div>
</section>
