import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { CartItemsProviders } from '@/providers';
import { Toaster } from 'react-hot-toast';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'FoodDelivery - บริการสั่งอาหารออนไลน์',
  description: 'บริการสั่งอาหารออนไลน์ที่สะดวกและรวดเร็ว ส่งตรงถึงบ้านคุณ',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // หลีกเลี่ยงการใช้ dynamic class ใน body โดยตรง
  return (
    <html lang="th">
      <body className={inter.className}>
        <div className="min-h-screen bg-gray-50">
          <CartItemsProviders>
            <Navbar />
            <main>{children}</main>
            <Footer />
            <Toaster position="bottom-center" />
          </CartItemsProviders>
        </div>
      </body>
    </html>
  );
}