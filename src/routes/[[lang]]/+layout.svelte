<script lang="ts">
	import Header from "$lib/components/zo-tennis-academy/components/header/header.svelte";
	import Footer from "$lib/components/zo-tennis-academy/components/footer/footer.svelte";
	import { page } from "$app/state";
	import { locales, localizeHref } from "$lib/paraglide/runtime";
	import type { Snippet } from "svelte";

	interface Props {
		children: Snippet;
	}

	let { children }: Props = $props();

	// Theme management
	let themeMode = $state<'light' | 'dark' | 'system'>('light');

	function setThemeMode(mode: 'light' | 'dark' | 'system') {
		themeMode = mode;
		if (typeof localStorage !== 'undefined') localStorage.setItem('theme', mode);
		if (typeof document !== 'undefined') {
			const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
			const isDark = mode === 'dark' || (mode === 'system' && prefersDark);
			document.documentElement.classList.toggle('dark', isDark);
		}
	}

	// Initialize theme from localStorage and listen to system preference changes
	if (typeof window !== 'undefined') {
		const stored = localStorage.getItem('theme');
		if (stored === 'light' || stored === 'dark' || stored === 'system') themeMode = stored as any;
		const media = window.matchMedia('(prefers-color-scheme: dark)');
		function apply() {
			const isDark = themeMode === 'dark' || (themeMode === 'system' && media.matches);
			document.documentElement.classList.toggle('dark', isDark);
		}
		media.addEventListener('change', apply);
		$effect(apply);
	}

	// Derive current page from URL pathname
	let currentPage = $derived(() => {
		const pathname = page.url.pathname;
		// Remove language prefix
		const cleanPath = pathname.replace(/^\/(cs|en|de|pl)?/, '').replace(/^\//, '') || 'home';
		// Extract the first segment
		const segments = cleanPath.split('/').filter(Boolean);
		return segments[0] || 'home';
	});
</script>

<div class="min-h-screen bg-background text-foreground transition-colors duration-300">
	<Header currentPage={currentPage()} themeMode={themeMode} {setThemeMode} />

	<main class="relative">
		{@render children()}
	</main>

	<Footer />
</div>

<!-- Invisible anchor tags for SSG crawling of all language versions -->
<div style="display:none" aria-hidden="true">
	{#each locales as locale}
		<a href={localizeHref(page.url.pathname, { locale })}>{locale}</a>
	{/each}
</div>

<style>
	:global(body) {
		font-family:
			"Inter",
			system-ui,
			-apple-system,
			"Segoe UI",
			Roboto,
			sans-serif;
		margin: 0;
		padding: 0;
	}

	/* Card hover effects */

	:global(.card-media) {
		position: relative;
		overflow: hidden;
	}

	:global(.card-media img) {
		transition: transform 0.5s ease;
	}

	:global(.card-media:hover img) {
		transform: scale(1.05);
	}

	:global(.glass) {
		background: rgba(255, 255, 255, 0.05);
		backdrop-filter: blur(10px);
		border: 1px solid rgba(255, 255, 255, 0.1);
	}

	:global(.dark .glass) {
		background: rgba(0, 0, 0, 0.2);
		border: 1px solid rgba(255, 255, 255, 0.05);
	}
</style>

