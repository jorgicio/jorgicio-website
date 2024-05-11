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
      <div id="articles">
        <div 
          v-if="data.article.data.attributes.image.data"
          id="banner"
          :data-src="api_url + data.article.data.attributes.image.data.attributes.url"
        >   
        </div>
        <h1 class="post-title">{{ data.article.data.attributes.title }}</h1>
        <div>
          <div v-if="data.article.data.attributes.content" id="editor">
            {{ data.article.data.attributes.content }}
          </div>
          <p v-if="data.article.data.attributes.publishedAt">
            {{ data.article.data.attributes.publishedAt }}
          </p>
        </div>
      </div>  
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