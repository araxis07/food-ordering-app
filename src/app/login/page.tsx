'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setFormData({ ...formData, [e.target.name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // ในสถานการณ์จริงจะทำการเข้าสู่ระบบผ่าน API
    alert('เข้าสู่ระบบสำเร็จ! (จำลอง)');
  };

  return (
    <main className="min-h-screen py-10 bg-gray-50">
      <div className="container px-4 mx-auto">
        <div className="max-w-md p-8 mx-auto bg-white rounded-lg shadow-md">
          <div className="mb-8 text-center">
            <h1 className="text-2xl font-bold">เข้าสู่ระบบ</h1>
            <p className="mt-2 text-gray-600">ยินดีต้อนรับกลับมา! กรุณาเข้าสู่ระบบเพื่อดำเนินการต่อ</p>
          </div>
          
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
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
            
            <div className="mb-4">
              <label className="block mb-1 text-sm font-medium text-gray-700">รหัสผ่าน</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
                required
              />
            </div>
            
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="rememberMe"
                  id="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleChange}
                  className="w-4 h-4 text-orange-500 border-gray-300 rounded focus:ring-orange-500"
                />
                <label htmlFor="rememberMe" className="block ml-2 text-sm text-gray-700">
                  จำฉันไว้
                </label>
              </div>
              <Link href="/forgot-password" className="text-sm text-orange-600 hover:text-orange-500">
                ลืมรหัสผ่าน?
              </Link>
            </div>
            
            <button
              type="submit"
              className="w-full px-4 py-2 text-white transition-colors bg-orange-500 rounded-md hover:bg-orange-600"
            >
              เข้าสู่ระบบ
            </button>
            
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                ยังไม่มีบัญชี? {' '}
                <Link href="/register" className="font-medium text-orange-600 hover:text-orange-500">
                  สมัครสมาชิก
                </Link>
              </p>
            </div>
            
            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 text-gray-500 bg-white">หรือเข้าสู่ระบบด้วย</span>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-3 mt-4">
                <button
                  type="button"
                  className="w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
                >
                  Google
                </button>
                <button
                  type="button"
                  className="w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
                >
                  Facebook
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}