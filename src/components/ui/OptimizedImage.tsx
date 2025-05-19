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

const OptimizedImage: React.FC<OptimizedImageProps> = ({
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
}) => {
  const [error, setError] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [imageSrc, setImageSrc] = useState<string>(src);
  
  useEffect(() => {
    // Normalize image path
    const normalizedSrc = !src.startsWith('http') && !src.startsWith('/') ? `/${src}` : src;
    setImageSrc(normalizedSrc);
    
    // Preload image
    const img = new window.Image();
    img.src = normalizedSrc;
    
    img.onload = () => {
      setError(false);
      setLoaded(true);
    };
    
    img.onerror = () => {
      console.warn(`Failed to load image: ${normalizedSrc}`);
      setError(true);
      setLoaded(true);
    };

    // Clean up
    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [src]);
  
  const placeholderUrl = `https://placehold.co/${width || 300}x${height || 200}/F97316/FFFFFF?text=${encodeURIComponent(alt)}`;

  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`}>
      {!loaded && (
        <div className="absolute inset-0 bg-gray-100 animate-pulse" />
      )}
      <Image
        src={error ? placeholderUrl : imageSrc}
        alt={alt}
        fill={fill}
        width={!fill ? width : undefined}
        height={!fill ? height : undefined}
        sizes={sizes}
        onError={() => setError(true)}
        onLoad={() => setLoaded(true)}
        priority={priority}
        quality={quality}
        className={`object-cover transition-opacity duration-300 ${loaded ? 'opacity-100' : 'opacity-0'}`}
        loading={priority ? 'eager' : 'lazy'}
      />
    </div>
  );
};

export default OptimizedImage;