<template>
  <div>
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
            v-if="article.image"
            id="banner"
            :data-src="api_url + article.image.url"
          >   
          </div>
          <h1 class="post-title">{{ article.title }}</h1>
          <div>
            <div v-if="article.content" id="editor">
              {{ article.content }}
            </div>
            <p v-if="article.publishedAt">
              {{ article.publishedAt }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { useStrapi } from "~~/composables/useStrapi";

  const { getArticle } = useStrapi();

  const route = useRoute();
  const id = route.params.id; // documentId in Strapi v5

  const { data: article } = await getArticle(id);
  const api_url = useRuntimeConfig().public.strapiBaseUri;
</script>
