'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { normalizeImagePath, preloadImage } from '../helpers/ImageSetup';

interface FallbackImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  fill?: boolean;
  priority?: boolean;
}

const FallbackImage: React.FC<FallbackImageProps> = ({
  src,
  alt,
  width = 300,
  height = 200,
  className = '',
  fill = false,
  priority = false
}) => {
  const [error, setError] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [imageSrc, setImageSrc] = useState<string>(src);

  useEffect(() => {
    // ทำงานเฉพาะใน Browser เท่านั้น
    if (typeof window === 'undefined') return;
    
    // นอร์มอลไลซ์พาทของรูปภาพ
    const normalizedSrc = normalizeImagePath(src);
    setImageSrc(normalizedSrc);
    
    // ทดสอบโหลดรูปภาพใน background
    const testImageLoading = async () => {
      const success = await preloadImage(normalizedSrc);
      if (!success) {
        console.warn(`Failed to preload image: ${normalizedSrc}`);
        setError(true);
      }
      setLoaded(true);
    };
    
    testImageLoading();
  }, [src]);
  
  // สร้าง URL สำรองกรณีรูปภาพโหลดไม่ได้ - ใช้สีส้มตามธีมของเว็บ
  const fallbackSrc = `https://placehold.co/${width}x${height}/F97316/FFFFFF?text=${encodeURIComponent(alt)}`;
  
  // ถ้ายังไม่ได้โหลดเสร็จ แสดง skeleton
  if (!loaded) {
    return (
      <div className={`${fill ? 'w-full h-full' : ''} bg-orange-100 animate-pulse ${className}`} 
           style={!fill ? { width, height } : undefined}>
        <div className="flex items-center justify-center w-full h-full">
          <svg className="w-10 h-10 text-orange-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
          </svg>
        </div>
      </div>
    );
  }

  if (error) {
    // เมื่อเกิด error ให้แสดงรูปภาพ fallback
    if (fill) {
      return (
        <div className={`relative w-full h-full ${className}`}>
          <div className="absolute inset-0 flex items-center justify-center bg-orange-50">
            <div className="text-center p-4">
              <div className="text-orange-400 text-3xl mb-2">🖼️</div>
              <div className="text-gray-500 text-sm">{alt}</div>
            </div>
          </div>
        </div>
      );
    }
    
    return (
      <img
        src={fallbackSrc}
        alt={alt}
        width={width}
        height={height}
        className={className}
        style={{ objectFit: 'cover' }}
        loading={priority ? "eager" : "lazy"}
      />
    );
  }
    // For static exports or non-fill images, use standard img tag
  if (process.env.NODE_ENV === 'production' || !fill) {
    if (fill) {
      // Container wrapper for fill mode
      return (
        <div className={`relative w-full h-full ${className}`}>
          <img
            src={imageSrc}
            alt={alt}
            className="w-full h-full object-cover"
            onError={(e) => {
              setError(true);
              // Set fallback on error
              e.currentTarget.src = fallbackSrc;
            }}
            loading={priority ? "eager" : "lazy"}
          />
        </div>
      );
    }
    
    // Standard img tag with dimensions
    return (
      <img
        src={imageSrc}
        alt={alt}
        width={width}
        height={height}
        onError={(e) => {
          setError(true);
          // Set fallback on error
          e.currentTarget.src = fallbackSrc;
        }}
        className={className}
        loading={priority ? "eager" : "lazy"}
      />
    );
  }
  
  // Use Next.js Image in development and when fill is required
  return (
    <div className={`relative ${fill ? 'w-full h-full' : ''} ${className}`}>
      <Image
        src={imageSrc}
        alt={alt}
        fill={fill}
        width={!fill ? width : undefined} 
        height={!fill ? height : undefined}
        onError={() => setError(true)}
        className="object-cover"
        priority={priority}
      />
    </div>
  );
};

export default FallbackImage;