<template>
  <section class="p-8 md:p-2 container">
    <Navbar />
    <div id="experiencia" class="grid grid-cols-6 gap-2">
      <div class="pt-6 pl-2 pr-2 md:pt-8 text-center space-y-3 col-span-2">
        <h1 class="font-bold leading-tight text-3xl mt-0 mb-2" > Experiencias informáticas en general</h1>
        <p><strong>Disclaimer:</strong> El listado a continuación está evaluado según experiencia y estudio personal.</p>

        <div class="flex justify-between mb-1">
          <span class="text-base font-medium text-teal-700"><font-awesome-icon :icon="['fab','cuttlefish']"/>C</span> 
        </div>
        <div class="w-full bg-gray-200 rounded-full">
          <div class="bg-teal-600 text-xs font-medium text-teal-100 text-center p-0.5 leading-none rounded-full" style="width: 60%">60%</div>
        </div>

        <div class="flex justify-between mb-1">
          <span class="text-base font-medium text-teal-700"><font-awesome-icon :icon="['fab','java']"/>Java</span> 
        </div>
        <div class="w-full bg-gray-200 rounded-full">
          <div class="bg-teal-600 text-xs font-medium text-teal-100 text-center p-0.5 leading-none rounded-full" style="width: 55%">55%</div>
        </div>

        <div class="flex justify-between mb-1">
          <span class="text-base font-medium text-teal-700"><font-awesome-icon :icon="['fab','js-square']"/>JavaScript</span> 
        </div>
        <div class="w-full bg-gray-200 rounded-full">
          <div class="bg-teal-600 text-xs font-medium text-teal-100 text-center p-0.5 leading-none rounded-full" style="width: 75%">75%</div>
        </div>

        <div class="flex justify-between mb-1">
          <span class="text-base font-medium text-teal-700"><font-awesome-icon :icon="['fab','python']"/>Python</span> 
        </div>
        <div class="w-full bg-gray-200 rounded-full">
          <div class="bg-teal-600 text-xs font-medium text-teal-100 text-center p-0.5 leading-none rounded-full" style="width: 85%">85%</div>
        </div>

        <div class="flex justify-between mb-1">
          <span class="text-base font-medium text-teal-700"><font-awesome-icon :icon="['fab','html5']"/>HTML</span>
        </div>
        <div class="w-full bg-gray-200 rounded-full">
          <div class="bg-teal-600 text-xs font-medium text-teal-100 text-center p-0.5 leading-none rounded-full" style="width: 90%">90%</div>
        </div>

        <div class="flex justify-between mb-1">
          <span class="text-base font-medium. text-teal-700"><font-awesome-icon :icon="['fab','css-alt']"/>CSS</span> 
        </div>
        <div class="w-full bg-gray-200 rounded-full">
          <div class="bg-teal-600 text-xs font-medium text-teal-100 text-center p-0.5 leading-none rounded-full" style="width: 75%">75%</div>
        </div>
      </div>
      <div class="col-span-4 p-3">
        <h1 class="font-bold leading-tight text-3xl mt-0 mb-2 text-center" > Habilidades y experiencia</h1>
        p Albion Online es un mmorpg no lineal, en el que escribes tu propia historia sin limitarte a seguir un camino prefijado. Explora un amplio mundo abierto con 5 biomas únicos, todo cuánto hagas tendrá su repercusión en el mundo, con la economía orientada al jugador de Albion, los jugadores crean prácticamente todo el equipo a partir de los recursos que consiguen, el equipo que llevas define quién eres, cambia de arma y armadura para pasar de caballero a mago, o juega como una mezcla de ambas clases. Aventúrate en el mundo abierto frente a los habitantes y las criaturas de Albion, inicia expediciones o adéntrate en mazmorras en las que encontrarás enemigos aún más difíciles, enfréntate a otros jugadores en encuentros en el mundo abierto, lucha por los territorios o por ciudades enteras en batallas tácticas, relájate en tu isla privada, donde podrás construir un hogar, cultivar cosechas y criar animales, únete a un gremio, todo es mejor cuando se trabaja en grupo. Adéntrate ya en el mundo de Albion y escribe tu propia historia.
      </div>
    </div>
  </section>
</template>
<script>
import Navbar from '@/components/Navbar'
export default {
  name: "Experiencia",
  components: {
    Navbar
  }
}
</script>