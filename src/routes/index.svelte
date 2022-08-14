<script context="module">
  import '@fontsource/inter/index.css';
  import '@fontsource/poppins/index.css';
  import Hero from "../lib/components/hero.svelte";


	export const prerender = true;
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>
<div class="mt-2">
  <Hero />
</div>
