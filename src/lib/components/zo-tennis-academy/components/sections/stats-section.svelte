<script lang="ts">
	import { onMount } from "svelte";

	const stats = [
		{ number: "74", suffix: "", label: "WTA World Ranking", sublabel: "Zuzana Ondrášková" },
		{ number: "20", suffix: "+", label: "ITF Titles Won", sublabel: "International Tour" },
		{ number: "12", suffix: "+", label: "Years of Coaching", sublabel: "Professional Experience" },
		{ number: "5", suffix: "★", label: "Student Rating", sublabel: "Verified Reviews" },
	];

	// Counter animation: count up when section enters viewport
	let sectionEl: HTMLElement;
	let animated = false;

	function animateCounter(el: HTMLElement, target: number, suffix: string, duration = 1800) {
		let startTime: number | null = null;
		const step = (timestamp: number) => {
			if (!startTime) startTime = timestamp;
			const progress = Math.min((timestamp - startTime) / duration, 1);
			// Ease out cubic
			const eased = 1 - Math.pow(1 - progress, 3);
			const current = Math.round(eased * target);
			el.textContent = current + suffix;
			if (progress < 1) requestAnimationFrame(step);
		};
		requestAnimationFrame(step);
	}

	onMount(() => {
		if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting && !animated) {
						animated = true;
						const counters = sectionEl.querySelectorAll<HTMLElement>('[data-counter]');
						counters.forEach((el) => {
							const target = parseInt(el.dataset.counter ?? '0', 10);
							const suffix = el.dataset.suffix ?? '';
							animateCounter(el, target, suffix);
						});
						observer.disconnect();
					}
				});
			},
			{ threshold: 0.3 }
		);
		observer.observe(sectionEl);
		return () => observer.disconnect();
	});
</script>

<section bind:this={sectionEl} class="py-16 md:py-20 relative overflow-hidden" style="background: var(--tennis-dark);">
	<!-- Subtle background court lines -->
	<div class="absolute inset-0 opacity-5 pointer-events-none">
		<svg viewBox="0 0 1200 200" preserveAspectRatio="xMidYMid slice" class="w-full h-full">
			<line x1="0" y1="100" x2="1200" y2="100" stroke="white" stroke-width="1"/>
			<line x1="600" y1="0" x2="600" y2="200" stroke="white" stroke-width="1.5"/>
			<rect x="100" y="20" width="1000" height="160" fill="none" stroke="white" stroke-width="1"/>
			<line x1="300" y1="100" x2="300" y2="180" stroke="white" stroke-width="0.8"/>
			<line x1="900" y1="100" x2="900" y2="180" stroke="white" stroke-width="0.8"/>
		</svg>
	</div>

	<div class="relative mx-auto max-w-[1320px] px-6 md:px-12">
		<div class="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
			{#each stats as stat, i}
				<div class="text-center px-4 md:px-8 py-4 reveal reveal-delay-{i + 1}">
					<div
						class="leading-none mb-2 text-primary"
						style="font-family: 'Barlow Condensed', 'Space Grotesk', system-ui, sans-serif; font-size: clamp(3rem, 7vw, 5.5rem); font-weight: 900; letter-spacing: -0.02em;"
						data-counter={stat.number}
						data-suffix={stat.suffix}
					>
						{stat.number}{stat.suffix}
					</div>
					<div class="text-white font-semibold text-sm uppercase tracking-widest mb-1">
						{stat.label}
					</div>
					<div class="text-white/40 text-xs">
						{stat.sublabel}
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
