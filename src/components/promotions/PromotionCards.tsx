import React from 'react';
import OptimizedImage from '../ui/OptimizedImage';

const promotions = [
  {
    id: 1,
    title: 'ส่วนลด 20% สำหรับผู้ใช้ใหม่',
    description: 'ใช้โค้ด WELCOME20 เพื่อรับส่วนลด 20% สำหรับการสั่งอาหารครั้งแรก สูงสุด 100 บาท',
    code: 'WELCOME20',
    expiryDate: '31 ธ.ค. 2023',
    image: '/images/promotions/new-user.jpg'
  },
  {
    id: 2,
    title: 'ฟรีค่าจัดส่ง',
    description: 'สั่งอาหารขั้นต่ำ 300 บาท รับสิทธิ์ฟรีค่าจัดส่งทันที',
    code: 'FREEDEL',
    expiryDate: '31 ธ.ค. 2023',
    image: '/images/promotions/free-delivery.jpg'
  },
  {
    id: 3,
    title: 'ลด 50 บาท',
    description: 'ใช้โค้ด DISC50 เมื่อสั่งอาหารขั้นต่ำ 500 บาท',
    code: 'DISC50',
    expiryDate: '31 ธ.ค. 2023',
    image: '/images/promotions/discount.jpg'
  }
];

const PromotionCards = () => {
  return (
    <div className="grid grid-cols-1 gap-6 mt-6 md:grid-cols-2 lg:grid-cols-3">
      {promotions.map((promo) => (
        <div key={promo.id} className="overflow-hidden bg-white rounded-lg shadow-md">          <div className="relative h-48">
            <OptimizedImage
              src={promo.image}
              alt={promo.title}
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="p-4">
            <h3 className="mb-2 text-lg font-semibold">{promo.title}</h3>
            <p className="mb-3 text-sm text-gray-600">{promo.description}</p>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-gray-500">รหัสส่วนลด:</p>
                <p className="font-mono font-bold text-orange-500">{promo.code}</p>
              </div>
              <div className="text-right">
                <p className="text-xs text-gray-500">หมดอายุ:</p>
                <p className="text-sm">{promo.expiryDate}</p>
              </div>
            </div>
            <button className="w-full py-2 mt-3 text-white transition bg-orange-500 rounded-md hover:bg-orange-600">
              สั่งอาหารเลย
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PromotionCards;