'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import FallbackImage from '@/components/ui/FallbackImage';

const ProductPage = () => {
    const params = useParams();
    const id = params.id;

    // Placeholder data for product details
    const product = {
        id: id,
        name: 'Sample Food Item',
        description: 'This is a delicious sample food item.',
        price: 9.99,
        image: '/assets/images/sample-food.jpg',
    };

    return (
        <div className="max-w-2xl mx-auto p-4">
            <div className="relative h-64 rounded-lg overflow-hidden mb-4">
                <FallbackImage 
                    src={product.image} 
                    alt={product.name} 
                    fill
                    className="rounded-lg"
                />
            </div>
            <h1 className="text-2xl font-bold mt-4">{product.name}</h1>
            <p className="text-gray-700 mt-2">{product.description}</p>
            <p className="text-xl font-semibold mt-4">{product.price.toFixed(2)} บาท</p>
            <button className="mt-6 bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-full">
                เพิ่มลงตะกร้า
            </button>
        </div>
    );
};

export default ProductPage;