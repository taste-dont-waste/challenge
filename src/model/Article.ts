export interface Article {
  publishedAt: Date;
  url: string;
  urlToImage: string | null;
  title: string;
  description: string | null;
  content: string;
  author: string | null;
}
