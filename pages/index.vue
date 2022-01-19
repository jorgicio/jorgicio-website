<template lang="pug">
    div
        Navbar
        header(class="font-bold text-3xl underline")
            h1 Holi
        div(id="cuerpo") Sitio en construcción
</template>
<script>
    import Navbar from '@/components/Navbar'
    export default {
        components: {
            Navbar
        }
    }
</script>