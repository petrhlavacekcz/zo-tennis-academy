<script lang="ts">

	import { FacebookIcon, InstagramIcon, TwitterIcon, YoutubeIcon, MailIcon, PhoneIcon, MapPinIcon } from "lucide-svelte";

	interface Props {
		navigateTo: (page: string) => void;
	}

	let { navigateTo }: Props = $props();

	let programLinks = [
		{ label: "Juniorský rozvoj", id: "programs" },
		{ label: "Lekce pro dospělé", id: "programs" },
		{ label: "Letní kempy", id: "programs" },
		{ label: "Soukromé koučování", id: "programs" },
	];

	let quickLinks = [
		{ label: "Domů", id: "home" },
		{ label: "Trenéři", id: "coaches" },
		{ label: "Programy", id: "programs" },
		{ label: "Kontakt", id: "contact" },
	];

	let socialLinks = [
		{ icon: FacebookIcon, href: "#", label: "Facebook" },
		{ icon: InstagramIcon, href: "https://instagram.com/zo_tennis_academy", label: "Instagram" },
		{ icon: TwitterIcon, href: "#", label: "Twitter" },
		{ icon: YoutubeIcon, href: "#", label: "YouTube" },
	];
</script>

<footer class="bg-[#F5F5F5] dark:bg-[#111] border-t border-border">
	<!-- Main Footer Content -->
	<div class="container mx-auto px-4 py-16">
		<div class="grid md:grid-cols-3 gap-12">
			<!-- Company Info -->
			<div>
				<div class="flex items-center gap-2 text-2xl font-bold mb-4">
					<span class="text-primary">ZO</span>
					<span>TENNIS</span>
				</div>
				<p class="text-muted-foreground mb-6 leading-relaxed">Profesionální tenisová akademie pod vedením bývalé hráčky WTA Zuzany Ondraskové. Pomáháme hráčům všech úrovní dosáhnout jejich tenisových cílů.</p>

				<!-- Social Media -->
				<div class="flex gap-4">
					{#each socialLinks as social}
						<a href={social.href} class="w-10 h-10 border border-border text-muted-foreground hover:bg-primary hover:border-primary hover:text-primary-foreground rounded-lg flex items-center justify-center transition-colors tennis-hover" aria-label={social.label}>
							<social.icon size={20} />
						</a>
					{/each}
				</div>
			</div>

			<!-- Programs Links -->
			<div>
				<h3 class="font-semibold text-lg mb-6">Naše programy</h3>
				<ul class="space-y-3">
					{#each programLinks as link}
						<li>
							<button onclick={() => navigateTo(link.id)} class="text-muted-foreground transition-colors underline-orange">
								{link.label}
							</button>
						</li>
					{/each}
				</ul>
			</div>

			<!-- Contact Info -->
			<div>
				<h3 class="font-semibold text-lg mb-6">Kontakt</h3>
				<div class="space-y-4">
					<div class="flex items-start gap-3">
						<PhoneIcon size={20} class="text-primary mt-0.5" />
						<div>
							<p class="font-medium">+420 123 456 789</p>
							<p class="text-sm text-muted-foreground">Po-Pá: 8:00-20:00</p>
						</div>
					</div>

					<div class="flex items-start gap-3">
						<MailIcon size={20} class="text-primary mt-0.5" />
						<div>
							<p class="font-medium">info@zotennisacademy.cz</p>
							<p class="text-sm text-muted-foreground">Odpovídáme do 24h</p>
						</div>
					</div>

					<div class="flex items-start gap-3">
						<MapPinIcon size={20} class="text-primary mt-0.5" />
						<div>
							<p class="font-medium">Tenisové kurty Štítina</p>
							<p class="text-sm text-muted-foreground">123 45 Štítina</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- Bottom Footer -->
	<div class="border-t border-border">
		<div class="container mx-auto px-4 py-6">
			<div class="flex flex-col md:flex-row justify-between items-center gap-4">
				<p class="text-muted-foreground text-sm">© 2024 ZO Tennis Academy. Všechna práva vyhrazena.</p>

				<div class="flex gap-6">
					{#each quickLinks as link}
						<button onclick={() => navigateTo(link.id)} class="text-sm text-muted-foreground transition-colors underline-orange">
							{link.label}
						</button>
					{/each}
				</div>
			</div>
		</div>
	</div>
</footer>
