import { PropsWithChildren } from "react";
import { Menu, MenuProps } from "@mui/material";

type ChallengeMenuProps = MenuProps;

export const ChallengeMenu = ({ children, ...props }: PropsWithChildren<ChallengeMenuProps>) => {
  return (
    <Menu
      sx={{ mt: "45px" }}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      {...props}
    >
      {children}
    </Menu>
  );
};
