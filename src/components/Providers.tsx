'use client';

import React, { createContext, useState, useEffect } from 'react';
import { CartItem, User } from '@/types';

// สร้าง Context สำหรับตะกร้าสินค้า
export const CartContext = createContext<{
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (itemId: string | number) => void;
  updateQuantity: (itemId: string | number, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
}>({
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
  updateQuantity: () => {},
  clearCart: () => {},
  totalItems: 0,
  totalPrice: 0,
});

// สร้าง Context สำหรับผู้ใช้
export const UserContext = createContext<{
  user: User | null;
  login: (userData: User) => void;
  logout: () => void;
  isAuthenticated: boolean;
}>({
  user: null,
  login: () => {},
  logout: () => {},
  isAuthenticated: false,
});

export function Providers({ children }: { children: React.ReactNode }) {
  // State สำหรับตะกร้าสินค้า
  const [cart, setCart] = useState<CartItem[]>([]);
  const [totalItems, setTotalItems] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  
  // State สำหรับผู้ใช้
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  // โหลดข้อมูลตะกร้าจาก localStorage เมื่อเปิดเว็บ
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedCart = localStorage.getItem('cart');
      const savedUser = localStorage.getItem('user');
      
      if (savedCart) setCart(JSON.parse(savedCart));
      if (savedUser) {
        setUser(JSON.parse(savedUser));
        setIsAuthenticated(true);
      }
    }
  }, []);
  
  // อัพเดทจำนวนและราคารวมเมื่อตะกร้าเปลี่ยนแปลง
  useEffect(() => {
    const items = cart.reduce((total, item) => total + item.quantity, 0);
    const price = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    
    setTotalItems(items);
    setTotalPrice(price);
    
    // บันทึกตะกร้าลง localStorage
    if (typeof window !== 'undefined') {
      localStorage.setItem('cart', JSON.stringify(cart));
    }
  }, [cart]);
  
  // ฟังก์ชันจัดการตะกร้า
  const addToCart = (item: CartItem) => {
    setCart(prev => {
      const exists = prev.find(i => i.id === item.id);
      
      if (exists) {
        return prev.map(i => 
          i.id === item.id ? { ...i, quantity: i.quantity + item.quantity } : i
        );
      }
      
      return [...prev, item];
    });
  };
  
  const removeFromCart = (itemId: string | number) => {
    setCart(prev => prev.filter(item => item.id !== itemId));
  };
  
  const updateQuantity = (itemId: string | number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(itemId);
      return;
    }
    
    setCart(prev => 
      prev.map(item => 
        item.id === itemId ? { ...item, quantity } : item
      )
    );
  };
  
  const clearCart = () => {
    setCart([]);
  };
  
  // ฟังก์ชันจัดการผู้ใช้
  const login = (userData: User) => {
    setUser(userData);
    setIsAuthenticated(true);
    
    if (typeof window !== 'undefined') {
      localStorage.setItem('user', JSON.stringify(userData));
    }
  };
  
  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    
    if (typeof window !== 'undefined') {
      localStorage.removeItem('user');
    }
  };
  
  // รวม Context ทั้งหมด
  return (
    <UserContext.Provider value={{ user, login, logout, isAuthenticated }}>
      <CartContext.Provider value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalItems,
        totalPrice
      }}>
        {children}
      </CartContext.Provider>
    </UserContext.Provider>
  );
}