<template>
  <NuxtLayout name="frontend"></NuxtLayout>
  <NuxtLayout name="categories"></NuxtLayout>
  <div>
    <Articles :articles="articles"></Articles>
  </div>
</template>

<script lang="ts">
  import Articles from "~~/components/Articles.vue";
  import gql from "graphql-tag";

  export default {
    data() {
      return {
        articles: {
          data: []
        }
      }
    },
    components: {
      Articles,
    },
    apollo: {
      articles: {
        prefetch: true,
        query: gql`
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
          }`
      }
    }
  }

  definePageMeta({
    layout: false,
    pageTransition: true
  });
</script>