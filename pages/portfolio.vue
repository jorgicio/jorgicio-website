<template>
  <ul>
    <li v-for="x of retrieveFiles">
      <NuxtLink :to="`${x.file}`">
        <img :src="`${x.thumb[0].file}`" :alt="`${x.thumb[0].fileName}`" />
      </NuxtLink>
    </li>
  </ul>
</template>
<script lang="ts">
  import Vue from "vue"
  import { filePathMapper } from "~~/composables/filemapper"

  export default Vue.extend({
    name: "portfolio",
    layout: "frontend",
    transition: "pagina",
    data() {
      return { 
        archivos: {
          startDirectory: './assets/img/portfolio',
          deepSearch: true,
          extensions: ['jpg']
        },
        listaArchivos: []
      }
    },
    async fetch() {
      this.listaArchivos = await filePathMapper(this.archivos).then(x => x.paths)
    },
    computed:{ 
      retrieveFiles(): Object[] {
        const lista = this.listaArchivos.map(
          (x: { file: string; fileName: string }) => 
            Object.assign({},{file: x.file, fileName: x.fileName}))
        const origs = lista.filter((x: { file: string | string[] }) => !x.file.includes('thumb'))
        const thumbs = lista.filter((x: { file: string | string[] }) => x.file.includes('thumb'))
        return origs.map((x: { file: string; fileName: string }) => Object.assign({},
        {
          file: x.file,
          fileName: x.fileName,
          thumb: thumbs.filter((o: { file: string | string[] }) => o.file.includes(x.fileName.split('.')[0]))
        }))
      }
    }
  })
</script>