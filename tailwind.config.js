/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        'spa-dark': '#1a1814',
        'spa-charcoal': '#2a2620',
        'spa-gold': '#c4a962',
        'spa-gold-light': '#d4bc82',
        'spa-gold-dark': '#a88949',
        'spa-cream': '#f7f3ed',
        'spa-sand': '#ede8df',
        'spa-sage': '#6b8f71',
        'spa-sage-light': '#8ba888',
        'spa-teal': '#4a7c7e',
        'spa-blue': '#4a9fb5',
        'spa-light': '#fafaf8',
      },
      fontFamily: {
        'serif': ['Cormorant Garamond', 'Playfair Display', 'serif'],
        'sans': ['Inter', 'sans-serif'],
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      boxShadow: {
        'spa': '0 4px 30px rgba(26, 24, 20, 0.08)',
        'spa-lg': '0 20px 60px rgba(26, 24, 20, 0.12)',
        'spa-gold': '0 8px 30px rgba(196, 169, 98, 0.25)',
        'spa-inner': 'inset 0 1px 0 rgba(255,255,255,0.6)',
      },
      backgroundImage: {
        'spa-gradient': 'linear-gradient(135deg, #f7f3ed 0%, #ede8df 100%)',
        'spa-dark-gradient': 'linear-gradient(135deg, #1a1814 0%, #2a2620 50%, #1a1814 100%)',
        'spa-gold-gradient': 'linear-gradient(135deg, #c4a962 0%, #d4bc82 50%, #a88949 100%)',
        'hero-overlay': 'linear-gradient(to bottom, rgba(26,24,20,0.55) 0%, rgba(26,24,20,0.35) 40%, rgba(26,24,20,0.75) 100%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-in-out forwards',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'slide-up': 'slideUp 0.8s ease-out forwards',
        'float': 'float 4s ease-in-out infinite',
        'ken-burns': 'kenBurns 20s ease-out infinite alternate',
        'shimmer': 'shimmer 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        kenBurns: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.08)' },
        },
        shimmer: {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
