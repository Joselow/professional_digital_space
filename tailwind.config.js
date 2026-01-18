/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  safelist: [
    // Colors for the Card component
    {
      pattern: /bg-(red|green|blue|yellow|purple|pink|indigo|cyan|orange|teal|gray)-100/,
    },
    {
      pattern: /bg-(red|green|blue|yellow|purple|pink|indigo|cyan|orange|teal|gray)-900\/30/,
    },
    {
      pattern: /text-(red|green|blue|yellow|purple|pink|indigo|cyan|orange|teal|gray)-600/,
    },
    {
      pattern: /text-(red|green|blue|yellow|purple|pink|indigo|cyan|orange|teal|gray)-500/,
    },
    {
      pattern: /dark:text-(red|green|blue|yellow|purple|pink|indigo|cyan|orange|teal|gray)-500/,
    },
    {
      pattern: /dark:hover:border-(red|green|blue|yellow|purple|pink|indigo|cyan|orange|teal|gray)-500/,
    },
    {
      pattern: /group-hover:text-(red|green|blue|yellow|purple|pink|indigo|cyan|orange|teal|gray)-500/,
    },
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
