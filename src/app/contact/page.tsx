'use client';

import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // ในสถานการณ์จริงจะส่งข้อมูลไปยัง API
    alert('ส่งข้อความเรียบร้อยแล้ว! ทางทีมงานจะติดต่อกลับโดยเร็วที่สุด');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <main className="min-h-screen py-10">
      <div className="container px-4 mx-auto">
        <h1 className="mb-6 text-3xl font-bold">ติดต่อเรา</h1>
        
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          {/* Contact Information */}
          <div>
            <div className="p-6 mb-6 bg-white rounded-lg shadow-md">
              <h2 className="mb-4 text-xl font-semibold">ข้อมูลติดต่อ</h2>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="p-3 mr-4 bg-orange-100 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-orange-500">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium">โทรศัพท์</h3>
                    <p className="text-gray-600">02-123-4567</p>
                    <p className="text-gray-600">089-765-4321 (ฝ่ายลูกค้าสัมพันธ์)</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="p-3 mr-4 bg-orange-100 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-orange-500">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium">อีเมล</h3>
                    <p className="text-gray-600">info@fooddelivery.com</p>
                    <p className="text-gray-600">support@fooddelivery.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="p-3 mr-4 bg-orange-100 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-orange-500">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium">ที่อยู่</h3>
                    <p className="text-gray-600">
                      อาคาร FoodTech ชั้น 12<br />
                      123 ถนนสุขุมวิท
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Business Hours */}
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h2 className="mb-4 text-xl font-semibold">เวลาทำการ</h2>
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span className="text-gray-600">จันทร์ - ศุกร์:</span>
                  <span>08:00 - 22:00</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-600">เสาร์ - อาทิตย์:</span>
                  <span>10:00 - 22:00</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-600">วันหยุดนักขัตฤกษ์:</span>
                  <span>10:00 - 20:00</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="mb-4 text-xl font-semibold">ส่งข้อความถึงเรา</h2>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-4 mb-4 md:grid-cols-2">
                <div>
                  <label className="block mb-1 text-sm font-medium text-gray-700">ชื่อ-นามสกุล</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
                    required
                  />
                </div>
                
                <div>
                  <label className="block mb-1 text-sm font-medium text-gray-700">อีเมล</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
                    required
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 gap-4 mb-4 md:grid-cols-2">
                <div>
                  <label className="block mb-1 text-sm font-medium text-gray-700">เบอร์โทรศัพท์</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
                  />
                </div>
                
                <div>
                  <label className="block mb-1 text-sm font-medium text-gray-700">เรื่อง</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
                    required
                  >
                    <option value="">เลือกหัวข้อ</option>
                    <option value="general">สอบถามทั่วไป</option>
                    <option value="support">ขอความช่วยเหลือ</option>
                    <option value="feedback">ข้อเสนอแนะ</option>
                    <option value="complaint">ร้องเรียน</option>
                  </select>
                </div>
              </div>
              
              <div className="mb-4">
                <label className="block mb-1 text-sm font-medium text-gray-700">ข้อความ</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full px-4 py-2 text-white transition-colors bg-orange-500 rounded-md hover:bg-orange-600"
              >
                ส่งข้อความ
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}