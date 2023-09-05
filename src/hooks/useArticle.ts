import { useQuery } from "@tanstack/react-query";
import { CACHE_KEYS } from "@constants";
import { articleService } from "@services";

export const useArticle = (id?: string) => {
  // if id is undefined, then the query will not be enabled
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const { data, isLoading, error } = useQuery(
    CACHE_KEYS.articles(id!),
    () => articleService.getArticle(id!),
    {
      enabled: !!id,
    }
  );

  return { data, isLoading, error };
};
