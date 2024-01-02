import MenuCard from "./MenuCard";
import React from "react";
import { useState } from "react";
const CategoryBlock = (props) => {
  const [showMenu, setShowMenu] = useState(false);
  const { title } = props.categoryItems.card.card;
  const category = props.categoryItems.card.card.itemCards;

  return (
    <div id="categories">
      <div
        className="restaurant-categories"
        onClick={() => {
          if (showMenu === false) {
            setShowMenu(true);
          } else {
            setShowMenu(false);
          }
        }}
      >
        <h2>
          {title} ({props.categoryItems.card.card.itemCards.length})
        </h2>
        <span>
          <i class="fa-solid fa-angle-down"></i>
        </span>
      </div>
      {category.map((menuItem) => {
        return (
          showMenu && (
            <MenuCard key={menuItem.card.info.id} menu={menuItem}></MenuCard>
          )
        );
      })}
    </div>
  );
};

export default CategoryBlock;
