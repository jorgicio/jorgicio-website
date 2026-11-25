<template>
  <div class="flex flex-wrap justify-center md:w-full md:h-14 items-center relative">
    <nav class="bg-white border-gray-200 p-2 top-0 left-1/2 -translate-x-1/2 z-50">
      <div class="hidden md:block w-full md:w-auto" id="mobile-menu">
       <ul class="flex-col md:flex-row flex md:space-x-8 mt-4 md:mt-0 md:text-sm md:font-medium">
          <li><NuxtLink to="/">Inicio</NuxtLink></li>
          <li><NuxtLink to="/about">Acerca de mí</NuxtLink></li>
          <li><NuxtLink to="/experiencia">Experiencia</NuxtLink></li>
          <li><NuxtLink to="/portfolio">Portfolio</NuxtLink></li>
          <li><NuxtLink to="/contacto">¡Contáctame!</NuxtLink></li>
          <li><NuxtLink to="/blog">Blog</NuxtLink></li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '#imports';

  export default defineComponent({
    name: "Navbar"
});
</script>
