export interface Article {
  publishedAt: Date;
  url: string;
  urlToImage: string | null;
  title: string;
  description: string;
  content: string;
  author: string | null;
}
