/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      spacing: {
        'some_key': {
          '1.5': '0.375rem'
        }
      },
      colors: {
        "brand-primary": "#00AEEF",
        "brand-primary-hover": "#008FCC",
        "brand-primary-light": "#77D1F7",
        "brand-secondary": "#E30613",
        "brand-secondary-hover": "#C40011",
        "brand-accent": "#39B54A",
        "brand-accent-hover": "#2D9B3C",
        "brand-yellow": "#FFC628",
        "brand-yellow-hover": "#FDB813",
        "brand-disabled": "#C0C0C0",

        "brand-text-primary": "var(--color-text-base)",
        "brand-text-secondary": "var(--color-text-muted)",
        
        "brand-bg-main": "var(--color-bg)",
        "brand-bg-subtle": "var(--color-bg-subtle)",
        "brand-surface": "var(--color-surface)",
        
        "sanctuary-purple": "var(--brand-primary)",
        "sanctuary-green": "var(--brand-accent)",
        "sanctuary-dark": "var(--color-text-base)",
        "sanctuary-bg": "var(--color-bg-subtle)",
        "sanctuary-subtle-bg": "var(--color-bg-subtle)",
        "sanctuary-light-purple": "rgba(0, 174, 239, 0.2)",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fade-in 0.6s ease-out',
        'fade-in-up': 'fade-in-up 0.6s ease-out',
        'fade-in-down': 'fade-in-down 0.6s ease-out',
        'pulse-gentle': 'pulse-gentle 2.2s infinite ease-in-out',
        'pulse-slow': 'pulse-slow 2.5s infinite',
      },
      keyframes: {
        'fade-in': {
          from: { opacity: '0' },
          to: { opacity: '1' }
        },
        'fade-in-up': {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' }
        },
        'fade-in-down': {
          from: { opacity: '0', transform: 'translateY(-20px)' },
          to: { opacity: '1', transform: 'translateY(0)' }
        },
        'pulse-gentle': {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.9' },
          '50%': { transform: 'scale(1.05)', opacity: '1' }
        },
        'pulse-slow': {
          '0%, 100%': { 
            transform: 'scale(1)', 
            'box-shadow': '0 0 0 0 rgba(0, 174, 239, 0.4)' 
          },
          '50%': { 
            transform: 'scale(1.03)', 
            'box-shadow': '0 0 0 10px rgba(0, 174, 239, 0)' 
          }
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography')
  ],
}