<script lang="ts">
	export const prerender = true;
	import { STATIC_API_URL } from '$lib/env';
	import { onMount } from 'svelte';

	let loading = true;
	let audioElement: HTMLAudioElement;

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
</script>

<svelte:head>
	<title>Quran App</title>
	<meta name="description" content="Built with love by Aviciena Santoso" />
</svelte:head>

<section>
	<div>
		<p>Surah: 002 - Al Baqarah</p>
		<p>Ayat: 058</p>
		<p>Page: 009</p>
		<p>Juz: 01</p>
		<button disabled={loading} on:click={play}>Play</button>
		<button disabled={loading} on:click={pause}>Pause</button>
		<button disabled={loading} on:click={stop}>Stop</button>
		<audio bind:this={audioElement} src={`${STATIC_API_URL}/audio/002058.mp3`} />
	</div>
</section>

<style>
</style>
