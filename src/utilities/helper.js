const priorityPercentage = 20;
export function calcTotalPriceWithPriority(priority, billTotalPrice) {
  const priorityPrice = priority ? (billTotalPrice * priorityPercentage) / 100 : 0;
  const totalPrice = billTotalPrice + priorityPrice;
  return { totalPrice, priorityPrice };
}

export function phoneValidation(phoneNumber) {
  const phoneRegex = /^\+?[0-9]{1,3}?[-.\s]?(\(?[0-9]{1,4}?\)?[-.\s]?){1,4}[0-9]{1,4}$/;
  return phoneRegex.test(phoneNumber);
}
