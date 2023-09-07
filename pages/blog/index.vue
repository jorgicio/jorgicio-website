<script setup lang="ts">
  import { useAsyncQuery } from '#imports';
  import { GET_POSTS } from '@/api/queries';

  const { data,error,refresh } = useAsyncQuery(GET_POSTS);
</script>