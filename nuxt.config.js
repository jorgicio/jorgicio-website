export default {
    css: [
        '@/assets/css/main.css',
    ],
    buildModules: [
        '@nuxt/postcss8',
    ],
    components: true,
    build: {
        postcss: {
            plugins: {
                tailwindcss: {},
                autoprefixer: {},
            }
        }
    },
}