'use client';

import React, { useState } from 'react';
import FallbackImage from '@/components/ui/FallbackImage';
import { normalizeImagePath } from '@/components/helpers/ImageSetup';

const imageTestList = [
  // Categories
  '/images/categories/thai.jpg',
  '/images/categories/japanese.jpg',
  '/images/categories/fastfood.jpg',
  '/images/categories/italian.jpg',
  '/images/categories/seafood.jpg',
  
  // Menu items
  '/images/menu/pad-krapow.jpg',
  '/images/menu/tom-yum-kung.jpg',
  '/images/menu/som-tum.jpg',
  '/images/menu/green-curry.jpg',
  '/images/menu/burger.jpg',
  '/images/menu/pizza.jpg',
  '/images/menu/sushi.jpg',
];

export default function ImageTestPage() {
  const [customPath, setCustomPath] = useState('');
  const [testResults, setTestResults] = useState<Record<string, boolean>>({});

  // Function to test image loading
  const testImage = async (src: string): Promise<boolean> => {
    return new Promise((resolve) => {
      if (typeof window === 'undefined') {
        resolve(false);
        return;
      }
      
      const img = new Image();
      img.onload = () => resolve(true);
      img.onerror = () => resolve(false);
      img.src = normalizeImagePath(src);
    });
  };

  // Function to test all images
  const testAllImages = async () => {
    const results: Record<string, boolean> = {};
    
    for (const path of imageTestList) {
      results[path] = await testImage(path);
    }
    
    setTestResults(results);
  };

  // Test custom image
  const testCustomImage = async () => {
    if (!customPath) return;
    
    const result = await testImage(customPath);
    setTestResults(prev => ({...prev, [customPath]: result}));
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6">Image Testing Tool</h1>
      
      {/* Controls */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-semibold mb-4">Test Images</h2>
        
        <div className="flex flex-col gap-4 mb-6">
          <button 
            onClick={testAllImages}
            className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-md"
          >
            Test All Pre-defined Images
          </button>
          
          <div className="flex gap-2">
            <input
              type="text"
              value={customPath}
              onChange={(e) => setCustomPath(e.target.value)}
              placeholder="Enter image path to test"
              className="flex-1 border py-2 px-3 rounded-md"
            />
            <button
              onClick={testCustomImage}
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md"
            >
              Test
            </button>
          </div>
        </div>
        
        {/* Testing stats */}
        {Object.keys(testResults).length > 0 && (
          <div className="bg-gray-100 p-4 rounded-lg">
            <h3 className="font-medium mb-2">Test Results:</h3>
            <p>
              Success: {Object.values(testResults).filter(v => v).length} / {Object.keys(testResults).length}
              {' '}({Math.round((Object.values(testResults).filter(v => v).length / Object.keys(testResults).length) * 100)}%)
            </p>
          </div>
        )}
      </div>
      
      {/* Image test results */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.entries(testResults).map(([path, success]) => (
          <div key={path} className={`bg-white rounded-lg shadow-md overflow-hidden border ${success ? 'border-green-400' : 'border-red-400'}`}>
            <div className="p-4">
              <h3 className="font-medium mb-1">{path.split('/').pop()}</h3>
              <p className="text-sm text-gray-600 mb-2">{path}</p>
              <span className={`inline-block px-2 py-1 rounded-full text-xs ${success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                {success ? 'Loaded Successfully' : 'Failed to Load'}
              </span>
            </div>
            
            <div className="h-48 relative">
              {success ? (
                <FallbackImage
                  src={path}
                  alt={`Image: ${path}`}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="absolute inset-0 bg-red-50 flex items-center justify-center">
                  <p className="text-red-400">Image not found</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      
      {/* Pre-defined image tests */}
      {Object.keys(testResults).length === 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {imageTestList.map((path, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-4">
                <h3 className="font-medium mb-1">{path.split('/').pop()}</h3>
                <p className="text-sm text-gray-600">{path}</p>
              </div>
              <div className="h-48 relative">
                <FallbackImage
                  src={path}
                  alt={`Image: ${path}`}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
