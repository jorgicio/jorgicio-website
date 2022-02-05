<template lang="pug">
  div.p-8
    Navbar
    div#card(class="md:flex p-8 md:p-8 rounded-xl bg-slate-100")
      img(src="~/assets/img/psyduckcomputer.png" class="w-60 h-60 rounded-full border-double border-8 border-slate-400 ")
      div(class="pt-6 md:pt-8 text-center space-y-4 space-x-4")
        h1(class="font-bold leading-tight text-3xl mt-0 mb-2") Jorge Pizarro-Callejas, a.k.a «Jorgicio»
        ul.text-slate-600.text-left
          li: font-awesome-icon(icon="graduation-cap" class="w-6 h-6 float-left")/ Ingeniero Informático, egresado y titulado de la Universidad Técnica Federico Santa María, Valparaíso.
          li: font-awesome-icon(icon="map-marker-alt" class="w-6 h=6 float-left")/ Actualmente en Quilpué, Región de Valparaíso, Chile.
          li: font-awesome-icon(icon="birthday-cake" class="w-6 h-6 float-left")/ {{getStringDate}}. {{getEdad}} años.
          li: font-awesome-icon(icon="desktop" class="w-6 h-6 float-left")/ Actualmente trabajando como ingeniero DevOps.
          li: font-awesome-icon(icon="question" class="w-6 h-6 float-left")/ Lo demás me lo puedes #[a(href="/contacto" class="text-slate-500 hover:text-sky-600 visited:text-slate-700") preguntar].
    div#quehago(class="md:flex p-8 md:p-8 bg-slate-100 rounded-xl")
      header(class="flex md:flex-row p-3")
        h1(class="font-bold leading-tight text-3xl mt-0 mb-2") A qué me dedico
      div(class="grid grid-cols-2 gap-4")
        div(class="cosa w-1/2")
          p Hago esto
        div(class="cosa w-1/2")
          p Hago esto otro
        div(class="cosa w-1/2")
          p Y esto otro
        div(class="cosa w-1/2")
          p Y esto otro también

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