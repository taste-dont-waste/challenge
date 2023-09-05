import "./i18n";

import { App } from "@features/app";
import { reportWebVitals } from "./reportWebVitals";
import React from "react";
import ReactDOM from "react-dom/client";
import { appTheme } from "./theme";
import { GlobalStyles, Theme, ThemeProvider } from "@mui/material";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const TEN_MINUTES = 10 * 60 * 1000;

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { retryOnMount: false, staleTime: TEN_MINUTES, cacheTime: TEN_MINUTES, retry: false },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={appTheme}>
        <GlobalStyles
          styles={(theme: Theme) => ({
            body: { backgroundColor: theme.challenge.background, height: "100vh" },
          })}
        />
        <App />
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>
);

reportWebVitals();
