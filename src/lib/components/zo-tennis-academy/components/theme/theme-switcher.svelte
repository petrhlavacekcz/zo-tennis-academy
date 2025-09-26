<script lang="ts">
	import { Sun, Moon, Monitor } from "@lucide/svelte";

	interface Props {
		mode: 'light' | 'dark' | 'system';
		setThemeMode: (m: 'light' | 'dark' | 'system') => void;
		textColor?: string;
		iconFilter?: string;
	}

	let { mode, setThemeMode, textColor = "text-white", iconFilter = "" }: Props = $props();

	function cycleTheme() {
		if (mode === 'light') {
			setThemeMode('dark');
		} else if (mode === 'dark') {
			setThemeMode('system');
		} else {
			setThemeMode('light');
		}
	}
</script>

<button onclick={cycleTheme} class={`p-2 ${textColor} hover:text-primary transition-colors`} style={iconFilter}>
	{#if mode === 'dark'}
		<Moon size={20} />
	{:else if mode === 'light'}
		<Sun size={20} />
	{:else}
		<Monitor size={20} />
	{/if}
</button>
