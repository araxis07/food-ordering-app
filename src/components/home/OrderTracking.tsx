import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const OrderTracking = () => {
  return (
    <section className="py-12 md:py-16 bg-orange-50">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col items-center md:flex-row">
          <div className="mb-8 md:w-1/2 md:mb-0 md:pr-10">
            <h2 className="mb-4 text-3xl font-bold">ติดตามออเดอร์แบบเรียลไทม์</h2>
            <p className="mb-6 text-lg text-gray-600">
              ติดตามสถานะออเดอร์ของคุณได้แบบทันที รู้เวลาที่อาหารกำลังถูกเตรียม และเวลาที่พนักงานส่งอาหารกำลังเดินทางมา
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5">1</div>
                <div>
                  <p className="font-medium">รับออเดอร์และเตรียมอาหาร</p>
                  <p className="text-sm text-gray-600">ร้านอาหารได้รับออเดอร์และเริ่มเตรียมอาหารของคุณ</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5">2</div>
                <div>
                  <p className="font-medium">อาหารอยู่ระหว่างการจัดส่ง</p>
                  <p className="text-sm text-gray-600">พนักงานส่งอาหารกำลังเดินทางมาหาคุณ พร้อมแสดงตำแหน่งแบบเรียลไทม์</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5">3</div>
                <div>
                  <p className="font-medium">จัดส่งเสร็จสิ้น</p>
                  <p className="text-sm text-gray-600">อาหารถูกส่งถึงที่หมายเรียบร้อยแล้ว อร่อยกับอาหารได้เลย!</p>
                </div>
              </div>
            </div>
            
            <Link 
              href="/track-order" 
              className="inline-flex px-6 py-3 mt-6 font-medium text-white transition-colors bg-orange-500 rounded-full hover:bg-orange-600"
            >
              ติดตามออเดอร์
            </Link>
          </div>
          
          <div className="md:w-1/2">
            <div className="relative w-full h-72 md:h-96">
              <Image
                src="/images/order-tracking-preview.png"
                alt="การติดตามออเดอร์"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: 'contain' }}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderTracking;