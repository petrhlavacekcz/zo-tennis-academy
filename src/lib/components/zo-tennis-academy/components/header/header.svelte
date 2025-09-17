<script lang="ts">
	import { Button } from "$lib/components/ui/button";
	import { Menu, X } from "@lucide/svelte";
	import MobileMenu from "./mobile-menu.svelte";
	import ThemeSwitcher from "../theme/theme-switcher.svelte";
	import { onMount } from 'svelte';

	interface Props {
		currentPage: string;
		navigateTo: (page: string) => void;
		themeMode: 'light' | 'dark' | 'system';
		setThemeMode: (m: 'light' | 'dark' | 'system') => void;
	}

	let { currentPage, navigateTo, themeMode, setThemeMode }: Props = $props();
	let isMobileMenuOpen = $state(false);
	let headerRef: HTMLElement;
	let magneticItems: HTMLElement[] = [];

	const navItems = [
		{ id: "home", label: "Domů", labelEn: "HOME" },
		{ id: "coaches", label: "Trenéři", labelEn: "COACHES" },
		{ id: "programs", label: "Programy", labelEn: "PROGRAMS" },
		{ id: "contact", label: "Kontakt", labelEn: "CONTACT" },
	];

	function handleNavigation(page: string) {
		navigateTo(page);
		isMobileMenuOpen = false;
	}

	// Magnetic effect for desktop menu items
	function addMagneticEffect(element: HTMLElement) {
		if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

		const handleMouseMove = (e: MouseEvent) => {
			const rect = element.getBoundingClientRect();
			const x = e.clientX - rect.left - rect.width / 2;
			const y = e.clientY - rect.top - rect.height / 2;

			// Limit the magnetic effect strength
			const strength = 0.15;
			const maxDistance = 50;
			const distance = Math.sqrt(x * x + y * y);

			if (distance < maxDistance) {
				element.style.transform = `translate(${x * strength}px, ${y * strength}px) scale(1.02)`;
			}
		};

		const handleMouseLeave = () => {
			element.style.transform = 'translate(0, 0) scale(1)';
		};

		element.addEventListener('mousemove', handleMouseMove);
		element.addEventListener('mouseleave', handleMouseLeave);

		return () => {
			element.removeEventListener('mousemove', handleMouseMove);
			element.removeEventListener('mouseleave', handleMouseLeave);
		};
	}

	onMount(() => {
		// Add magnetic effect to desktop menu items
		const menuItems = headerRef?.querySelectorAll('.magnetic-item');
		const cleanupFunctions: (() => void)[] = [];

		menuItems?.forEach((item) => {
			const cleanup = addMagneticEffect(item as HTMLElement);
			if (cleanup) cleanupFunctions.push(cleanup);
		});

		return () => {
			cleanupFunctions.forEach(cleanup => cleanup());
		};
	});
</script>

<header bind:this={headerRef} class="sticky top-0 z-50 glass-tennis">
	<div class="mx-auto max-w-[1320px] px-6 md:px-12">
		<div class="flex items-center justify-between h-16">
			<!-- Enhanced Logo -->
			<button onclick={() => handleNavigation("home")} class="logo-tennis-enhanced flex items-center gap-2 text-2xl font-bold">
				<span class="logo-zo text-primary">ZO</span>
				<span class="logo-tennis-text">TENNIS</span>
			</button>

			<!-- Enhanced Desktop Navigation -->
			<nav class="hidden md:flex items-center gap-8">
				{#each navItems as item}
					<button
						onclick={() => handleNavigation(item.id)}
						class={`menu-item-tennis magnetic-item focus-tennis font-medium uppercase tracking-wide ${currentPage === item.id ? "active" : ""}`}
					>
						{item.label}
					</button>
				{/each}
			</nav>

			<!-- Right controls (Desktop) -->
			<div class="hidden md:flex items-center gap-3">
				<Button onclick={() => handleNavigation("contact")} class="cta-tennis-enhanced focus-tennis uppercase tracking-wide">REZERVOVAT</Button>
				<ThemeSwitcher mode={themeMode} {setThemeMode} />
			</div>

			<!-- Enhanced Mobile Menu Button -->
			<button onclick={() => (isMobileMenuOpen = !isMobileMenuOpen)} class="md:hidden mobile-menu-btn-tennis p-2">
				{#if isMobileMenuOpen}
					<X size={24} />
				{:else}
					<Menu size={24} />
				{/if}
			</button>
		</div>
	</div>

	<!-- Mobile Menu -->
	{#if isMobileMenuOpen}
		<MobileMenu {navItems} {currentPage} {handleNavigation} themeMode={themeMode} {setThemeMode} />
	{/if}
</header>
