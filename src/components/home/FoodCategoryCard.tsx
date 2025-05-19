'use client';

import React from 'react';
import Link from 'next/link';
import OptimizedImage from '@/components/ui/OptimizedImage';

interface FoodCategoryCardProps {
  name: string;
  href: string;
  image: string;
}

const FoodCategoryCard = ({ name, href, image }: FoodCategoryCardProps) => {
  return (
    <Link 
      href={href}
      className="overflow-hidden transition-transform duration-300 bg-white rounded-lg shadow-md group hover:shadow-lg hover:-translate-y-1"
    >
      <div className="relative aspect-square">
        <OptimizedImage
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-3 font-medium text-center">{name}</div>
    </Link>
  );
};

export default FoodCategoryCard;