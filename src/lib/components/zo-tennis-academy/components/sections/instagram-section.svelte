<script lang="ts">
	import { Card, CardContent } from "$lib/components/ui/card";
	import { Button } from "$lib/components/ui/button";
	import { Instagram, ExternalLink } from "@lucide/svelte";

	let instagramPosts = Array.from({ length: 6 }, (_, i) => ({
		id: i + 1,
		image: "https://c.svelte0.com/placeholder.svg?size=square",
		alt: `Instagram post ${i + 1}`,
	}));
</script>

<section class="py-24 bg-card">
	<div class="mx-auto max-w-[1320px] px-6 md:px-12">
		<!-- Section Header -->
		<div class="text-center mb-16">
			<div class="flex items-center justify-center gap-3 mb-4">
				<Instagram size={32} class="text-primary" />
				<h2 class="text-4xl font-bold">
					Sledujte nás na <span class="text-primary">Instagramu</span>
				</h2>
			</div>
			<p class="text-lg text-muted-foreground max-w-2xl mx-auto">Zůstaňte v kontaktu s naší akademií a sledujte pokroky našich studentů.</p>
		</div>

		<!-- Instagram Grid -->
		<div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
			{#each instagramPosts as post}
				<Card class="overflow-hidden group cursor-pointer shadow-none ring-1 ring-transparent hover:ring-border/30 bg-transparent transition">
					<CardContent class="p-0 relative">
						<img src={post.image} alt={post.alt} class="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-500" />

						<!-- Hover Overlay -->
						<div class="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
							<Instagram size={32} class="text-white" />
						</div>
					</CardContent>
				</Card>
			{/each}
		</div>

		<!-- Instagram CTA -->
		<div class="text-center">
			<Button size="lg" href="https://www.instagram.com/zo_tennis_academy/" target="_blank" rel="noopener noreferrer" class="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold tennis-hover group">
				<Instagram size={20} class="mr-2" />
				Sledovat @zo_tennis_academy
				<ExternalLink size={16} class="ml-2 group-hover:translate-x-1 transition-transform" />
			</Button>
		</div>
	</div>
</section>
