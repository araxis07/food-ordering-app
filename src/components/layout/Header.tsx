'use client';

import React, { useState, useEffect, useContext } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Search, ShoppingBag, User, Clock, Menu, X } from 'lucide-react';
import { CartContext, UserContext } from '@/components/Providers';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [mounted, setMounted] = useState(false);
  
  const pathname = usePathname();
  const { totalItems } = useContext(CartContext);
  const { isAuthenticated, user } = useContext(UserContext);
  
  // แก้ปัญหา hydration
  useEffect(() => {
    setMounted(true);
  }, []);
  
  const navLinks = [
    { title: 'หน้าแรก', href: '/' },
    { title: 'เมนูอาหาร', href: '/menu' },
    { title: 'โปรโมชั่น', href: '/promotions' },
    { title: 'เกี่ยวกับเรา', href: '/about' },
    { title: 'ติดต่อเรา', href: '/contact' },
  ];
  
  const isActive = (path: string) => pathname === path;
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`;
    }
  };
  
  // ถ้ายังไม่ mount ให้แสดง skeleton
  if (!mounted) {
    return (
      <header className="sticky top-0 z-30 bg-white shadow-md">
        <div className="container h-16 px-4 mx-auto"></div>
      </header>
    );
  }
  
  return (
    <header className="sticky top-0 z-30 bg-white shadow-md">
      <div className="container px-4 mx-auto">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="relative w-10 h-10">
              <div className="flex items-center justify-center w-10 h-10 bg-orange-500 rounded-full">
                <ShoppingBag size={20} className="text-white" />
              </div>
            </div>
            <span className="text-xl font-bold text-gray-900">อร่อยเดลิเวอรี่</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden space-x-6 md:flex">
            {navLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href}
                className={`text-base font-medium transition-colors duration-200 ${
                  isActive(link.href) 
                    ? 'text-orange-500 border-b-2 border-orange-500' 
                    : 'text-gray-700 hover:text-orange-500'
                }`}
              >
                {link.title}
              </Link>
            ))}
          </nav>

          {/* Search Bar (Desktop) */}
          <div className="items-center hidden md:flex">
            <form onSubmit={handleSearch} className="relative mr-4">
              <input
                type="text"
                placeholder="ค้นหาเมนู..."
                className="w-48 px-3 py-1 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button 
                type="submit" 
                className="absolute text-gray-400 transform -translate-y-1/2 right-2 top-1/2 hover:text-orange-500"
              >
                <Search size={16} />
              </button>
            </form>
          </div>

          {/* Action Buttons */}
          <div className="items-center hidden space-x-4 md:flex">
            <Link 
              href="/orders" 
              className="flex items-center text-sm font-medium text-gray-700 hover:text-orange-500"
            >
              <Clock size={18} className="mr-1" />
              <span>ออเดอร์</span>
            </Link>
            
            <Link 
              href="/cart" 
              className="relative flex items-center"
            >
              <ShoppingBag size={20} className="text-gray-700 hover:text-orange-500" />
              {totalItems > 0 && (
                <span className="absolute flex items-center justify-center w-5 h-5 text-xs text-white bg-orange-500 rounded-full -top-2 -right-2">
                  {totalItems}
                </span>
              )}
            </Link>
            
            <Link 
              href={isAuthenticated ? "/profile" : "/login"} 
              className="flex items-center text-sm font-medium text-gray-700 hover:text-orange-500"
            >
              <User size={18} className="mr-1" />
              <span>{isAuthenticated ? (user?.name?.split(' ')[0] || 'โปรไฟล์') : 'เข้าสู่ระบบ'}</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-2 md:hidden">
            <button 
              className="p-1"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              aria-label="ค้นหา"
            >
              <Search size={20} className="text-gray-700" />
            </button>
            
            <Link 
              href="/cart" 
              className="relative p-1"
            >
              <ShoppingBag size={20} className="text-gray-700" />
              {totalItems > 0 && (
                <span className="absolute flex items-center justify-center w-5 h-5 text-xs text-white bg-orange-500 rounded-full -top-2 -right-2">
                  {totalItems}
                </span>
              )}
            </Link>
            
            <button 
              className="p-1" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "ปิดเมนู" : "เปิดเมนู"}
            >
              {isMenuOpen ? (
                <X size={24} className="text-gray-700" />
              ) : (
                <Menu size={24} className="text-gray-700" />
              )}
            </button>
          </div>
        </div>
        
        {/* Mobile Search Bar */}
        {isSearchOpen && (
          <div className="px-4 py-2 border-t border-gray-100 md:hidden">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                placeholder="ค้นหาเมนู..."
                className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
              />
              <button 
                type="submit" 
                className="absolute text-gray-400 transform -translate-y-1/2 right-3 top-1/2 hover:text-orange-500"
              >
                <Search size={18} />
              </button>
            </form>
          </div>
        )}
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="absolute left-0 right-0 z-20 bg-white shadow-xl md:hidden">
          <div className="container px-4 py-2 mx-auto">
            <nav className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <Link 
                  key={link.href} 
                  href={link.href}
                  className={`text-base py-2 px-4 rounded-md ${
                    isActive(link.href) 
                      ? 'bg-orange-50 text-orange-500' 
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.title}
                </Link>
              ))}
              
              <div className="pt-2 border-t border-gray-100">
                <Link 
                  href="/orders" 
                  className="flex items-center px-4 py-2 text-gray-700 rounded-md hover:bg-gray-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Clock size={18} className="mr-2" />
                  <span>ออเดอร์ของฉัน</span>
                </Link>
                
                <Link 
                  href={isAuthenticated ? "/profile" : "/login"}
                  className="flex items-center px-4 py-2 text-gray-700 rounded-md hover:bg-gray-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <User size={18} className="mr-2" />
                  <span>{isAuthenticated ? 'โปรไฟล์ของฉัน' : 'เข้าสู่ระบบ'}</span>
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;