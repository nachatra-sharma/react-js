import React from "react";
import star from "../../star.png";
import { CDN_URL } from "../utils/constant";

const RestaurantCard = (props) => {
  const { restaurantObject } = props;
  const { cloudinaryImageId, name, avgRating } = restaurantObject.info;
  const { slaString } = restaurantObject.info.sla;
  return (
    <React.Fragment>
      <div className="card">
        <div className="card-img">
          <img src={CDN_URL + cloudinaryImageId} alt="" />
        </div>
        <div className="card-details">
          <h2>{name}</h2>
          <div className="rate-time">
            <div className="rating">
              <img src={star} alt="" />
              <span>{avgRating}</span>
            </div>
            <div className="circle"></div>
            <div className="time">
              <span>{slaString}</span>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div className="label-promoted">
        <label>Promoted</label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
