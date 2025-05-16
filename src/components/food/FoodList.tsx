import React from 'react';
import FoodCard from './FoodCard';

// กำหนด interface สำหรับข้อมูลอาหาร
interface FoodItem {
  id: string | number;
  name: string;
  price: number;
  image: string;
  // เพิ่ม properties อื่นๆ ตามที่ต้องการ
  description?: string;
  category?: string;
}

interface FoodListProps {
  foodItems: FoodItem[];
}

const FoodList: React.FC<FoodListProps> = ({ foodItems }) => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {foodItems && foodItems.length > 0 ? (
        foodItems.map((item) => (
          <FoodCard key={item.id} foodItem={item} />
        ))
      ) : (
        <div className="py-8 text-center col-span-full">
          <p className="text-gray-500">ไม่พบรายการอาหาร</p>
        </div>
      )}
    </div>
  );
};

export default FoodList;