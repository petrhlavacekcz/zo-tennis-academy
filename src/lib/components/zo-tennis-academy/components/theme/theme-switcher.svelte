<script lang="ts">
	import { Button } from "$lib/components/ui/button";
	import { Sun, Moon, Monitor } from "@lucide/svelte";

	interface Props {
		mode: 'light' | 'dark' | 'system';
		setThemeMode: (m: 'light' | 'dark' | 'system') => void;
	}

	let { mode, setThemeMode }: Props = $props();


	let open = $state(false);
	function pick(m: 'light' | 'dark' | 'system') {
		setThemeMode(m);
		open = false;
	}
</script>

<div class="relative">
	<Button onclick={() => (open = !open)} variant="outline" size="sm" class="bg-background/80 backdrop-blur-sm border-border hover:bg-accent rounded-full">
		{#if mode === 'dark'}
			<Moon size={16} />
		{:else if mode === 'light'}
			<Sun size={16} />
		{:else}
			<Monitor size={16} />
		{/if}
	</Button>
	{#if open}
		<div class="absolute right-0 mt-2 w-36 rounded-md border bg-card shadow-md p-1 z-50">
			<button class="w-full flex items-center gap-2 px-3 py-2 rounded hover:bg-accent" onclick={() => pick('light')}><Sun size={14} /> Light</button>
			<button class="w-full flex items-center gap-2 px-3 py-2 rounded hover:bg-accent" onclick={() => pick('dark')}><Moon size={14} /> Dark</button>
			<button class="w-full flex items-center gap-2 px-3 py-2 rounded hover:bg-accent" onclick={() => pick('system')}><Monitor size={14} /> System</button>
		</div>
	{/if}
</div>
