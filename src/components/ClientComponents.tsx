'use client';

import dynamic from 'next/dynamic';
import React from 'react';

// Create a client component wrapper without ssr: false
const ImagePreloaderComponent = dynamic(
  () => import('@/components/helpers/ImagePreloader')
);

// Export a client component wrapper
export function ClientImagePreloader() {
  return <ImagePreloaderComponent />;
}
