<template>
  <div>
    <div v-for="article in Articles" :key="article.id">
      <div>
        <div v-if="article.image">
          <img
            :src="api_url + article.image.url"
            alt=""
            height="100"
          />
        </div>
        <div>
          <p id="category" v-if="article.category">
            {{ article.category.name }}
          </p>
          <p class="post-title">
            <router-link :to="{ name: 'blog-articles-id', params: { id: article.documentId } }">{{ article.title }}</router-link>
          </p>
          <p id="excerpt">
            {{ (article.content || '').substring(0,150) }}...
            <router-link :to="{ name: 'blog-articles-id', params: { id: article.documentId } }">Leer más</router-link>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRuntimeConfig } from '#imports';
import { computed } from 'vue';

const props = defineProps({
  articles: {
    type: Array,
    default: () => [],
  },
});

const api_url = useRuntimeConfig().public.strapiBaseUri;

const Articles = computed(() => props.articles.slice(0, props.articles.length));
const leftArticlesCount = computed(() => Math.ceil(props.articles.length / 5));
const leftArticles = computed(() => props.articles.slice(0, leftArticlesCount.value));
const rightArticles = computed(() => props.articles.slice(leftArticlesCount.value, props.articles.length));
</script>
