<script lang="ts">
	import { Button } from "$lib/components/ui/button";
	import Menu from "@lucide/svelte/icons/menu";
	import X from "@lucide/svelte/icons/x";
	import MobileMenu from "./mobile-menu.svelte";
	import ThemeSwitcher from "../theme/theme-switcher.svelte";
	import LangSwitcher from "./lang-switcher.svelte";
	import { onMount } from 'svelte';
	import { asset } from "$app/paths";
	import { localizeHref } from "$lib/utils/localize";
	import * as m from "$lib/paraglide/messages";

	interface Props {
		currentPage: string;
		themeMode: 'light' | 'dark' | 'system';
		setThemeMode: (m: 'light' | 'dark' | 'system') => void;
	}

	let { currentPage, themeMode, setThemeMode }: Props = $props();
	let isMobileMenuOpen = $state(false);
	let headerRef: HTMLElement;

	// Lock body scroll when mobile menu is open
	$effect(() => {
		if (typeof document !== 'undefined') {
			document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
			return () => {
				document.body.style.overflow = '';
			};
		}
	});


	// Determine if current page has dark hero background
	let isOnDarkBackground = $derived(currentPage === "home" || currentPage === "coaches" || currentPage === "programs" || currentPage === "contact");
	let textColor = $derived(isOnDarkBackground ? "text-white" : "text-foreground");
	let textShadow = $derived(isOnDarkBackground ? "text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);" : "");
	let iconFilter = $derived(isOnDarkBackground ? "filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.5));" : "");

	const navItems = [
		{ id: "home", href: "/", label: () => m["nav.home"]() },
		{ id: "coaches", href: "/coaches", label: () => m["nav.coaches"]() },
		{ id: "programs", href: "/programs", label: () => m["nav.programs"]() },
		{ id: "contact", href: "/contact", label: () => m["nav.contact"]() },
	];

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

<header bind:this={headerRef} class="absolute top-0 left-0 right-0 z-50 bg-transparent">
	<div class="mx-auto max-w-[1320px] px-6 md:px-12">
		<div class="flex items-center justify-between h-20 pt-4">
			<!-- Enhanced Logo -->
			<a href={localizeHref("/")} class="logo-tennis-enhanced flex items-center gap-2">
				<img src={asset("/zo-tennis-academy-logo.webp")} alt="ZO Tennis Academy" class="h-10 w-auto" />
			</a>

			<!-- Enhanced Desktop Navigation -->
			<nav class="hidden md:flex items-center gap-8">
				{#each navItems as item}
					<a
						href={localizeHref(item.href)}
						class={`menu-item-tennis magnetic-item focus-tennis font-medium uppercase tracking-wide transition-colors ${currentPage === item.id ? "text-primary" : `${textColor} hover:text-primary`}`}
						style={textShadow}
					>
						{item.label()}
					</a>
				{/each}
			</nav>

			<!-- Right controls (Desktop) -->
			<div class="hidden md:flex items-center gap-3">
				<Button href={localizeHref("/contact")} variant="cta" size="lg" class="tennis-hover font-bold">{m["nav.reserve"]()}</Button>
				<LangSwitcher {textColor} {iconFilter} />
				<ThemeSwitcher mode={themeMode} {setThemeMode} {textColor} {iconFilter} />
			</div>

			<!-- Enhanced Mobile Menu Button -->
			<button onclick={() => (isMobileMenuOpen = !isMobileMenuOpen)} class={`md:hidden mobile-menu-btn-tennis p-2 ${textColor} hover:text-primary transition-colors`} style={iconFilter}>
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
		<MobileMenu
			{navItems}
			{currentPage}
			themeMode={themeMode}
			{setThemeMode}
			onclose={() => (isMobileMenuOpen = false)}
		/>
	{/if}
</header>
