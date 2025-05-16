import React from 'react';
import Link from 'next/link';
import OptimizedImage from '@/components/ui/OptimizedImage';

// ข้อมูลหมวดหมู่อาหาร
const categories = [
  { id: 'thai', name: 'อาหารไทย', image: '/images/categories/thai.jpg' },
  { id: 'japanese', name: 'อาหารญี่ปุ่น', image: '/images/categories/japanese.jpg' },
  { id: 'fastfood', name: 'ฟาสต์ฟู้ด', image: '/images/categories/fastfood.jpg' },
  { id: 'italian', name: 'อาหารอิตาเลียน', image: '/images/categories/italian.jpg' },
  { id: 'seafood', name: 'อาหารทะเล', image: '/images/categories/seafood.jpg' },
];

// ข้อมูลเมนูอาหาร
const menuItems = [
  {
    id: 1,
    name: 'ผัดกระเพราหมูกรอบ',
    description: 'หมูกรอบผัดกับกระเพรา พริกขี้หนูสด และไข่ดาว',
    price: 89,
    image: '/images/menu/pad-krapow.jpg',
    category: 'thai',
  },
  {
    id: 2,
    name: 'ต้มยำกุ้งน้ำข้น',
    description: 'ต้มยำกุ้งแม่น้ำรสเข้มข้น ใส่น้ำพริกเผาและนม',
    price: 180,
    image: '/images/menu/tom-yum-kung.jpg',
    category: 'thai',
  },
  {
    id: 3,
    name: 'ส้มตำไทย',
    description: 'ส้มตำรสจัด ใส่มะเขือเทศ ถั่ว และกุ้งแห้ง',
    price: 70,
    image: '/images/menu/som-tum.jpg',
    category: 'thai',
  },
  {
    id: 4,
    name: 'แกงเขียวหวานไก่',
    description: 'แกงเขียวหวานรสเข้มข้น ใส่ไก่เนื้อนุ่มและผักเครื่องแกง',
    price: 120,
    image: '/images/menu/green-curry.jpg',
    category: 'thai',
  },
];

export default function Menu() {
  return (
    <main className="min-h-screen py-10">
      <div className="container px-4 mx-auto">
        <h1 className="mb-6 text-3xl font-bold">เมนูอาหาร</h1>
        
        {/* หมวดหมู่อาหาร */}
        <section className="mb-12">
          <h2 className="mb-4 text-xl font-semibold">หมวดหมู่</h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {categories.map((category) => (
              <Link 
                key={category.id}
                href={`/menu?category=${category.id}`}
                className="block group"
              >
                <div className="overflow-hidden bg-white rounded-lg shadow-md">
                  <div className="relative h-36">
                    <OptimizedImage
                      src={category.image}
                      alt={category.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 25vw"
                      className="transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-3 text-center">{category.name}</div>
                </div>
              </Link>
            ))}
          </div>
        </section>
        
        {/* รายการอาหาร */}
        <section>
          <h2 className="mb-4 text-xl font-semibold">อาหารยอดนิยม</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {menuItems.map((item) => (
              <div key={item.id} className="overflow-hidden bg-white rounded-lg shadow-md">
                <div className="relative h-48">
                  <OptimizedImage
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
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
      </div>
    </main>
  );
}