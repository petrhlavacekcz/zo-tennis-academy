<script lang="ts">
	import { Sun, Moon, Monitor } from "@lucide/svelte";

	interface Props {
		mode: 'light' | 'dark' | 'system';
		setThemeMode: (m: 'light' | 'dark' | 'system') => void;
		textColor?: string;
		iconFilter?: string;
		variant?: 'default' | 'mobile';
	}

	let { mode, setThemeMode, textColor = "text-white", iconFilter = "", variant = "default" }: Props = $props();

	function cycleTheme() {
		if (mode === 'light') {
			setThemeMode('dark');
		} else if (mode === 'dark') {
			setThemeMode('system');
		} else {
			setThemeMode('light');
		}
	}

	const themeOptions = [
		{ value: 'light', icon: Sun, label: 'Light' },
		{ value: 'dark', icon: Moon, label: 'Dark' },
		{ value: 'system', icon: Monitor, label: 'System' }
	] as const;
</script>

{#if variant === 'mobile'}
	<!-- Mobile variant: segmented control style -->
	<div class="inline-flex items-center gap-1 p-1 rounded-xl bg-gray-200/80 dark:bg-gray-800/80">
		{#each themeOptions as option}
			{@const Icon = option.icon}
			<button
				onclick={() => setThemeMode(option.value)}
				class={`p-2 rounded-lg transition-all ${
					mode === option.value
						? 'bg-white dark:bg-gray-700 text-primary shadow-sm'
						: 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
				}`}
				aria-label={option.label}
				aria-pressed={mode === option.value}
			>
				<Icon size={18} strokeWidth={2.5} />
			</button>
		{/each}
	</div>
{:else}
	<!-- Default variant: single button cycle -->
	<button
		onclick={cycleTheme}
		class={`p-2 ${textColor} hover:text-primary transition-colors`}
		style={iconFilter}
		aria-label={mode === 'dark' ? 'Switch to light mode' : mode === 'light' ? 'Switch to system mode' : 'Switch to dark mode'}
	>
		{#if mode === 'dark'}
			<Moon size={20} />
		{:else if mode === 'light'}
			<Sun size={20} />
		{:else}
			<Monitor size={20} />
		{/if}
	</button>
{/if}
