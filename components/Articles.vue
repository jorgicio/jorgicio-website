<template>
  <div>
    <div v-for="article in Articles">
      <div>
        <div v-if="article.attributes.image.data">
          <img 
            :src="api_url + article.attributes.image.data.attributes.url" 
            alt=""
            height="100"
          />
        </div>
        <div>
          <p id="category" v-if="article.attributes.category.data.attributes.name">
            {{ article.attributes.category.data.attributes.name }}
          </p>
          <p id="title">
            <router-link :to="{ name: 'blog-articles-id', params: { id: article.id } }">{{ article.attributes.title }}</router-link>
          </p>
          <p id="excerpt">
            {{ (article.attributes.content).substring(0,150) }}...
            <router-link :to="{ name: 'blog-articles-id', params: { id: article.id } }">Leer más</router-link>
          </p>
        </div>
      </div>
    </div>

  </div>
</template>

<script lang="ts">
  export default {
    data() {
      return {
        api_url : useRuntimeConfig().public.strapiBaseUri
      }
    },
    props: {
      articles: Object,
    },
    computed: {
      leftArticlesCount() {
        return Math.ceil(this.articles?.data.length / 5);
      },
      leftArticles() {
        return this.articles?.data.slice(0, this.leftArticlesCount);
      },
      rightArticles() {
        return this.articles?.data.slice(this.leftArticlesCount, this.articles.length);
      },
      Articles() {
        return this.articles?.data//.slice(0,this.articles.length);
      }
    }
  }
</script>