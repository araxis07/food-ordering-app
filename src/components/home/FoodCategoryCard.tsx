'use client';

import React from 'react';
import Link from 'next/link';

interface FoodCategoryCardProps {
  name: string;
  href: string;
}

const FoodCategoryCard = ({ name, href }: FoodCategoryCardProps) => {
  return (
    <Link 
      href={href}
      className="overflow-hidden transition-transform duration-300 bg-white rounded-lg shadow-md group hover:shadow-lg hover:-translate-y-1"
    >
      <div className="flex items-center justify-center bg-orange-100 aspect-square">
        <span className="text-orange-500">รูปภาพ {name}</span>
      </div>
      <div className="p-3 font-medium text-center">{name}</div>
    </Link>
  );
};

export default FoodCategoryCard;