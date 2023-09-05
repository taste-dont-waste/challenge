import { ChangeEvent } from "react";

export const handleFileChange =
  (onUpload: (file: string) => void) => (event: ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();
    const { files } = event.target;
    const selectedFiles = files as FileList;

    if (selectedFiles.length > 0) {
      reader.readAsDataURL(selectedFiles[0]);
    }

    reader.onload = () => {
      // reader.readAsDataURL returns the result like: the data as a `data: URL` representing the file's data as a base64 encoded string
      onUpload(typeof reader.result === "string" ? reader.result : "");
    };

    reader.onerror = (error: unknown) => {
      console.log(error);
    };
  };
