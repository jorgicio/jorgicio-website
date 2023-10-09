import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  modules: ['@nuxtjs/apollo','@nuxtjs/tailwindcss'],
  tailwindcss: {
    configPath: 'tailwind.config.ts'
  },
  ssr: true,
  components: [
    '~/components'
  ],
  devServerHandlers: [],
  pages: true,
  css: [
    '@/assets/css/main.css', 
    '@/assets/css/transitions.css',
    '@fortawesome/fontawesome-svg-core/styles.css'
  ],
  sourcemap: true,
  devtools: {
    enabled: true,
    vscode: {}
  },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1, maximum-scale=1'
    }
  },
  apollo: {
    clients: {
      default: {
        httpEndpoint: process.env.BACKEND_URL ?? 'http://localhost:1337/graphql'
      }
    }
  },
  runtimeConfig: {  
    public: {
      strapiBaseUri: process.env.API_URL ?? 'http://localhost:1337'
    }
  }
})