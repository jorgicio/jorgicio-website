<template lang="pug">
    nav(class="bg-white border-gray-200 px-2")
        div(class="container mx-auto flex flex-wrap items-center justify-between")
            div(class="hidden md:block w-full md:w-auto" id="mobile-menu")
                ul(class="flex-col md:flex-row flex md:space-x-8 mt-4 md:mt-0 md:text-sm md:font-medium")
                    li
                        a(href="/") Inicio
                    li
                        a(href="/about") Sobre mí
                    li
                        a(href="/experiencia") Experiencia
                    li
                        a(href="https://blog.jorgicio.net") Blog
                    li
                        a(href="/portfolio") Portfolio
                    li
                        a(href="/contacto") ¡Contáctame!
</template>