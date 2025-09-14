<script lang="ts">
	import { Button } from "$lib/components/ui/button";
	import ThemeSwitcher from "../theme/theme-switcher.svelte";

	interface Props {
		navItems: Array<{ id: string; label: string; labelEn: string }>;
		currentPage: string;
		handleNavigation: (page: string) => void;
		themeMode: 'light' | 'dark' | 'system';
		setThemeMode: (m: 'light' | 'dark' | 'system') => void;
	}

	let { navItems, currentPage, handleNavigation, themeMode, setThemeMode }: Props = $props();
</script>

<div class="md:hidden bg-background border-t border-border">
	<div class="container mx-auto px-4 py-6">
		<nav class="flex flex-col gap-4">
			{#each navItems as item, index}
				<button onclick={() => handleNavigation(item.id)} class={`text-left py-3 px-4 rounded-md font-medium transition-all duration-300 hover:bg-accent ${currentPage === item.id ? "text-primary bg-accent" : "text-muted-foreground"}`} style={`animation-delay: ${index * 100}ms`}>
					{item.label}
				</button>
			{/each}

			<!-- Theme Switcher Menu Item -->
			<div class="pt-2">
				<div class="flex items-center justify-between rounded-md px-4 py-3 hover:bg-accent">
					<span class="font-medium text-muted-foreground">Téma</span>
					<ThemeSwitcher mode={themeMode} {setThemeMode} />
				</div>
			</div>

			<div class="pt-4 border-t border-border">
				<Button onclick={() => handleNavigation("contact")} class="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">REZERVOVAT</Button>
			</div>
		</nav>
	</div>
</div>
