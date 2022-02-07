<template lang="pug">
  div(class="p-8 md:p-2")
    Navbar
    div#card(class="md:flex p-8 md:pt-8 md:pb-8 md:pl-16 md:pr-16 place-content-center")
      img(src="~/assets/img/psyduckcomputer.png" class="w-60 h-60 rounded-full border-double border-8 border-slate-400 ")
      div(class="pt-6 md:pt-8 text-center space-y-4 space-x-4")
        h1(class="font-bold leading-tight text-3xl mt-0 mb-2") Jorge Pizarro-Callejas, a.k.a «Jorgicio»
        ul.text-slate-600.text-left
          li: font-awesome-icon(:icon="['fas','graduation-cap']" class="w-6 h-6 float-left")/ Ingeniero Informático, egresado y titulado de la Universidad Técnica Federico Santa María, Valparaíso.
          li: font-awesome-icon(:icon="['fas','map-marker-alt']" class="text-2xl float-left")/ Actualmente en Quilpué, Región de Valparaíso, Chile.
          li: font-awesome-icon(:icon="['fas','birthday-cake']" class="text-2xl float-left")/ {{getStringDate}}. {{getEdad}} años.
          li: font-awesome-icon(:icon="['fas','desktop']" class="text-2xl float-left")/ Actualmente trabajando como ingeniero DevOps.
          li: font-awesome-icon(:icon="['fas','question']" class="text-2xl float-left")/ Lo demás me lo puedes #[a(href="/contacto" class="text-slate-500 hover:text-sky-600 visited:text-slate-700") preguntar].
        button(type="button" class="text-center font-medium hover:bg-slate-200 px-5 py-2.5 rounded-full border border-indigo-800"): a(href="#") Descarga mi CV
        button(type="button" class="text-center font-medium hover:bg-slate-200 px-5 py-2.5 rounded-full border border-indigo-800"): a(href="/contacto") Contáctame
    div#quehago(class="flex md:grid grid-flow-row p-8 md:p-1 md:w-full")
      header(class="flex md:flex-row md:p-3")
        h1(class="font-bold leading-tight text-3xl mt-0 mb-2") A qué me dedico
      div(class="grid grid-cols-2 gap-4")
        div(class="cosa w-full md:p-3")
          div.icon.float-left.p-2
            font-awesome-icon(:icon="['fas','laptop-code']" class="text-4xl text-teal-600") 
          div.descripcion
            h4.font-bold.leading-tight.text-1xl.mt-0.mb-2 Desarrollo web (frontend y backend)
            p Hago esto
        div(class="cosa w-full md:p-3")
          div.icon.float-left.p-2
            font-awesome-icon(:icon="['fab','twitch']" class="text-4xl text-teal-600")
          div.descripcion
            h4.font-bold.leading-tight.text-1xl.mt-0.mb-2 Streamer ocasional
            p Hago esto otro
        div(class="cosa w-full md:p-3")
          div.icon.float-left.p-2
            font-awesome-icon(:icon="['fab','wordpress']" class="text-4xl text-teal-600")
          div.descripcion
            h4.font-bold.leading-tight.text-1xl.mt-0.mb-2 Blogger
            p Y esto otro también
        div(class="cosa w-full md:p-3")
          div.icon.float-left.p-2
            font-awesome-icon(:icon="['fas','terminal']" class="text-4xl text-teal-600")
          div.descripcion
            h4.font-bold.leading-tight.text-1xl.mt-0.mb-2 Sysadmin
            p Esto también
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