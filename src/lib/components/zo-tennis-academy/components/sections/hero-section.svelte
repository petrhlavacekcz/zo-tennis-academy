<script lang="ts">
	import { Button } from "$lib/components/ui/button";
	import { ArrowRightIcon } from "lucide-svelte";
	import { base } from "$app/paths";

	interface Props {
		navigateTo: (page: string) => void;
	}

	let { navigateTo }: Props = $props();
</script>

<section class="relative min-h-screen flex items-center justify-center overflow-hidden">
	<!-- Background Image with Overlay -->
	<div class="absolute inset-0 z-0">
		<img src={`${base}/zo-tennis-academy.jpg`} alt="Tennis action background" class="w-full h-full object-cover" />
		<div class="absolute inset-0 bg-gradient-to-t from-white/70 to-white/10 dark:from-black/70 dark:to-black/20"></div>
	</div>

	<!-- Tennis Court Grid Pattern -->
	<div class="absolute inset-0 z-10 opacity-10">
		<div class="w-full h-full" style="background-image: linear-gradient(rgba(255,106,0,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,106,0,0.3) 1px, transparent 1px); background-size: 50px 50px;"></div>
	</div>

	<!-- Content -->
	<div class="relative z-20 text-center px-4 max-w-4xl mx-auto">
		<h1 class="text-5xl md:text-6xl font-bold mb-6 text-white">
			<span class="text-primary">ZO</span>
			TENNIS
			<br />
			<span class="text-3xl md:text-5xl font-normal">ACADEMY</span>
		</h1>

		<p class="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">Zlepšete svou hru s profesionálním koučováním pod vedením bývalé hráčky WTA Zuzany Ondraskové</p>

		<div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
			<Button onclick={() => navigateTo("contact")} size="lg" class="tennis-hover group btn-press">
				Začněte dnes
				<ArrowRightIcon size={20} class="ml-2 group-hover:translate-x-1 transition-transform" />
			</Button>

			<Button onclick={() => navigateTo("programs")} variant="outline" size="lg" class="tennis-hover btn-press">Naše programy</Button>
		</div>
	</div>

	<!-- Animated Tennis Ball -->
	<div class="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20">
		<div class="w-4 h-4 bg-primary rounded-full tennis-ball-bounce"></div>
	</div>
</section>
