import { Box, Stack, Typography } from "@mui/material";
import { ArticleCard, ChallengeAlert, ChallengeLoadingIndicator, SearchBar, SortingMenu } from "@common/ui";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useArticles } from "@hooks";
import { capitalizeFirstLetter } from "@common/functions";
import { ARTICLE_SORTING_VALUES } from "@constants";
import { noop } from "lodash";

export const ArticleResultsPage = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const [searchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState("");

  const currentSearchQuery = searchParams.get("searchTerm") ?? "";

  const [sort, setSort] = useState<(typeof ARTICLE_SORTING_VALUES)[number]>("createdAt");

  const {
    data: articlesData,
    isLoading,
    error,
    refetch,
    isFetching,
  } = useArticles({
    searchTerm: currentSearchQuery,
  });

  useEffect(() => {
    refetch().catch(noop);
  }, [sort]);

  if (isLoading || isFetching) {
    return <ChallengeLoadingIndicator />;
  }

  if (error || articlesData?.articles === undefined) {
    return <ChallengeAlert severity="info" title={t("common.error")} text={t("common.errorText")} />;
  }

  const { articles } = articlesData;

  const handleNewSearch = () => {
    navigate(`/article-results?searchTerm=${searchQuery}`);
  };

  return (
    <Stack direction="row" spacing="32px">
      <Stack spacing="20px">
        <SearchBar
          label={t("article.overview.searchLabel")}
          searchQuery={searchQuery}
          sx={{ mb: 2 }}
          onTextChange={setSearchQuery}
          onSubmit={handleNewSearch}
        />
      </Stack>
      <Stack sx={{ flex: 1 }} spacing="32px">
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Typography variant="h4">
            {t("article.results.header", {
              searchQuery: capitalizeFirstLetter(currentSearchQuery),
              count: articlesData.totalResults,
            })}
          </Typography>
        </Stack>
        <Box display="flex" justifyContent="flex-end">
          <SortingMenu values={ARTICLE_SORTING_VALUES} onSelect={setSort} />
        </Box>
        <Stack spacing="16px">
          {articles.map(({ url, ...articles }) => (
            <ArticleCard key={url} url={url} {...articles} />
          ))}
        </Stack>
      </Stack>
    </Stack>
  );
};
