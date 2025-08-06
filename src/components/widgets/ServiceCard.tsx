// src/components/widgets/ServiceCard.tsx

import React from 'react';
import './ServiceCard.css';

type ServiceCardProps = {
  icon?: React.ReactNode;
  title: string;
  description: string;
  color: [string, string]; // Dégradé à deux couleurs
};

export default function ServiceCard({ icon, title, description, color }: ServiceCardProps) {
  const gradientStyle = {
    backgroundImage: `linear-gradient(135deg, ${color[0]}, ${color[1]})`,
  };

  return (
    <div className="service-card">
      {/* Bandeau haut */}
      <div className="service-card-header" style={gradientStyle}>
        {icon && <div className="service-card-icon">{icon}</div>}
        <h3 className="service-card-title">{title}</h3>
      </div>

      {/* Description */}
      <div className="service-card-body">{description}</div>
    </div>
  );
}
