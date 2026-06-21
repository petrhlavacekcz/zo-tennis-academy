<script lang="ts">
	const stats = [
		{ number: "74", label: "WTA World Ranking", sublabel: "Zuzana Ondrášková" },
		{ number: "20+", label: "ITF Titles Won", sublabel: "International Tour" },
		{ number: "12+", label: "Years of Coaching", sublabel: "Professional Experience" },
		{ number: "★★★★★", label: "Student Rating", sublabel: "Verified Reviews" },
	];
</script>

<section class="py-16 md:py-20" style="background: var(--tennis-dark);">
	<div class="mx-auto max-w-[1320px] px-6 md:px-12">
		<div class="grid grid-cols-2 md:grid-cols-4 gap-0 divide-x divide-white/10">
			{#each stats as stat, i}
				<div class="text-center px-6 py-2 {i > 0 ? '' : ''}">
					<div class="text-primary font-black leading-none mb-2" style="font-family: 'Space Grotesk', Inter, system-ui, sans-serif; font-size: clamp(2.5rem, 5vw, 4rem);">
						{stat.number}
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
