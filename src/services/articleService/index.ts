import { axiosClient } from "../common/axiosClient";
import { articlesSchema } from "./articleParser";
import z from "zod";
import { schemaForType } from "@common/functions";
import { Article } from "@model";

const NEWS_API_URL = "https://newsapi.org/v2";

const getArticle = async (id: string) => {
  const { data } = await axiosClient.get(`/api/article/${id}`);

  return data;
};

const NEWS_API_KEY = "53387252e8004a36a54098082dc1a6ef";

interface Response {
  status: string;
  totalResults: number;
  articles: Article[];
}

const responseSchema = z.object({
  status: z.string(),
  totalResults: z.number(),
  articles: articlesSchema,
});

const responseParser = schemaForType<Response>()(responseSchema);

const getArticles = async ({ searchTerm = "" }) => {
  const { data } = await axiosClient.get(
    `${NEWS_API_URL}/everything?q=${searchTerm}&sortBy=popularity&apiKey=${NEWS_API_KEY}`
  );

  return responseParser.parse(data);
};

export const articleService = {
  getArticle,
  getArticles,
};
