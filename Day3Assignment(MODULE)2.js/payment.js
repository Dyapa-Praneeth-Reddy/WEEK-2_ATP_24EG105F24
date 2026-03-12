// iv. payment.js - Payment processing
import { reduceStock } from './product.js';
import { getCartItems, getCartTotal, clearCart } from './cart.js';
import { applyDiscount } from './discount.js';
                          
// TODO: Implement these functions
                          
export function processPayment(paymentMethod, couponCode = null) {
 // 1. Get cart items and total
 // 2. Apply discount if coupon provided
// 3. Validate payment method (card/upi/cod)
 // 4. Process payment (simulate)
// 5. Reduce stock for all items
 // 6. Clear cart
  // 7. Generate order summary
                            
// Return order summary:
 // {
 //   orderId: ...,
//   items: [...],
//   subtotal: ...,
 //   discount: ...,
 //   total: ...,
 //   paymentMethod: ...,
//   status: 'success/failed',
//message: '...'
// }

const cartItems = getCartItems();
  if (cartItems.length === 0) {
    return { status: "failed", message: "Cart is empty" };
  }

  const subtotal = getCartTotal();

  let discountData = {
    originalTotal: subtotal,
    discount: 0,
    finalTotal: subtotal,
    message: "No coupon applied"
  };

  if (couponCode) {
    discountData = applyDiscount(subtotal, couponCode, cartItems);
  }

  if (!validatePaymentMethod(paymentMethod)) {
    return { status: "failed", message: "Invalid payment method" };
  }

  // Simulate payment success
  const paymentSuccess = true;

  if (!paymentSuccess) {
    return { status: "failed", message: "Payment failed" };
  }

  // Reduce stock
  cartItems.forEach(item => {
    reduceStock(item.id, item.quantity);
  });

  clearCart();

  return {
    orderId: generateOrderId(),
    items: cartItems,
    subtotal: subtotal,
    discount: discountData.discount,
    total: discountData.finalTotal,
    paymentMethod,
    status: "success",
    message: "Order placed successfully"
  };
}
                          
 export function validatePaymentMethod(method) {
 // Check if method is valid (card/upi/cod)
return ['card', 'upi', 'cod'].includes(method.toLowerCase());
}
                          
function generateOrderId() {
// Generate random order ID
return 'ORD'+Date.now();
}