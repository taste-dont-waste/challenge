import { Box, Card, CardContent, CardMedia, Stack, Typography } from "@mui/material";
import { calculateReadingTime } from "@common/functions";
import { Article } from "@model";
import { useTranslation } from "react-i18next";

type ArticleDetailsCardProps = {
  articles: Article;
};

export const ArticleDetailsCard = ({ articles }: ArticleDetailsCardProps) => {
  const { t } = useTranslation();

  return (
    <Card>
      <CardContent>
        <Stack spacing="20px">
          <CardMedia
            component="img"
            sx={{ maxHeight: 200, borderRadius: "4px" }}
            image={articles.urlToImage ?? ""}
          />
          <Stack spacing="10px">
            <Typography variant="h4" fontWeight="bold">
              {articles.title}
            </Typography>
          </Stack>
          <Typography variant="body2" color="grey">
            {t("article.details.readingTime", {
              readingTime: calculateReadingTime(articles.content),
            })}
          </Typography>
          <Stack direction="row" alignItems="center" spacing="16px">
            <Stack alignItems="left">
              <Typography variant="body1">{articles.author}</Typography>
              <Typography variant="body2">
                {t("article.details.published")}: {articles.publishedAt.toLocaleDateString()}
              </Typography>
            </Stack>
          </Stack>
          <Box>
            <Typography variant="body1" sx={{ marginTop: "20px", whiteSpace: "pre-line" }}>
              {articles.content}
            </Typography>
          </Box>
        </Stack>
      </CardContent>
    </Card>
  );
};
