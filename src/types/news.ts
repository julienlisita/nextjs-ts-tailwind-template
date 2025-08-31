// src/types/news.ts

export interface NewsItem {
  id: number;
  slug: string;
  title: string;
  description: string;
  source?: string;
  url?: string;
  date?: string;            // libellé (ex: "5 août 2025")
  publishedAt?: string;     // ISO
  isPublished?: boolean;
  coverImage?: string;
}