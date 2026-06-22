<script lang="ts">
	import { page } from "$app/state";
	import { Button } from "$lib/components/ui/button";
	import { localizeHref } from "$lib/utils/localize";
	import { getLocale } from "$lib/paraglide/runtime";

	const copy = {
		cs: {
			title: "Stránka nenalezena",
			desc: "Omlouváme se, ale tato stránka neexistuje nebo byla přesunuta.",
			cta: "Zpět na úvod",
		},
		en: {
			title: "Page not found",
			desc: "Sorry, this page doesn't exist or has been moved.",
			cta: "Back to home",
		},
		de: {
			title: "Seite nicht gefunden",
			desc: "Diese Seite existiert leider nicht oder wurde verschoben.",
			cta: "Zur Startseite",
		},
		pl: {
			title: "Nie znaleziono strony",
			desc: "Niestety ta strona nie istnieje lub została przeniesiona.",
			cta: "Powrót na stronę główną",
		},
	};

	let t = $derived(copy[getLocale() as keyof typeof copy] ?? copy.en);
</script>

<section
	class="relative min-h-screen flex items-center justify-center overflow-hidden px-6 bg-[hsl(30_9%_6%)] text-white"
>
	<!-- Subtle tennis-court grid -->
	<div
		class="absolute inset-0 opacity-[0.05]"
		style="background-image: linear-gradient(rgba(255,106,0,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,106,0,0.3) 1px, transparent 1px); background-size: 56px 56px;"
		aria-hidden="true"
	></div>

	<div class="relative z-10 text-center max-w-xl">
		<p class="font-space text-primary font-bold leading-none mb-4" style="font-size: clamp(5rem, 20vw, 10rem);">
			{page.status}
		</p>
		<h1 class="text-page-heading mb-4">{t.title}</h1>
		<p class="text-lg text-white/80 mb-10 leading-relaxed">{t.desc}</p>
		<Button href={localizeHref("/")} variant="cta" size="xl">{t.cta}</Button>
	</div>
</section>
