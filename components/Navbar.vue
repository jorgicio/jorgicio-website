<template>
  <div class="flex flex-wrap relative md:w-full md:h-14">
    <nav class="bg-white border-gray-200 p-2 absolute top-0 right-0">
      <div class="hidden md:block w-full md:w-auto" id="mobile-menu">
       <ul class="flex-col md:flex-row flex md:space-x-8 mt-4 md:mt-0 md:text-sm md:font-medium">
          <li><NuxtLink to="/">Inicio</NuxtLink></li>
          <li><NuxtLink to="/experiencia">Experiencia</NuxtLink></li>
          <li><NuxtLink to="/portfolio">Portfolio</NuxtLink></li>
          <li><NuxtLink to="/contacto">¡Contáctame!</NuxtLink></li>
          <li><a href="https://blog.jorgicio.net">Blog</a></li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'

  export default Vue.extend({
    name: "Navbar"
  })
</script>