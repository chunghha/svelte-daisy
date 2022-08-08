<script lang="ts">
  import { isDark } from '../stores';

	const THEMES = {
		DARK: 'rosepine',
		LIGHT: 'dawn'
	};

	const toggleTheme = () => {
		document.documentElement.setAttribute('data-theme', $isDark ? THEMES.DARK : THEMES.LIGHT);
    $isDark = !$isDark;
	};
</script>

<div class="form-control">
  <button class="btn btn-ghost btn-circle" on:click={toggleTheme}>
    <svg
      width="20"
      height="20"
      xmlns="http://www.w3.org/2000/svg"
      fill="none" viewBox="0 0 24 24"
      class="inline-block h-5 w-5 stroke-current md:h-6 md:w-6">
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01">
      </path>
    </svg>
  </button>
</div>
