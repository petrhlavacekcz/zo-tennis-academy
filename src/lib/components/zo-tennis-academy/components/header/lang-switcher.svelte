<script lang="ts">
	interface Props {
		value?: string;
		languages?: string[];
		onChange: (v: string) => void;
		variant?: 'default' | 'mobile';
	}

	let { value = 'cs', languages = ['cs','en'], onChange, variant = 'default' }: Props = $props();

	// Language display names for better UX
	const languageNames: Record<string, string> = {
		'cs': 'Čeština',
		'en': 'English',
		'de': 'Deutsch',
		'fr': 'Français',
		'es': 'Español',
		'it': 'Italiano',
	};

	function getLanguageLabel(code: string): string {
		return languageNames[code] || code.toUpperCase();
	}
</script>

{#if variant === 'mobile'}
	<!-- Mobile variant: larger, more prominent -->
	<div class="inline-flex items-center gap-1 p-1 rounded-xl bg-gray-200/80 dark:bg-gray-800/80">
		{#each languages as code}
			<button
				class={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${
					value === code
						? 'bg-white dark:bg-gray-700 text-primary shadow-sm'
						: 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
				}`}
				onclick={() => onChange(code)}
				aria-pressed={value === code}
				aria-label={getLanguageLabel(code)}
			>
				{code.toUpperCase()}
			</button>
		{/each}
	</div>
{:else}
	<!-- Default variant: compact for header -->
	<div class="inline-flex items-center gap-1 p-1 rounded-full border bg-background text-foreground">
		{#each languages as code}
			<button
				class={`px-3 py-1.5 text-sm rounded-full transition-colors ${
					value === code
						? 'bg-muted font-semibold'
						: 'hover:bg-accent'
				}`}
				onclick={() => onChange(code)}
				aria-pressed={value === code}
				aria-label={getLanguageLabel(code)}
			>
				{code.toUpperCase()}
			</button>
		{/each}
	</div>
{/if}

