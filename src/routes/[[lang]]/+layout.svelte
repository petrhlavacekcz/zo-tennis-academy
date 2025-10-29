<script lang="ts">
	import Header from "$lib/components/zo-tennis-academy/components/header/header.svelte";
	import Footer from "$lib/components/zo-tennis-academy/components/footer/footer.svelte";
	import { page } from "$app/state";
	import type { Snippet } from "svelte";

	interface Props {
		children: Snippet;
	}

	let { children }: Props = $props();

	// Theme management
	let themeMode = $state<'light' | 'dark' | 'system'>('light');

	function setThemeMode(mode: 'light' | 'dark' | 'system') {
		themeMode = mode;
		localStorage.setItem('theme', mode);
		applyTheme();
	}

	function applyTheme() {
		const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
		const isDark = themeMode === 'dark' || (themeMode === 'system' && prefersDark);
		document.documentElement.classList.toggle('dark', isDark);
	}

	// Initialize theme from localStorage and listen to system preference changes
	$effect(() => {
		const stored = localStorage.getItem('theme');
		if (stored === 'light' || stored === 'dark' || stored === 'system') {
			themeMode = stored as 'light' | 'dark' | 'system';
		}

		const media = window.matchMedia('(prefers-color-scheme: dark)');
		applyTheme();

		media.addEventListener('change', applyTheme);
		return () => media.removeEventListener('change', applyTheme);
	});

	// Derive current page from URL pathname
	let currentPage = $derived.by(() => {
		const pathname = page.url.pathname;
		// Remove language prefix
		const cleanPath = pathname.replace(/^\/(cs|en|de|pl)?/, '').replace(/^\//, '') || 'home';
		// Extract the first segment
		const segments = cleanPath.split('/').filter(Boolean);
		return segments[0] || 'home';
	});
</script>

<div class="min-h-screen bg-background text-foreground transition-colors duration-300">
	<Header {currentPage} themeMode={themeMode} {setThemeMode} />

	<main class="relative">
		{@render children()}
	</main>

	<Footer />
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

