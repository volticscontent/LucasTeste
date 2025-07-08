module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#001F3F', // Header escuro
        },
        accent: {
          DEFAULT: '#FFC300', // Amarelo vibrante
        },
        background: {
          DEFAULT: '#FFFFFF', // Fundo claro
          dark: '#001F3F',   // Futuro: fundo escuro
        },
        foreground: {
          DEFAULT: '#1A1A1A', // Texto principal
          dark: '#FFFFFF',    // Futuro: texto claro
        },
        muted: {
          DEFAULT: '#F3F4F6', // Cinza claro para divisores, etc
          dark: '#222F3E',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '0.5rem', // 8px
        md: '0.75rem',
        full: '9999px',
      },
      boxShadow: {
        card: '0 2px 8px 0 rgba(0, 31, 63, 0.08)',
        button: '0 1px 3px 0 rgba(255, 195, 0, 0.15)',
      },
      transitionProperty: {
        DEFAULT: 'all',
      },
      transitionDuration: {
        DEFAULT: '300ms',
      },
      transitionTimingFunction: {
        DEFAULT: 'ease-in-out',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
