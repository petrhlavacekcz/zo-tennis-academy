<script lang="ts">
	import { asset } from "$app/paths";

	let {
		title,
		titleHighlight,
		description,
		highlightFirst = false,
	}: {
		title: string;
		titleHighlight?: string;
		description?: string;
		highlightFirst?: boolean;
	} = $props();
</script>

<section class="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
	<!-- Background Image with Overlay -->
	<div class="absolute inset-0 z-0">
		<img
			src={asset("/zo-tennis-academy.webp")}
			alt="Tennis court background"
			class="w-full h-full object-cover block"
			loading="lazy"
			width="1920"
			height="1080"
			decoding="async"
			style="aspect-ratio: 16/9;"
		/>
		<div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-black/20"></div>
	</div>

	<!-- Tennis Court Grid Pattern -->
	<div class="absolute inset-0 z-10 opacity-10">
		<div class="w-full h-full court-grid-pattern"></div>
	</div>

	<!-- Content -->
	<div class="relative z-20 text-center px-4 max-w-4xl mx-auto">
		<h1 class="text-page-heading mb-4 text-white">
			{#if highlightFirst && titleHighlight}
				<span class="text-primary">{titleHighlight}</span>
				{title}
			{:else if titleHighlight}
				{title} <span class="text-primary">{titleHighlight}</span>
			{:else}
				<span class="text-primary">{title}</span>
			{/if}
		</h1>
		{#if description}
			<p class="text-lg text-white/90 max-w-2xl mx-auto">{description}</p>
		{/if}
	</div>
</section>
