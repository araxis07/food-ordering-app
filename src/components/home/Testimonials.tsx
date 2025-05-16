'use client';

import React from 'react';
import Image from 'next/image';
import { Star } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const testimonials = [
  {
    id: 1,
    name: 'คุณอรุณ สว่างใจ',
    avatar: '/images/avatars/user1.jpg',
    rating: 5,
    comment: 'อาหารอร่อยมาก! ส่งไวด้วย อุ่นๆ เหมือนเพิ่งทำเสร็จ จะกลับมาสั่งอีกแน่นอน',
  },
  {
    id: 2,
    name: 'คุณนภา ใจดี',
    avatar: '/images/avatars/user2.jpg',
    rating: 4,
    comment: 'บริการดีมาก พนักงานส่งอาหารสุภาพและเป็นมิตร อาหารรสชาติใช้ได้',
  },
  {
    id: 3,
    name: 'คุณสมชาย รักอาหาร',
    avatar: '/images/avatars/user3.jpg',
    rating: 5,
    comment: 'เป็นแอพสั่งอาหารที่ดีที่สุดที่เคยใช้มา มีร้านให้เลือกเยอะ และราคาไม่แพง',
  },
  {
    id: 4,
    name: 'คุณมานี มีสุข',
    avatar: '/images/avatars/user4.jpg',
    rating: 4,
    comment: 'ใช้เป็นประจำ แอพใช้งานง่าย ตามออเดอร์ได้แบบเรียลไทม์ สะดวกมาก',
  }
];

const Testimonials = () => {
  return (
    <section className="py-12 md:py-16">
      <div className="container px-4 mx-auto">
        <div className="mb-10 text-center">
          <h2 className="mb-2 text-3xl font-bold">รีวิวจากลูกค้า</h2>
          <p className="text-gray-600">เสียงตอบรับจากผู้ใช้บริการของเรา</p>
        </div>
        
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="testimonial-swiper"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="flex flex-col h-full p-6 bg-white shadow-md rounded-xl">
                <div className="flex items-center mb-4">
                  <div className="relative w-12 h-12 mr-4 overflow-hidden rounded-full">
                    <Image
                      src={testimonial.avatar || '/images/avatars/default.jpg'}
                      alt={testimonial.name}
                      fill
                      sizes="48px"
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div>
                    <h3 className="font-medium">{testimonial.name}</h3>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={14}
                          fill={i < testimonial.rating ? '#FFC107' : '#E2E8F0'}
                          stroke={i < testimonial.rating ? '#FFC107' : '#E2E8F0'}
                          className="mr-0.5"
                        />
                      ))}
                    </div>
                  </div>
                </div>
                
                <p className="flex-grow text-gray-600">"{testimonial.comment}"</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;