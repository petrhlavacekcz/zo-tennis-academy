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
		// Scroll to top smoothly when navigating to a new page
		if (typeof window !== 'undefined') {
			window.scrollTo({ top: 0, behavior: 'smooth' });
		}
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
		position: relative;
		overflow: hidden;
		text-transform: uppercase;
		font-weight: 600;
		letter-spacing: 0.05em;
		transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
	}

	:global(.tennis-hover::before) {
		content: '';
		position: absolute;
		top: 50%;
		left: 50%;
		width: 0;
		height: 0;
		background: radial-gradient(circle, rgba(255,255,255,0.2) 0%, transparent 70%);
		transform: translate(-50%, -50%);
		transition: all 0.4s ease;
		border-radius: 50%;
	}

	:global(.tennis-hover:hover::before) {
		width: 200px;
		height: 200px;
	}

	:global(.tennis-hover:hover) {
		transform: translateY(-2px) scale(1.02);
		box-shadow: 0 8px 25px rgba(255, 106, 0, 0.25);
	}

	:global(.tennis-hover:active) {
		transform: translateY(0) scale(0.98);
		transition: all 0.1s ease;
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
