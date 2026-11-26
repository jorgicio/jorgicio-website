<template>
  <div>
    <section id="about">
      Hello
    </section>
  </div>
</template>
<script lang="ts">
export default {
  name: "about",
  layout: "frontend",
  transition: "pagina"
};
</script>

<script setup lang="ts">
  import { definePageMeta } from '#imports';

  definePageMeta({
    layout: "frontend",
    layoutTransition: true
  });

</script>
