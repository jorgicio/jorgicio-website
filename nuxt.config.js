export default {
    css: [
        '~/assets/css/main.css',
    ],
    buildModules: [
        '@nuxtjs/style-resources',
    ],
    styleResources: {
        scss: [
            '~/assets/scss/mixins.scss',
            '~/assets/scss/variables.scss',
        ],
        hoistUseStatements: true
    },
    plugins: [
        '~/plugins/bootstrap-vue'
    ]
}