<template>
  <NuxtLayout name="frontend"></NuxtLayout>
  <NuxtLayout name="categories"></NuxtLayout>
  <div>
    <div 
      v-if="data.article.data.attributes.image.data"
      id="banner"
      :data-src="api_url + data.article.data.attributes.image.data.attributes.url"
    >   
    </div>
    <h1>{{ data.article.data.attributes.title }}</h1>
    <div>
      <div v-if="data.article.data.attributes.content" id="editor">
        {{ data.article.data.attributes.content }}
      </div>
      <p v-if="data.article.data.attributes.publishedAt">
        {{ data.article.data.attributes.publishedAt }}
      </p>
    </div>
  </div>
</template>

<script setup>
  import gql from 'graphql-tag';

  const query = gql`
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
        `;
  const route = useRoute();
  const { data } = await useAsyncQuery(query, {id: parseInt(route.params.id)});
</script>