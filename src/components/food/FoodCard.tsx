'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ShoppingCart } from 'lucide-react';

interface FoodItem {
  id: string | number;
  name: string;
  price: number;
  image: string;
  description?: string;
  category?: string;
}

interface FoodCardProps {
  foodItem: FoodItem;
}

const FoodCard: React.FC<FoodCardProps> = ({ foodItem }) => {
  // เพิ่ม state เพื่อตรวจสอบว่า component mount บน client แล้วหรือยัง
  const [mounted, setMounted] = useState(false);
  
  // ใช้ useEffect เพื่อบอกว่า component ได้ mount บน client แล้ว
  useEffect(() => {
    setMounted(true);
  }, []);
  
  // ใช้ placeholder image เมื่อไม่มี image ถูกกำหนด
  const imageSrc = foodItem.image || 'https://via.placeholder.com/300x200';

  // ใช้ conditional rendering เมื่อยังไม่ได้ mount บน client
  if (!mounted) {
    return (
      <div className="overflow-hidden bg-white rounded-lg shadow-md card">
        <div className="h-48 bg-gray-200"></div>
        <div className="p-4">
          <div className="w-3/4 h-6 mb-2 bg-gray-200 rounded"></div>
          <div className="w-1/2 h-4 mb-4 bg-gray-100 rounded"></div>
          <div className="flex items-center justify-between">
            <div className="w-1/4 h-4 bg-gray-100 rounded"></div>
            <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="transition-shadow duration-300 card group hover:shadow-lg">
      <div className="relative w-full h-48">
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-gray-900/70 to-transparent" />
        <div
          className="w-full h-full bg-gray-300 rounded-t-lg"
          style={{
            backgroundImage: `url(${imageSrc})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="absolute z-20 px-2 py-1 text-sm font-medium text-gray-800 bg-white rounded-full shadow top-3 right-3">
          ฿{foodItem.price}
        </div>
      </div>

      <div className="p-4">
        <Link href={`/product/${foodItem.id}`}>
          <h3 className="mb-1 text-lg font-bold transition group-hover:text-orange-500">{foodItem.name}</h3>
        </Link>
        {foodItem.description && (
          <p className="mb-3 text-sm text-gray-600 line-clamp-2">{foodItem.description}</p>
        )}
        
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center">
            <div className="flex items-center">
              <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <span className="ml-1 text-sm text-gray-600">4.5</span>
            </div>
            <span className="mx-2 text-gray-300">•</span>
            <span className="text-sm text-gray-600">30-45 นาที</span>
          </div>
          
          {/* กำหนด className แบบ static เพื่อหลีกเลี่ยง hydration error */}
          <button 
            className="p-2 text-white transition bg-orange-500 rounded-full hover:bg-orange-600"
            aria-label={`เพิ่ม ${foodItem.name} ลงตะกร้า`}
          >
            <ShoppingCart size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;