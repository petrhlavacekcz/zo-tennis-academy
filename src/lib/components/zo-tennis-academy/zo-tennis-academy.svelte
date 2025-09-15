<script lang="ts">
	import Header from "./components/header/header.svelte";
	import Footer from "./components/footer/footer.svelte";
	import HomePage from "./components/pages/home-page.svelte";
	import CoachesPage from "./components/pages/coaches-page.svelte";
	import ProgramsPage from "./components/pages/programs-page.svelte";
	import ContactPage from "./components/pages/contact-page.svelte";


	let currentPage = $state("home");
	let themeMode = $state<'light' | 'dark' | 'system'>('light');

	function navigateTo(page: string) {
		currentPage = page;
	}

	function setThemeMode(mode: 'light' | 'dark' | 'system') {
		themeMode = mode;
		if (typeof localStorage !== 'undefined') localStorage.setItem('theme', mode);
		if (typeof document !== 'undefined') {
			const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
			const isDark = mode === 'dark' || (mode === 'system' && prefersDark);
			document.documentElement.classList.toggle('dark', isDark);
		}
	}

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
</script>

<div class="min-h-screen bg-background text-foreground transition-colors duration-300">
	<Header {currentPage} {navigateTo} themeMode={themeMode} {setThemeMode} />

	<main class="relative">
		{#if currentPage === "home"}
			<HomePage {navigateTo} />
		{:else if currentPage === "coaches"}
			<CoachesPage />
		{:else if currentPage === "programs"}
			<ProgramsPage {navigateTo} />
		{:else if currentPage === "contact"}
			<ContactPage />
		{/if}
	</main>

	<Footer {navigateTo} />




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

	:global(.tennis-hover) {
		transition: all 0.3s ease;
	}

	:global(.tennis-hover:hover) {
		transform: translateY(-2px);
		box-shadow: 0 10px 25px rgba(255, 106, 0, 0.2);
	}

	:global(.tennis-ball-bounce) {
		animation: bounce 2s infinite;
	}

	@keyframes bounce {
		0%,
		20%,
		50%,
		80%,
		100% {
			transform: translateY(0);
		}
		40% {
			transform: translateY(-10px);
		}
		60% {
			transform: translateY(-5px);
		}
	}
</style>
