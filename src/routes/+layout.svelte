<script lang="ts">
	import { browser } from '$app/environment';
	import Nav from '$lib/components/nav.svelte';
	import { QueryClient, QueryClientProvider } from '@tanstack/svelte-query';
	import '../app.css';

	const queryClient = new QueryClient({
		defaultOptions: {
			queries: {
				enabled: browser
			}
		}
	});
</script>

<QueryClientProvider client={queryClient}>
	<div class="max-w-8xl mx-auto pt-4 pr-8 pb-8 pl-8">
		<Nav />
		<slot />
	</div>
</QueryClientProvider>

<style>
	:global(body) {
		overflow-x: hidden;
	}
</style>
