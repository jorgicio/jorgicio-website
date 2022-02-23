export default {
    target: 'static',
    css: [
        '@/assets/css/main.css',
    ],
    buildModules: [
        '@nuxtjs/tailwindcss',
        '@nuxtjs/fontawesome',
        '@nuxtjs/composition-api/module'
    ],
    head: {
        title: 'El sitio web de Jorgicio',
        htmlAttrs: {
            lang: 'es'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'El sitio web de Jorgicio' },
            { name: 'format-detection', content: 'telephone=no' }
        ],
        link: [
            {}
        ]
    },
    modules: [],
    plugins: [],
    components: true,
    build: {
    },
    fontawesome: {
      icons: { 
        solid: [
          'faGraduationCap',
          'faMapMarkerAlt',
          'faBirthdayCake',
          'faDesktop',
          'faQuestion',
          'faLaptopCode',
          'faGamepad',
          'faTerminal'
        ],
        brands: [
          'faTwitch',
          'faWordpress',
          'faCuttlefish',
          'faJava',
          'faJsSquare',
          'faPython',
          'faHtml5',
          'faCss3Alt'
        ]
      }
    }
}