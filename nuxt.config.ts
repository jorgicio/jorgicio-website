import { defineNuxtConfig } from '@nuxt/bridge'

export default defineNuxtConfig({
  bridge: {
    meta: true,
    vite: true,
    app: true
  },
  target: 'static',
  buildModules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/fontawesome',
  ],
  tailwindcss: {
    configPath: 'tailwind.config.ts',
    cssPath: '~/assets/css/main.css'
  },
  modules: [],
  plugins: [],
  components: true,
  build: {},
  css: [ 
    '~/assets/css/transitions.css',
  ],
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
  },
  layoutTransition: {
    name: "pagina"
  }
})