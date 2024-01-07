import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import EmptyCart from "./EmptyCart";
const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  return cartItems.length === 0 ? (
    <EmptyCart />
  ) : (
    <>
      {cartItems.map((items) => {
        return <CartItem key={items.menu.card.info.id} item={items} />;
      })}
    </>
  );
};

export default Cart;
