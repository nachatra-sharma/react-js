import { CDN_URL } from "../utils/constant";
const CartItem = (props) => {
  const { name, price, imageId, defaultPrice, description } =
    props.item.menu.card.info;
  return (
    <div id="cart-container">
      <div id="cart-card">
        <div id="res-name">
          <h4>{name}</h4>
          <span>₹ {price ? price / 100 : defaultPrice / 100}</span>
          <p>{description}</p>
        </div>
        <div id="res-photo">
          <img src={CDN_URL + imageId} alt="" />
        </div>
      </div>
      <div className="dotted-line"></div>
    </div>
  );
};

export default CartItem;
