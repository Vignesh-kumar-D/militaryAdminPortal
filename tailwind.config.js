// tailwind.config.js
import animate from 'tailwindcss-animate';
export default {
  darkMode: ['class', ''],
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './src/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(142.1 76.2% 36.3%)', // Green
          foreground: 'hsl(355.7 100% 100%)', // White
        },
        secondary: {
          DEFAULT: 'hsl(142.1 76.2% 36.3% / 0.1)', // Light Green
          foreground: 'hsl(142.1 76.2% 36.3%)',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(142.1 76.2% 36.3% / 0.1)',
          foreground: 'hsl(142.1 76.2% 36.3%)',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
    },
  },
  plugins: [animate],
};
