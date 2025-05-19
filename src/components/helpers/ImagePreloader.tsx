'use client';

import React, { useEffect, useState } from 'react';

/**
 * A component that preloads all important images used in the application
 * This helps diagnose and prevent image loading issues
 */

interface PreloadStats {
  total: number;
  loaded: number;
  failed: number;
}

const ImagePreloader: React.FC = () => {
  const [stats, setStats] = useState<PreloadStats>({ total: 0, loaded: 0, failed: 0 });
  const [showDetails, setShowDetails] = useState(false);
  const [loadedImages, setLoadedImages] = useState<string[]>([]);
  const [failedImages, setFailedImages] = useState<string[]>([]);

  // List of all important images
  const imagesToPreload = [
    // Menu images
    '/images/menu/pad-krapow.jpg',
    '/images/menu/tom-yum-kung.jpg',
    '/images/menu/som-tum.jpg',
    '/images/menu/green-curry.jpg',
    '/images/menu/burger.jpg',
    '/images/menu/pizza.jpg',
    '/images/menu/sushi.jpg',
    
    // Category images
    '/images/categories/thai.jpg',
    '/images/categories/japanese.jpg',
    '/images/categories/italian.jpg',
    '/images/categories/fastfood.jpg',
    '/images/categories/seafood.jpg',
  ];

  useEffect(() => {
    // Only run in browser
    if (typeof window === 'undefined') return;
    
    const preloadAll = async () => {
      const total = imagesToPreload.length;
      let loaded = 0;
      let failed = 0;
      const loadedPaths: string[] = [];
      const failedPaths: string[] = [];
      
      for (const path of imagesToPreload) {
        try {
          // Preload the image
          const img = new Image();
          await new Promise<void>((resolve, reject) => {
            img.onload = () => {
              loaded++;
              loadedPaths.push(path);
              setStats({ total, loaded, failed });
              resolve();
            };
            img.onerror = () => {
              failed++;
              failedPaths.push(path);
              setStats({ total, loaded, failed });
              reject();
            };
            img.src = path;
          });
        } catch (error) {
          console.warn(`Failed to preload image: ${path}`);
          // Error already handled in promise
        }
      }
      
      // Update final stats
      setLoadedImages(loadedPaths);
      setFailedImages(failedPaths);
      setStats({ total, loaded, failed });
    };
    
    preloadAll();
  }, []);

  // Don't render anything visible if all images loaded successfully
  if (stats.failed === 0 && stats.loaded === stats.total) {
    return null;
  }

  // If we have failures, show the diagnostic panel
  return (
    <div className="fixed bottom-0 right-0 m-4 z-50 bg-white rounded-lg shadow-lg p-4 max-w-xs">
      <div className="flex justify-between items-center">
        <h4 className="text-sm font-medium">Image Preloader</h4>
        <button 
          onClick={() => setShowDetails(!showDetails)}
          className="text-xs bg-gray-100 hover:bg-gray-200 px-2 py-1 rounded"
        >
          {showDetails ? 'Hide' : 'Details'}
        </button>
      </div>
      
      <div className="mt-2">
        <div className="text-xs">
          <span className="text-green-600">{stats.loaded}</span> / {stats.total} loaded 
          {stats.failed > 0 && (
            <span className="text-red-600"> ({stats.failed} failed)</span>
          )}
        </div>
        
        <div className="w-full h-2 bg-gray-200 rounded-full mt-1 overflow-hidden">
          <div 
            className="h-full bg-green-500 rounded-full" 
            style={{ width: `${(stats.loaded / stats.total) * 100}%` }}
          ></div>
        </div>
      </div>
      
      {showDetails && (
        <div className="mt-3 text-xs">
          {failedImages.length > 0 && (
            <div>
              <p className="font-medium text-red-600">Failed images:</p>
              <ul className="mt-1 list-disc ml-4">
                {failedImages.map((path, i) => (
                  <li key={i} className="truncate">{path}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ImagePreloader;
