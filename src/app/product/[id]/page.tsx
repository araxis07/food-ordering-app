import React from 'react';
import { useRouter } from 'next/router';

const ProductPage = () => {
    const router = useRouter();
    const { id } = router.query;

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
            <img src={product.image} alt={product.name} className="w-full h-64 object-cover rounded-lg" />
            <h1 className="text-2xl font-bold mt-4">{product.name}</h1>
            <p className="text-gray-700 mt-2">{product.description}</p>
            <p className="text-xl font-semibold mt-4">${product.price.toFixed(2)}</p>
            <button className="mt-6 bg-blue-500 text-white py-2 px-4 rounded">
                Add to Cart
            </button>
        </div>
    );
};

export default ProductPage;