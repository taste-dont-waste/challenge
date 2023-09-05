import { z } from "zod";

export const toDateOrUndefined = (
  isoString: string | undefined,
  context: z.RefinementCtx
): Date | undefined => {
  if (isoString === undefined) {
    return undefined;
  }
  const dateObject = new Date(isoString);

  if (Number.isNaN(dateObject.getTime())) {
    context.addIssue({
      code: z.ZodIssueCode.custom,
      message: `Invalid ISO string: ${isoString}`,
    });
  }

  return dateObject;
};
