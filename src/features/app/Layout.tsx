import { Outlet, useLocation } from "react-router-dom";

import { ChallengeAppBar } from "./ChallengeAppBar";
import { Footer } from "./Footer";
import { Box, Container } from "@mui/material";
import { UspBanner } from "./UspBanner";
import { PAGE_LINKS } from "@constants";

const SHOW_USP_BANNER: (typeof PAGE_LINKS)[number][] = ["/"];

export const Layout = () => {
  const { pathname } = useLocation();

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100%",
        }}
      >
        <ChallengeAppBar />
        {SHOW_USP_BANNER.includes(pathname as (typeof PAGE_LINKS)[number]) && <UspBanner />}
        <Container maxWidth="lg" sx={{ my: "40px", flex: 1 }}>
          <Outlet />
        </Container>
        <Footer />
      </Box>
    </>
  );
};
