export const CACHE_KEYS = {
  article: (id: string) => ["article", id],
  articles: (searchTerm?: string) => ["articles", searchTerm ?? "undefined"],
  trendingArticles: (topic?: string) => ["trendingArticles", topic],
  recentArticles: ["recentArticles"],
};
