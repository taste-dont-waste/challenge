import z from "zod";
import { toDate } from "@common/functions";

const articleSchema = z.object({
  publishedAt: z.string().transform(toDate),
  urlToImage: z.string().nullable(),
  url: z.string(),
  title: z.string(),
  description: z.string().nullable(),
  content: z.string(),
  author: z.string().nullable(),
});

export const articlesSchema = z.array(articleSchema);
