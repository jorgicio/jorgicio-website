<template>
  <div>
    <client-only>
      <div>
        <div>
          <h1>{{ data.category.data.attributes.name }}</h1>
          <Articles :articles="data.category.data.attributes.articles"></Articles>
        </div>
      </div>
    </client-only>
  </div>
</template>

<script setup>
  import Articles from "~~/components/Articles";
  import gql from "graphql-tag";

  const query = gql`
          query Category($id: ID!){
            category(id: $id) {
              data {
                attributes {
                  name
                  articles {

                    data {
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
                }
              }
            }
          }
        `;
  const route = useRoute();
  const { data } = await useAsyncQuery(query, { id : parseInt(route.params.id) });
  
</script>