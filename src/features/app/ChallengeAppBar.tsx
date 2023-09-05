import { useState } from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  MenuItem,
  Stack,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";
import { Menu as MenuIcon, Newspaper, TravelExplore } from "@mui/icons-material";
import { useTranslation } from "react-i18next";
import { PAGE_LINKS } from "@constants";
import { ChallengeMenu } from "@common/ui";

const APP_BAR_HEIGHT = 72;

type PageKey = "explore";

const ChallengeLogo = () => {
  return (
    <Button
      component={Link}
      to="/"
      variant="text"
      style={{
        backgroundColor: "transparent",
        color: "white",
        textTransform: "uppercase",
        flexDirection: "column",
        alignItems: "center",
      }}
      size="large"
    >
      <Newspaper style={{ fontSize: 32, color: "white", marginBottom: 1 }} />
      <Typography variant="body2" style={{ textTransform: "uppercase", marginTop: 1, fontWeight: "bold" }}>
        CHALLENGE
      </Typography>
    </Button>
  );
};

interface Page {
  key: PageKey;
  link: (typeof PAGE_LINKS)[number];
}

const PAGES: Page[] = [{ key: "explore", link: "/" }];

const BurgerMenu = () => {
  const { t } = useTranslation();

  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <Box>
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleOpenNavMenu}
        color="inherit"
      >
        <MenuIcon />
      </IconButton>
      <ChallengeMenu anchorEl={anchorElNav} open={Boolean(anchorElNav)} onClose={handleCloseNavMenu}>
        {PAGES.map(({ key, link }) => (
          <MenuItem key={key} onClick={handleCloseNavMenu} component="a" href={link}>
            <Typography textAlign="center">{t(`app.pages.${key}`)}</Typography>
          </MenuItem>
        ))}
      </ChallengeMenu>
    </Box>
  );
};

const SmallScreenMenu = () => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        display: { xs: "flex", md: "none" },
        alignItems: "center",
        minHeight: APP_BAR_HEIGHT,
      }}
    >
      <BurgerMenu />
      <Box
        sx={{
          flexGrow: 1,
          textAlign: "center",
        }}
      >
        <ChallengeLogo />
      </Box>
    </Box>
  );
};

type NavigationIconProps = {
  page: PageKey;
};
const NavigationIcon = ({ page }: NavigationIconProps) => {
  switch (page) {
    case "explore":
      return <TravelExplore />;
    default:
      return null;
  }
};

const MiddleScreenMenu = () => {
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        flexGrow: 1,
        display: { xs: "none", md: "flex" },
        alignItems: "center",
        minHeight: APP_BAR_HEIGHT,
      }}
    >
      <ChallengeLogo />
      <Stack
        direction="row"
        spacing="8px"
        sx={{
          display: { md: "flex" },
          alignItems: "center",
          flexGrow: "1",
          justifyContent: "center",
        }}
      >
        {PAGES.map(({ key, link }) => (
          <Button
            key={key}
            component="a"
            href={link}
            endIcon={<NavigationIcon page={key} />}
            sx={{ my: 2, color: "white", textAlign: "center" }}
          >
            {t(`app.pages.${key}`)}
          </Button>
        ))}
      </Stack>
    </Box>
  );
};

export const ChallengeAppBar = () => {
  const theme = useTheme();

  return (
    <AppBar position="sticky" sx={{ backgroundColor: theme.challenge.corporate, boxShadow: "none" }}>
      <Container maxWidth="lg">
        <Toolbar sx={{ minHeight: 72 }}>
          <SmallScreenMenu />
          <MiddleScreenMenu />
        </Toolbar>
      </Container>
    </AppBar>
  );
};
