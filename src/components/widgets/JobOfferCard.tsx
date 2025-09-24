// src/components/widgets/JobOfferCard.tsx

'use client';

import { Calendar, Clock, MapPin } from 'lucide-react';
import Button from '../ui/Button';
import './JobOfferCard.css';

type JobOfferCardProps = {
  title: string;
  location: string;
  description: string;
  contractType: string; // ex: "CDI - Temps partiel"
  publishedAt: string; // date ISO
};

export function JobOfferCard({
  title,
  location,
  description,
  contractType,
  publishedAt,
}: JobOfferCardProps) {
  return (
    <div className="job-card">
      {/* Header */}
      <div className="job-card-header">
        <h3 className="job-card-title">{title}</h3>
      </div>

      {/* Description */}
      <p className="job-card-description">{description}</p>

      {/* Infos complémentaires */}
      <div className="job-card-meta">
        <span className="meta-item">
          <MapPin size={16} /> {location}
        </span>
        <span className="meta-item">
          <Clock size={16} /> {contractType}
        </span>
        <span className="meta-item">
          <Calendar size={16} /> Publié le{' '}
          {new Date(publishedAt).toLocaleDateString('fr-FR', {
            day: '2-digit',
            month: 'long',
            year: 'numeric',
          })}
        </span>
      </div>
      <div>
        <Button
          href={`/recruitment?apply=${encodeURIComponent(title)}`}
          aria-label={`Postuler à l'offre ${title}`}
        >
          Postuler
        </Button>
      </div>
    </div>
  );
}
