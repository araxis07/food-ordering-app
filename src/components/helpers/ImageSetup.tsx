'use client';

import React, { useState, useEffect } from 'react';

// เจาะจงชื่อรูปภาพที่จำเป็นต้องมีในระบบ
const requiredImages = {
  menu: [
    'pad-krapow.jpg',
    'tom-yum-kung.jpg',
    'som-tum.jpg',
    'green-curry.jpg',
    'burger.jpg',
    'pizza.jpg',
    'sushi.jpg'
  ],
  categories: [
    'thai.jpg',
    'japanese.jpg',
    'italian.jpg',
    'fastfood.jpg',
    'seafood.jpg'
  ]
};

/**
 * ฟังก์ชั่นสำหรับนอร์มอลไลซ์พาทของรูปภาพ
 * - ใช้ตรวจสอบว่าพาทถูกต้องหรือไม่
 * - เติม / หน้าสุดถ้าจำเป็น
 * - แปลง \\ เป็น / (สำหรับ Windows)
 */
// Export normalize image path function to be used in other components
export const normalizeImagePath = (imagePath: string): string => {
  if (!imagePath) return '';
  
  // แปลง backslashes เป็น forward slashes
  let normalizedPath = imagePath.replace(/\\/g, '/');
  
  // เติม / ด้านหน้าถ้าไม่มีและไม่ใช่ URL
  if (!normalizedPath.startsWith('/') && !normalizedPath.startsWith('http')) {
    normalizedPath = `/${normalizedPath}`;
  }
  
  return normalizedPath;
};

/**
 * ฟังก์ชั่นสำหรับโหลดรูปภาพแบบมี fallback
 * คืนค่า Promise ที่ resolve เป็น boolean ว่าโหลดสำเร็จหรือไม่
 */
export const preloadImage = async (src: string): Promise<boolean> => {
  return new Promise((resolve) => {
    if (typeof window === 'undefined') {
      resolve(false); // ไม่สามารถโหลดรูปภาพบน server ได้
      return;
    }
    
    const img = new Image();
    
    img.onload = () => resolve(true);
    img.onerror = () => resolve(false);
    
    // ลอง normalize path ก่อน
    img.src = normalizeImagePath(src);
  });
};

const ImageSetup: React.FC = () => {
  const [checkResults, setCheckResults] = useState<Record<string, boolean>>({});
  
  useEffect(() => {
    // รันเฉพาะบนฝั่ง client
    if (typeof window === 'undefined') return;
    
    const checkAllImages = async () => {
      const results: Record<string, boolean> = {};
      
      // ตรวจสอบรูปภาพในหมวดหมู่ menu
      for (const image of requiredImages.menu) {
        const path = `/images/menu/${image}`;
        results[path] = await preloadImage(path);
      }
      
      // ตรวจสอบรูปภาพในหมวดหมู่ categories
      for (const image of requiredImages.categories) {
        const path = `/images/categories/${image}`;
        results[path] = await preloadImage(path);
      }
      
      setCheckResults(results);
    };
    
    checkAllImages();
  }, []);

  // คำนวณจำนวนรูปที่โหลดสำเร็จ
  const successCount = Object.values(checkResults).filter(v => v).length;
  const totalCount = Object.keys(checkResults).length;
  const successRate = totalCount > 0 ? Math.round((successCount / totalCount) * 100) : 0;

  return (
    <div className="p-4 mt-4 bg-yellow-100 rounded-lg">
      <h3 className="font-semibold">ตรวจสอบรูปภาพในระบบ:</h3>
      
      <div className="mt-2 mb-4">
        <div className="w-full bg-gray-200 rounded-full h-4">
          <div 
            className={`h-4 rounded-full ${successRate > 70 ? 'bg-green-500' : successRate > 30 ? 'bg-yellow-500' : 'bg-red-500'}`}
            style={{ width: `${successRate}%` }}
          ></div>
        </div>
        <div className="mt-1 text-sm text-center">
          โหลดสำเร็จ {successCount}/{totalCount} รูป ({successRate}%)
        </div>
      </div>
      
      {/* แสดงรายการรูปภาพที่มีปัญหาโหลดไม่สำเร็จ */}
      {successRate < 100 && (
        <div className="p-3 mb-3 text-red-700 bg-red-100 rounded">
          <p className="font-semibold">รูปภาพที่ยังไม่พบ:</p>
          <ul className="ml-4 list-disc">
            {Object.entries(checkResults)
              .filter(([_, success]) => !success)
              .map(([path]) => (
                <li key={path}>{path}</li>
              ))}
          </ul>
        </div>
      )}
      
      {/* คำแนะนำในการแก้ไข */}
      <ol className="ml-4 list-decimal">
        <li>ตรวจสอบว่ามีโฟลเดอร์ <code>public/images/menu</code> และ <code>public/images/categories</code> หรือยัง</li>
        <li>ตรวจสอบชื่อไฟล์รูปภาพให้ตรงกับชื่อที่ระบบต้องการ (ตัวพิมพ์เล็ก/ใหญ่มีผล)</li>
        <li>ถ้ายังไม่มี ให้ดาวน์โหลดรูปภาพและบันทึกในโฟลเดอร์ที่ถูกต้อง</li>
      </ol>
      
      <div className="p-3 mt-3 bg-white rounded">
        <p className="mb-2 font-semibold">ลิงก์ดาวน์โหลดรูปภาพตัวอย่าง:</p>
        <ul className="ml-4 list-disc">
          <li><a className="text-blue-500 underline" href="https://source.unsplash.com/random/800x600/?thai-food,pad-krapow" target="_blank" rel="noopener noreferrer">ผัดกระเพรา</a></li>
          <li><a className="text-blue-500 underline" href="https://source.unsplash.com/random/800x600/?thai-food,tom-yum" target="_blank" rel="noopener noreferrer">ต้มยำกุ้ง</a></li>
          <li><a className="text-blue-500 underline" href="https://source.unsplash.com/random/800x600/?thai-food,papaya-salad" target="_blank" rel="noopener noreferrer">ส้มตำ</a></li>
          <li><a className="text-blue-500 underline" href="https://source.unsplash.com/random/800x600/?thai-food,green-curry" target="_blank" rel="noopener noreferrer">แกงเขียวหวาน</a></li>
          <li><a className="text-blue-500 underline" href="https://source.unsplash.com/random/800x600/?burger" target="_blank" rel="noopener noreferrer">เบอร์เกอร์</a></li>
          <li><a className="text-blue-500 underline" href="https://source.unsplash.com/random/800x600/?pizza" target="_blank" rel="noopener noreferrer">พิซซ่า</a></li>
          <li><a className="text-blue-500 underline" href="https://source.unsplash.com/random/800x600/?sushi" target="_blank" rel="noopener noreferrer">ซูชิ</a></li>
        </ul>
      </div>
    </div>
  );
};

export default ImageSetup;