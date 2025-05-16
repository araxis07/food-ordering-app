'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Star } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

// ข้อมูลสำหรับทดสอบแสดงผล
const popularItems = [
  {
    id: 1,
    name: 'ผัดกระเพราหมูกรอบ',
    description: 'หมูกรอบผัดกับกระเพรา พริกขี้หนูสด และไข่ดาว',
    price: 89,
    image: '/images/menu/pad-krapow.jpg',
    rating: 4.8,
    category: 'thai',
    isPopular: true
  },
  {
    id: 2,
    name: 'ต้มยำกุ้งน้ำข้น',
    description: 'ต้มยำกุ้งแม่น้ำรสเข้มข้น ใส่น้ำพริกเผาและนม',
    price: 180,
    image: '/images/menu/tom-yum-kung.jpg',
    rating: 4.9,
    category: 'thai',
    isPopular: true
  },
  {
    id: 3,
    name: 'ส้มตำไทย',
    description: 'ส้มตำรสจัด ใส่มะเขือเทศ ถั่ว และกุ้งแห้ง',
    price: 70,
    image: '/images/menu/som-tum.jpg',
    rating: 4.7,
    category: 'thai',
    isPopular: true
  },
  {
    id: 4,
    name: 'แกงเขียวหวานไก่',
    description: 'แกงเขียวหวานรสเข้มข้น ใส่ไก่เนื้อนุ่มและผักเครื่องแกง',
    price: 120,
    image: '/images/menu/green-curry.jpg',
    rating: 4.6,
    category: 'thai',
    isPopular: true
  },
  {
    id: 5,
    name: 'พิซซ่าฮาวายเอี้ยน',
    description: 'พิซซ่าหน้าแฮมและสัปปะรด พร้อมชีสเต็มหน้า',
    price: 199,
    image: '/images/menu/hawaiian-pizza.jpg',
    rating: 4.5,
    category: 'fastfood',
    isPopular: true
  }
];

const PopularItems = () => {
  return (
    <section className="py-12 md:py-16">
      <div className="container px-4 mx-auto">
        <div className="mb-10 text-center">
          <h2 className="mb-2 text-3xl font-bold">เมนูยอดนิยม</h2>
          <p className="text-gray-600">อร่อยการันตี เมนูที่ลูกค้าสั่งมากที่สุด</p>
        </div>
        
        <Swiper
          slidesPerView={1.2}
          spaceBetween={16}
          navigation
          breakpoints={{
            640: { slidesPerView: 2.2 },
            768: { slidesPerView: 3.2 },
            1024: { slidesPerView: 4.2 }
          }}
          className="food-swiper"
        >
          {popularItems.map((item) => (
            <SwiperSlide key={item.id}>
              <Link 
                href={`/menu/${item.id}`}
                className="block overflow-hidden transition-shadow bg-white shadow-md rounded-xl hover:shadow-lg"
              >
                <div className="relative w-full h-48">
                  <Image
                    src={item.image || '/images/placeholder-food.jpg'}
                    alt={item.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    style={{ objectFit: 'cover' }}
                  />
                  <div className="absolute px-2 py-1 text-xs font-medium text-white bg-orange-500 rounded top-2 right-2">
                    ยอดนิยม
                  </div>
                </div>
                
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  
                  <p className="mt-1 text-sm text-gray-600 line-clamp-2">
                    {item.description}
                  </p>
                  
                  <div className="flex items-center mt-2">
                    <Star size={16} fill="#FFC107" stroke="#FFC107" />
                    <span className="ml-1 text-sm text-gray-700">{item.rating}</span>
                  </div>
                  
                  <div className="flex items-center justify-between mt-2">
                    <span className="font-bold text-orange-500">{item.price} บาท</span>
                    <button className="px-3 py-1 text-sm text-orange-500 transition-colors rounded-full bg-orange-50 hover:bg-orange-100">
                      สั่งเลย
                    </button>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
        
        <div className="mt-8 text-center">
          <Link
            href="/menu"
            className="inline-flex items-center font-medium text-orange-500 hover:text-orange-600"
          >
            ดูเมนูทั้งหมด
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PopularItems;