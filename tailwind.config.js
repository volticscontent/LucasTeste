module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1e3a8a', // Azul escuro
          light: '#3b82f6',
          dark: '#1e293b',
        },
        secondary: {
          DEFAULT: '#64748b', // Cinza neutro
          light: '#cbd5e1',
          dark: '#334155',
        },
        accent: {
          DEFAULT: '#facc15', // Amarelo para CTA
          dark: '#ca8a04',
        },
        background: {
          DEFAULT: '#f9fafb', // Fundo claro
          dark: '#111827',
        },
        text: {
          DEFAULT: '#1e293b', // Texto escuro
          light: '#f1f5f9',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      fontWeight: {
        normal: 400,
        semibold: 600,
        bold: 700,
      },
      spacing: {
        1: '4px',
        2: '8px',
        3: '12px',
        4: '16px',
        6: '24px',
        8: '32px',
      },
      fontSize: {
        sm: ['0.875rem', { lineHeight: '1.25rem' }],
        base: ['1rem', { lineHeight: '1.5rem' }],
        lg: ['1.125rem', { lineHeight: '1.75rem' }],
        xl: ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
      },
      borderRadius: {
        DEFAULT: '0.5rem', // 8px
        md: '0.75rem',
        full: '9999px',
      },
      boxShadow: {
        card: '0 2px 8px 0 rgba(30, 58, 138, 0.08)',
        button: '0 1px 3px 0 rgba(250, 204, 21, 0.15)',
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
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
  content: [
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
}
