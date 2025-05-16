'use client';

import React, { useContext, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ShoppingCart, Trash2, Plus, Minus, ArrowRight } from 'lucide-react';
import { CartContext } from '@/components/Providers';
import { formatPrice } from '@/utils/format';
import { CartItem } from '@/types';
import toast from 'react-hot-toast';

const CartPage = () => {
  const { cart, removeFromCart, updateQuantity, totalPrice, clearCart } = useContext(CartContext);
  const [specialInstructions, setSpecialInstructions] = useState('');
  
  // ค่าจัดส่ง
  const deliveryFee = 30;
  const freeDeliveryThreshold = 300;
  const remainingForFreeDelivery = freeDeliveryThreshold - totalPrice;
  const isEligibleForFreeDelivery = totalPrice >= freeDeliveryThreshold;
  const finalDeliveryFee = isEligibleForFreeDelivery ? 0 : deliveryFee;
  const totalWithDelivery = totalPrice + finalDeliveryFee;
  
  const handleRemove = (item: CartItem) => {
    removeFromCart(item.id);
    toast.success(`ลบ${item.name}ออกจากตะกร้าแล้ว`);
  };
  
  const handleUpdateQuantity = (item: CartItem, newQuantity: number) => {
    updateQuantity(item.id, newQuantity);
  };
  
  if (cart.length === 0) {
    return (
      <div className="container px-4 py-8 mx-auto">
        <div className="max-w-2xl py-16 mx-auto text-center">
          <div className="flex justify-center mb-6">
            <ShoppingCart size={80} className="text-gray-300" />
          </div>
          <h1 className="mb-4 text-3xl font-bold">ตะกร้าของคุณว่างเปล่า</h1>
          <p className="mb-8 text-gray-600">
            ยังไม่มีอาหารในตะกร้า เริ่มสั่งอาหารเพื่อเติมตะกร้าของคุณ
          </p>
          <Link
            href="/menu"
            className="inline-flex items-center px-6 py-3 font-medium text-white transition duration-300 bg-orange-500 rounded-full hover:bg-orange-600"
          >
            เลือกดูเมนูอาหาร
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <div className="container px-4 py-8 mx-auto">
      <h1 className="mb-8 text-2xl font-bold md:text-3xl">ตะกร้าสินค้า</h1>
      
      <div className="flex flex-col gap-8 lg:flex-row">
        {/* Cart Items */}
        <div className="lg:w-2/3">
          <div className="p-6 mb-6 bg-white rounded-lg shadow-md">
            <div className="flex items-center justify-between pb-4 border-b">
              <h2 className="text-lg font-semibold">รายการอาหาร</h2>
              <button 
                className="flex items-center text-sm text-gray-500 hover:text-red-500"
                onClick={() => {
                  if (confirm('คุณต้องการล้างตะกร้าใช่หรือไม่?')) {
                    clearCart();
                    toast.success('ล้างตะกร้าเรียบร้อยแล้ว');
                  }
                }}
              >
                <Trash2 size={16} className="mr-1" />
                ล้างตะกร้า
              </button>
            </div>
            
            <div className="divide-y">
              {cart.map((item) => (
                <div key={item.id} className="flex items-center py-4">
                  <div className="relative flex-shrink-0 w-20 h-20 overflow-hidden rounded-md">
                    <Image
                      src={item.image || '/images/placeholder-food.png'}
                      alt={item.name}
                      fill
                      sizes="80px"
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  
                  <div className="flex-grow ml-4">
                    <h3 className="font-medium">{item.name}</h3>
                    {item.options && item.options.length > 0 && (
                      <p className="text-sm text-gray-500">
                        {item.options.map(opt => `${opt.name}`).join(', ')}
                      </p>
                    )}
                    <div className="mt-1 font-medium text-orange-500">
                      {formatPrice(item.price)} บาท
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <button 
                      className="p-1 bg-gray-200 rounded-full hover:bg-gray-300"
                      onClick={() => handleUpdateQuantity(item, Math.max(1, item.quantity - 1))}
                    >
                      <Minus size={16} />
                    </button>
                    <span className="w-6 mx-3 text-center">{item.quantity}</span>
                    <button 
                      className="p-1 bg-gray-200 rounded-full hover:bg-gray-300"
                      onClick={() => handleUpdateQuantity(item, item.quantity + 1)}
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                  
                  <div className="flex-shrink-0 ml-4">
                    <div className="font-medium text-right">
                      {formatPrice(item.price * item.quantity)} บาท
                    </div>
                    <button 
                      className="mt-1 text-sm text-red-500 hover:text-red-700"
                      onClick={() => handleRemove(item)}
                    >
                      ลบ
                    </button>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-6">
              <label htmlFor="special-instructions" className="block mb-1 text-sm font-medium text-gray-700">
                คำแนะนำพิเศษ (ถ้ามี)
              </label>
              <textarea
                id="special-instructions"
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                placeholder="เช่น ไม่ใส่ผักชี, อาหารไม่เผ็ด, ฯลฯ"
                value={specialInstructions}
                onChange={(e) => setSpecialInstructions(e.target.value)}
              ></textarea>
            </div>
          </div>
          
          <div>
            <Link
              href="/menu"
              className="inline-flex items-center text-orange-500 hover:text-orange-700"
            >
              <ArrowRight size={16} className="mr-2 rotate-180" />
              เลือกเมนูเพิ่มเติม
            </Link>
          </div>
        </div>
        
        {/* Order Summary */}
        <div className="lg:w-1/3">
          <div className="sticky p-6 bg-white rounded-lg shadow-md top-24">
            <h2 className="pb-4 text-lg font-semibold border-b">สรุปรายการสั่งซื้อ</h2>
            
            <div className="mt-4 space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">ราคารวม</span>
                <span>{formatPrice(totalPrice)} บาท</span>
              </div>
              
              <div className="flex justify-between">
                <span className="text-gray-600">ค่าจัดส่ง</span>
                <span>
                  {isEligibleForFreeDelivery ? (
                    <span className="text-green-500">ฟรี</span>
                  ) : (
                    <>{formatPrice(deliveryFee)} บาท</>
                  )}
                </span>
              </div>
              
              {!isEligibleForFreeDelivery && (
                <div className="p-2 text-sm text-orange-600 rounded bg-orange-50">
                  สั่งอีก {formatPrice(remainingForFreeDelivery)} บาท เพื่อรับส่วนลดค่าจัดส่งฟรี!
                </div>
              )}
              
              <div className="pt-3 mt-3 border-t">
                <div className="flex justify-between text-lg font-bold">
                  <span>รวมทั้งสิ้น</span>
                  <span>{formatPrice(totalWithDelivery)} บาท</span>
                </div>
              </div>
            </div>
            
            <div className="mt-6">
              <Link
                href="/checkout"
                className="flex items-center justify-center w-full px-4 py-3 font-medium text-white transition-colors bg-orange-500 rounded-lg hover:bg-orange-600"
              >
                ดำเนินการสั่งซื้อ
              </Link>
            </div>
            
            <div className="mt-4">
              <div className="flex items-center justify-center text-sm text-gray-500">
                <span>เรารับชำระเงินผ่าน</span>
              </div>
              <div className="flex justify-center mt-2 space-x-2">
                <Image src="/images/payment-promptpay.png" alt="PromptPay" width={40} height={24} />
                <Image src="/images/payment-mastercard.png" alt="Mastercard" width={40} height={24} />
                <Image src="/images/payment-visa.png" alt="Visa" width={40} height={24} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;