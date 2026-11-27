<template>
  <div class="min-h-screen">
    <Navbar />
    <main class="mx-auto w-full max-w-6xl px-4 py-6 md:px-6">
      <slot />
    </main>
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
