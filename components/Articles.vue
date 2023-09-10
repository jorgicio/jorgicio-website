<template>
  <div>
    <router-link v-for="article in leftArticles"
    :to="{ name: 'articles-id', params: { id: article.id } }"
    :key="article.id">
      <div>
        <div v-if="article.attributes.image.data">
          <img
            :src="api_url + article.attributes.image.data.attributes.url"
            alt=""
            height="100"
           />
        </div>
        <div>
          <p
            id="category"
            v-if="article.attributes.category.data"
          >{{ article.attributes.category.data.attributes.name }}</p>
          <p id="title">{{ article.attributes.title }}</p>
        </div>
      </div>
    </router-link>

    <router-link v-for="article in rightArticles"
    :to="{ name: 'articles-id', params: { id: article.id } }"
    :key="article.id">
      <div>
        <div v-if="article.attributes.image.data">
          <img
            :src="api_url + article.attributes.image.data.attributes.url"
            alt=""
            height="100"
           />
        </div>
        <div>
          <p
            id="category"
            v-if="article.attributes.category.data"
          >{{ article.attributes.category.data.attributes.name }}</p>
          <p id="title">{{ article.attributes.title }}</p>
        </div>
      </div>
    </router-link>

  </div>
</template>

<script lang="ts">
  //const runtimeConfig = useRuntimeConfig();
  export default {
    data() {
      return {
        api_url : process.env.API_URL ?? 'http://localhost:1337'
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
      }
    }
  }
</script>