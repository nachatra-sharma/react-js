import Shimmer from "./Shimmer.js"
import star from "../../star.png"
import { CYCLE_ICON_URL } from "../utils/constant"
import CategoryBlock from "./CategoryBlock.js"
import useRestaurantMenu from "../utils/useRestaurantMenu.js"
const RestaurantMenu = () => {
  const resItems = useRestaurantMenu()
  if (resItems === null) return <Shimmer />
  const {
    name,
    avgRatingString,
    cuisines,
    areaName,
    totalRatingsString,
    feeDetails,
  } = resItems?.cards[0]?.card?.card?.info
  const { lastMileTravelString } = resItems?.cards[0]?.card?.card?.info?.sla
  const category = resItems.cards[2].groupedCard.cardGroupMap.REGULAR.cards

  const categoryItem = category.filter(
    (c) =>
      c?.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  )

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
      {categoryItem.map((subItem) => {
        return (
          <CategoryBlock
            key={subItem.card.card.title}
            categoryItems={subItem}
          />
        )
      })}
    </div>
  )
}

export default RestaurantMenu
