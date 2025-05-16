'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface OptimizedImageProps {
  src: string;
  alt: string;
  fill?: boolean;
  width?: number;
  height?: number;
  sizes?: string;
  style?: React.CSSProperties;
  className?: string;
  priority?: boolean;
  quality?: number;
}

const OptimizedImage = ({
  src,
  alt,
  fill = false,
  width,
  height,
  sizes = '100vw',
  style = {},
  className = '',
  priority = false,
  quality = 85,
}: OptimizedImageProps) => {
  const [error, setError] = useState(false);
  const [imageSrc, setImageSrc] = useState<string>(src);
  
  // ใช้ useEffect เพื่อจัดการกับการโหลดรูปภาพ
  useEffect(() => {
    // ตรวจสอบว่ารูปภาพมีอยู่จริงหรือไม่
    const img = new window.Image();
    img.src = src;
    
    img.onload = () => {
      setImageSrc(src);
      setError(false);
    };
    
    img.onerror = () => {
      // ลองเติม public/ ข้างหน้าหากไม่มี
      if (!src.startsWith('http') && !src.startsWith('/')) {
        const newSrc = `/${src}`;
        const retryImg = new window.Image();
        retryImg.src = newSrc;
        
        retryImg.onload = () => {
          setImageSrc(newSrc);
          setError(false);
        };
        
        retryImg.onerror = () => {
          setError(true);
        };
      } else {
        setError(true);
      }
    };
  }, [src]);
  
  // สร้าง Placeholder URL สำหรับกรณีที่รูปภาพไม่สามารถโหลดได้
  const placeholderUrl = `https://placehold.co/${width || 300}x${height || 200}/F97316/FFFFFF?text=${encodeURIComponent(alt)}`;

  // คำนวณขนาดภาพจริงสำหรับ fill mode
  const containerStyle = {
    position: 'relative',
    width: fill ? '100%' : width ? `${width}px` : '100%',
    height: fill ? '100%' : height ? `${height}px` : 'auto',
    ...style
  };

  return (
    <div className={`relative ${className}`} style={containerStyle as React.CSSProperties}>
      <Image
        src={error ? placeholderUrl : imageSrc}
        alt={alt}
        fill={fill}
        width={!fill ? width : undefined}
        height={!fill ? height : undefined}
        sizes={sizes}
        onError={() => setError(true)}
        priority={priority}
        quality={quality}
        style={{
          objectFit: 'cover',
        }}
        unoptimized={false} // กำหนดให้ Next.js ยังคงทำการ optimize รูปภาพ
      />
    </div>
  );
};

export default OptimizedImage;