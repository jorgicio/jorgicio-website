<template>
  <div>
    <section id="card">
      <img src="/img/psyduckcomputer.png" class="w-60 h-60 rounded-full border-double border-8 border-slate-400" alt="duck" />
      <div class="pt-6 md:pt-8 text-center space-y-4 space-x-4">
        <h1 class="font-bold leading-tight text-3xl mt-0 mb-2">Jorge Pizarro-Callejas, a.k.a «Jorgicio»</h1>
        <ul class="text-slate-600 text-left">
          <li> <font-awesome-icon :icon="['fas','graduation-cap']" class="icon-descripcion" /> Ingeniero Informático, egresado y titulado de la <a href="https://www.utfsm.cl" class="link">Universidad Técnica Federico Santa María</a>, Valparaíso.</li>
          <li> <font-awesome-icon :icon="['fas','map-marker-alt']" class="icon-descripcion"/> Actualmente en Quilpué, Región de Valparaíso, Chile.</li>
          <li> <font-awesome-icon :icon="['fas','birthday-cake']" class="icon-descripcion"/> {{birthDate}}. {{myAge}} años.</li>
          <li> <font-awesome-icon :icon="['fas','desktop']" class="icon-descripcion"/> Actualmente trabajando como ingeniero DevOps.</li>
          <li> <font-awesome-icon :icon="['fas','question']" class="icon-descripcion"/> Lo demás me lo puedes <a href="/contacto" class="link">preguntar</a>.</li> 
        </ul>
        <button type="button" class="text-center font-medium hover:bg-slate-200 px-5 py-2.5 rounded-xl border border-indigo-800"> <NuxtLink to="#">Descarga mi CV</NuxtLink></button>
        <button type="button" class="text-center font-medium hover:bg-slate-200 px-5 py-2.5 rounded-xl border border-indigo-800"> <NuxtLink to="/contacto"> Contáctame</NuxtLink></button>
      </div>
    </section>
    <section id="quehago">
      <header class="flex md:flex-row md:p-3">
        <h1 class="font-bold leading-tight text-3xl mt-0 mb-2">A qué me dedico</h1></header>
      <div class="grid grid-cols-2 gap-4 text-slate-600">
        <div class="cosa w-full md:p-3">
          <div class="icon">
            <font-awesome-icon :icon="['fas','laptop-code']" class="text-4xl text-teal-600"/>
          </div> 
          <div class="descripcion">
            <h4 class="font-bold leading-tight text-1xl mt-0 mb-2"> Desarrollo de software (principalmente web)</h4>
            <p>Me muevo tanto en <span class="italic">frontend</span> como en <span class="italic">backend</span>. He tratado con PHP, MySQL, Java, PostgreSQL, HTML, CSS, SASS/SCSS, JavaScript (NodeJS) y Python. Pero no le hago asco a otros lenguajes.</p>
          </div>
          </div>
        <div class="cosa w-full md:p-3">
          <div class="icon">
            <font-awesome-icon :icon="['fab','twitch']" class="text-4xl text-teal-600"/>
          </div>
          <div class="descripcion">
            <h4 class="font-bold leading-tight text-1xl mt-0. b-2">Streamer ocasional</h4> 
            <p>A veces en mis ratos libres me pongo a jugar y suelo hacer <span class="italic">streams</span> en <a href="https://twitch.tv/jorgicio" class="link">Twitch</a> y <a href="https://trovo.live/jorgicio" class="link">Trovo</a>.</p>
          </div>
        </div>
        <div class="cosa w-full md:p-3">
          <div class="icon">
            <font-awesome-icon :icon="['fab','wordpress']" class="text-4xl text-teal-600"/>
          <div class="descripcion">
            <h4 class="font-bold leading-tight text-1xl mt-0 mb-2">Blogger</h4> 
            <p>Cuando tengo tiempo y me da la gana, escribo y opino en <a href="https://blog.jorgicio.net" class="link">mi blog</a>. Para cosas cortas, está <a href="https://twitter.com/Jorgicio" class="link">el Twitter</a></p> 
            </div>
          </div>
        </div>
        <div class="cosa w-full md:p-3">
          <div class="icon">
            <font-awesome-icon :icon="['fas','terminal']" class="text-4xl text-teal-600"/>
          </div>
          <div class="descripcion">
            <h4 class="font-bold leading-tight text-1xl mt-0 mb-2">Sysadmin</h4> 
            <p>Además de programar, también tengo conocimientos de administración de sistemas y algo de DevOps. Paso el 99% del tiempo en Linux. Puedes ver algo de mi trabajo en <a href="https://github.com/jorgicio" class="link">GitHub</a>.</p> 
          </div>
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
</script>