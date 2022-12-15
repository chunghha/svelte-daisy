<script lang="ts">
	import CountryCard from '$lib/components/countrycard.svelte';
	import type { CountryResponse } from '../../lib/models/country';

	export let data: CountryResponse;
</script>

<svelte:head>
	<title>Countries</title>
</svelte:head>

{#if data.countries.length > 0}
	<div class="mt-4 grid grid-cols-1 gap-4 py-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
		{#each data.countries as country}
			<CountryCard {country} />
		{/each}
	</div>
{/if}
