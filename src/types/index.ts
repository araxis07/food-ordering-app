/**
 * อินเตอร์เฟซสำหรับรายการในตะกร้าสินค้า
 */
export interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
  // เพิ่ม properties อื่นๆ ตามที่จำเป็น
}