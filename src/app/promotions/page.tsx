import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const promotions = [
  {
    id: 'welcome20',
    title: 'ส่วนลด 20% สำหรับผู้ใช้ใหม่',
    description: 'ใช้โค้ด WELCOME20 เพื่อรับส่วนลด 20% สำหรับการสั่งอาหารครั้งแรก สูงสุด 100 บาท',
    code: 'WELCOME20',
    expiryDate: '31 ธ.ค. 2023',
    image: '/images/menu/pad-krapow.jpg',
  },
  {
    id: 'free-delivery',
    title: 'ฟรีค่าจัดส่ง',
    description: 'สั่งอาหารขั้นต่ำ 300 บาท รับสิทธิ์ฟรีค่าจัดส่งทันที',
    code: 'FREEDEL',
    expiryDate: '31 ธ.ค. 2023',
    image: '/images/menu/tom-yum-kung.jpg',
  },
  {
    id: 'discount50',
    title: 'ลด 50 บาท',
    description: 'ใช้โค้ด DISC50 เมื่อสั่งอาหารขั้นต่ำ 500 บาท',
    code: 'DISC50',
    expiryDate: '31 ธ.ค. 2023',
    image: '/images/menu/som-tum.jpg',
  }
];

export default function Promotions() {
  return (
    <main className="min-h-screen py-10">
      <div className="container px-4 mx-auto">
        <h1 className="mb-6 text-3xl font-bold">โปรโมชั่น & ส่วนลด</h1>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {promotions.map((promo) => (
            <div key={promo.id} className="overflow-hidden bg-white rounded-lg shadow-md">
              <div className="relative h-48">
                <Image
                  src={promo.image}
                  alt={promo.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="p-6">
                <h2 className="mb-2 text-xl font-bold">{promo.title}</h2>
                <p className="mb-4 text-gray-600">{promo.description}</p>
                
                <div className="p-3 mb-4 bg-gray-100 rounded-md">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">รหัสส่วนลด:</span>
                    <span className="font-bold text-orange-600">{promo.code}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">หมดอายุ: {promo.expiryDate}</span>
                  <Link 
                    href={`/menu`}
                    className="px-4 py-2 text-sm font-medium text-white transition-colors bg-orange-500 rounded-full hover:bg-orange-600"
                  >
                    สั่งอาหารเลย
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}