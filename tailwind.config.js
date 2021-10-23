module.exports = {
  purge: {
    options: {
      safelist: ['mb-4', 'mb-1', 'mr-1', 'flex', 'px-3', 'py-2', 'border', 'border-gray-400', 'rounded', 'outline-none', 'w-full', 'font-medium', 'text-sm', 'text-red-700', 'text-xs']
    }
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
      serif: ['Playfair Display', 'serif']
    },
    extend: {
      colors: {
        primary: {
          base: '#E62310',
          dark: '#CB1F0E'
        },
        foreground: {
          base: '#1E2433'
        },
        'betel-centru': '#FFB800'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
