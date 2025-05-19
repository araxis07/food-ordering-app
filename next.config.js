/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // ส่งออกเป็น static HTML
  trailingSlash: true,
  images: {
    unoptimized: true, // จำเป็นต้องใช้สำหรับ static export
    disableStaticImages: false, // อนุญาตให้ใช้รูปภาพจาก public folder
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // กำหนด path ของรูปภาพที่ใช้เป็นประจำ
    path: '/_next/image',
    // domains: [], // ไม่มีผลในโหมด export
    remotePatterns: [] // ไม่มีผลในโหมด export
  },
  // ใช้ . เป็น prefix เพื่อให้อ้างอิงไฟล์สัมพัทธ์กับ root ได้
  assetPrefix: process.env.NODE_ENV === 'production' ? '.' : '',
  
  // แก้ปัญหาเรื่อง path ในการโหลดรูปภาพ
  basePath: '',
  // จัดการ trailing slashes ให้สม่ำเสมอ
  skipTrailingSlashRedirect: true,
  // Config options revised
};

module.exports = nextConfig;