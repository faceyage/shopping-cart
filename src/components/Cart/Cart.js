import CartItem from "./CartItem";

const Cart = ({ cartItems, exitCart, addToCart, removeFromCart, handlePurchase }) => {
  const totalPrice = cartItems.reduce((total, curr) => {
    return total + curr.quantity * curr.price;
  }, 0);
  return (
    <div className="cart">
      <div className="exitBtn" onClick={exitCart}>
        X
      </div>
      <h1>Shopping Cart</h1>
      <div className="cart-items">
        {cartItems.map((product) => {
          return (
            <CartItem
              key={product.id}
              product={product}
              addToCart={addToCart}
              removeFromCart={removeFromCart}
            />
          );
        })}
      </div>
      <div className="total"> TOTAL: {totalPrice} VBUCKS</div>
      <button className="btn checkout" onClick={handlePurchase}>
        Checkout
      </button>
    </div>
  );
};

export default Cart;
