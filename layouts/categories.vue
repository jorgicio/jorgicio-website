<template>
  <div>
    <ul>
      <li v-for="category in categories.data" :key="category.id">
        <NuxtLink :to="{ name: 'categories.id', params: { id: category.id } }">
          {{ category.attributes.name }}
        </NuxtLink>
      </li>
    </ul>
  </div>
  <slot />
</template>

<script>
  //import categoriesQuery from "@/apollo/queries/category/categories";
  import gql from 'graphql-tag';

  export default {
    data() {
      return {
        categories: {
          data: [],
        }
      }
    },
    apollo: {
      categories: {
        prefetch: true,
        query: gql`query {
          categories {
            data {
              id
              attributes {
                name
              }
            }
          }
        }`
      }
    }
  }

</script>