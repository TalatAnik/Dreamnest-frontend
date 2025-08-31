/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#2563eb',
          600: '#1d4ed8',
          700: '#1e40af',
          800: '#1e3a8a',
          900: '#1e3a8a'
        },
        accent: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f'
        },
        surface: {
          DEFAULT: '#ffffff',
          alt: '#f1f5f9'
        },
  base: '#f8fafc',
  'base-dark': '#0f172a',
        success: '#16a34a',
        warning: '#d97706',
        error: '#dc2626',
        border: '#e2e8f0',
        'text-primary': '#0f172a',
        'text-secondary': '#475569'
      },
      borderRadius: {
        'sm': '2px',
        'md': '6px',
        'lg': '12px'
      }
    },
  },
  plugins: [],
};
