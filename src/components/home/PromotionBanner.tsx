import React from 'react';
import Link from 'next/link';

const PromotionBanner = () => {
  return (
    <section className="py-10 text-white bg-gradient-to-r from-orange-500 to-red-600">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <div>
            <h2 className="mb-2 text-2xl font-bold md:text-3xl">ลด 20% สำหรับการสั่งซื้อครั้งแรก!</h2>
            <p className="text-white/90">ใช้โค้ด WELCOME20 เมื่อชำระเงิน</p>
          </div>
          <Link 
            href="/menu" 
            className="px-6 py-3 mt-4 font-medium text-orange-600 transition-colors bg-white rounded-full md:mt-0 hover:bg-gray-100"
          >
            สั่งอาหารเลย
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PromotionBanner;