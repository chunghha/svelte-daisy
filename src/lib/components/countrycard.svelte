<script lang="ts">
import type { Country } from '$lib/models/country'

interface Props {
  country: Country
}

let { country }: Props = $props()
</script>

<div
	class="w-84 card-compact card bg-base-100 shadow-xl transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
>
	<figure><img src={country.flags.svg} alt={country.name.official} /></figure>
	<div class="card-body">
		<h2 class="card-title font-tienne text-secondary">{country.name.official}</h2>
		<p class="font-mulish text-xl text-warning">{country.capital ?? ''}</p>
		{#if country.population > 0}
			<p class="font-mulish text-lg text-info">{country.population.toLocaleString()}</p>
		{/if}
		<div class="card-actions justify-end">
			<button class="btn-neutral btn font-tienne">Details</button>
		</div>
	</div>
</div>
