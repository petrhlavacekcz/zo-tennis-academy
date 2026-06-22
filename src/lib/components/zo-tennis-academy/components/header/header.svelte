<script lang="ts">
	import { Button } from "$lib/components/ui/button";
	import Menu from "@lucide/svelte/icons/menu";
	import X from "@lucide/svelte/icons/x";
	import MobileMenu from "./mobile-menu.svelte";
	import ThemeSwitcher from "../theme/theme-switcher.svelte";
	import LangSwitcher from "./lang-switcher.svelte";
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
	let scrolled = $state(false);

	// Lock body scroll when mobile menu is open
	$effect(() => {
		if (typeof document !== 'undefined') {
			document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
			return () => {
				document.body.style.overflow = '';
			};
		}
	});

	// Track scroll to toggle the frosted-glass bar
	$effect(() => {
		const onScroll = () => { scrolled = window.scrollY > 24; };
		onScroll();
		window.addEventListener('scroll', onScroll, { passive: true });
		return () => window.removeEventListener('scroll', onScroll);
	});

	// The header sits over dark heroes at the top, and over a dark frosted bar once
	// scrolled — so nav/logo/icons stay white in both light and dark themes throughout.
	const textColor = "text-white";
	const textShadow = "text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);";
	const iconFilter = "filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.5));";

	const navItems = [
		{ id: "home", href: "/", label: () => m["nav.home"]() },
		{ id: "coaches", href: "/coaches", label: () => m["nav.coaches"]() },
		{ id: "programs", href: "/programs", label: () => m["nav.programs"]() },
		{ id: "contact", href: "/contact", label: () => m["nav.contact"]() },
	];
</script>

<header class={`header-bar fixed top-0 left-0 right-0 z-50 ${scrolled ? 'scrolled' : ''}`}>
	<div class="mx-auto max-w-[1320px] px-6 md:px-12">
		<div class="flex items-center justify-between h-20 pt-4">
			<!-- Logo (white wordmark + orange ZO — kept on dark surfaces in both themes) -->
			<a href={localizeHref("/")} class="flex items-center gap-2">
				<img src={asset("/zo-tennis-academy-logo.webp")} alt="ZO Tennis Academy" class="h-10 w-auto" />
			</a>

			<!-- Desktop Navigation -->
			<nav class="hidden md:flex items-center gap-8">
				{#each navItems as item}
					<a
						href={localizeHref(item.href)}
						class={`menu-item-tennis focus-tennis font-medium uppercase tracking-wide transition-colors ${currentPage === item.id ? "text-primary" : `${textColor} hover:text-primary`}`}
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
			<button
				onclick={() => (isMobileMenuOpen = !isMobileMenuOpen)}
				class={`md:hidden mobile-menu-btn-tennis p-2 ${textColor} hover:text-primary transition-colors`}
				style={iconFilter}
				aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
				aria-expanded={isMobileMenuOpen}
			>
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

<style>
	/* Transparent over the hero; fades into a dark frosted-glass bar once scrolled.
	   Same dark glass in both light and dark themes so the white logo/nav stay legible. */
	.header-bar {
		background-color: transparent;
		transition:
			background-color 0.3s ease,
			backdrop-filter 0.3s ease,
			box-shadow 0.3s ease;
	}

	.header-bar.scrolled {
		background-color: color-mix(in oklch, black 72%, transparent);
		backdrop-filter: blur(14px) saturate(1.1);
		-webkit-backdrop-filter: blur(14px) saturate(1.1);
		box-shadow:
			inset 0 -1px 0 rgba(255, 255, 255, 0.08),
			0 8px 30px rgba(0, 0, 0, 0.28);
	}

	@supports not ((backdrop-filter: blur(1px)) or (-webkit-backdrop-filter: blur(1px))) {
		.header-bar.scrolled {
			background-color: rgba(10, 9, 8, 0.94);
		}
	}
</style>
