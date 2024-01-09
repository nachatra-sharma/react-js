import React, { useEffect } from "react";
import Shimmer from "../component/Shimmer";
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useState, useEffect } from "react";
import { RESTAURANT_URL } from "../utils/constant";
import { Link } from "react-router-dom";
const Body = () => {
  // Local state variable
  const [RestaurantList, setRestaurantList] = useState([]);
  const [filterRestaurant, setFilterRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  // useEffect Called
  useEffect(() => {
    fetchData();
  }, []);
  // API Data Fetching

  const fetchData = async () => {
    const data = await fetch(RESTAURANT_URL);
    const json = await data.json();
    setRestaurantList(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilterRestaurant(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  // higher order component

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  return RestaurantList.length === 0 ? (
    <Shimmer />
  ) : (
    <React.Fragment>
      <div className="body">
        <div className="filter-search">
          <button
            className="filter-btn"
            onClick={() => {
              const filterRestaurant = RestaurantList.filter(
                (restaurant) => restaurant.info.avgRating > 4.0
              );
              setFilterRestaurant(filterRestaurant);
            }}
          >
            Rating 4.0+
          </button>
          <button
            className="filter-btn"
            onClick={() => {
              const filterRestaurant = RestaurantList.filter(
                (restaurant) => restaurant.info.veg === true
              );
              setFilterRestaurant(filterRestaurant);
            }}
          >
            Pure Veg
          </button>
          <button
            className="filter-btn"
            onClick={() => {
              const filterRestaurant = RestaurantList.filter(
                (restaurant) => restaurant.info.isOpen === true
              );
              setFilterRestaurant(filterRestaurant);
            }}
          >
            Opened
          </button>
          <button
            className="filter-btn"
            onClick={() => {
              setFilterRestaurant(RestaurantList);
            }}
          >
            Remove Filter
          </button>
          <div className="search-container">
            <input
              type="text"
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
            />
            <button
              onClick={() => {
                let filterRestaurant = RestaurantList.filter((restaurant) => {
                  return restaurant.info.name
                    .toLowerCase()
                    .includes(searchText.toLowerCase());
                });
                setFilterRestaurant(filterRestaurant);
              }}
            >
              Search
            </button>
          </div>
        </div>
        <div className="restaurent-container">
          {filterRestaurant.map((restaurant) => {
            return (
              <Link
                key={restaurant.info.id}
                to={"/restaurant/" + restaurant.info.id}
              >
                {false ? (
                  <RestaurantCardPromoted restaurantObject={restaurant} />
                ) : (
                  <RestaurantCard restaurantObject={restaurant} />
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Body;
