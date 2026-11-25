import { defineNuxtConfig } from "nuxt/config";
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  modules: [],
  ssr: true,
  components: [
    '@/components'
  ],
  devServerHandlers: [],
  pages: true,
  css: [
    '@/assets/css/main.css',
    '@/assets/css/transitions.css',
    '@/assets/css/blog.css'
  ],
  vite: {
    plugins: [
      tailwindcss(),
    ]
  },
  sourcemap: true,
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1, maximum-scale=1'
    }
  },
  runtimeConfig: {
    public: {
      strapiBaseUri: process.env.API_URL ?? 'http://localhost:1337',
      strapiApiToken: process.env.STRAPI_API_TOKEN ?? ''
    }
  },
  compatibilityDate: '2026-11-22',
  experimental: {
    // Workaround for https://github.com/nuxt/nuxt/issues/33606
    // (Nuxt 3.21.x dev: "Pre-transform error: Failed to resolve import #app-manifest")
    appManifest: false
  },
})
