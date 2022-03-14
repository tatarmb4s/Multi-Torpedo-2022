module.exports = {
  purge: {
    enabled: true,
    content: [
      '*.html',
      './assets/js/main.js'
    ]
  },
  theme: {
    extend: {
      inset: {
        '100': '100%',
      },

      padding: {
        '120': '120px',
      },

      colors: {
        'theme-color-def': '#021b25',
        'theme-color': '#361CC1',
        'theme-color-2': '#119bd2',
        'theme-color-3': '#38baee'
      }
    },
  },
  variants: {},
  plugins: [],
}
