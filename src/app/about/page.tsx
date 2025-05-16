import React from 'react';
import Image from 'next/image';

export default function About() {
  return (
    <main className="min-h-screen py-10">
      <div className="container px-4 mx-auto">
        {/* Hero Section */}
        <div className="p-8 mb-12 bg-orange-50 rounded-xl">
          <div className="flex flex-col items-center md:flex-row">
            <div className="mb-6 md:w-1/2 md:mb-0 md:pr-10">
              <h1 className="mb-4 text-3xl font-bold md:text-4xl">เกี่ยวกับเรา</h1>
              <p className="mb-4 text-lg text-gray-700">
                "FoodDelivery" เป็นแพลตฟอร์มสั่งอาหารออนไลน์ที่เชื่อมโยงลูกค้ากับร้านอาหารชั้นนำทั่วประเทศไทย 
                เรามุ่งมั่นที่จะมอบประสบการณ์การสั่งอาหารที่สะดวก รวดเร็ว และน่าประทับใจ
              </p>
              <p className="text-gray-700">
                ด้วยเครือข่ายร้านอาหารกว่า 1,000 ร้านค้า และพนักงานส่งอาหารที่ผ่านการอบรมมาอย่างดี 
                เราพร้อมให้บริการคุณตลอด 24 ชั่วโมง
              </p>
            </div>
            <div className="relative w-full h-64 md:w-1/2 md:h-80">
              <Image
                src="/images/categories/thai.jpg"
                alt="เกี่ยวกับ FoodDelivery"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: 'cover' }}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Our Values */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-center">ค่านิยมของเรา</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="p-6 text-center bg-white rounded-lg shadow-md">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-orange-100 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-orange-500">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-semibold">คุณภาพ</h3>
              <p className="text-gray-600">
                เราให้ความสำคัญกับคุณภาพอาหารและบริการ เพื่อให้คุณได้รับสิ่งที่ดีที่สุดเสมอ
              </p>
            </div>
            
            <div className="p-6 text-center bg-white rounded-lg shadow-md">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-orange-100 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-orange-500">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-semibold">ความรวดเร็ว</h3>
              <p className="text-gray-600">
                เราเข้าใจว่าเวลาของคุณมีค่า จึงมุ่งมั่นในการจัดส่งอาหารให้คุณอย่างรวดเร็วที่สุด
              </p>
            </div>
            
            <div className="p-6 text-center bg-white rounded-lg shadow-md">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-orange-100 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-orange-500">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-semibold">การบริการลูกค้า</h3>
              <p className="text-gray-600">
                ความพอใจของลูกค้าคือหัวใจสำคัญของเรา เรามุ่งมั่นที่จะให้บริการที่เป็นเลิศทุกครั้ง
              </p>
            </div>
          </div>
        </section>
        
        {/* Our Story */}
        <section className="mb-12">
          <div className="p-6 bg-white rounded-lg shadow-md md:p-8">
            <h2 className="mb-4 text-2xl font-bold">เรื่องราวของเรา</h2>
            <p className="mb-4 text-gray-700">
              FoodDelivery ก่อตั้งขึ้นในปี 2019 โดยกลุ่มผู้ประกอบการรุ่นใหม่ที่มีความหลงใหลในอาหารไทยและเทคโนโลยี 
              เราเริ่มต้นจากการให้บริการในกรุงเทพมหานคร และขยายตัวอย่างรวดเร็วไปยังเมืองใหญ่ทั่วประเทศ
            </p>
            <p className="mb-4 text-gray-700">
              ปัจจุบัน FoodDelivery ให้บริการในกว่า 15 จังหวัดทั่วประเทศไทย และมีแผนที่จะขยายไปยังประเทศเพื่อนบ้านในอนาคตอันใกล้ 
              เรามุ่งมั่นที่จะเป็นผู้นำในตลาดบริการส่งอาหารออนไลน์ในภูมิภาคเอเชียตะวันออกเฉียงใต้
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}