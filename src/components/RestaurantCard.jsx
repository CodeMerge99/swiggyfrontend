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


//higher order component/
// takes input as a RestaurantCard and returns Restaurant card with promoted tags//

export const withPromotedLabel = (RestaurantCard) =>{
  return({resData})=>{
    return (
      <div>
        <label className=' absolute bg-black text-white m-2 p-2 rounded-lg'>
          Promoted</label>
        <RestaurantCard {...resData}/>
      </div>
    )
  }
}

export default RestaurantCard;
