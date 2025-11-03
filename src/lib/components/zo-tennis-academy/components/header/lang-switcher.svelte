<script lang="ts">
	import { locales, getLocale, setLocale } from "$lib/paraglide/runtime";
	import Languages from "@lucide/svelte/icons/languages";

	interface Props {
		textColor?: string;
		iconFilter?: string;
		variant?: 'default' | 'mobile';
	}

	let { textColor = "text-white", iconFilter = "", variant = "default" }: Props = $props();

	// Get current locale reactively
	let currentLocale = $derived(getLocale());

	// Dropdown state
	let isOpen = $state(false);
	let dropdownRef: HTMLDivElement | undefined = $state();

	// Language display names
	const languageNames: Record<string, string> = {
		'cs': 'Čeština',
		'en': 'English',
		'de': 'Deutsch',
		'pl': 'Polski',
	};

	function getLanguageLabel(code: string): string {
		return languageNames[code] || code.toUpperCase();
	}

	// Switch language using Paraglide's setLocale
	function switchLanguage(locale: string) {
		isOpen = false;
		setLocale(locale as any);
	}

	// Toggle dropdown
	function toggleDropdown() {
		isOpen = !isOpen;
	}

	// Close dropdown when clicking outside
	function handleClickOutside(event: MouseEvent) {
		if (dropdownRef && !dropdownRef.contains(event.target as Node)) {
			isOpen = false;
		}
	}

	// Add/remove click outside listener
	$effect(() => {
		if (isOpen) {
			document.addEventListener('click', handleClickOutside);
			return () => {
				document.removeEventListener('click', handleClickOutside);
			};
		}
	});
</script>

{#if variant === 'mobile'}
	<!-- Mobile variant: segmented control style -->
	<div class="inline-flex items-center gap-1 p-1 rounded-xl bg-gray-200/80 dark:bg-gray-800/80">
		{#each locales as locale}
			<button
				onclick={() => switchLanguage(locale)}
				class={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${
					currentLocale === locale
						? 'bg-white dark:bg-gray-700 text-primary shadow-sm'
						: 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
				}`}
				aria-label={getLanguageLabel(locale)}
				aria-pressed={currentLocale === locale}
			>
				{locale.toUpperCase()}
			</button>
		{/each}
	</div>
{:else}
	<!-- Default variant: minimal button with dropdown -->
	<div class="relative" bind:this={dropdownRef}>
		<button
			onclick={toggleDropdown}
			class={`p-2 ${textColor} hover:text-primary transition-colors flex items-center gap-1`}
			style={iconFilter}
			aria-label="Switch language"
			aria-expanded={isOpen}
		>
			<Languages size={20} />
			<span class="text-xs font-semibold uppercase">{currentLocale}</span>
		</button>

		{#if isOpen}
			<div class="absolute right-0 top-full mt-2 py-1 min-w-[140px] rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-lg z-50">
				{#each locales as locale}
					<button
						onclick={() => switchLanguage(locale)}
						class={`w-full px-4 py-2 text-left text-sm transition-colors ${
							currentLocale === locale
								? 'bg-primary/10 text-primary font-semibold'
								: 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
						}`}
						aria-label={`Switch to ${getLanguageLabel(locale)}`}
					>
						<span class="font-semibold uppercase">{locale}</span>
						<span class="ml-2 text-xs opacity-70">{getLanguageLabel(locale)}</span>
					</button>
				{/each}
			</div>
		{/if}
	</div>
{/if}

