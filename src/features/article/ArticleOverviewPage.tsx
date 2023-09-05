import { Divider, Stack, Typography } from "@mui/material";
import { SearchBar } from "@common/ui";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const ArticleOverviewPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [searchQuery, setSearchQuery] = useState("");

  const handleNewSearch = () => {
    navigate(`/article-results?searchTerm=${searchQuery}`);
  };

  return (
    <Stack spacing="70px">
      <Stack spacing="20px" alignItems="center">
        <Typography variant="h3" color="primary" textAlign="center" maxWidth="800px">
          {t("article.overview.slogan")}
        </Typography>
        <Divider />
        <SearchBar
          label={t("article.overview.searchLabel")}
          searchQuery={searchQuery}
          onTextChange={setSearchQuery}
          onSubmit={handleNewSearch}
          sx={{
            width: "80%",
          }}
        />
      </Stack>
    </Stack>
  );
};
