<script lang="ts">
	import { Button } from "$lib/components/ui/button";
	import { assets } from "$app/paths";
	import { fly, fade, scale } from 'svelte/transition';
	import { onMount } from 'svelte';

	interface Props {
		navigateTo: (page: string) => void;
	}

	let { navigateTo }: Props = $props();
	let mounted = $state(false);
	let prefersReducedMotion = $state(false);
	let showContent = $state(false);

	onMount(() => {
		// Respect user's motion preferences
		prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
		mounted = true;
		
		// Small delay to ensure DOM is ready, then trigger animations
		setTimeout(() => {
			showContent = true;
			console.log('Hero animations triggered'); // Debug log
		}, 100);
	});

	// Tennis-inspired animation: ball trajectory motion with power serve effect
	function tennisServe(node: Element, { delay = 0, duration = 800 }) {
		return {
			delay,
			duration,
			css: (t: number) => {
				const eased = 1 - (1 - t) * (1 - t); // ease-out quad for natural ball physics
				const x = (1 - eased) * -120; // serve from left court
				const y = (1 - eased) * -40 + Math.sin(eased * Math.PI) * -25; // arc motion like powerful serve
				const opacity = Math.min(eased * 1.5, 1); // faster fade in
				const scale = 0.2 + (eased * 0.8); // dramatic scale change
				const rotate = (1 - eased) * -15; // slight rotation like ball spin
				
				return `
					transform: translateX(${x}px) translateY(${y}px) scale(${scale}) rotate(${rotate}deg);
					opacity: ${opacity};
					text-shadow: 0 0 ${(1-eased) * 30}px rgba(255, 106, 0, 0.6);
				`;
			}
		};
	}

	// Court baseline entrance - rising from the tennis court
	function courtBaseline(node: Element, { delay = 0, duration = 600 }) {
		return {
			delay,
			duration,
			css: (t: number) => {
				const eased = t * t * (3 - 2 * t); // smooth ease-in-out
				const y = (1 - eased) * 80; // rise from deeper baseline
				const opacity = eased;
				const blur = (1 - eased) * 4;
				const letterSpacing = (1 - eased) * 8; // letters come together
				
				return `
					transform: translateY(${y}px);
					opacity: ${opacity};
					filter: blur(${blur}px);
					letter-spacing: ${letterSpacing}px;
				`;
			}
		};
	}

	// Net crossing effect - elegant side-to-side motion
	function netCross(node: Element, { delay = 0, duration = 500 }) {
		return {
			delay,
			duration,
			css: (t: number) => {
				const eased = t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2; // ease-in-out-quad
				const x = (1 - eased) * 60; // slide in from right
				const opacity = eased;
				const skewX = (1 - eased) * 5; // slight skew for dynamic feel
				
				return `
					transform: translateX(${x}px) skewX(${skewX}deg);
					opacity: ${opacity};
				`;
			}
		};
	}
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
		{#key showContent}
			{#if showContent}
				<!-- Main title with tennis serve animation -->
				<div 
					in:tennisServe={{ delay: 200, duration: 1200 }}
					class="text-hero text-white mb-6"
				>
					ZO TENNIS ACADEMY
				</div>

				<!-- Subtitle appearing from court baseline -->
				<div
					in:courtBaseline={{ delay: 900, duration: 900 }}
					class="text-lg md:text-xl text-white/85 mb-8 max-w-3xl mx-auto leading-relaxed"
				>
					Zlepšete svou hru s profesionálním koučováním pod vedením bývalé hráčky WTA Zuzany Ondraškové
				</div>

				<!-- CTA button with net crossing animation -->
				<div 
					in:netCross={{ delay: 1600, duration: 800 }}
					class="flex justify-center items-center"
				>
					<Button onclick={() => navigateTo("contact")} size="lg" class="tennis-hover">
						Rezervovat lekci
					</Button>
				</div>
			{:else}
				<!-- Invisible placeholder to prevent layout shift -->
				<div class="text-hero text-white mb-6 opacity-0">ZO TENNIS ACADEMY</div>
				<div class="text-lg md:text-xl text-white/85 mb-8 max-w-3xl mx-auto leading-relaxed opacity-0">
					Zlepšete svou hru s profesionálním koučováním pod vedením bývalé hráčky WTA Zuzany Ondraškové
				</div>
				<div class="flex justify-center items-center opacity-0">
					<Button onclick={() => navigateTo("contact")} size="lg" class="tennis-hover">
						Rezervovat lekci
					</Button>
				</div>
			{/if}
		{/key}
	</div>

	<!-- Background animation removed by request -->
</section>
