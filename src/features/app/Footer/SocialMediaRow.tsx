import { Link, Stack } from "@mui/material";
import { Email, Instagram } from "@mui/icons-material";

const EMAIL = {
  address: "support@challenge.de",
  subject: "I need support",
  body: "Hi, I need support with ...",
};

export const SocialMediaRow = () => {
  return (
    <Stack direction="row" spacing={3}>
      <Link href="https://www.instagram.com/challenge.de/" target="_blank">
        <Instagram color="disabled" sx={{ fontSize: 30 }} />
      </Link>
      <Link href={`mailto:${EMAIL.address}?subject=${EMAIL.subject}&body=${EMAIL.body}`} target="_blank">
        <Email color="disabled" sx={{ fontSize: 30 }} />
      </Link>
    </Stack>
  );
};
