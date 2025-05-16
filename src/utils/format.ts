/**
 * ฟังก์ชันสำหรับจัดรูปแบบราคาเป็นสกุลเงินบาทไทย
 * @param price ราคาเป็นตัวเลข
 * @returns string ข้อความราคาในรูปแบบสกุลเงินบาท
 */
export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('th-TH', {
    style: 'currency',
    currency: 'THB',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(price);
};