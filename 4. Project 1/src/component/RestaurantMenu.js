import { MENU_URL } from "../utils/constant";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer.js";
import { useParams } from "react-router-dom";
import star from "../../star.png";
import { CYCLE_ICON_URL } from "../utils/constant";
import MenuCard from "./MenuCard.js";
const RestaurantMenu = () => {
  const { resId } = useParams();
  const [resItems, setResItems] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_URL + resId);
    const json = await data.json();
    setResItems(json?.data);
  };
  if (resItems === null) return <Shimmer />;

  const {
    name,
    avgRatingString,
    cuisines,
    areaName,
    totalRatingsString,
    feeDetails,
  } = resItems?.cards[0]?.card?.card?.info;
  const { lastMileTravelString } = resItems?.cards[0]?.card?.card?.info?.sla;
  const { itemCards } =
    resItems?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card;

  return (
    <div id="menu-heading">
      <div className="restaurant-info">
        <div className="restaurant-card1">
          <h2>{name}</h2>
          <p>{cuisines.join(", ")}</p>
          <p>
            {areaName}, {lastMileTravelString}
          </p>
        </div>
        <div className="restaurant-card2">
          <div>
            <img src={star} alt="" />
            <span>{avgRatingString}</span>
          </div>
          <div className="line"></div>
          <p>{totalRatingsString}</p>
        </div>
      </div>
      <div id="travel-info-container">
        <img src={CYCLE_ICON_URL} alt="" />
        <span>{feeDetails.message}</span>
      </div>
      <div className="dotted-line"></div>
      <div id="recommended">
        <h3>Recommended ({itemCards.length})</h3>
        <ul>
          {itemCards.map((item) => {
            return (
              <MenuCard key={item.card.info.id} itemList={item}></MenuCard>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
