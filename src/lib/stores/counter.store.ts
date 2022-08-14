import { writable } from 'svelte/store';

const counter = writable(0);

function decrease() {
  counter.update(v => v - 1)
}

function increase() {
  counter.update(v => v + 1)
}

export { counter, decrease, increase };

