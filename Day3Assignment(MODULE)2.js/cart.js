// ii. cart.js - Shopping cart operations
import { getProductById, checkStock } from './product.js';
                          
let cartItems = [];
                          
// TODO: Implement these functions
                          
export function addToCart(productId, quantity){
// 1. Get product details
const product=getProductById(productId);
  if (!product) return "Product not found";
// 2. Check stock availability
  if (!checkStock(productId,quantity)){
    return "Insufficient stock";
  }
// 3. Check if product already in cart
  const existingItem=cartItems.find(item=>item.productId===productId);

  if (existingItem){
//    - If no, add new item
    if (!checkStock(productId,existingItem.quantity+quantity)) {
      return "Not enough stock to update quantity";
    }
//    - If yes, update quantity
    existingItem.quantity+=quantity;
  }else{
    cartItems.push({productId,quantity});
  }
// 4. Return success/error message
  return "Item added to cart successfully";
 }
                          
export function removeFromCart(productId){
 // Remove product from cart
cartItems=cartItems.filter(item=>item.productId!==productId);
  return "Item removed from cart";
 }
                          
 export function updateQuantity(productId,newQuantity){
 // Update quantity of product in cart
 // Check stock before updating
const item=cartItems.find(items=>items.productId===productId);
  if(!item)return "Item not found in cart";
  if(!checkStock(productId,newQuantity)){
    return "Insufficient stock";
  }
  item.quantity=newQuantity;
  return "Quantity updated";

}
                          
export function getCartItems(){
 // Return all cart items with product details
return cartItems.map(item=>{
    const product=getProductById(item.productId);
    return{
      ...product,
      quantity:item.quantity,
      total: product.price*item.quantity
    };
  });
}
                          
export function getCartTotal(){
 // Calculate total price of all items in cart
  // Return total
return getCartItems().reduce((sum,item)=>sum+item.total,0);
 }
                          
 export function clearCart(){
// Empty the cart
cartItems=[];
}