import React from 'react';

interface CategoryFilterProps {
  categories?: string[]; // ทำให้เป็น optional prop
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({ categories = [] }) => { // กำหนดค่าเริ่มต้นเป็นอาร์เรย์ว่าง
  return (
    <div>
      <h2 className="mb-2 text-lg font-semibold">Filter by Category</h2>
      <div className="flex flex-wrap">
        {Array.isArray(categories) && categories.length > 0 ? (
          categories.map((category) => (
            <button
              key={category}
              className="px-4 py-2 m-1 transition-colors duration-200 bg-gray-100 rounded-lg hover:bg-orange-100"
            >
              {category}
            </button>
          ))
        ) : (
          <p className="m-1 text-gray-500">ไม่พบหมวดหมู่</p>
        )}
      </div>
    </div>
  );
};

export default CategoryFilter;