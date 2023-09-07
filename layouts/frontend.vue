<template>
  <div class="p-8 md:p-2 container">
    <Navbar />
    <slot />
  </div>
</template>

<script lang="ts">
  import { useHead } from 'nuxt/app';
  import Navbar from '~~/components/Navbar.vue';

  export default {
    name: "frontend",
    components: { Navbar },
    setup() {
      useHead({
        title: "El sitio web de Jorgicio",
        meta: [
          { hid: "description", name: "description", content: "El sitio web de Jorgicio" },
          { name: "format-detection", content: "telephone=no" }
        ],
        link: [
          {}
        ]
      })
    }
  };
</script>