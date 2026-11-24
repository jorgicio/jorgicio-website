export function useStrapi() {
  const config = useRuntimeConfig();

  const api = (path: string, query: Record<string, any> = {}) =>
    $fetch(`${config.public.strapiBaseUri}/api${path}`, {
      query,
      headers: { Authorization: `Bearer ${config.public.strapiApiToken}` }
    });

  return {
    // List articles. `categoryId` optionally filters by category.
    getArticles: (limit = 10, categoryId?: number) =>
      api('/articles', {
        populate: 'image,category',
        'pagination[pageSize]': limit,
        ...(categoryId
          ? { 'filters[category][id][$eq]': categoryId }
          : {}),
      }),

    // Single article by documentId.
    getArticle: (documentId: string) =>
      api(`/articles/${documentId}`, { populate: 'image,category' }),

    // All categories.
    getCategories: () => api('/categories', { populate: 'articles' }),

    // Single category by documentId.
    getCategory: (documentId: string) =>
      api(`/categories/${documentId}`, { populate: 'articles' }),
  };
}
