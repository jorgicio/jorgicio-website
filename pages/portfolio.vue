<template>
  <ul>
    <li v-for="x in fileNames">
      <NuxtLink :to="`${photos}/${x}.jpg`">
        <img :src="`${thumbnails}/${x}-thumb.jpg`" :alt="`${x}-thumb.jpg`" />
      </NuxtLink>
    </li>
  </ul>
</template>
<script lang="ts">
  import Vue from "vue"

  export default Vue.extend({
    name: "portfolio",
    layout: "frontend",
    transition: "pagina",
    data() {
      return {
        photos: './assets/img/portfolio',
        thumbnails: `./assets/img/portfolio/thumbnails`,
        fileNames : [...Array(8).keys()].map(
          x => x < 9 ? '0' + (x + 1).toString() : (x + 1).toString()
        )
      }
    } 
  })
</script>