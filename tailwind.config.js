module.exports = {
  purge: [],
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
