<script context="module">
	export const prerender = true;
</script>

<script lang="ts">
	import CountryCard from '$lib/components/countrycard.svelte';
	import type { Country } from '$lib/models/country';
	import '@fontsource/inter';
	import '@fontsource/poppins';
	import '@fontsource/space-mono';
	import { fetchCountries } from '../utils';

	let countries: Country[] = [];

	fetchCountries().then((data: Country[]) => {
		countries = data;
	});
</script>

<svelte:head>
	<title>Countries</title>
</svelte:head>

<div class="mt-4 grid grid-cols-1 gap-4 py-4 md:grid-cols-4">
	{#each countries as country}
		<CountryCard {country} />
	{/each}
</div>
