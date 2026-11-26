<template>
  <div class="p-8 md:p-2 container">
    <Navbar />
    <slot />
  </div>
</template>

<script lang="ts">
  import { useSeoMeta } from 'nuxt/app';
  import Navbar from '~~/components/Navbar.vue';

  export default {
    name: "frontend",
    components: { Navbar },
    setup() {
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
