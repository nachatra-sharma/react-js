import React from "react";
import ReactDOM from "react-dom/client";
import RestaurantCard from "./RestaurantCard";
import RestaurantObject from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [RestaurantList, setRestaurantList] = useState(
    RestaurantObject.restaurants
  );

  return (
    <React.Fragment>
      <div className="body">
        <div className="filter-search">
          <button
            className="filter-btn"
            onClick={() => {
              const filterList = RestaurantList.filter(
                (restaurant) => restaurant.avgRating > 4
              );
              setRestaurantList(filterList);
            }}
          >
            Filter Restaurant
          </button>
        </div>
        <div className="restaurent-container">
          {RestaurantList.map((restaurant) => {
            return (
              <RestaurantCard
                key={restaurant.id}
                restaurantObject={restaurant}
              />
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Body;
