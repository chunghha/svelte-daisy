module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extends: {},
    fontFamily: {
      mulish: ['mulish', 'sans-serif'],
      tienne: ['tienne', 'serif'],
      'fira-mono': ['fira-mono'],
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
