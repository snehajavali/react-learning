function CartTotal({ cartItems }) {
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);
  return <h3>Total: ${total}</h3>;
}

export default CartTotal;