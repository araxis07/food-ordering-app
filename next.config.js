/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'placehold.co',
      }
    ],
    unoptimized: true // ตั้งค่านี้เพื่อแก้ปัญหากรณีที่ใช้ static export
  },
};

module.exports = nextConfig;