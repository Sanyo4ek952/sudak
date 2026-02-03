import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          900: '#0B0D12',
          700: '#1A1E27',
          500: '#2F3645'
        },
        pearl: {
          50: '#F7F6F2',
          100: '#F2EFEA',
          200: '#E7E1D8'
        },
        accent: {
          500: '#5B8CFF',
          700: '#2F5BFF'
        },
        sage: {
          500: '#4E7B6C'
        }
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        soft: '0 12px 30px rgba(11, 13, 18, 0.12)',
        card: '0 20px 50px rgba(11, 13, 18, 0.16)'
      },
      borderRadius: {
        xl: '20px',
        '2xl': '28px'
      }
    }
  },
  plugins: []
};

export default config;
