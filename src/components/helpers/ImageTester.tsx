'use client';

import React, { useState, useEffect } from 'react';

const ImageTester = () => {
  const [imagesStatus, setImagesStatus] = useState<Record<string, boolean>>({});
  
  const imagesToTest = [
    '/images/menu/pad-krapow.jpg',
    '/images/menu/tom-yum-kung.jpg',
    '/images/menu/som-tum.jpg',
    '/images/menu/green-curry.jpg',
    '/images/menu/burger.jpg',
    '/images/menu/pizza.jpg',
    '/images/menu/sushi.jpg',
    '/images/categories/thai.jpg',
    '/images/categories/japanese.jpg',
    '/images/categories/italian.jpg',
    '/images/categories/seafood.jpg',
    '/images/categories/fastfood.jpg',
  ];
  useEffect(() => {
    // Make sure we are in the browser environment before checking images
    if (typeof window !== 'undefined') {
      const checkImages = async () => {
        const statuses: Record<string, boolean> = {};
        
        // ตรวจสอบทุกรูปภาพ
        for (const src of imagesToTest) {
          try {
            const img = new Image();
            const loadPromise = new Promise<void>((resolve, reject) => {
              img.onload = () => resolve();
              img.onerror = () => reject();
            });
            
            img.src = src;
            await loadPromise;
            statuses[src] = true;
          } catch (error) {
            console.error(`Error loading image: ${src}`, error);
            statuses[src] = false;
          }
        }
        
        setImagesStatus(statuses);
      };
      
      checkImages();
    }
  }, []);

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="mb-4 text-2xl font-bold">ตรวจสอบรูปภาพในระบบ</h2>
      
      <div className="mb-4">
        <p className="p-3 bg-yellow-100 rounded">
          ตรวจสอบสถานะการโหลดรูปภาพแต่ละรูป ถ้าเป็นสีเขียวแสดงว่าโหลดสำเร็จ ถ้าเป็นสีแดงแสดงว่าโหลดไม่สำเร็จ
        </p>
      </div>
      
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {imagesToTest.map((src, index) => {
          const loaded = imagesStatus[src];
          return (
            <div key={index} className="p-3 border rounded-lg">
              <h3 className="font-medium">{src.split('/').pop()}</h3>
              <p className="mb-2 text-sm text-gray-600">{src}</p>
              
              <div className={`p-2 rounded ${loaded === undefined ? 'bg-gray-100' : loaded ? 'bg-green-100' : 'bg-red-100'}`}>
                {loaded === undefined && <span>กำลังตรวจสอบ...</span>}
                {loaded === true && <span className="text-green-700">✓ โหลดสำเร็จ</span>}
                {loaded === false && <span className="text-red-700">✗ โหลดไม่สำเร็จ</span>}
              </div>
              
              <div className="mt-3 border rounded-md overflow-hidden">
                <img 
                  src={src} 
                  alt={`Test ${index}`} 
                  className="w-full h-32 object-cover"
                  onError={(e) => {
                    e.currentTarget.src = 'https://via.placeholder.com/300x200?text=Image+Not+Found';
                    e.currentTarget.style.opacity = '0.5';
                  }} 
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ImageTester;
