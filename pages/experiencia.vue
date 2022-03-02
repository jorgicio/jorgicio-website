<template lang="pug">
  section(class="p-8 md:p-2 container")
    Navbar
    #experiencia.grid.grid-cols-6.gap-2
      div(class="pt-6 pl-2 pr-2 md:pt-8 text-center space-y-3 col-span-2")
        h1(class="font-bold leading-tight text-3xl mt-0 mb-2") Experiencias informáticas en general
        p #[strong Disclaimer:] El listado a continuación está evaluado según experiencia y estudio personal.

        .flex.justify-between.mb-1
          span.text-base.font-medium.text-teal-700 #[font-awesome-icon(:icon="['fab','cuttlefish']")] C
        div(class="w-full bg-gray-200 rounded-full")
          div(class="bg-teal-600 text-xs font-medium text-teal-100 text-center p-0.5 leading-none rounded-full" style="width: 60%") 60%
        
        .flex.justify-between.mb-1
          span.text-base.font-medium.text-teal-700 #[font-awesome-icon(:icon="['fab','java']")] Java
        div(class="w-full bg-gray-200 rounded-full")
          div(class="bg-teal-600 text-xs font-medium text-teal-100 text-center p-0.5 leading-none rounded-full" style="width: 55%") 55%

        .flex.justify-between.mb-1
          span.text-base.font-medium.text-teal-700 #[font-awesome-icon(:icon="['fab','js-square']")] JavaScript
        div(class="w-full bg-gray-200 rounded-full")
          div(class="bg-teal-600 text-xs font-medium text-teal-100 text-center p-0.5 leading-none rounded-full" style="width: 75%") 75%

        .flex.justify-between.mb-1
          span.text-base.font-medium.text-teal-700 #[font-awesome-icon(:icon="['fab','python']")] Python
        div(class="w-full bg-gray-200 rounded-full")
          div(class="bg-teal-600 text-xs font-medium text-teal-100 text-center p-0.5 leading-none rounded-full" style="width: 80%") 80%

        .flex.justify-between.mb-1
          span.text-base.font-medium.text-teal-700 #[font-awesome-icon(:icon="['fab','html5']")] HTML
        div(class="w-full bg-gray-200 rounded-full")
          div(class="bg-teal-600 text-xs font-medium text-teal-100 text-center p-0.5 leading-none rounded-full" style="width: 90%") 90%

        .flex.justify-between.mb-1
          span.text-base.font-medium.text-teal-700 #[font-awesome-icon(:icon="['fab','css3-alt']")] CSS
        div(class="w-full bg-gray-200 rounded-full")
          div(class="bg-teal-600 text-xs font-medium text-teal-100 text-center p-0.5 leading-none rounded-full" style="width: 75%") 75%
      .col-span-4.p-3
        h1(class="font-bold leading-tight text-3xl mt-0 mb-2 text-center") Habilidades y experiencia
        p Albion Online es un mmorpg no lineal, en el que escribes tu propia historia sin limitarte a seguir un camino prefijado. Explora un amplio mundo abierto con 5 biomas únicos, todo cuánto hagas tendrá su repercusión en el mundo, con la economía orientada al jugador de Albion, los jugadores crean prácticamente todo el equipo a partir de los recursos que consiguen, el equipo que llevas define quién eres, cambia de arma y armadura para pasar de caballero a mago, o juega como una mezcla de ambas clases. Aventúrate en el mundo abierto frente a los habitantes y las criaturas de Albion, inicia expediciones o adéntrate en mazmorras en las que encontrarás enemigos aún más difíciles, enfréntate a otros jugadores en encuentros en el mundo abierto, lucha por los territorios o por ciudades enteras en batallas tácticas, relájate en tu isla privada, donde podrás construir un hogar, cultivar cosechas y criar animales, únete a un gremio, todo es mejor cuando se trabaja en grupo. Adéntrate ya en el mundo de Albion y escribe tu propia historia.
</template>
<script>
import Navbar from '@/components/Navbar'
export default {
  components: {
    Navbar
  }
}
</script>