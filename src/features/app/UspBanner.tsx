import { useTranslation } from "react-i18next";
import { Stack, Typography, useTheme } from "@mui/material";

export const UspBanner = () => {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <Stack
      direction="row"
      justifyContent="space-evenly"
      alignItems="center"
      sx={{
        backgroundColor: theme.challenge.lightSuccess,
        padding: "8px",
        borderBottom: `0.5px solid ${theme.challenge.darkGreen}`,
      }}
    >
      <Typography variant="subtitle1" sx={{ color: theme.challenge.darkGreen }}>
        {t("explore.banner.accessible")}
      </Typography>
      <Typography variant="subtitle1" sx={{ color: theme.challenge.darkGreen }}>
        {t("explore.banner.inclusive")}
      </Typography>
      <Typography variant="subtitle1" sx={{ color: theme.challenge.darkGreen }}>
        {t("explore.banner.convenient")}
      </Typography>
      <Typography variant="subtitle1" sx={{ color: theme.challenge.darkGreen }}>
        {t("explore.banner.inspiring")}
      </Typography>
    </Stack>
  );
};
