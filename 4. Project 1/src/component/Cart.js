import { useSelector } from "react-redux";
import CartItem from "./CartItem";
const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <>
      {cartItems.map((items) => {
        return <CartItem item={items} />;
      })}
    </>
  );
};

export default Cart;
