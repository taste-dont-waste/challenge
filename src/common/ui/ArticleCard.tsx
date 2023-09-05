import * as React from "react";
import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import { Article } from "@model";

type ArticleCardProps = Pick<Article, "url" | "urlToImage" | "title" | "publishedAt">;

export const ArticleCard = ({ url, urlToImage, title, publishedAt }: ArticleCardProps) => {
  return (
    <Card>
      <CardActionArea href={url}>
        <CardMedia component="img" sx={{ maxHeight: 200 }} image={urlToImage ?? ""} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {publishedAt.toLocaleDateString()}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
