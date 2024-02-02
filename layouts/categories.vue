<template>
  <div id="categories">
    <ul>
      <li v-for="category in data.categories.data" :key="category.id">
        <NuxtLink :to="{ name: 'blog-categories-id', params: { id: category.id } }">
          {{ category.attributes.name }}
        </NuxtLink>
      </li>
    </ul>
  </div>
  <slot />
</template>

<script setup>
  import gql from 'graphql-tag';

  const route = useRoute();

  const query = gql`query {
    categories {
      data {
        id
        attributes {
          name
        }
      }
    }
  }`;
  const variables = { 
    limit: 10,
    id : parseInt(route.params.id) };
  const { data } = await useAsyncQuery(query,variables);

</script>