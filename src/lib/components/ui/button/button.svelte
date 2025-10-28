<script lang="ts" module>
	import { cn, type WithElementRef } from "$lib/utils.js";
	import type { HTMLAnchorAttributes, HTMLButtonAttributes } from "svelte/elements";
	import { type VariantProps, tv } from "tailwind-variants";

	export const buttonVariants = tv({
		base: "focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-lg outline-none transition-all duration-200 focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
		variants: {
			variant: {
				// Standard variants
				default: "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 text-sm font-medium",
				destructive:
					"bg-destructive shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60 text-white text-sm font-medium",
				secondary: "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80 text-sm font-medium",
				ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 text-sm font-medium",
				link: "text-primary underline-offset-4 hover:underline text-sm font-medium",

				// PRIMARY BUTTONS - Consistent styling with minimal animation
				// Orange gradient for light/dark backgrounds
				cta: "rounded-lg bg-gradient-to-b from-orange-500 to-orange-600 text-white font-bold text-base uppercase tracking-wide shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]",
				// White button for orange/colored backgrounds
				"cta-inverse": "rounded-lg bg-white text-primary font-bold text-base uppercase tracking-wide shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]",

				// SECONDARY BUTTONS - Consistent styling with minimal animation
				// Outline for light backgrounds
				outline: "rounded-lg bg-transparent border-2 border-primary text-primary font-semibold text-base uppercase tracking-wide shadow-sm hover:bg-primary hover:text-white hover:shadow-md hover:scale-[1.02] active:scale-[0.98]",
				// Outline for colored backgrounds
				"outline-inverse": "rounded-lg bg-transparent border-2 border-white text-white font-semibold text-base uppercase tracking-wide shadow-sm hover:bg-white hover:text-primary hover:shadow-md hover:scale-[1.02] active:scale-[0.98]",
			},
			size: {
				default: "h-9 px-4 py-2 has-[>svg]:px-3",
				sm: "h-8 gap-1.5 rounded-md px-3 has-[>svg]:px-2.5",
				lg: "h-12 rounded-lg px-6 has-[>svg]:px-5",
				xl: "h-14 rounded-lg px-8 has-[>svg]:px-7",
				icon: "size-9",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "default",
		},
	});

	export type ButtonVariant = VariantProps<typeof buttonVariants>["variant"];
	export type ButtonSize = VariantProps<typeof buttonVariants>["size"];

	export type ButtonProps = WithElementRef<HTMLButtonAttributes> &
		WithElementRef<HTMLAnchorAttributes> & {
			variant?: ButtonVariant;
			size?: ButtonSize;
		};
</script>

<script lang="ts">
	let {
		class: className,
		variant = "default",
		size = "default",
		ref = $bindable(null),
		href = undefined,
		type = "button",
		disabled,
		children,
		...restProps
	}: ButtonProps = $props();
</script>

{#if href}
	<a
		bind:this={ref}
		data-slot="button"
		class={cn(buttonVariants({ variant, size }), className)}
		href={disabled ? undefined : href}
		aria-disabled={disabled}
		role={disabled ? "link" : undefined}
		tabindex={disabled ? -1 : undefined}
		{...restProps}
	>
		{@render children?.()}
	</a>
{:else}
	<button
		bind:this={ref}
		data-slot="button"
		class={cn(buttonVariants({ variant, size }), className)}
		{type}
		{disabled}
		{...restProps}
	>
		{@render children?.()}
	</button>
{/if}
