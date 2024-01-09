import { CDN_URL } from "../utils/constant";
import { removeItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
const CartItem = (props) => {
  const { name, price, imageId, defaultPrice, description } =
    props.item.menu.card.info;
  const dispatch = useDispatch();

  const removeOneItem = (index) => {
    dispatch(removeItem(index));
  };

  return (
    <>
      <div id="cart-container">
        <div id="cart-card">
          <div id="res-name">
            <h4>{name}</h4>
            <span>₹ {price ? price / 100 : defaultPrice / 100}</span>
            <p>{description}</p>
          </div>
          <div id="res-photo">
            <img src={CDN_URL + imageId} alt="" />
            <button onClick={() => removeOneItem(props.index)}>Remove</button>
          </div>
        </div>
        <div className="dotted-line"></div>
      </div>
    </>
  );
};

export default CartItem;
