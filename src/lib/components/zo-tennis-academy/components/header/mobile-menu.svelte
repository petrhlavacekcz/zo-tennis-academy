<script lang="ts">
	import { Button } from "$lib/components/ui/button";
	import ThemeSwitcher from "../theme/theme-switcher.svelte";

	interface Props {
		navItems: Array<{ id: string; label: string; labelEn: string }>;
		currentPage: string;
		handleNavigation: (page: string) => void;
		themeMode: 'light' | 'dark' | 'system';
		setThemeMode: (m: 'light' | 'dark' | 'system') => void;
		isOnDarkBackground: boolean;
	}

	let { navItems, currentPage, handleNavigation, themeMode, setThemeMode, isOnDarkBackground }: Props = $props();

	let textColor = $derived(isOnDarkBackground ? "text-white" : "text-foreground");
	let iconFilter = $derived(isOnDarkBackground ? "filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.5));" : "");
	let menuBackground = $derived(isOnDarkBackground ? "bg-black/90 backdrop-blur-md" : "bg-white/95 backdrop-blur-md border-b border-border");
</script>

<div class={`md:hidden ${menuBackground}`}>
	<div class="mx-auto max-w-[1320px] px-6 md:px-12 py-6">
		<nav class="flex flex-col gap-4">
			{#each navItems as item, index}
				<button
					onclick={() => handleNavigation(item.id)}
					class={`mobile-menu-item-tennis text-left py-3 px-4 font-medium uppercase tracking-wide transition-colors ${currentPage === item.id ? "text-primary bg-primary/10" : `${textColor} hover:text-primary ${isOnDarkBackground ? 'hover:bg-white/5' : 'hover:bg-black/5'}`}`}
					style={`animation-delay: ${index * 100}ms`}
				>
					{item.label}
				</button>
			{/each}

			<!-- Theme Switcher (icon-only, accessible) -->
			<div class="pt-2">
				<div class="flex items-center justify-end px-4 py-3">
					<ThemeSwitcher mode={themeMode} {setThemeMode} {textColor} {iconFilter} />
				</div>
			</div>

			<div class="pt-4 border-t border-border">
				<Button onclick={() => handleNavigation("contact")} class="w-full tennis-hover btn-press uppercase tracking-wide">REZERVOVAT</Button>
			</div>
		</nav>
	</div>
</div>
