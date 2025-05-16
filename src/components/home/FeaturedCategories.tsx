import React from 'react';
import Link from 'next/link';

const categories = [
  { id: 1, name: 'อาหารไทย', image: '🍲', slug: 'thai-food' },
  { id: 2, name: 'ฟาสต์ฟู้ด', image: '🍔', slug: 'fast-food' },
  { id: 3, name: 'อาหารญี่ปุ่น', image: '🍣', slug: 'japanese-food' },
  { id: 4, name: 'อาหารอิตาเลียน', image: '🍕', slug: 'italian-food' },
  { id: 5, name: 'ของหวาน', image: '🍰', slug: 'dessert' },
  { id: 6, name: 'เครื่องดื่ม', image: '🥤', slug: 'drinks' }
];

const FeaturedCategories = () => {
  return (
    <section className="py-8">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col items-center justify-between mb-8 md:flex-row">
          <h2 className="text-3xl font-bold">หมวดหมู่ยอดนิยม</h2>
          <Link href="/menu" className="flex items-center mt-2 font-medium text-orange-500 hover:underline md:mt-0">
            ดูทั้งหมด
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
        
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6 md:gap-6">
          {categories.map((category) => (
            <Link 
              href={`/menu?category=${category.slug}`} 
              key={category.id}
              className="p-4 text-center transition bg-white shadow group rounded-xl hover:shadow-md"
            >
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-3 text-4xl transition duration-300 bg-orange-100 rounded-full group-hover:scale-110">
                {category.image}
              </div>
              <h3 className="font-medium text-gray-800 transition group-hover:text-orange-500">
                {category.name}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;