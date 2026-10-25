<script lang="ts">
	import { locale, setLocale } from '$lib/i18n';
	import * as Tooltip from '$lib/components/ui/tooltip';

	let _class = '';
	export { _class as class };
</script>

<aside
	class={`fixed left-3 sm:left-4 md:left-5 top-1/2 -translate-y-1/2 z-50 pointer-events-auto select-none ${_class}`}
	aria-label={$locale === 'fr' ? 'Sélecteur de langue' : 'Language selector'}
>
	<div
		class="flex flex-col items-center gap-3"
		role="group"
		aria-label={$locale === 'fr' ? 'Choix de la langue' : 'Choose language'}
	>
		<!-- French / France Flag Option -->
		<Tooltip.Root openDelay={150}>
			<Tooltip.Trigger asChild let:builder>
				<button
					use:builder.action
					{...builder}
					type="button"
					on:click={() => setLocale('fr')}
					class="relative flex items-center justify-center cursor-pointer transition-all duration-200 outline-none focus-visible:outline-none active:scale-95 {$locale === 'fr'
						? 'scale-105 opacity-100 drop-shadow-md ring-2 ring-primary/40 rounded-[4px]'
						: 'scale-95 opacity-40 hover:scale-105 hover:opacity-100 drop-shadow-sm'}"
					aria-label="Français"
					aria-pressed={$locale === 'fr'}
				>
					<div class="h-[20px] w-[30px] overflow-hidden rounded-[3px] sm:h-[22px] sm:w-[33px]">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 900 600"
							class="h-full w-full object-cover pointer-events-none"
							aria-hidden="true"
						>
							<rect width="900" height="600" fill="#ED2939" />
							<rect width="600" height="600" fill="#fff" />
							<rect width="300" height="600" fill="#002654" />
						</svg>
					</div>
					{#if $locale === 'fr'}
						<span class="sr-only">(Actif)</span>
					{/if}
				</button>
			</Tooltip.Trigger>
			<Tooltip.Content
				side="right"
				sideOffset={10}
				class="flex flex-col items-start gap-0.5 px-2.5 py-1.5 text-xs font-sans shadow-md"
			>
				<div class="flex items-center gap-1.5 font-medium leading-tight">
					<span>Français</span>
					<span
						class="rounded bg-muted px-1 py-0.5 text-[9px] font-semibold tracking-wide text-foreground"
					>
						FR
					</span>
				</div>
				<p class="text-[11px] leading-tight text-foreground">
					{$locale === 'fr' ? 'Langue active' : 'Passer en français'}
				</p>
			</Tooltip.Content>
		</Tooltip.Root>

		<!-- English / UK Flag Option -->
		<Tooltip.Root openDelay={150}>
			<Tooltip.Trigger asChild let:builder>
				<button
					use:builder.action
					{...builder}
					type="button"
					on:click={() => setLocale('en')}
					class="relative flex items-center justify-center cursor-pointer transition-all duration-200 outline-none focus-visible:outline-none active:scale-95 {$locale === 'en'
						? 'scale-105 opacity-100 drop-shadow-md ring-2 ring-primary/40 rounded-[4px]'
						: 'scale-95 opacity-40 hover:scale-105 hover:opacity-100 drop-shadow-sm'}"
					aria-label="English"
					aria-pressed={$locale === 'en'}
				>
					<div class="h-[20px] w-[30px] overflow-hidden rounded-[3px] sm:h-[22px] sm:w-[33px]">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 60 30"
							class="h-full w-full object-cover pointer-events-none"
							aria-hidden="true"
						>
							<clipPath id="uk-clip-s">
								<path d="M0,0 v30 h60 v-30 z" />
							</clipPath>
							<clipPath id="uk-clip-t">
								<path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z" />
							</clipPath>
							<g clip-path="url(#uk-clip-s)">
								<path d="M0,0 v30 h60 v-30 z" fill="#012169" />
								<path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" stroke-width="6" />
								<path
									d="M0,0 L60,30 M60,0 L0,30"
									clip-path="url(#uk-clip-t)"
									stroke="#C8102E"
									stroke-width="4"
								/>
								<path d="M30,0 v30 M0,15 h60" stroke="#fff" stroke-width="10" />
								<path d="M30,0 v30 M0,15 h60" stroke="#C8102E" stroke-width="6" />
							</g>
						</svg>
					</div>
					{#if $locale === 'en'}
						<span class="sr-only">(Active)</span>
					{/if}
				</button>
			</Tooltip.Trigger>
			<Tooltip.Content
				side="right"
				sideOffset={10}
				class="flex flex-col items-start gap-0.5 px-2.5 py-1.5 text-xs font-sans shadow-md"
			>
				<div class="flex items-center gap-1.5 font-medium leading-tight">
					<span>English</span>
					<span
						class="rounded bg-muted px-1 py-0.5 text-[9px] font-semibold tracking-wide text-foreground"
					>
						UK
					</span>
				</div>
				<p class="text-[11px] leading-tight text-foreground">
					{$locale === 'en' ? 'Active language' : 'Switch to English'}
				</p>
			</Tooltip.Content>
		</Tooltip.Root>
	</div>
</aside>
