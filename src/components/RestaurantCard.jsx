import React from 'react';

const RestaurantCard = ({ resData }) => {
  if (!resData) return null;
  
  const { name, cuisines, avgRating, costForTwoMessage, sla, cloudinaryImageId } = resData;

  return (
    <div className='res-card'>
      <img 
        src={`https://media-assets.swiggy.com/swiggy/image/upload/${cloudinaryImageId}`}
        alt={name}
      />
      <h3>{name}</h3>
      <p>{cuisines?.join(", ")}</p>
      <p>{avgRating} ⭐</p>
      <p>{costForTwoMessage}</p>
      <p>{sla?.slaString}</p>
    </div>
  );
};

export default RestaurantCard;
