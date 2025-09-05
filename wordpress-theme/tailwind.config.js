/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.php',
    './template-parts/**/*.php',
    './inc/**/*.php',
    './js/**/*.js',
    // Include React components for reference during development
    '../components/**/*.tsx',
    '../components/**/*.ts'
  ],
  theme: {
    extend: {
      colors: {
        'brand': {
          'primary': '#2563eb',
          'primary-hover': '#1d4ed8',
          'secondary': '#ea580c',
          'secondary-hover': '#dc2626', 
          'accent': '#16a34a',
          'accent-hover': '#15803d',
          'yellow': '#eab308',
          'yellow-hover': '#ca8a04',
          'text-primary': '#1f2937',
          'text-secondary': '#6b7280',
          'bg-main': '#ffffff',
          'bg-subtle': '#f9fafb',
          'border': '#e5e7eb'
        }
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif']
      },
      maxWidth: {
        'content-width': '1200px',
        'content-width-lg': '1400px'
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'fade-in-down': 'fadeInDown 0.6s ease-out',
        'page-fade': 'pageFade 0.3s ease-in-out',
        'pulse-slow': 'pulse 3s ease-in-out infinite'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        pageFade: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        }
      },
      textShadow: {
        'custom': '2px 2px 4px rgba(0,0,0,0.8), 1px 1px 2px rgba(0,0,0,0.6)',
        'strong': '3px 3px 6px rgba(0,0,0,0.8), 1px 1px 3px rgba(0,0,0,0.6)'
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    function({ addUtilities }) {
      const newUtilities = {
        '.text-shadow-custom': {
          textShadow: '2px 2px 4px rgba(0,0,0,0.8), 1px 1px 2px rgba(0,0,0,0.6)'
        },
        '.text-shadow-strong': {
          textShadow: '3px 3px 6px rgba(0,0,0,0.8), 1px 1px 3px rgba(0,0,0,0.6)'
        },
        '.content-bubble': {
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(12px)',
          borderRadius: '1.5rem',
          boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
          border: '1px solid rgba(229, 231, 235, 0.5)'
        },
        '.content-bubble-inverted': {
          backgroundColor: 'rgba(0, 0, 0, 0.3)',
          backdropFilter: 'blur(12px)',
          borderRadius: '1.5rem',
          border: '1px solid rgba(255, 255, 255, 0.2)'
        },
        '.btn-pulse': {
          animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
        },
        '.max-content-width': {
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 1.5rem'
        },
        '.max-content-width-lg': {
          maxWidth: '1400px',
          margin: '0 auto'
        },
        '.nav-container': {
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '0 1.5rem'
        },
        '.text-container': {
          maxWidth: '65ch'
        },
        '.icon-interactive': {
          transition: 'transform 0.3s ease, color 0.3s ease'
        },
        '.icon-interactive:hover': {
          transform: 'scale(1.1)'
        },
        '.animate-on-scroll': {
          opacity: '0',
          transform: 'translateY(20px)',
          transition: 'opacity 0.6s ease-out, transform 0.6s ease-out'
        },
        '.animate-on-scroll.is-visible': {
          opacity: '1',
          transform: 'translateY(0)'
        },
        '.stagger-children .animate-on-scroll': {
          transitionDelay: '0ms'
        },
        '.header-scroll': {
          transition: 'all 0.3s ease'
        },
        '.header-animate': {
          animation: 'fadeInDown 0.5s ease-out'
        },
        '.h-screen-minus-header': {
          height: 'calc(100vh - 88px)'
        },
        '.pt-22': {
          paddingTop: '5.5rem'
        },
        '.h-22': {
          height: '5.5rem'
        }
      }
      addUtilities(newUtilities)
    }
  ]
}