// src/components/widgets/JobOfferCard.tsx

'use client';

import Button from '../ui/Button';
import './JobOfferCard.css';

type JobOfferCardProps = {
  title: string;
  location: string;
  description: string;
  onApply?: () => void;
};

export function JobOfferCard({ title, location, description, onApply }: JobOfferCardProps) {
  return (
    <div className="job-card">
      <div className="job-card-header">
        <h3 className="job-card-title">{title}</h3>
        <p className="job-card-location">{location}</p>
      </div>
      <p className="job-card-description">{description}</p>
      <Button onClick={onApply} className="job-card-button">
        Postuler
      </Button>
    </div>
  );
}
