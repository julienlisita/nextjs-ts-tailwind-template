// src/types/news.ts

export interface NewsItem {
  id: number;
  slug: string;
  title: string;
  description: string;
  source?: string;
  url?: string;
  displayDate?: string; // libellé (ex: "5 août 2025")
  publishedAt?: string; // ISO
  isPublished?: boolean;
  coverImage?: string;
}
