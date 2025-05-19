import React from 'react';
import OptimizedImage from '../ui/OptimizedImage';

const popularItems = [
  {
    id: 1,
    name: 'ผัดกระเพราหมูกรอบ',
    description: 'หมูกรอบผัดกับกระเพรา พริกขี้หนูสด และไข่ดาว',
    price: 89,
    image: '/images/menu/pad-krapow.jpg',
  },
  {
    id: 2,
    name: 'ต้มยำกุ้งน้ำข้น',
    description: 'ต้มยำกุ้งแม่น้ำรสเข้มข้น ใส่น้ำพริกเผาและนม',
    price: 180,
    image: '/images/menu/tom-yum-kung.jpg',
  },
  {
    id: 3,
    name: 'ส้มตำไทย',
    description: 'ส้มตำรสจัด ใส่มะเขือเทศ ถั่ว และกุ้งแห้ง',
    price: 70,
    image: '/images/menu/som-tum.jpg',
  },
  {
    id: 4,
    name: 'แกงเขียวหวานไก่',
    description: 'แกงเขียวหวานรสเข้มข้น ใส่ไก่เนื้อนุ่มและผักเครื่องแกง',
    price: 120,
    image: '/images/menu/green-curry.jpg',
  },
];

const PopularItems = () => {
  return (
    <section className="py-6">
      <h2 className="mb-4 text-xl font-semibold">อาหารยอดนิยม</h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {popularItems.map((item) => (
          <div key={item.id} className="overflow-hidden bg-white rounded-lg shadow-md">
            <div className="relative h-48">              <OptimizedImage
                src={item.image}
                alt={item.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold">{item.name}</h3>
              <p className="mt-1 text-sm text-gray-600 line-clamp-2">
                {item.description}
              </p>
              <div className="flex items-center justify-between mt-3">
                <span className="font-bold text-orange-500">{item.price} บาท</span>
                <button className="px-3 py-1 text-sm text-white transition bg-orange-500 rounded-full hover:bg-orange-600">
                  เพิ่มลงตะกร้า
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularItems;