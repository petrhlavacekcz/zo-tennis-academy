<script lang="ts">
	import { Button } from "$lib/components/ui/button";
	import ThemeSwitcher from "../theme/theme-switcher.svelte";
	import LangSwitcher from "./lang-switcher.svelte";
	import { fly, fade } from "svelte/transition";
	// @ts-ignore - lucide typed modules resolution
	import Home from "@lucide/svelte/icons/home";
	// @ts-ignore - lucide typed modules resolution
	import Users from "@lucide/svelte/icons/users";
	// @ts-ignore - lucide typed modules resolution
	import Trophy from "@lucide/svelte/icons/trophy";
	// @ts-ignore - lucide typed modules resolution
	import Phone from "@lucide/svelte/icons/phone";
	// @ts-ignore - lucide typed modules resolution
	import ChevronLeft from "@lucide/svelte/icons/chevron-left";


	interface Props {
		navItems: Array<{ id: string; label: string; labelEn: string }>;
		currentPage: string;
		handleNavigation: (page: string) => void;
		themeMode: 'light' | 'dark' | 'system';
		setThemeMode: (m: 'light' | 'dark' | 'system') => void;
		locale: 'cs' | 'en';
		onclose?: () => void;
		onchangeLocale?: (locale: 'cs' | 'en') => void;
	}

	let { navItems, currentPage, handleNavigation, themeMode, setThemeMode, locale, onclose, onchangeLocale }: Props = $props();

	const iconFor = { home: Home, coaches: Users, programs: Trophy, contact: Phone } as const;


	function navigateTo(id: string) {
		handleNavigation(id);
		onclose?.();
	}

	function onBackdropClick() {
		onclose?.();
	}

	function onEscape(e: KeyboardEvent) {
		if (e.key === 'Escape') {
			e.stopPropagation();
			onclose?.();
		}
	}
</script>

<div class="fixed inset-0 z-[60]" onkeydown={onEscape} tabindex="0" aria-modal="true" role="dialog">
	<!-- Backdrop with fade -->
	<button
		type="button"
		class="absolute inset-0 bg-black/20 dark:bg-black/40"
		aria-label="Close menu"
		onclick={onBackdropClick}
		transition:fade={{ duration: 200 }}
	></button>

	<!-- Panel -->
	<aside
		class="absolute inset-0 w-full h-full px-6 py-8 sm:px-8 bg-gradient-to-br from-gray-50/95 via-white/95 to-gray-100/95 dark:from-gray-950/95 dark:via-gray-900/95 dark:to-black/95 backdrop-blur-2xl supports-[backdrop-filter:none]:bg-white dark:supports-[backdrop-filter:none]:bg-gray-950 flex flex-col"
		transition:fly={{ x: -100, duration: 300, opacity: 1 }}
	>
		<!-- Header with back button -->
		<div class="flex items-center mb-16">
			<button
				class="p-2 -ml-2 rounded-full hover:bg-gray-200/60 dark:hover:bg-gray-800/60 transition-colors text-gray-900 dark:text-gray-100"
				onclick={() => onclose?.()}
				aria-label="Close menu"
			>
				<ChevronLeft size={28} strokeWidth={2.5} />
			</button>
		</div>

		<!-- Nav -->
		<nav class="flex-1 flex flex-col gap-3">
			{#each navItems as item}
				{@const Icon = iconFor[item.id as keyof typeof iconFor]}
				<button
					onclick={() => navigateTo(item.id)}
					aria-current={currentPage === item.id ? 'page' : undefined}
					class={`group w-full flex items-center gap-5 py-6 px-4 rounded-2xl text-left transition-all duration-200 ${
						currentPage === item.id
							? 'bg-primary/10 dark:bg-primary/20'
							: 'hover:bg-gray-200/50 dark:hover:bg-gray-800/50'
					}`}
				>
					<Icon
						size={24}
						strokeWidth={2}
						class={`shrink-0 transition-colors ${
							currentPage === item.id
								? 'text-primary'
								: 'text-gray-700 dark:text-gray-300 group-hover:text-primary'
						}`}
					/>
					<span class={`text-2xl font-semibold uppercase tracking-wide transition-colors ${
						currentPage === item.id
							? 'text-primary'
							: 'text-gray-900 dark:text-gray-100 group-hover:text-primary'
					}`}>
						{item.label}
					</span>
				</button>
			{/each}
		</nav>

		<!-- Footer -->
		<div class="mt-auto pt-8 space-y-4">
			<!-- Settings row -->
			<div class="flex items-center justify-between gap-3 px-2">
				<LangSwitcher value={locale} languages={['cs','en']} onChange={(v) => onchangeLocale?.(v as 'cs' | 'en')} variant="mobile" />
				<ThemeSwitcher mode={themeMode} {setThemeMode} variant="mobile" />
			</div>

			<!-- CTA Button -->
			<Button onclick={() => navigateTo('contact')} variant="cta" size="xl" class="w-full tennis-hover">
				Rezervovat
			</Button>
		</div>
	</aside>
</div>
