<template lang="pug">
  section(class="p-8 md:p-2 container")
    Navbar
    #card
      img(src="~/assets/img/psyduckcomputer.png" class="w-60 h-60 rounded-full border-double border-8 border-slate-400 ")
      div(class="pt-6 md:pt-8 text-center space-y-4 space-x-4")
        h1(class="font-bold leading-tight text-3xl mt-0 mb-2") Jorge Pizarro-Callejas, a.k.a «Jorgicio»
        ul.text-slate-600.text-left
          li: font-awesome-icon(:icon="['fas','graduation-cap']" class="icon-descripcion")/ Ingeniero Informático, egresado y titulado de la #[a(href="https://www.utfsm.cl" class="link") Universidad Técnica Federico Santa María], Valparaíso.
          li: font-awesome-icon(:icon="['fas','map-marker-alt']" class="icon-descripcion")/ Actualmente en Quilpué, Región de Valparaíso, Chile.
          li: font-awesome-icon(:icon="['fas','birthday-cake']" class="icon-descripcion")/ {{getStringDate}}. {{getEdad}} años.
          li: font-awesome-icon(:icon="['fas','desktop']" class="icon-descripcion")/ Actualmente trabajando como ingeniero DevOps.
          li: font-awesome-icon(:icon="['fas','question']" class="icon-descripcion")/ Lo demás me lo puedes #[a(href="/contacto" class="link") preguntar].
        button(type="button" class="text-center font-medium hover:bg-slate-200 px-5 py-2.5 rounded-xl border border-indigo-800"): a(href="#") Descarga mi CV
        button(type="button" class="text-center font-medium hover:bg-slate-200 px-5 py-2.5 rounded-xl border border-indigo-800"): a(href="/contacto") Contáctame
    #quehago
      header(class="flex md:flex-row md:p-3")
        h1(class="font-bold leading-tight text-3xl mt-0 mb-2") A qué me dedico
      div(class="grid grid-cols-2 gap-4 text-slate-600")
        div(class="cosa w-full md:p-3")
          .icon
            font-awesome-icon(:icon="['fas','laptop-code']" class="text-4xl text-teal-600") 
          div.descripcion
            h4.font-bold.leading-tight.text-1xl.mt-0.mb-2 Desarrollo de software (principalmente web)
            p Me muevo tanto en #[span.foreign frontend] como en #[span.foreign backend]. He tratado con PHP, MySQL, Java, PostgreSQL, HTML, CSS, SASS/SCSS, JavaScript (NodeJS) y Python. Pero no le hago asco a otros lenguajes.
        div(class="cosa w-full md:p-3")
          .icon
            font-awesome-icon(:icon="['fab','twitch']" class="text-4xl text-teal-600")
          div.descripcion
            h4.font-bold.leading-tight.text-1xl.mt-0.mb-2 Streamer ocasional
            p A veces en mis ratos libres me pongo a jugar y suelo hacer #[span.foreign streams] en #[a(href="https://twitch.tv/jorgicio" class="link") Twitch] y #[a(href="https://trovo.live/jorgicio" class="link") Trovo].
        div(class="cosa w-full md:p-3")
          .icon
            font-awesome-icon(:icon="['fab','wordpress']" class="text-4xl text-teal-600")
          div.descripcion
            h4.font-bold.leading-tight.text-1xl.mt-0.mb-2 Blogger
            p Cuando tengo tiempo y me da la gana, escribo y opino en #[a(href="https://blog.jorgicio.net" class="link") mi blog]. Para cosas cortas, está #[a(href="https://twitter.com/Jorgicio" class="link") el Twitter].
        div(class="cosa w-full md:p-3")
          .icon
            font-awesome-icon(:icon="['fas','terminal']" class="text-4xl text-teal-600")
          div.descripcion
            h4.font-bold.leading-tight.text-1xl.mt-0.mb-2 Sysadmin
            p Además de programar, también tengo conocimientos de administración de sistemas y algo de DevOps. Paso el 99% del tiempo en Linux. Puedes ver algo de mi trabajo en #[a(href="https://github.com/jorgicio" class="link") GitHub].
</template>

<script>
  import Navbar from '@/components/Navbar'
  export default {
    components: {
      Navbar
    },
    data: () => ({
      edad: 0,
      fechaNac: "1986-07-17"
    }),
    computed: {
      getStringDate: function() {
        let strippedDate = this.fechaNac.split("-")
        let fecha = new Date(this.fechaNac)
        let mes = fecha.toLocaleString('es', {month: 'long'})
        return `${strippedDate[2]} de ${mes} de ${strippedDate[0]}`
      },
      getEdad: function() {
        let today = new Date()
        let birthDate = new Date(this.fechaNac)
        let age = today.getFullYear() - birthDate.getFullYear()
        let month = today.getMonth() - birthDate.getMonth()
        this.edad = (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) ? age - 1 : age
        return this.edad
      }
    }
  }
</script>