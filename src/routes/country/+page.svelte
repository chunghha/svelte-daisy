<script lang="ts">
	import CountryCard from '$lib/components/countrycard.svelte';
	import type { Country } from '$lib/models/country';
	import { fetchCountries } from './country.service';

	let countries: Country[] = [];

	fetchCountries().then((data: Country[]) => {
		countries = data;
	});
</script>

<svelte:head>
	<title>Countries</title>
</svelte:head>

<div class="mt-4 grid grid-cols-1 gap-4 py-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
	{#each countries as country}
		<CountryCard {country} />
	{/each}
</div>
