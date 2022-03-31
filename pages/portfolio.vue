<template>
  <div class="grid grid-cols-2 place-items-stretch md:place-items-center gap-3">
    <Photo v-show="showModal" @close-modal="showModal = false" :photo="photo" />
    <div v-for="photo in photos">
      <a href="#" @click="openModal(photo)">
        <img :src="photo.thumbnail" :alt="photo.title" />  
      </a> 
    </div>
    
  </div>
</template>
<script lang="ts">
  import Vue from "vue"
  import Photo from "~~/components/Photo.vue"

  export default Vue.extend({
    name: "portfolio",
    layout: "frontend",
    components: { Photo },
    transition: "pagina",
    data() {
      return {
        photo: {},
        showModal: false,
        photos: photoGallery()
      }
    },
    methods: {
      openModal(data: Object) {
        this.photo = data
        this.showModal = true
      }
    }
  })
  
</script>