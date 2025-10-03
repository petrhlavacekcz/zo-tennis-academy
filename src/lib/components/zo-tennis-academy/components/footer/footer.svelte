<script lang="ts">
	import Phone from "@lucide/svelte/icons/phone";
	import Mail from "@lucide/svelte/icons/mail";

	interface Props {
		navigateTo: (page: string) => void;
	}

	let { navigateTo }: Props = $props();
</script>

<footer class="bg-[#F5F5F5] dark:bg-[#111] border-t border-border">
	<!-- Main Footer Content -->
	<div class="container mx-auto px-4 py-16">
		<div class="grid md:grid-cols-3 gap-12">
			<!-- Company Info -->
			<div>
				<div class="flex items-center gap-2 text-2xl font-bold mb-4">
					<span class="text-primary">ZO</span>
					<span>TENNIS ACADEMY</span>
				</div>
				<p class="text-muted-foreground mb-6 leading-relaxed">Profesionální tenisová akademie pod vedením bývalé hráčky WTA Zuzany Ondraskové. Pomáháme hráčům všech úrovní dosáhnout jejich tenisových cílů.</p>
			</div>

			<!-- Address -->
			<div>
				<h3 class="font-semibold text-lg mb-6">Adresa</h3>
				<p class="text-muted-foreground leading-relaxed">
					Ivana Kubince<br />
					747 91 Štítina<br />
					Česká republika
				</p>
			</div>

			<!-- Contact Info -->
			<div>
				<h3 class="font-semibold text-lg mb-6">Kontakt</h3>
				<div class="space-y-3">
					<a
						href="mailto:info@zotennisacademy.cz"
						class="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
					>
						<Mail size={18} class="shrink-0 group-hover:scale-110 transition-transform" />
						<span>info@zotennisacademy.cz</span>
					</a>
					<a
						href="tel:+420603441399"
						class="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
					>
						<Phone size={18} class="shrink-0 group-hover:scale-110 transition-transform" />
						<span>+420 603 441 399</span>
					</a>
				</div>
			</div>
		</div>
	</div>

	<!-- Bottom Footer -->
	<div class="border-t border-border">
		<div class="container mx-auto px-4 py-6">
			<div class="flex flex-col md:flex-row justify-between items-center gap-4">
				<p class="text-muted-foreground text-sm">© 2025 ZO Tennis Academy. Všechna práva vyhrazena.</p>
			</div>
		</div>
	</div>
</footer>
