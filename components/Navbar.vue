<template>
  <header class="sticky top-0 z-50 w-full border-b border-default bg-default/80 backdrop-blur">
    <div class="mx-auto flex h-14 max-w-5xl items-center justify-center gap-4 px-4">
      <nav class="hidden md:block" aria-label="Navegación principal">
        <ul class="flex items-center gap-6 text-sm font-medium">
          <li v-for="link in links" :key="link.to">
            <NuxtLink :to="link.to" class="transition-colors hover:text-primary" active-class="active-link">
              {{ link.label }}
            </NuxtLink>
          </li>
        </ul>
      </nav>

      <div class="flex items-center gap-1">
        <UColorModeButton />

        <UButton
          class="md:hidden"
          :icon="isOpen ? 'i-iconoir-xmark' : 'i-iconoir-menu'"
          variant="ghost"
          color="neutral"
          aria-label="Abrir menú"
          :aria-expanded="isOpen"
          aria-controls="mobile-menu"
          @click="isOpen = !isOpen"
        />
      </div>
    </div>

    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <nav
        v-if="isOpen"
        id="mobile-menu"
        class="border-t border-default md:hidden"
        aria-label="Navegación móvil"
      >
        <ul class="flex flex-col items-center gap-4 px-4 py-4 text-sm font-medium">
          <li v-for="link in links" :key="link.to">
            <NuxtLink
              :to="link.to"
              class="transition-colors hover:text-primary"
              @click="isOpen = false"
            >
              {{ link.label }}
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </Transition>
  </header>
</template>

<script setup lang="ts">
const isOpen = ref(false)
const route = useRoute()

const links = [
  { to: '/', label: 'Inicio' },
  { to: '/about', label: 'Acerca de mí' },
  { to: '/experiencia', label: 'Experiencia' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/contacto', label: '¡Contáctame!' },
  { to: '/blog', label: 'Blog' }
]

watch(() => route.fullPath, () => {
  isOpen.value = false
})

</script>
