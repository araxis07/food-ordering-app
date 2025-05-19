'use client';

import React from 'react';
import Link from 'next/link';
import FallbackImage from '@/components/ui/FallbackImage';
import { ClientImagePreloader } from '@/components/ClientComponents';

// ข้อมูลหมวดหมู่อาหาร
const categories = [
  { id: 'thai', name: 'อาหารไทย', image: '/images/categories/thai.jpg' },
  { id: 'japanese', name: 'อาหารญี่ปุ่น', image: '/images/categories/japanese.jpg' },
  { id: 'fastfood', name: 'ฟาสต์ฟู้ด', image: '/images/categories/fastfood.jpg' },
  { id: 'italian', name: 'อาหารอิตาเลียน', image: '/images/categories/italian.jpg' },
  { id: 'seafood', name: 'อาหารทะเล', image: '/images/categories/seafood.jpg' },
];

// ข้อมูลเมนูยอดนิยม
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
];

export default function HomePage() {
  return (
    <>
      <ClientImagePreloader />
      
      {/* Hero Section */}
      <section className="py-16 text-white bg-orange-500">
        <div className="container px-4 mx-auto text-center">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">
            อาหารอร่อย ส่งตรงถึงคุณ
          </h1>
          <p className="max-w-2xl mx-auto mb-8 text-xl">
            บริการสั่งอาหารออนไลน์ ส่งไว อร่อยทันใจ
          </p>
          <Link
            href="/menu"
            className="px-8 py-3 font-bold text-orange-600 transition-colors bg-white rounded-full hover:bg-gray-100"
          >
            สั่งอาหารเลย
          </Link>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-12">
        <div className="container px-4 mx-auto">
          <div className="mb-10 text-center">
            <h2 className="mb-2 text-3xl font-bold">หมวดหมู่อาหาร</h2>
            <p className="text-gray-600">เลือกตามประเภทที่คุณชื่นชอบ</p>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-5">
            {categories.map((category) => (
              <Link
                key={category.id}
                href={`/menu?category=${category.id}`}
                className="overflow-hidden transition-transform duration-300 bg-white rounded-lg shadow-md group hover:shadow-lg hover:-translate-y-1"
              >
                <div className="relative aspect-square">
                  <FallbackImage
                    src={category.image}
                    alt={category.name}
                    fill
                    priority
                  />
                </div>
                <div className="p-3 font-medium text-center">
                  {category.name}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Items Section */}
      <section className="py-12 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="mb-10 text-center">
            <h2 className="mb-2 text-3xl font-bold">เมนูยอดนิยม</h2>
            <p className="text-gray-600">อร่อยการันตี เมนูที่ลูกค้าสั่งมากที่สุด</p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {popularItems.map((item) => (
              <div key={item.id} className="overflow-hidden bg-white rounded-lg shadow-md">
                <div className="relative h-48">
                  <FallbackImage
                    src={item.image}
                    alt={item.name}
                    fill
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="mt-1 text-sm text-gray-600">{item.description}</p>
                  <div className="flex items-center justify-between mt-3">
                    <span className="font-bold text-orange-500">{item.price} บาท</span>
                    <button className="px-3 py-1 text-sm text-white transition-colors bg-orange-500 rounded-full hover:bg-orange-600">
                      สั่งเลย
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-12">
        <div className="container px-4 mx-auto">
          <div className="mb-10 text-center">
            <h2 className="mb-2 text-3xl font-bold">วิธีการสั่งอาหาร</h2>
            <p className="text-gray-600">สั่งอาหารง่ายๆ เพียง 4 ขั้นตอน</p>
          </div>
          
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {title: 'เลือกเมนูอาหาร', desc: 'เลือกเมนูอาหารที่คุณต้องการ'},
              {title: 'เตรียมอาหาร', desc: 'พ่อครัวมืออาชีพเตรียมอาหาร'},
              {title: 'เวลาการจัดส่ง', desc: 'ติดตามสถานะอาหารของคุณ'},
              {title: 'จัดส่งถึงบ้าน', desc: 'พนักงานส่งอาหารจะนำอาหารมาส่ง'}
            ].map((step, index) => (
              <div key={index} className="p-6 text-center bg-white rounded-lg shadow-md">
                <div className="flex items-center justify-center w-8 h-8 mx-auto mb-4 text-lg font-bold text-white bg-orange-500 rounded-full">
                  {index + 1}
                </div>
                <h3 className="mb-2 text-xl font-semibold">{step.title}</h3>
                <p className="text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-10 text-white bg-orange-500">
        <div className="container px-4 mx-auto text-center">
          <h2 className="mb-4 text-3xl font-bold">ลด 20% สำหรับการสั่งซื้อครั้งแรก!</h2>
          <p className="mb-6">ใช้โค้ด WELCOME20 เมื่อชำระเงิน</p>
          <Link 
            href="/menu" 
            className="px-6 py-3 font-medium text-orange-600 transition-colors bg-white rounded-full hover:bg-gray-100"
          >
            สั่งอาหารเลย
          </Link>
        </div>
      </section>
    </>
  );
}
