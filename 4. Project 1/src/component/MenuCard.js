import { addItem } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constant";
import { useDispatch } from "react-redux";
import AddToCart from "./AddToCart";
const MenuCard = (props) => {
  const dispatch = useDispatch();
  const handleItems = (props) => {
    dispatch(addItem(props));
  };

  const { name, price, imageId, defaultPrice, description } =
    props.menu.card.info;

  return (
    <>
      <div id="menu-card">
        <div id="res-name">
          <h4>{name}</h4>
          <span>₹ {price ? price / 100 : defaultPrice / 100}</span>
          <p>{description}</p>
        </div>
        <div id="res-photo">
          <img src={CDN_URL + imageId} alt="" />
          <button onClick={() => handleItems(props)}>ADD +</button>
        </div>
      </div>
      <div className="dotted-line"></div>
    </>
  );
};

export default MenuCard;
