'use client';

import React, { useState } from 'react';
import ImageDebugger from '@/components/debug/ImageDebugger';
import OptimizedImage from '@/components/ui/OptimizedImage';

const imagePaths = [
  // หมวดหมู่อาหาร
  '/images/categories/thai.jpg',
  '/images/categories/japanese.jpg',
  '/images/categories/fastfood.jpg',
  '/images/categories/italian.jpg',
  '/images/categories/seafood.jpg',
  
  // อาหาร
  '/images/menu/pad-krapow.jpg',
  '/images/menu/tom-yum-kung.jpg',
  '/images/menu/som-tum.jpg',
  '/images/menu/green-curry.jpg',
  '/images/menu/sushi.jpg',
  '/images/menu/pizza.jpg',
  '/images/menu/burger.jpg',
];

export default function ImageDebugPage() {
  const [customPath, setCustomPath] = useState<string>('');

  return (
    <div className="container px-4 py-10 mx-auto">
      <h1 className="mb-6 text-2xl font-bold">ตรวจสอบรูปภาพในระบบ</h1>
      
      <div className="mb-6">
        <h2 className="mb-3 text-xl font-semibold">เพิ่มรูปภาพเพื่อทดสอบ</h2>
        <div className="flex gap-2">
          <input 
            type="text"
            value={customPath}
            onChange={(e) => setCustomPath(e.target.value)}
            placeholder="ใส่เส้นทางรูปภาพที่ต้องการทดสอบ"
            className="flex-1 p-2 border rounded"
          />
          <button 
            onClick={() => setCustomPath('')}
            className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
          >
            ล้าง
          </button>
        </div>
        
        {customPath && (
          <div className="mt-4">
            <ImageDebugger src={customPath} alt="รูปภาพที่กำหนดเอง" />
            <div className="w-32 h-32 border border-gray-300">
              <OptimizedImage src={customPath} alt="รูปภาพที่กำหนดเอง" fill />
            </div>
          </div>
        )}
      </div>
      
      <h2 className="mb-3 text-xl font-semibold">รูปภาพในระบบทั้งหมด</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {imagePaths.map((path, index) => (
          <div key={index} className="p-4 bg-white rounded-lg shadow-md">
            <ImageDebugger src={path} alt={`รูปภาพที่ ${index + 1}`} />
            <div className="relative h-40">
              <OptimizedImage
                src={path}
                alt={`รูปภาพที่ ${index + 1}`}
                fill
                priority={index < 2}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}