import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="cart-container">
      <h1 className="cart-title">Shopping Cart</h1>
      <button className="clear-cart-button" onClick={handleClearCart}>
        Clear Cart
      </button>
      {cartItems.length === 0 ? (
        <p className="empty-cart-message">Your Cart is Empty. Add Items to Cart.</p>
      ) : (
        <div className="cart-items">
          <ItemList items={cartItems} />
        </div>
      )}
    </div>
  );
};

export default Cart;
