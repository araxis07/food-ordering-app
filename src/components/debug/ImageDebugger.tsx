'use client';

import React, { useState, useEffect } from 'react';
import OptimizedImage from '@/components/ui/OptimizedImage';

interface ImageDebuggerProps {
  src: string;
  alt: string;
}

const ImageDebugger = ({ src, alt }: ImageDebuggerProps) => {
  const [status, setStatus] = useState<'checking' | 'success' | 'error'>('checking');
  const [details, setDetails] = useState<string>('');
    useEffect(() => {
    // Only run in browser environment
    if (typeof window === 'undefined') return;

    const checkImage = async () => {
      // ทดสอบโหลดรูปภาพโดยตรง
      const img = new window.Image();
      
      // Try different path variations to find working image path
      const pathVariations = [
        src, // Original path
        src.startsWith('/') ? src : `/${src}`, // Add leading slash if missing
        src.startsWith('/') ? src.substring(1) : src, // Remove leading slash if present
        `./public${src.startsWith('/') ? src : `/${src}`}`, // Try with public folder
      ];
      
      let foundWorkingPath = false;
      
      for (const path of pathVariations) {
        try {
          const checkImg = new window.Image();
          const loadPromise = new Promise<void>((resolve, reject) => {
            checkImg.onload = () => resolve();
            checkImg.onerror = () => reject();
          });
          
          checkImg.src = path;
          
          await loadPromise;
          // If we get here, the image loaded successfully
          setStatus('success');
          setDetails(`ขนาดภาพ: ${checkImg.width}x${checkImg.height} (พาท: ${path})`);
          foundWorkingPath = true;
          break;
        } catch (error) {
          // This path variation didn't work, try next one
          console.log(`Path failed: ${path}`);
        }
      }
      
      if (!foundWorkingPath) {
        setStatus('error');
        setDetails(`ไม่พบรูปภาพที่ ${src} (ลองทุกวิธีแล้ว)`);
      }
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
      {status === 'success' && (
        <div className="mt-3">
          <div className="relative h-40 overflow-hidden bg-white rounded-md">
            <OptimizedImage
              src={src}
              alt={alt}
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageDebugger;