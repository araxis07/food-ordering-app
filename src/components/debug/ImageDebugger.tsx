'use client';

import React, { useState, useEffect } from 'react';

interface ImageDebuggerProps {
  src: string;
  alt: string;
}

const ImageDebugger = ({ src, alt }: ImageDebuggerProps) => {
  const [status, setStatus] = useState<'checking' | 'success' | 'error'>('checking');
  const [details, setDetails] = useState<string>('');
  
  useEffect(() => {
    const checkImage = () => {
      // ทดสอบโหลดรูปภาพโดยตรง
      const img = new window.Image();
      
      img.onload = () => {
        setStatus('success');
        setDetails(`ขนาดภาพ: ${img.width}x${img.height}`);
      };
      
      img.onerror = () => {
        setStatus('error');
        setDetails(`ไม่พบรูปภาพที่ ${src}`);
        
        // ลองเติม / หน้าสุด
        if (!src.startsWith('/') && !src.startsWith('http')) {
          const newSrc = `/${src}`;
          const retryImg = new window.Image();
          retryImg.src = newSrc;
          
          retryImg.onload = () => {
            setStatus('success');
            setDetails(`พบรูปภาพที่ ${newSrc} (ต้องเติม "/" ด้านหน้า)`);
          };
        }
      };
      
      img.src = src;
    };
    
    checkImage();
  }, [src]);
  
  return (
    <div className="p-3 mb-4 text-sm bg-gray-100 rounded-md">
      <h3 className="mb-2 font-bold">ตรวจสอบรูปภาพ: {alt}</h3>
      <p className="mb-1">ที่อยู่: {src}</p>
      <p className="mb-1">
        สถานะ: {' '}
        {status === 'checking' && <span className="text-blue-500">กำลังตรวจสอบ...</span>}
        {status === 'success' && <span className="text-green-500">โหลดสำเร็จ ✓</span>}
        {status === 'error' && <span className="text-red-500">โหลดไม่สำเร็จ ✗</span>}
      </p>
      {details && <p className="text-gray-700">{details}</p>}
    </div>
  );
};

export default ImageDebugger;