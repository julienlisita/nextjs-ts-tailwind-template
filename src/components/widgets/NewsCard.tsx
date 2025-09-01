//  src/components/widgets/NewsCard.tsx

'use client';

import React from 'react';
import './NewsCard.css';

type NewsCardProps = {
  title: string;
  description: string;
  displayDate?: string;
  source?: string;
  url?: string;
};

export default function NewsCard({ title, description, displayDate, source, url }: NewsCardProps) {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="news-card">
      <div className="news-card-header">
        <h3 className="news-card-title">{title}</h3>
        {source && <span className="news-card-source">{source}</span>}
      </div>
      <p className="news-card-description">{description}</p>
      <p className="news-card-date">{displayDate}</p>
    </a>
  );
}
