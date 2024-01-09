import { useSelector, useDispatch } from "react-redux";
import CartItem from "./CartItem";
import EmptyCart from "./EmptyCart";
import { clearItems } from "../utils/cartSlice";
const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const clearAllItems = () => {
    dispatch(clearItems());
  };
  return cartItems.length === 0 ? (
    <EmptyCart />
  ) : (
    <>
      <div className="btn-container">
        <button className="clear-cart-btn" onClick={clearAllItems}>
          Clear Cart
        </button>
      </div>
      {cartItems.map((items, index) => {
        return (
          <CartItem key={items.menu.card.info.id} item={items} index={index} />
        );
      })}
    </>
  );
};

export default Cart;
