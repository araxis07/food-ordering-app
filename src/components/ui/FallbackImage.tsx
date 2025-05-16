'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface FallbackImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
}

const FallbackImage: React.FC<FallbackImageProps> = ({
  src,
  alt,
  width = 300,
  height = 200,
  className = '',
}) => {
  const [error, setError] = useState(false);

  // ตรวจสอบว่า src เริ่มต้นด้วย / หรือไม่ ถ้าไม่ให้เติม
  const imageSrc = src.startsWith('/') || src.startsWith('http') ? src : `/${src}`;
  
  // สร้าง URL สำรองกรณีรูปภาพโหลดไม่ได้ - ใช้สีส้มตามธีมของเว็บ
  const fallbackSrc = `https://placehold.co/${width}x${height}/F97316/FFFFFF?text=${encodeURIComponent(alt)}`;

  if (error) {
    // ใช้ HTML img tag แทน Next.js Image เมื่อเกิด error
    return (
      <img
        src={fallbackSrc}
        alt={alt}
        width={width}
        height={height}
        className={className}
        style={{ objectFit: 'cover' }}
      />
    );
  }

  return (
    <img
      src={imageSrc}
      alt={alt}
      width={width}
      height={height}
      onError={() => setError(true)}
      className={className}
      style={{ objectFit: 'cover' }}
    />
  );
};

export default FallbackImage;