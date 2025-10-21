import React, { useState, useEffect } from 'react';
import RestaurantCard from './RestaurantCard';

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/search/v3?lat=18.52110&lng=73.85020&str=Pune&trackingId=undefined&submitAction=ENTER&queryUniqueId=c25ec16c-aa1f-3e46-8a4d-a8bced5ac86f"
      );
      const json = await response.json();
      
      const restaurantList = json?.data?.cards[1]?.groupedCard?.cardGroupMap?.RESTAURANT?.cards || [];
      
      setAllRestaurants(restaurantList);
      setFilteredRestaurants(restaurantList);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false); 
    }
  };

  const handleSearch = () => {
    if (!searchText.trim()) {
      setFilteredRestaurants(allRestaurants);
      return;
    }

    const searchedRestaurants = allRestaurants.filter((res) => {
      const restaurantName = res?.card?.card?.info?.name || "";
      return restaurantName.toLowerCase().includes(searchText.toLowerCase());
    });
    
    setFilteredRestaurants(searchedRestaurants);
  };

  const handleTopRated = () => {
    const topRatedList = allRestaurants.filter((res) => {
      const rating = res?.card?.card?.info?.avgRating;
      return rating > 4.5;
    });
    setFilteredRestaurants(topRatedList);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className='body'>
      <div className='filter'>
        <div className='search'>
          <input 
            type='text'
            value={searchText} 
            className='search-box'
            placeholder='Search for restaurants...'
            onChange={(e) => setSearchText(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <button onClick={handleSearch}>
            Search
          </button>
        </div>
        <button className='filter-btn' onClick={handleTopRated}>
          Top Rated Restaurants
        </button>
      </div>

      <div className='res-container'>
        {filteredRestaurants.length === 0 ? (
          <div className="no-results">
            <p>No restaurants found. Try a different search term.</p>
          </div>
        ) : (
          filteredRestaurants.map((item, index) => {
            const resData = item?.card?.card?.info;
            
            if (!resData) return null;

            return <RestaurantCard key={resData.id || index} resData={resData} />;
          })
        )}
      </div>
    </div>
  );
};

export default Body;