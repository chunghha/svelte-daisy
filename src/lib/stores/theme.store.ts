import { writable } from 'svelte/store';

// initialize with the light theme, dawn
const isDark = writable(false)

export { isDark };
