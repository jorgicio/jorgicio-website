const colors = require('tailwindcss/colors')

module.exports = {
  theme: {
    extend: {
      colors: {
        slate: colors.blueGray,
        stone: colors.warmGray,
        neutral: colors.trueGray,
        amber: colors.amber,
        lime: colors.lime,
        emerald: colors.emerald,
        teal: colors.teal,
        cyan: colors.cyan,
        sky: colors.sky,
        fuchsia: colors.fuchsia,
        violet: colors.violet,
        orange: colors.orange,
      }  
    },
    fontFamily: {
      'sans': ['-apple-system','BlinkMacSystemFont','"Segoe UI"','Roboto', 'Helvetica Neue', 'Arial','sans-serif','"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"'],
      'mono': ['"SFMono-Regular"','Menlo','Monaco','Consolas','"Liberation Mono"','"Courier New"','monospace']
    }
  },
  mode: 'jit',
  purge: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}'
  ]
}