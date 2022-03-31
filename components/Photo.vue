<template>
  <transition name="modal-fade">
    <div class="modal-overlay" @click="$emit('close-modal')">
      <div class="modal-window" @click.stop>
        <img :src="photo.photoPath" :alt="photo.title" />
        <h3>{{ photo.title }}</h3>
        {{ photo.description }}
        <button class="bg-slate-300 rounded p-1 cursor-pointer" @click="$emit('close-modal')">
          Cerrar
        </button>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
  import Vue from "vue"
  import { photoGallery } from "~~/composables/photos"

  export default Vue.extend({
    name: "Photo",
    props: ['photo'],
    data() {
      return {
        photos: photoGallery()
      }
    }
  })
</script>