<template>
  <div class="p-8 md:p-2 container">
    <Navbar />
    <slot />
  </div>
</template>

<script lang="ts">
  import { useHead, useSeoMeta } from 'nuxt/app';
  import Navbar from '~~/components/Navbar.vue';

  export default {
    name: "frontend",
    components: { Navbar },
    setup() {
      useHead({
        title: "El sitio web de Jorgicio",
        meta: [
          { name: "description", content: "El sitio web de Jorgicio" },
          { httpEquiv: "format-detection", content: "telephone=no" }
        ],
        link: [
          {}
        ]
      }),
      useSeoMeta({
        title: "El sitio web de Jorgicio",
        ogTitle: "El sitio web de Jorgicio",
        description: "Description",
        ogDescription: "Description",
        ogImage: "http://image.url/image.png"
      })
    }
  };
</script>
