<script>
	import Navbar from '$lib/components/portfolio/Navbar.svelte';
	import LanguageToggle from '$lib/components/portfolio/LanguageToggle.svelte';
	import '../../app.css';
	import { ModeWatcher, setMode } from 'mode-watcher';
	import { locale } from '$lib/i18n';
	import { onMount } from 'svelte';
	import { afterNavigate } from '$app/navigation';

	setMode('dark');

	onMount(() => {
		locale.init();
	});

	afterNavigate(() => {
		locale.init();
	});

	const WALLPAPERS = [
		{
			url: "wallpaper.jpg",
			filter: "brightness(0.4)"
		},

		{
			url: "wallpaper.jpg",
			filter: "brightness(0.4)",
			transform: "scaleY(-100%)",
		},

				{
			url: "wallpaper.jpg",
			filter: "brightness(0.4)"
		},

		{
			url: "wallpaper.jpg",
			filter: "brightness(0.4)",
			transform: "scaleY(-100%)",
		},

				{
			url: "wallpaper.jpg",
			filter: "brightness(0.4)"
		},

		{
			url: "wallpaper.jpg",
			filter: "brightness(0.4)",
			transform: "scaleY(-100%)",
		},
	];
</script>

<ModeWatcher />
<LanguageToggle />
<main>
	<div class="wallpapers">
		{#each WALLPAPERS as wallpaper}
			<img src={wallpaper.url} style="filter: {wallpaper.filter}; transform: {wallpaper.transform};" alt="" />
		{/each}	
	</div>

	<div class="screen relative mx-auto min-h-screen max-w-2xl px-6 py-12 font-sans antialiased sm:py-24">
			<slot></slot>
		<Navbar />
	</div>
</main>

<style>
	main {
		width: 100%;
		height: 100%;

		position: relative;

		background: black;

		overflow: hidden;
	}

	.screen {
		z-index: 2;
	}

	.wallpapers {
		z-index: 1;

		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;

		display: flex;
		flex-direction: column;

	}

	.wallpapers img {
		width: 100%;
	}


</style>