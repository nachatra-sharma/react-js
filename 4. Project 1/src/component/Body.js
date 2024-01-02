import React, { useEffect } from "react";
import Shimmer from "../component/Shimmer";
import RestaurantCard from "./RestaurantCard";
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
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilterRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

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
                (restaurant) => restaurant.info.avgRating > 4.3
              );
              setFilterRestaurant(filterRestaurant);
            }}
          >
            Filter Restaurant
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
                <RestaurantCard restaurantObject={restaurant} />
              </Link>
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Body;
