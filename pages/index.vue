<template>
  <div>
    <section class="card">
      <div id="image" class="col-span-2">
        <NuxtImg src="/img/psyduckcomputer.png" class="w-60 h-60 rounded-full border-double border-8 border-slate-400" alt="duck" />
      </div>
      <div id="introduction" class="col-span-4">
        <h1 class="font-bold text-6xl">Jorge Pizarro-Callejas</h1>
        <h2 class="font-bold text-3xl text-center">a.k.a. Jorgicio</h2>
        <div class="description">
          Ven y sana mi doloooooooooooooooooooor
        </div>
        <div id="socials">
          <li v-for="social in socials" :key="social.name">
            <NuxtLink :to="social.url" target="_blank"> <UButton :icon="social.icon" :label="social.name"></UButton></NuxtLink>
          </li>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">

  import { defineComponent, definePageMeta } from '#imports';

  export default {
    name: "index",
    layout: "frontend",
    transition: "pagina",
    data () {
      return {
        edad: 0,
        fechaNac: "1986-07-17"
      }
    },
    computed: {
      birthDate(): string {
        let strippedDate = this.fechaNac.split("-")
        let fecha = new Date(this.fechaNac)
        let mes = fecha.toLocaleString('es', {month: 'long'})
        return `${strippedDate[2]} de ${mes} de ${strippedDate[0]}`
      },
      myAge(): number {
        let today = new Date()
        let birthDate = new Date(this.fechaNac)
        let age = today.getFullYear() - birthDate.getFullYear()
        let month = today.getMonth() - birthDate.getMonth()
        this.edad = (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) ? age - 1 : age
        return this.edad
      }
    }
  };

</script>

<script lang="ts" setup>
  definePageMeta({
    layout: "frontend",
    pageTransition: true
  });

const socials = [
  { name: "instagram", icon: "i-simple-icons-instagram", url: "https://instagram.com/jorgicio" },
  { name: "twitch", icon: "i-simple-icons-twitch", url: "https://twitch.tv/jorgicio" },
  { name: "kick", icon: "i-simple-icons-kick", url: "https://kick.com/jorgicio" },
  { name: "tiktok", icon: "i-simple-icons-tiktok", url: "https://tiktok.com/@jorgicio" },
  { name: "youtube", icon: "i-simple-icons-youtube", url: "https://youtube.com/jorgicio" },
  { name: "discord", icon: "i-simple-icons-discord", url: "https://discord.com/invite/ygqwq33RN7" },
  { name: "twitter", icon: "i-simple-icons-twitter", url: "https://x.com/jorgicio" },
  { name: "substack", icon: "i-simple-icons-substack", url: "https://jorgicio.substack.com" },
  { name: "github", icon: "i-simple-icons-github", url: "https://github.com/jorgicio" },
  { name: "linkedin", icon: "i-simple-icons-linkedin", url: "https://www.linkedin.com/in/jorgepizarrocallejas/" }
];

</script>
