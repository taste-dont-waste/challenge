import { Alert, AlertProps, AlertTitle, Typography } from "@mui/material";
import { ReactNode } from "react";

type ChallengeAlertProps = {
  title: string;
  text: ReactNode;
  severity?: Extract<AlertProps["severity"], "success" | "info">;
} & Omit<AlertProps, "variant">;

export const ChallengeAlert = ({ title, text, ...props }: ChallengeAlertProps) => {
  return (
    <Alert sx={{ borderRadius: 2 }} variant="outlined" {...props}>
      <AlertTitle>
        <strong>{title}</strong>
      </AlertTitle>
      <Typography>{text}</Typography>
    </Alert>
  );
};
