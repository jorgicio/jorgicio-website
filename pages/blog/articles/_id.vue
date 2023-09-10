<template>

</template>

<script>
  //const runtimeConfig = useRuntimeConfig();
  import gql from 'graphql-tag';
  export default {
    data() {
      return {
        article: {
          data: []
        },
        api_url:  process.env.API_URL || 'http://localhost:1337',
        routeParam: this.$route.params.id
      }
    },
    apollo: {
      article: {
        prefetch: true,
        query: gql`
          query Articles($id: ID!) {
            article(id: $id) {
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
                  publishedAt
                }
              }
            }
          }
        `,
        variables() {
          return { 
            id: this.routeParam 
          }
        }
      }
    }
  }
</script>