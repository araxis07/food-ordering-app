import React from 'react';
import OptimizedImage from './OptimizedImage';

interface CardProps {
  title: string;
  description: string;
  imageUrl?: string;
  children?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ title, description, imageUrl, children }) => {
  return (
    <div className="overflow-hidden bg-white rounded-lg shadow-md">
      {imageUrl && (
        <div className="relative h-48">
          <OptimizedImage 
            src={imageUrl}
            alt={title}
            fill
            className="object-cover"
          />
        </div>
      )}
      <div className="p-4">
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="text-gray-700">{description}</p>
        {children}
      </div>
    </div>
  );
};

export default Card;