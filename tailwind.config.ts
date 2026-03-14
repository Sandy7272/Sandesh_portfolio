import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: 'var(--ink)',
          2: 'var(--ink-2)',
          3: 'var(--ink-3)',
          4: 'var(--ink-4)',
        },
        line: 'var(--line)',
        body: 'var(--body)',
        muted: 'var(--muted)',
        dim: 'var(--dim)',
        lime: {
          DEFAULT: 'var(--lime)',
          d: 'var(--lime-d)',
          lo: 'var(--lime-lo)',
        },
        teal: 'var(--teal)',
        coral: 'var(--coral)',
      },
      fontFamily: {
        serif: ['var(--serif)'],
        sans: ['var(--sans)'],
        mono: ['var(--mono)'],
      },
      maxWidth: {
        main: 'var(--max)',
      },
    },
  },
  plugins: [],
} satisfies Config;
