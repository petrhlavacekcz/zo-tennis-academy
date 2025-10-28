<script lang="ts">
	import { Instagram } from "@lucide/svelte";
	import * as m from "$lib/paraglide/messages";

	let instagramPosts = Array.from({ length: 6 }, (_, i) => ({
		id: i + 1,
		image: "https://c.svelte0.com/placeholder.svg?size=square",
		alt: `Instagram post ${i + 1}`,
	}));
</script>

<section class="py-24 bg-neutral-950 text-white">
	<div class="mx-auto max-w-[1320px] px-6 md:px-12">
		<!-- Section Header -->
		<div class="text-center mb-12">
			<div class="flex items-center justify-center gap-3 mb-3">
				<Instagram size={24} class="text-primary" />
				<h2 class="text-section-heading">{m["instagram.heading"]()} <span class="text-primary">{m["instagram.heading_highlight"]()}</span></h2>
			</div>
			<p class="text-white/70 max-w-2xl mx-auto">{m["instagram.description"]()}</p>
		</div>

		<!-- Instagram Grid (wireframe) -->
		<div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 mb-8">
			{#each instagramPosts as _}
				<div class="rounded-xl border border-white/10 bg-white/[0.06] aspect-square flex items-center justify-center">
					<div class="w-10 h-10 rounded-full border-2 border-white/30 flex items-center justify-center">
						<Instagram size={20} class="text-white/40" />
					</div>
				</div>
			{/each}
		</div>

		<!-- Instagram Handle -->
		<div class="text-center">
			<a href="https://www.instagram.com/zo_tennis_academy/" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 text-primary font-medium">
				<Instagram size={18} />
				{m["instagram.handle"]()}
			</a>
		</div>
	</div>
</section>
