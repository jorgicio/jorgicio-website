<template>
  <div class="p-8 md:p-2 container">
    <Navbar />
    <Nuxt />
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Navbar from '~~/components/Navbar.vue'

  export default Vue.extend({
    name: "frontend",
    components: { Navbar },
    setup() {
      useHead({
        title: "El sitio web de Jorgicio",
        charset: "utf-8",
        viewport: "width=device-width, initial-scale=1, maximum-scale=1",
        meta: [
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