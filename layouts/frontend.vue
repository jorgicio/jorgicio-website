<template>
  <div class="p-8 md:p-2 container">
    <Navbar />
    <Nuxt />
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'

  export default Vue.extend({
    name: "frontend",
    setup(){
      useMeta({
        title: "El sitio web de Jorgicio",
        htmlAttrs: {
          lang: "es"
        },
        meta: [
          { charset: "utf-8" },
          { name: "viewport", content: "width=device-width, initial-scale=1" },
          { hid: "description", name: "description", content: "El sitio web de Jorgicio" },
          { name: "format-detection", content: "telephone=no" }
        ],
        link: [
          {}
        ]
      })
    }
  })
</script>