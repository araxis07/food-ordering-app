import React from 'react';
import { Search, UtensilsCrossed, Timer, Truck } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: <Search className="w-10 h-10 text-orange-500" />,
      title: 'เลือกเมนูอาหาร',
      description: 'เลือกเมนูอาหารที่คุณต้องการจากร้านอาหารชั้นนำมากมาย'
    },
    {
      icon: <UtensilsCrossed className="w-10 h-10 text-orange-500" />,
      title: 'เตรียมอาหาร',
      description: 'พ่อครัวมืออาชีพเตรียมอาหารด้วยวัตถุดิบคุณภาพสูง'
    },
    {
      icon: <Timer className="w-10 h-10 text-orange-500" />,
      title: 'เวลาการจัดส่ง',
      description: 'ติดตามสถานะอาหารของคุณแบบเรียลไทม์'
    },
    {
      icon: <Truck className="w-10 h-10 text-orange-500" />,
      title: 'จัดส่งถึงบ้าน',
      description: 'พนักงานส่งอาหารจะนำอาหารมาส่งถึงหน้าบ้านคุณ'
    }
  ];

  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="container px-4 mx-auto">
        <div className="mb-10 text-center">
          <h2 className="mb-2 text-3xl font-bold">วิธีการสั่งอาหาร</h2>
          <p className="text-gray-600">สั่งอาหารง่ายๆ เพียง 4 ขั้นตอน</p>
        </div>
        
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div key={index} className="p-6 text-center bg-white rounded-lg shadow-md">
              <div className="inline-flex items-center justify-center w-16 h-16 mb-4 bg-orange-100 rounded-full">
                {step.icon}
              </div>
              <div className="flex items-center justify-center inline-block w-8 h-8 mb-4 text-lg font-bold text-white bg-orange-500 rounded-full">
                {index + 1}
              </div>
              <h3 className="mb-2 text-xl font-semibold">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;