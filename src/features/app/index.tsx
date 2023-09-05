import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Layout } from "./Layout";
import { Box, Typography } from "@mui/material";
import { ArticleOverviewPage, ArticlePage, ArticleResultsPage } from "@features/article";

const NoMatch = () => {
  return (
    <Typography variant="h4" textAlign="center" justifyContent="center">
      There's nothing here: 404!
    </Typography>
  );
};
export const App = () => {
  return (
    <Box
      sx={{
        height: "100vh",
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<ArticleOverviewPage />} />
            <Route path="article-results" element={<ArticleResultsPage />} />
            <Route path="article/:id" element={<ArticlePage />} />
            <Route path="*" element={<NoMatch />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Box>
  );
};
