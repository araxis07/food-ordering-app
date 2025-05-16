import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="text-gray-200 bg-gray-800">
      <div className="container px-4 py-10 mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo and Description */}
          <div>
            <h2 className="mb-4 text-xl font-bold text-white">FoodDelivery</h2>
            <p className="mb-4 text-gray-400">
              บริการสั่งอาหารออนไลน์ที่คุณไว้วางใจได้ ส่งตรงถึงบ้านคุณอย่างรวดเร็ว
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 transition-colors hover:text-white">
                FB
              </a>
              <a href="#" className="text-gray-400 transition-colors hover:text-white">
                IG
              </a>
              <a href="#" className="text-gray-400 transition-colors hover:text-white">
                TW
              </a>
            </div>
          </div>
          
          {/* Useful Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">ลิงก์ที่มีประโยชน์</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 transition-colors hover:text-white">
                  เกี่ยวกับเรา
                </Link>
              </li>
              <li>
                <Link href="/menu" className="text-gray-400 transition-colors hover:text-white">
                  เมนูอาหาร
                </Link>
              </li>
              <li>
                <Link href="/promotions" className="text-gray-400 transition-colors hover:text-white">
                  โปรโมชั่น
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 transition-colors hover:text-white">
                  บล็อก
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-400 transition-colors hover:text-white">
                  คำถามที่พบบ่อย
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Legal */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">นโยบาย</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy-policy" className="text-gray-400 transition-colors hover:text-white">
                  นโยบายความเป็นส่วนตัว
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="text-gray-400 transition-colors hover:text-white">
                  ข้อกำหนดการใช้งาน
                </Link>
              </li>
              <li>
                <Link href="/refund-policy" className="text-gray-400 transition-colors hover:text-white">
                  นโยบายการคืนเงิน
                </Link>
              </li>
              <li>
                <Link href="/shipping-policy" className="text-gray-400 transition-colors hover:text-white">
                  นโยบายการจัดส่ง
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">ติดต่อเรา</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="mr-2 text-gray-400">ที่อยู่:</span>
                <span className="text-gray-400">123 ถนนสุขุมวิท แขวงคลองตัน เขตคลองเตย กรุงเทพฯ 10110</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-gray-400">โทร:</span>
                <span className="text-gray-400">02-123-4567</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-gray-400">อีเมล:</span>
                <span className="text-gray-400">info@fooddelivery.com</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-gray-400">เวลาทำการ:</span>
                <span className="text-gray-400">ทุกวัน 10:00 - 22:00 น.</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-6 mt-10 text-center border-t border-gray-700">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} FoodDelivery. สงวนลิขสิทธิ์
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;