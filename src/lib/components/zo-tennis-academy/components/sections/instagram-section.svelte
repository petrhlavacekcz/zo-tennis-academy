<script lang="ts">
	import { onMount } from "svelte";
	import { Instagram } from "@lucide/svelte";
	import * as m from "$lib/paraglide/messages";

	// Setup: create a free account at https://behold.so → connect @zo_tennis_academy
	// → copy your Feed ID from the dashboard and paste it here.
	const FEED_ID = "YOUR_BEHOLD_FEED_ID";

	let section: HTMLElement;
	let feedContainer: HTMLElement;
	let loaded = $state(false);

	onMount(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					observer.disconnect();
					loaded = true;
					const widget = document.createElement("behold-widget");
					widget.setAttribute("feed-id", FEED_ID);
					feedContainer.appendChild(widget);
					const script = document.createElement("script");
					script.src = "https://w.behold.so/widget.js";
					script.type = "module";
					document.head.appendChild(script);
				}
			},
			{ rootMargin: "200px" }
		);
		observer.observe(section);
		return () => observer.disconnect();
	});
</script>

<section class="py-24 bg-neutral-950 text-white" bind:this={section}>
	<div class="container-section">
		<!-- Section Header -->
		<div class="text-center mb-12">
			<div class="flex items-center justify-center gap-3 mb-3">
				<Instagram size={24} class="text-primary" />
				<h2 class="text-section-heading">
					{m["instagram.heading"]()} <span class="text-primary">{m["instagram.heading_highlight"]()}</span>
				</h2>
			</div>
			<p class="text-white/70 max-w-2xl mx-auto">{m["instagram.description"]()}</p>
		</div>

		<!-- Instagram Feed (Behold widget, loaded lazily) -->
		<div class="mb-10 min-h-[400px]" bind:this={feedContainer} style="--behold-height: 800px">
			{#if !loaded}
				<div class="flex items-center justify-center h-[400px]">
					<Instagram size={48} class="text-white/20 animate-pulse" />
				</div>
			{/if}
		</div>

		<!-- Instagram Handle -->
		<div class="text-center">
			<a
				href="https://www.instagram.com/zo_tennis_academy/"
				target="_blank"
				rel="noopener noreferrer"
				class="inline-flex items-center gap-2 text-primary font-semibold text-lg hover:text-primary/80 transition-colors"
			>
				<Instagram size={20} />
				{m["instagram.handle"]()}
			</a>
		</div>
	</div>
</section>
