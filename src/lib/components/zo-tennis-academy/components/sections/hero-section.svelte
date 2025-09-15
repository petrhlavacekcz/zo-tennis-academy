<script lang="ts">
	import { Button } from "$lib/components/ui/button";
	import { assets } from "$app/paths";



	interface Props {
		navigateTo: (page: string) => void;
	}

	let { navigateTo }: Props = $props();
</script>

<section class="relative min-h-screen flex items-center justify-center overflow-hidden">
	<!-- Background Image with Overlay -->
	<div class="absolute inset-0 z-0">
		<!-- Use base-aware assets path to avoid 404 under subpath deployments -->
		<img src={assets + "/zo-tennis-academy.jpg"} alt="Tennis action background" class="w-full h-full object-cover block" />
		<div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-black/20"></div>
	</div>

	<!-- Tennis Court Grid Pattern -->
	<div class="absolute inset-0 z-10 opacity-10">
		<div class="w-full h-full" style="background-image: linear-gradient(rgba(255,106,0,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,106,0,0.3) 1px, transparent 1px); background-size: 50px 50px;"></div>
	</div>

	<!-- Content -->
	<div class="relative z-20 text-center px-4 max-w-4xl mx-auto">
		<h1 class="text-white font-extrabold uppercase leading-tight text-[clamp(2.5rem,6vw,4rem)]">ZO TENNIS ACADEMY</h1>

		<p class="text-xl md:text-2xl text-white/85 mb-8 max-w-3xl mx-auto leading-relaxed">Zlepšete svou hru s profesionálním koučováním pod vedením bývalé hráčky WTA Zuzany Ondraškové</p>

		<div class="flex justify-center items-center">
			<Button onclick={() => navigateTo("contact")} size="lg" class="tennis-hover btn-press">Rezervovat</Button>
		</div>
	</div>

	<!-- Background animation removed by request -->
</section>
