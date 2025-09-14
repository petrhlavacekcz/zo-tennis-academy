<script lang="ts">
	import { Card, CardContent, CardHeader, CardTitle } from "$lib/components/ui/card";
	import { Button } from "$lib/components/ui/button";
	import { Badge } from "$lib/components/ui/badge";


	import { UsersIcon, TargetIcon, TrophyIcon, ClockIcon, ArrowRightIcon, CheckIcon } from "lucide-svelte";

	interface Props {
		navigateTo: (page: string) => void;
	}

	let { navigateTo }: Props = $props();

	let programs = [
		{
			id: "junior",
			title: "Juniorský rozvoj",
			subtitle: "6-18 let",
			description: "Komplexní program zaměřený na technický a taktický rozvoj mladých hráčů s důrazem na správné základy a postupný růst.",
			icon: UsersIcon,
			color: "text-blue-500",
			duration: "60-90 minut",
			groupSize: "4-6 hráčů",
			price: "Od 800 Kč/lekce",
			features: ["Individuální přístup k každému dítěti", "Progresivní výuka techniky", "Rozvoj koordinace a atletiky", "Turnajová příprava", "Mentální příprava", "Pravidelné hodnocení pokroku"],
		},
		{
			id: "adult",
			title: "Lekce pro dospělé",
			subtitle: "Začátečníci až pokročilí",
			description: "Flexibilní programy přizpůsobené vašemu tempu a cílům. Vhodné pro všechny úrovně bez ohledu na věk nebo zkušenosti.",
			icon: TargetIcon,
			color: "text-green-500",
			duration: "60 minut",
			groupSize: "2-4 hráči",
			price: "Od 1000 Kč/lekce",
			features: ["Všechny úrovně vítány", "Flexibilní časové rozvrhy", "Moderní výukové metody", "Technická analýza", "Taktické situace", "Kondičního příprava"],
		},
		{
			id: "camps",
			title: "Letní kempy",
			subtitle: "Intenzivní týdenní programy",
			description: "Intenzivní letní tréninky kombinující techniku, kondici, taktiku a zábavu v přátelské atmosféře.",
			icon: TrophyIcon,
			color: "text-primary",
			duration: "5 dní",
			groupSize: "8-12 hráčů",
			price: "Od 3500 Kč/týden",
			features: ["Celotýdenní intenzivní program", "Kombinace tréninku a zábavy", "Všestranný rozvoj hráče", "Turnaje a soutěže", "Profesionální dozor", "Občerstvení zajištěno"],
		},
		{
			id: "private",
			title: "Soukromé koučování",
			subtitle: "Individuální přístup",
			description: "Personalizované tréninky zaměřené na vaše specifické potřeby, slabiny a cíle s maximální pozorností trenéra.",
			icon: ClockIcon,
			color: "text-purple-500",
			duration: "60 minut",
			groupSize: "1 hráč",
			price: "Od 1500 Kč/lekce",
			features: ["100% pozornost trenéra", "Rychlý pokrok", "Flexibilní rozvrh", "Individuální plán rozvoje", "Video analýza", "Osobní konzultace"],
		},
	];
</script>

<div class="min-h-screen bg-background">
	<!-- Page Header -->
	<section class="py-16 bg-card border-b border-primary/20">
		<div class="container mx-auto px-4 text-center">
			<h1 class="text-5xl md:text-6xl font-bold mb-4">
				NAŠE <span class="text-primary">PROGRAMY</span>
			</h1>
			<p class="text-xl text-muted-foreground max-w-2xl mx-auto">Vyberte si program, který nejlépe odpovídá vašim potřebám a tenisovým ambicím</p>
		</div>
	</section>

	<!-- Programs Grid -->
	<section class="py-20">
		<div class="container mx-auto px-4">
			<div class="grid md:grid-cols-2 gap-8 mb-16">
				{#each programs as program}
					<Card class="group h-full overflow-hidden rounded-2xl bg-white dark:bg-[#1E1E1E] shadow-sm transition hover:shadow-md hover-glow-orange hover-scale">
						<CardHeader class="pb-6">
							<div class="flex items-center gap-4 mb-4">
								<div class="w-16 h-16 bg-accent rounded-xl flex items-center justify-center">
									<program.icon size={32} class={program.color} />
								</div>
								<div>
									<CardTitle class="text-2xl">{program.title}</CardTitle>
									<p class="text-muted-foreground">{program.subtitle}</p>
								</div>
							</div>
						</CardHeader>

						<CardContent class="pt-0">
							<p class="text-muted-foreground mb-6 leading-relaxed">
								{program.description}
							</p>

							<!-- Program Details -->
							<div class="grid grid-cols-3 gap-4 mb-6 p-4 bg-accent/50 rounded-lg">
								<div class="text-center">
									<ClockIcon size={20} class="text-primary mx-auto mb-1" />
									<div class="text-sm font-medium">{program.duration}</div>
								</div>
								<div class="text-center">
									<UsersIcon size={20} class="text-primary mx-auto mb-1" />
									<div class="text-sm font-medium">{program.groupSize}</div>
								</div>
								<div class="text-center">
									<TargetIcon size={20} class="text-primary mx-auto mb-1" />
									<div class="text-sm font-medium text-primary">{program.price}</div>
								</div>
							</div>

							<!-- Features -->
							<div class="space-y-3 mb-8">
								{#each program.features as feature}
									<div class="flex items-start gap-3">
										<CheckIcon size={16} class="text-primary mt-0.5 flex-shrink-0" />
										<span class="text-sm">{feature}</span>
									</div>
								{/each}
							</div>

							<!-- CTAs -->
							<div class="flex gap-3">
								<Button variant="outline" class="flex-1 group-hover:border-primary group-hover:text-primary transition-colors">
									Více informací
									<ArrowRightIcon size={16} class="ml-2" />
								</Button>
								<Button onclick={() => navigateTo("contact")} class="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground">Rezervovat</Button>
							</div>
						</CardContent>
					</Card>
				{/each}

				<!-- Pricing Section -->
				<section class="mb-16">
					<div class="text-center mb-8">
						<h2 class="text-3xl md:text-4xl font-bold">Ceník</h2>
						<p class="text-muted-foreground">Vyberte si balíček, který vám nejlépe sedí</p>
					</div>
					<div class="grid md:grid-cols-3 gap-6">
						<!-- Junior -->
						<Card class="rounded-2xl bg-white dark:bg-[#1E1E1E] shadow-sm p-6 transition hover:shadow-md hover-glow-orange hover-scale">
							<h3 class="text-2xl font-bold">Junior</h3>
							<p class="text-muted-foreground">6–18 let</p>
							<div class="text-4xl font-extrabold text-primary mt-4">od 800 Kč</div>
							<ul class="mt-4 space-y-2 text-sm text-muted-foreground">
								<li>Skupinové lekce</li>
								<li>Technika a základy</li>
								<li>Progresivní plán</li>
							</ul>
							<Button class="mt-6 w-full bg-[#FF6B00] hover:bg-[#E55D00] rounded-full font-bold">Rezervovat</Button>
						</Card>

						<!-- Dospělí (Popular) -->
						<Card class="relative rounded-2xl bg-white dark:bg-[#1E1E1E] shadow-sm p-6 transition hover:shadow-md hover-glow-orange hover-scale">
							<div class="absolute -top-3 right-4">
								<Badge>Nejpopulárnější</Badge>
							</div>
							<h3 class="text-2xl font-bold">Dospělí</h3>
							<p class="text-muted-foreground">Začátečníci až pokročilí</p>
							<div class="text-4xl font-extrabold text-primary mt-4">od 1000 Kč</div>
							<ul class="mt-4 space-y-2 text-sm text-muted-foreground">
								<li>Flexibilní rozvrh</li>
								<li>Moderní metody výuky</li>
								<li>Technická analýza</li>
							</ul>
							<Button class="mt-6 w-full bg-[#FF6B00] hover:bg-[#E55D00] rounded-full font-bold">Rezervovat</Button>
						</Card>

						<!-- Individuální -->
						<Card class="rounded-2xl bg-white dark:bg-[#1E1E1E] shadow-sm p-6 transition hover:shadow-md hover-glow-orange hover-scale">
							<h3 class="text-2xl font-bold">Individuální</h3>
							<p class="text-muted-foreground">1 : 1 trénink</p>
							<div class="text-4xl font-extrabold text-primary mt-4">od 1500 Kč</div>
							<ul class="mt-4 space-y-2 text-sm text-muted-foreground">
								<li>100% pozornost trenéra</li>
								<li>Rychlý pokrok</li>
								<li>Osobní plán</li>
							</ul>
							<Button class="mt-6 w-full bg-[#FF6B00] hover:bg-[#E55D00] rounded-full font-bold">Rezervovat</Button>
						</Card>
					</div>
				</section>

			</div>

			<!-- Bottom CTA -->
			<Card class="bg-primary text-primary-foreground tennis-hover">
				<CardContent class="p-8 text-center">
					<h3 class="text-2xl font-bold mb-4">Nevíte, který program je pro vás ten pravý?</h3>
					<p class="text-lg mb-6 opacity-90">Kontaktujte nás a my vám pomůžeme vybrat ideální program podle vašich potřeb a cílů.</p>
					<Button onclick={() => navigateTo("contact")} variant="secondary" size="lg" class="bg-white text-primary hover:bg-gray-100 font-semibold tennis-hover">
						Kontaktovat nás
						<ArrowRightIcon size={20} class="ml-2" />
					</Button>
				</CardContent>
			</Card>
		</div>
	</section>
</div>
