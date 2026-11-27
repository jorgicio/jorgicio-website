<template>
  <NuxtLayout name="frontend">
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
          <Articles :articles="response.data"></Articles>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup>
  import Articles from "~~/components/Articles.vue";
  import { useStrapi } from "~~/composables/useStrapi";

  const { getArticles } = useStrapi();

  // Load first 10 articles (no category filter)
  const response = await getArticles(10);

  definePageMeta({
    layout: false,
    //pageTransition: true
  });
</script>
