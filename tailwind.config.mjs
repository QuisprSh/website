/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      colors: {
        // Catppuccin Mocha theme colors
        base: '#1e1e2e',
        mantle: '#181825',
        crust: '#11111b',
        surface0: '#313244',
        surface1: '#45475a',
        surface2: '#585b70',
        overlay0: '#6c7086',
        overlay1: '#7f849c',
        overlay2: '#9399b2',
        subtext0: '#a6adc8',
        subtext1: '#bac2de',
        text: '#cdd6f4',
        lavender: '#b4befe',
        blue: '#89b4fa',
        sapphire: '#74c7ec',
        sky: '#89dceb',
        teal: '#94e2d5',
        green: '#a6e3a1',
        yellow: '#f9e2af',
        peach: '#fab387',
        maroon: '#eba0ac',
        red: '#f38ba8',
        mauve: '#cba6f7',
        pink: '#f5c2e7',
        flamingo: '#f2cdcd',
        rosewater: '#f5e0dc',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'fade-in-delay': 'fadeIn 0.8s ease-out 0.2s both',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      scale: {
        '102': '1.02',
      },
    },
  },
  plugins: [],
}