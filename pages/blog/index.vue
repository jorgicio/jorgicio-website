<template>
  <div>
    <NuxtLayout name="frontend"></NuxtLayout>
    <div id="blog-container">  
      <div id="categories">
        <p>Categorías</p>
        <div id="categories-list">
          <NuxtLayout name="categories"></NuxtLayout>
        </div>
      </div>
      <div id="articles">
        <Articles :articles="data.articles"></Articles>
      </div>
    </div>
  </div>
</template>

<script setup>
  import Articles from "~~/components/Articles.vue";
  import gql from "graphql-tag";

  const query = gql`
    query Articles {
      articles {
        data {
          id
          attributes {
            title
            content
            image {
              data {
                attributes {
                  url
                }
              }
            }
            category {
              data {
                attributes {
                  name
                }
              }
            }
          }
        }
      }
    }`;
  const variables = { limit : 10 }
  const { data } = await useAsyncQuery(query,variables);

  definePageMeta({
    layout: false,
    //pageTransition: true
  });
</script>