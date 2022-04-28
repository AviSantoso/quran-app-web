<script lang="ts">
	export const prerender = true;

	import { BtnStyle } from '$lib/styles';
	import { STATIC_API_URL } from '$lib/env';
	import { onMount } from 'svelte';

	let loading = true;
	let audioElement: HTMLAudioElement;

	let i = 1;

	interface Juz {
		id: number;
		num: string;
	}

	interface Surah {
		id: number;
		num: string;
		name: string;
		startingJuzId: number;
		endingJuzId: number;
	}

	interface Page {
		id: number;
		num: string;
		surahId: number;
		juzId: number;
	}

	interface Ayat {
		id: number;
		num: string;
		surahId: number;
		pageId: number;
		juzId: number;
	}

	const juzOne: Juz = {
		id: i++,
		num: '01'
	};

	const juzTwo: Juz = {
		id: i++,
		num: '02'
	};

	const surah: Surah = {
		id: i++,
		num: '002',
		name: 'Al Baqarah',
		startingJuzId: juzOne.id,
		endingJuzId: juzTwo.id
	};

	const page: Page = {
		id: i++,
		num: '009',
		surahId: surah.id,
		juzId: juzOne.id
	};

	const ayat: Ayat = {
		id: i++,
		num: '058',
		surahId: surah.id,
		pageId: page.id,
		juzId: juzOne.id
	};

	// <p>Surah: 002 - Al Baqarah</p>
	// 	<p>Ayat: 058</p>
	// 	<p>Page: 009</p>
	// 	<p>Juz: 01</p>
	// const ayat: Ayat = {
	// 	id: 1,
	// 	ayatNumber: 58,
	// 	pa
	// }

	function play() {
		audioElement.play();
	}

	function pause() {
		audioElement.pause();
	}

	function toggleLoop() {
		audioElement.loop = !audioElement.loop;
	}

	function stop() {
		pause();
		audioElement.currentTime = 0;
	}

	onMount(() => {
		audioElement.onloadeddata = () => {
			loading = false;
		};
	});

	const stBtn = `${BtnStyle({ variant: 'outlined' })} mx-1`;
</script>

<svelte:head>
	<title>Quran App</title>
	<meta name="description" content="Built with love by Aviciena Santoso" />
</svelte:head>

<section>
	<div>
		<p>Surah: {surah.num} - {surah.name}</p>
		<p>Ayat: {ayat.num}</p>
		<p>Page: {page.num}</p>
		<p>Juz: {juzOne.num}</p>
		<button class={stBtn} disabled={loading} on:click={play}>Play</button>
		<button class={stBtn} disabled={loading} on:click={pause}>Pause</button>
		<button class={stBtn} disabled={loading} on:click={stop}>Stop</button>
		<audio bind:this={audioElement} src={`${STATIC_API_URL}/audio/002058.mp3`} />
	</div>
</section>
