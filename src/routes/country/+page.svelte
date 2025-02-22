<script lang="ts">
  import CountryCard from "$lib/components/countrycard.svelte";
  import { createQuery } from "@tanstack/svelte-query";

  const getCountries = async () => {
    const res = await fetch(
      "https://restcountries.com/v3.1/all?fields=flags,name,capital,population",
    );

    return await res.json();
  };

  const query = createQuery({
    queryKey: ["countries"],
    queryFn: getCountries,
  });
</script>

<svelte:head>
  <title>Countries</title>
</svelte:head>

{#if $query.status === "pending"}
  <span class="loading loading-ring loading-lg"></span>
{/if}

{#if $query.status === "error"}
  <p>Error :(</p>
{/if}

{#if $query.status === "success"}
  <div
    class="mt-4 grid grid-cols-1 gap-4 py-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
  >
    {#each $query.data as country}
      <CountryCard {country} />
    {/each}
  </div>
{/if}
