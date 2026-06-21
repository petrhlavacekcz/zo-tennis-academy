<script lang="ts">
	import { asset } from "$app/paths";
</script>

<section class="relative py-28 md:py-36 overflow-hidden" style="background: var(--tennis-dark);">
	<!-- Full-bleed background photo at low opacity -->
	<div class="absolute inset-0 z-0">
		<img
			src={asset("/zuzana-ondraskova-2.webp")}
			alt=""
			aria-hidden="true"
			class="w-full h-full object-cover opacity-15"
			loading="lazy"
		/>
		<div class="absolute inset-0" style="background: linear-gradient(135deg, var(--tennis-dark) 40%, rgba(15,20,35,0.85) 100%);"></div>
	</div>

	<!-- Decorative oversized quote mark -->
	<div
		class="absolute -top-8 left-4 md:left-16 select-none pointer-events-none text-white/5 leading-none"
		style="font-family: 'Barlow Condensed', Georgia, serif; font-size: clamp(12rem, 30vw, 22rem); font-weight: 900; line-height: 1;"
		aria-hidden="true"
	>"</div>

	<div class="relative z-10 mx-auto max-w-[1320px] px-6 md:px-12">
		<div class="max-w-4xl mx-auto text-center reveal">
			<!-- Quote -->
			<blockquote
				class="text-white mb-10 leading-tight"
				style="font-family: 'Barlow Condensed', 'Space Grotesk', system-ui, sans-serif; font-size: clamp(1.75rem, 4vw, 3rem); font-weight: 700; letter-spacing: -0.01em;"
			>
				Excelence v tenise se nerodí —
				<span class="text-primary"> buduje se každodenní prací, disciplínou a světovou třídou koučinku.</span>
			</blockquote>

			<!-- Attribution -->
			<div class="flex items-center justify-center gap-4 reveal reveal-delay-2">
				<div class="h-px w-12 bg-primary"></div>
				<span class="text-white/50 text-sm uppercase tracking-widest font-medium">Zuzana Ondrášková · WTA #74</span>
				<div class="h-px w-12 bg-primary"></div>
			</div>
		</div>
	</div>
</section>
