<template>
  <div class="grid grid-cols-2 place-content-center">
    <div v-for="photo in photos" >
      <NuxtLink :to="`${photo.path}`">
        <img :src="`${photo.thumbnail}`" :alt="`${photo.title}`" />
      </NuxtLink>
    </div>
  </div>
</template>
<script lang="ts">
  import Vue from "vue"
  import photos from "~~/composables/photos"

  export default Vue.extend({
    name: "portfolio",
    layout: "frontend",
    transition: "pagina",
    data() {
      return {
        photos: photos()
      }
    } 
  })
  
</script>