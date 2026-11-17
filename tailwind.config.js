/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Ubuntu', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['Ubuntu Mono', 'monospace'],
      },
      colors: {
        ubuntu: {
          orange: '#E95420',
          orangeHover: '#D44615',
          orangeActive: '#C03D10',
          aubergine: '#77216F',
          aubergineMid: '#5E2750',
          aubergineDark: '#2C001E',
        },
        surface: {
          base: 'var(--bg-base)',
          card: 'var(--bg-card)',
          elevated: 'var(--bg-elevated)',
          hover: 'var(--bg-hover)',
          tag: 'var(--bg-tag)',
        },
        ink: {
          primary: 'var(--text-primary)',
          secondary: 'var(--text-secondary)',
          muted: 'var(--text-muted)',
          disabled: 'var(--text-disabled)',
        },
        line: {
          subtle: 'var(--border-subtle)',
        },
      },
    },
  },
  plugins: [],
};
