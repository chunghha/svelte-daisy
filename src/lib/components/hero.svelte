<script lang="ts">
import { counter, decrease, increase } from '../stores/counter.store'
</script>

<template>
	<div
		class="hero min-h-screen"
		style="background-image: url(https://api.lorem.space/image/shoes?w=1000&h=800)"
	>
		<div class="bg-opacity-45 hero-overlay"></div>
		<div class="hero-content text-center text-neutral-content">
			<div class="max-w-md">
				<h1 class="mb-5 font-tienne text-5xl font-bold">Hello there</h1>
				<p class="mb-5 font-mulish">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
					ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
					ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
					reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
					sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
					est laborum.
				</p>
				<button class="btn btn-primary font-tienne">Get Started</button>
			</div>
		</div>
	</div>
	<div class="m-2 text-center font-tienne text-neutral-content">
		<button class="btn btn-circle btn-sm mr-2 text-accent" onclick={decrease}>-</button>
		Counter: {$counter}
		<button class="btn btn-circle btn-sm ml-2 text-accent" onclick={increase}>+</button>
	</div>
</template>
