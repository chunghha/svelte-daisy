<script lang="ts">
	import Themeswitcher from './themeswitcher.svelte';
</script>

<div class="navbar bg-neutral shadow-md">
	<div class="navbar-start">
		<div class="dropdown z-[1000]">
			<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
			<!-- svelte-ignore a11y-label-has-associated-control -->
			<label tabindex="0" class="btn-ghost btn-circle btn">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h16M4 18h7"
					/></svg
				>
			</label>
			<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
			<ul
				tabindex="0"
				class="menu-compact dropdown-content menu rounded-box mt-3 w-52 bg-base-100 p-2 font-poppins shadow"
			>
				<li><a href="/">Homepage</a></li>
				<li><a href="/about">About</a></li>
				<li><a href="/country">Country</a></li>
			</ul>
		</div>
	</div>
	<div class="navbar-center">
		<!-- svelte-ignore a11y-missing-attribute -->
		<a class="upper-case btn-ghost btn font-poppins text-xl text-primary">daisyUI</a>
	</div>
	<div class="navbar-end">
		<Themeswitcher />
	</div>
</div>
