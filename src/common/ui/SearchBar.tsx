import { TextField, TextFieldProps } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useState } from "react";

type SearchBarProps = {
  label: string;
  searchQuery: string;
  onTextChange: (text: string) => void;
  onSubmit?: () => void;
} & Pick<TextFieldProps, "sx">;

export const SearchBar = ({ searchQuery, label, onTextChange, onSubmit, ...props }: SearchBarProps) => {
  const { t } = useTranslation();
  const [error, setError] = useState(false);

  const handleEnterDown = (event: React.KeyboardEvent) => {
    if (searchQuery === "") {
      setError(true);
      return;
    }

    if (event?.key === "Enter") {
      onSubmit?.();
      onTextChange("");
    }
  };

  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setError(false);
    onTextChange(event.target.value ?? "");
  };

  return (
    <TextField
      label={label}
      value={searchQuery}
      onChange={handleTextChange}
      onKeyDown={handleEnterDown}
      type="search"
      error={error}
      helperText={error && t("error.helpers.emptySearch")}
      {...props}
    />
  );
};
