import { IconButton, MenuItem, Typography } from "@mui/material";
import { Language } from "@mui/icons-material";
import i18next from "i18next";
import { useState } from "react";
import { ChallengeMenu } from "@common/ui";

const LanguageMenu = () => {
  const [anchorLanguage, setAnchorLanguage] = useState<null | HTMLElement>(null);

  const handleOpenLanguageMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorLanguage(event.currentTarget);
  };

  const handleCloseLanguageMenu = () => {
    setAnchorLanguage(null);
  };

  return (
    <>
      <IconButton onClick={handleOpenLanguageMenu}>
        <Language color="primary" />
      </IconButton>
      <ChallengeMenu
        anchorEl={anchorLanguage}
        open={Boolean(anchorLanguage)}
        onClose={handleCloseLanguageMenu}
      >
        <MenuItem
          onClick={() => {
            i18next.changeLanguage("en");
            handleCloseLanguageMenu();
          }}
        >
          <Typography textAlign="center">EN</Typography>
        </MenuItem>
        <MenuItem
          onClick={() => {
            i18next.changeLanguage("de");
            handleCloseLanguageMenu();
          }}
        >
          <Typography textAlign="center">DE</Typography>
        </MenuItem>
      </ChallengeMenu>
    </>
  );
};

export const ActionRow = () => {
  return <LanguageMenu />;
};
