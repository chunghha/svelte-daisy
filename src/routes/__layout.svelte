<script>
	import Nav from '$lib/components/nav.svelte';
	import '../app.css';
</script>

<div class="max-w-8xl mx-auto p-8">
	<Nav />
	<slot />
</div>

<style>
	:global(body) {
		overflow-x: hidden;
		background-image: linear-gradient(to right, #232136, #1f1d2e) !important;
	}
</style>
