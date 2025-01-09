const priorityPercentage = 20;
export function calcTotalPriceWithPriority(priority, billTotalPrice) {
  const priorityPrice = priority ? (billTotalPrice * priorityPercentage) / 100 : 0;
  const totalPrice = billTotalPrice + priorityPrice;
  return { totalPrice, priorityPrice };
}
