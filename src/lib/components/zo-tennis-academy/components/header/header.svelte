<script lang="ts">
	import { Button } from "$lib/components/ui/button";
	import { MenuIcon, XIcon } from "lucide-svelte";
	import MobileMenu from "./mobile-menu.svelte";
	import ThemeSwitcher from "../theme/theme-switcher.svelte";

	interface Props {
		currentPage: string;
		navigateTo: (page: string) => void;
		themeMode: 'light' | 'dark' | 'system';
		setThemeMode: (m: 'light' | 'dark' | 'system') => void;
	}

	let { currentPage, navigateTo, themeMode, setThemeMode }: Props = $props();
	let isMobileMenuOpen = $state(false);

	const navItems = [
		{ id: "home", label: "DOMŮ", labelEn: "HOME" },
		{ id: "coaches", label: "TRENÉŘI", labelEn: "COACHES" },
		{ id: "programs", label: "PROGRAMY", labelEn: "PROGRAMS" },
		{ id: "contact", label: "KONTAKT", labelEn: "CONTACT" },
	];

	function handleNavigation(page: string) {
		navigateTo(page);
		isMobileMenuOpen = false;
	}
</script>

<header class="sticky top-0 z-50 glass">
	<div class="container mx-auto px-4">
		<div class="flex items-center justify-between h-16">
			<!-- Logo -->
			<button onclick={() => handleNavigation("home")} class="flex items-center gap-2 text-2xl font-bold hover:text-primary transition-colors">
				<span class="text-primary">ZO</span>
				<span>TENNIS</span>
			</button>

			<!-- Desktop Navigation -->
			<nav class="hidden md:flex items-center gap-8">
				{#each navItems as item}
					<button onclick={() => handleNavigation(item.id)} class={`font-medium transition-colors hover:underline hover:decoration-2 hover:decoration-primary ${currentPage === item.id ? "text-primary" : "text-muted-foreground"}`}>
						{item.label}
					</button>
				{/each}
			</nav>

			<!-- Right controls (Desktop) -->
			<div class="hidden md:flex items-center gap-3">
				<Button onclick={() => handleNavigation("contact")} class="bg-[#FF6B00] hover:bg-[#E55D00] text-white font-semibold rounded-full tennis-hover">REZERVOVAT</Button>
				<ThemeSwitcher mode={themeMode} {setThemeMode} />
			</div>

			<!-- Mobile Menu Button -->
			<button onclick={() => (isMobileMenuOpen = !isMobileMenuOpen)} class="md:hidden p-2 hover:bg-accent rounded-md transition-colors">
				{#if isMobileMenuOpen}
					<XIcon size={24} />
				{:else}
					<MenuIcon size={24} />
				{/if}
			</button>
		</div>
	</div>

	<!-- Mobile Menu -->
	{#if isMobileMenuOpen}
		<MobileMenu {navItems} {currentPage} {handleNavigation} themeMode={themeMode} {setThemeMode} />
	{/if}
</header>
