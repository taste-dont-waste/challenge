import { useQuery } from "@tanstack/react-query";
import { CACHE_KEYS } from "@constants";
import { articleService } from "@services";

type UseArticles = Parameters<typeof articleService.getArticles>[0];

export const useArticles = ({ searchTerm }: UseArticles) => {
  const { data, isLoading, isFetching, error, refetch } = useQuery(CACHE_KEYS.articles(searchTerm), () =>
    articleService.getArticles({ searchTerm })
  );

  return { data, isLoading, error, refetch, isFetching };
};
