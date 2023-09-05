export interface FormErrors {
  [key: string]: string;
}

export const hasFormError = (errors: FormErrors, key?: string) => {
  if (key === undefined) {
    return Object.keys(errors).length > 0;
  }
  return !!errors[key];
};
