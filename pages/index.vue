<template>
  <div>
    <section id="card">
      <div id="image" class="col-span-2">
        <NuxtImg src="/img/psyduckcomputer.png" class="w-60 h-60 rounded-full border-double border-8 border-slate-400" alt="duck" />
      </div>
      <div id="introduction" class="col-span-4">
        <h1>Jorge Pizarro-Callejas</h1>
        <h2>a.k.a. Jorgicio</h2>
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
</script>
