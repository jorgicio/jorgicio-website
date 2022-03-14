export default {
  theme: {
    extend: {
      fontFamily: {
        'sans': ['-apple-system','BlinkMacSystemFont','"Segoe UI"','Roboto', 'Helvetica Neue', 'Arial','sans-serif','"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"'],
        'mono': ['"SFMono-Regular"','Menlo','Monaco','Consolas','"Liberation Mono"','"Courier New"','monospace']
      }
    }
  },
  content: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}'
  ],
  variants: {}
}