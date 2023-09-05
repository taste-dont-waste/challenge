import { Box, Button, Stack, Typography, useTheme } from "@mui/material";
import { Newspaper } from "@mui/icons-material";
import { useTranslation } from "react-i18next";
import { SocialMediaRow } from "./SocialMediaRow";
import { ActionRow } from "./ActionRow";

const ChallengeLogo = () => {
  return (
    <Button
      variant="text"
      color="primary"
      startIcon={<Newspaper style={{ fontSize: 32 }} />}
      style={{ backgroundColor: "transparent" }}
      size="large"
    >
      <Typography variant="h5" style={{ textTransform: "none" }}>
        Challenge
      </Typography>
    </Button>
  );
};

export const Footer = () => {
  const { t } = useTranslation();
  const theme = useTheme();

  const year = new Date().getFullYear();

  return (
    <footer>
      <Box sx={{ width: "100%", backgroundColor: theme.challenge.info, alignItems: "center" }}>
        <Stack spacing={2} alignItems="center">
          <Box />
          <ChallengeLogo />
          <ActionRow />
          <SocialMediaRow />
          <Typography sx={{ fontSize: 12 }}>
            © {year} {t("Challenge. All rights reserved.")}
          </Typography>
          <Box />
        </Stack>
      </Box>
    </footer>
  );
};
