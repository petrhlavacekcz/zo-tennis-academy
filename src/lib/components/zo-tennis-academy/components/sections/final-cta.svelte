<script lang="ts">
	import { Button } from "$lib/components/ui/button";
	import { ArrowRightIcon, PhoneIcon } from "lucide-svelte";

	interface Props {
		navigateTo: (page: string) => void;
	}

	let { navigateTo }: Props = $props();
</script>

<section class="py-24 bg-primary text-primary-foreground relative overflow-hidden">
	<!-- Background Pattern -->
	<div class="absolute inset-0 opacity-10">
		<div class="w-full h-full" style="background-image: radial-gradient(circle at 25% 25%, white 2px, transparent 2px), radial-gradient(circle at 75% 75%, white 2px, transparent 2px); background-size: 50px 50px;"></div>
	</div>

	<div class="mx-auto max-w-[1320px] px-6 md:px-12 text-center relative z-10">
		<h2 class="text-4xl md:text-5xl font-bold mb-6">Připraveni zlepšit svou hru?</h2>

		<p class="text-xl mb-8 max-w-2xl mx-auto opacity-90 leading-relaxed">Začněte svou tenisovou cestu s námi ještě dnes. Nabízíme bezplatnou zkušební lekci pro všechny nové studenty.</p>

		<div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
			<Button onclick={() => navigateTo("contact")} size="lg" variant="secondary" class="bg-white text-primary hover:bg-gray-100 font-semibold px-8 py-4 text-lg tennis-hover group">
				<PhoneIcon size={20} class="mr-2" />
				Rezervovat zkušební lekci
				<ArrowRightIcon size={20} class="ml-2 group-hover:translate-x-1 transition-transform" />
			</Button>

			<Button onclick={() => navigateTo("programs")} size="lg" variant="outline" class="border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg tennis-hover">Prohlédnout programy</Button>
		</div>

		<!-- Contact Info -->
		<div class="mt-12 pt-8 border-t border-white/20">
			<p class="text-lg opacity-90">
				Máte otázky? Zavolejte nám na
				<a href="tel:+420603441399" class="font-semibold hover:underline">+420 603 441 399</a>
			</p>
		</div>
	</div>
</section>
