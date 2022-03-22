export default ({ rootDir }) => ({
  theme: {
    extend: {
      fontFamily: {
        'sans': ['-apple-system','BlinkMacSystemFont','"Segoe UI"','Roboto', 'Helvetica Neue', 'Arial','sans-serif','"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"'],
        'mono': ['"SFMono-Regular"','Menlo','Monaco','Consolas','"Liberation Mono"','"Courier New"','monospace']
      }
    }
  },
  plugins: [],
  content: [
    `${rootDir}/components/**/*.{vue,js,ts}`,
    `${rootDir}/layouts/**/*.{vue,js,ts}`,
    `${rootDir}/pages/**/*.{vue,js,ts}`,
    `${rootDir}/composables/**/*.{vue,js,ts}`,
    `${rootDir}/plugins/**/*.{vue,js,ts}`,
    `${rootDir}/app.{js,ts,vue}`,
    `${rootDir}/nuxt.config.js`,
    `${rootDir}/nuxt.config.ts`
  ]
})