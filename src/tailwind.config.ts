import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './index.html',
    './App.tsx',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Pistolero Express Brand Colors
        'pistolero-brown': '#3F1D1D',
        'pistolero-gray': '#817F82', 
        'pistolero-mint': '#59C9A5',
        'pistolero-yellow': '#FFFD77',
        'pistolero-green': '#042A2B',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      container: {
        center: true,
        padding: '1rem',
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1400px',
        },
      },
    },
  },
  plugins: [],
}

export default config