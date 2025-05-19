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
  const [imageSrc, setImageSrc] = useState<string>(src);  useEffect(() => {
    // Make sure we are in the browser environment
    if (typeof window === 'undefined') {
      return;
    }

    try {
      // Always ensure the src starts with / if it's not an external URL
      const normalizedSrc = src.startsWith('http') 
        ? src 
        : src.startsWith('/') 
          ? src 
          : `/${src}`;
          
      setImageSrc(normalizedSrc);

      // Attempt to preload the image
      const img = new window.Image();
      
      const handleLoad = () => {
        setError(false);
        setLoaded(true);
      };

      const handleError = () => {
        console.warn('Failed to load image:', normalizedSrc);
        setError(true);
        setLoaded(true);
      };

      img.addEventListener('load', handleLoad);
      img.addEventListener('error', handleError);
      
      // Set the src after attaching event listeners
      img.src = normalizedSrc;

      return () => {
        img.removeEventListener('load', handleLoad);
        img.removeEventListener('error', handleError);
      };
    } catch (err) {
      console.error('Error in image loading:', err);
      setError(true);
      setLoaded(true);
    }
  }, [src]);

  if (!loaded) {
    return (
      <div className={`relative w-full h-full ${className}`}>
        <div className="absolute inset-0 bg-orange-100 animate-pulse" />
      </div>
    );
  }  if (error) {
    // Show fallback placeholder with the alt text when image fails to load
    return (
      <div className={`relative w-full h-full ${className}`}>
        <div className="absolute inset-0 bg-orange-50 flex flex-col items-center justify-center p-2 text-center">
          <span className="text-orange-500 mb-1 text-3xl">🖼️</span>
          <span className="text-gray-600 text-sm">{alt}</span>
        </div>
      </div>
    );
  }
  const containerClass = `${className} ${fill ? 'relative w-full h-full' : ''}`;

  // For static exports using output: 'export' in next.config.js, 
  // we need to use regular img tag instead of Next.js Image when unoptimized is true
  if (process.env.NODE_ENV === 'production') {
    return (
      <div className={`${containerClass} overflow-hidden`}>
        {/* Standard img tag for production static exports */}
        <img
          src={imageSrc}
          alt={alt}
          width={fill ? undefined : width}
          height={fill ? undefined : height}
          className={`object-cover ${fill ? 'w-full h-full' : ''}`}
          loading={priority ? "eager" : "lazy"}
          onError={(e) => {
            console.warn('Image load error', imageSrc);
            setError(true);
            // Set a fallback image
            e.currentTarget.src = `https://placehold.co/600x400/FFA500/FFFFFF.png?text=${encodeURIComponent(alt)}`;
          }}
        />
      </div>
    );
  }

  // Use Next.js Image component for development
  return (
    <div className={`${containerClass} overflow-hidden`}>
      <Image
        src={imageSrc}
        alt={alt}
        fill={fill}
        width={!fill ? width : undefined}
        height={!fill ? height : undefined}
        sizes={sizes}
        priority={priority}
        quality={quality}
        className="object-cover"
        onError={() => setError(true)}
      />
    </div>
  );
};

export default OptimizedImage;