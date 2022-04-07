<template>
  <transition name="modal-fade">
    <div class="modal-overlay" @keyup.esc="$emit('close-modal')" @click="$emit('close-modal')">
      <div class="modal-window w-fit h-fit" @click.stop>
        <div class="relative">
          <button class="close-button" @click="$emit('close-modal')">x</button>
        </div>
        <div>    
          <img :src="photo.photoPath" :alt="photo.title" />
          <div class="h-auto relative visible hover:invisible">
            <div class="absolute z-[1000] bg-zinc-300/50 bottom-0 w-full">
              <h3 class="font-bold">{{ photo.title }}</h3>
              {{ photo.description }}
            </div>
          </div>
          
        </div>     
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