<template>
  <NuxtLayout name="frontend"></NuxtLayout>
  <div id="blog-container">
    <div id="sidebar" class="col-wrapper">
        <div id="categories">
          <p class="blog-title">Categorías</p>
          <div id="categories-list">
            <NuxtLayout name="categories"></NuxtLayout>
          </div>
        </div>
      </div>
    <div id="articles-container" class="col-wrapper">
      <client-only>
        <div id="articles">
          <div>
            <h1 id="cats-title">Posts en {{ data.category.data.attributes.name }}</h1>
            <Articles :articles="data.category.data.attributes.articles"></Articles>
          </div>
        </div>
      </client-only>
    </div>
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