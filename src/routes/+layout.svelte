<script lang="ts">
import { browser } from '$app/environment'
import Nav from '$lib/components/nav.svelte'
import { QueryClient, QueryClientProvider } from '@tanstack/svelte-query'
import { SvelteQueryDevtools } from '@tanstack/svelte-query-devtools'
import '../app.css'
interface Props {
  children?: import('svelte').Snippet
}

let { children }: Props = $props()

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      enabled: browser,
    },
  },
})
</script>

<QueryClientProvider client={queryClient}>
	<div class="max-w-8xl mx-auto pt-4 pr-8 pb-8 pl-8 min-h-screen">
		<Nav />
		{@render children?.()}
		<SvelteQueryDevtools initialIsOpen={false} />
	</div>
</QueryClientProvider>

<style>
	:global(body) {
		overflow-x: hidden;
	}
</style>
