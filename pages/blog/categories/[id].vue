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
        <client-only>
          <div id="articles">
            <div>
              <h1 id="cats-title">Posts en {{ category.name }}</h1>
              <Articles :articles="category.articles"></Articles>
            </div>
          </div>
        </client-only>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup>
  import Articles from "~~/components/Articles";
  import { useStrapi } from "~~/composables/useStrapi";

  const route = useRoute();
  const { getCategory } = useStrapi();

  const { data: category } = await getCategory(route.params.id);
  
</script>