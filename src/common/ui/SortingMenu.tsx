import { Button, MenuItem } from "@mui/material";
import { KeyboardArrowDown } from "@mui/icons-material";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { ChallengeMenu } from "./ChallengeMenu";

type SortingMenuProps<T> = {
  onSelect: (value: T) => void;
  values: readonly T[];
};

export const SortingMenu = <T extends string>({ values, onSelect }: SortingMenuProps<T>) => {
  const { t } = useTranslation();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const openMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const closeMenu = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button variant="outlined" onClick={openMenu} endIcon={<KeyboardArrowDown />}>
        {t("common.sorting.label")}
      </Button>
      <ChallengeMenu anchorEl={anchorEl} open={open} onClose={closeMenu}>
        {values.map((value) => (
          <MenuItem
            key={value}
            onClick={() => {
              onSelect(value);
              closeMenu();
            }}
            disableRipple
          >
            {t(`common.sorting.${value}`)}
          </MenuItem>
        ))}
      </ChallengeMenu>
    </>
  );
};
