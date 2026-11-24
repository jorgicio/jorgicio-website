<template>
  <div id="categories">
    <ul>
      <li v-for="category in data" :key="category.id">
        <NuxtLink :to="{ name: 'blog-categories-id', params: { id: category.documentId } }">
          {{ category.name }}
        </NuxtLink>
      </li>
    </ul>
  </div>
  <slot />
</template>

<script setup>
  import { useStrapi } from "~~/composables/useStrapi";

  const { getCategories } = useStrapi();

  const { data } = await getCategories();
  // data = [{ id, attributes: { name } }]
</script>