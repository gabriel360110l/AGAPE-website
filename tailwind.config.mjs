/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        parchment: '#F7F3EC',
        paper: '#FCFAF6',
        ink: '#2A241C',
        muted: '#6E6456',
        bordeaux: '#8C2F2F',
        'bordeaux-soft': '#F4E8E6',
        gold: '#A07A32',
        line: '#E4DCCF',
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['Lora', 'Georgia', 'serif'],
      },
      borderRadius: {
        card: '1.75rem',
        phone: '2.75rem',
      },
      boxShadow: {
        soft: '0 24px 48px -28px rgb(42 36 28 / 0.22)',
      },
    },
  },
  plugins: [],
};
