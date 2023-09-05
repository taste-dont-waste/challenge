import { z } from "zod";

export const toDate = (isoString: string, context: z.RefinementCtx): Date => {
  const dateObject = new Date(isoString);

  if (Number.isNaN(dateObject.getTime())) {
    context.addIssue({
      code: z.ZodIssueCode.custom,
      message: `Invalid ISO string: ${isoString}`,
    });
  }

  return dateObject;
};
