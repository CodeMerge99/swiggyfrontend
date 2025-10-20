import React, { useState, useEffect } from 'react';
import RestaurantCard from './RestaurantCard';

const Body = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("https://www.swiggy.com/dapi/restaurants/search/v3?lat=18.52110&lng=73.85020&str=Nagpur&trackingId=undefined&submitAction=ENTER&queryUniqueId=c25ec16c-aa1f-3e46-8a4d-a8bced5ac86f");
      const json = await response.json();
      
      const restaurantList = json?.data?.cards[1]?.groupedCard?.cardGroupMap?.RESTAURANT?.cards || [];
      setRestaurants(restaurantList);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false);
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className='body'>
      <div className='search'>Search</div>
      <div className='res-container'>
        {restaurants.map((item, index) => {
          const resData = item?.card?.card?.info;
          
          if (!resData) return null;

          return <RestaurantCard key={resData.id || index} resData={resData} />;
        })}
      </div>
    </div>
  );
};

export default Body;