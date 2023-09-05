import { Stack } from "@mui/material";
import { useParams } from "react-router-dom";
import { ChallengeAlert, ChallengeLoadingIndicator } from "@common/ui";
import { useArticle } from "@hooks";
import { ArticleDetailsCard } from "./ArticleDetailsCard";

export const ArticlePage = () => {
  const { id } = useParams();

  const { data: articles, isLoading, error } = useArticle(id);

  if (isLoading) {
    return <ChallengeLoadingIndicator />;
  }

  if (error || id === undefined || articles === undefined) {
    return <ChallengeAlert title="error" text="no post" severity="info" />;
  }

  return (
    <Stack spacing="20px">
      <ArticleDetailsCard articles={articles} />
    </Stack>
  );
};
