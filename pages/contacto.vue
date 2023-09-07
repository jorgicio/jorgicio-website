<template>
  <div>
    <h1>Contacto</h1>
    <h4>¿Quieres contactarme? ¡Escríbeme!</h4>
    <button type="button" class="text-center font-medium px-5 py-2.5 hover:bg-slate-200 rounded-xl border border-indigo-800">jpizarrocallejas [at] gmail [dot] com</button>
  </div>
</template>
<script lang="ts">

  export default {
    name: "contacto",
    layout: "frontend",
    transition: "pagina"
  };
</script>

<script lang="ts" setup>
  import { definePageMeta } from '#imports';

  definePageMeta({
    layout: "frontend",
    layoutTransition: true
  });
</script>