import React from 'react';
import Link from 'next/link';
import OptimizedImage from '../ui/OptimizedImage';

const categories = [
  { id: 'thai', name: 'อาหารไทย', image: '/images/categories/thai.jpg' },
  { id: 'japanese', name: 'อาหารญี่ปุ่น', image: '/images/categories/japanese.jpg' },
  { id: 'fastfood', name: 'ฟาสต์ฟู้ด', image: '/images/categories/fastfood.jpg' },
  { id: 'italian', name: 'อาหารอิตาเลียน', image: '/images/categories/italian.jpg' },
  { id: 'seafood', name: 'อาหารทะเล', image: '/images/categories/seafood.jpg' },
];

const FoodCategories = () => {
  return (
    <section>
      <h2 className="mb-4 text-xl font-semibold">หมวดหมู่อาหาร</h2>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {categories.map((category) => (
          <Link 
            key={category.id}
            href={`/menu?category=${category.id}`}
            className="block group"
          >
            <div className="overflow-hidden bg-white rounded-lg shadow-md">
              <div className="relative h-36">                <OptimizedImage
                  src={category.image}
                  alt={category.name}
                  fill
                  className="transition-transform duration-300 group-hover:scale-110"
                  priority
                />
              </div>
              <div className="p-3 text-center">{category.name}</div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default FoodCategories;