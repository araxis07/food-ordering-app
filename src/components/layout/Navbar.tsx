'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ShoppingCart, Menu, X, User } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <div className="container px-4 mx-auto">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold text-orange-500">
            FoodDelivery
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden space-x-8 md:flex">
            <Link href="/" className="text-gray-700 transition-colors hover:text-orange-500">
              หน้าหลัก
            </Link>
            <Link href="/menu" className="text-gray-700 transition-colors hover:text-orange-500">
              เมนูอาหาร
            </Link>
            <Link href="/promotions" className="text-gray-700 transition-colors hover:text-orange-500">
              โปรโมชั่น
            </Link>
            <Link href="/about" className="text-gray-700 transition-colors hover:text-orange-500">
              เกี่ยวกับเรา
            </Link>
            <Link href="/contact" className="text-gray-700 transition-colors hover:text-orange-500">
              ติดต่อเรา
            </Link>
          </nav>
          
          {/* User Actions */}
          <div className="items-center hidden space-x-4 md:flex">
            <Link 
              href="/login" 
              className="flex items-center text-gray-700 transition-colors hover:text-orange-500"
            >
              <User size={20} className="mr-1" />
              <span>เข้าสู่ระบบ</span>
            </Link>
            <Link 
              href="/cart" 
              className="relative flex items-center p-2 text-white transition-colors bg-orange-500 rounded-full hover:bg-orange-600"
            >
              <ShoppingCart size={20} />
              <span className="absolute flex items-center justify-center w-5 h-5 text-xs text-white bg-red-500 rounded-full -top-1 -right-1">
                2
              </span>
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="px-4 py-4 bg-white shadow-md md:hidden">
          <nav className="flex flex-col space-y-4">
            <Link 
              href="/" 
              className="text-gray-700 transition-colors hover:text-orange-500"
              onClick={() => setIsMenuOpen(false)}
            >
              หน้าหลัก
            </Link>
            <Link 
              href="/menu" 
              className="text-gray-700 transition-colors hover:text-orange-500"
              onClick={() => setIsMenuOpen(false)}
            >
              เมนูอาหาร
            </Link>
            <Link 
              href="/promotions" 
              className="text-gray-700 transition-colors hover:text-orange-500"
              onClick={() => setIsMenuOpen(false)}
            >
              โปรโมชั่น
            </Link>
            <Link 
              href="/about" 
              className="text-gray-700 transition-colors hover:text-orange-500"
              onClick={() => setIsMenuOpen(false)}
            >
              เกี่ยวกับเรา
            </Link>
            <Link 
              href="/contact" 
              className="text-gray-700 transition-colors hover:text-orange-500"
              onClick={() => setIsMenuOpen(false)}
            >
              ติดต่อเรา
            </Link>
            <div className="pt-4 border-t border-gray-200">
              <Link 
                href="/login" 
                className="flex items-center text-gray-700 transition-colors hover:text-orange-500"
                onClick={() => setIsMenuOpen(false)}
              >
                <User size={20} className="mr-1" />
                <span>เข้าสู่ระบบ</span>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;