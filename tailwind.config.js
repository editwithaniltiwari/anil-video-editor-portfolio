/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#080D18', // Main background
          900: '#101B2D', // Secondary background
          850: '#121C2D', // Card background
          800: '#162338', // Elevated cards & subtle borders
          750: '#1b2c46',
          700: '#233858',
          600: '#324e78',
        },
        electric: {
          blue: '#1677FF',  // Primary accent
          light: '#318BFF', // Secondary accent
          hover: '#0958d9',
          glow: 'rgba(22, 119, 255, 0.4)',
        },
        slate: {
          secondary: '#AAB6C8', // Secondary text
          muted: '#6C7D93',
        }
      },
      fontFamily: {
        heading: ['"Sora"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        display: ['"Sora"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        body: ['"DM Sans"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        sans: ['"DM Sans"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        manrope: ['"Manrope"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      fontSize: {
        'body-sm': ['14px', { lineHeight: '1.6' }],
        'body-base': ['16px', { lineHeight: '1.65' }],
        'body-lg': ['17px', { lineHeight: '1.7' }],
      },
      letterSpacing: {
        'heading-tight': '-0.03em',
        'heading-snug': '-0.02em',
        'body-clean': '-0.01em',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 15px rgba(22, 119, 255, 0.2)' },
          '100%': { boxShadow: '0 0 30px rgba(22, 119, 255, 0.55)' },
        }
      }
    },
  },
  plugins: [],
}
