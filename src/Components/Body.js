import { useEffect, useState } from "react"
import { RestaurantCard } from "./RestaurantCard";
import { Shimmer } from "./Shimmer";
import { Link } from "react-router-dom";


export const Body = () => {
    const [resList, setResList] = useState([]); // State to store the list of restaurants
    

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        
            const data = await fetch(
                "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.74876895535617&lng=76.63827370852232&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
            );

            

            const json = await data.json();
            console.log("API Response:", json);

            // Extract restaurant data from API response
            const restaurants =
                json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

            if (restaurants) {
                setResList(restaurants);
            } else {
                console.error("Restaurants not found in API response");
            }
        
    };

    if(resList.length === 0){
        return <Shimmer />;
    }

    return (
        <div>
            <div className="restaurant-grid">
                {resList.map((restaurant) => (
                    <Link key={restaurant.info?.id} to={"restaurant/" + restaurant.info?.id} ><RestaurantCard resData={restaurant} /></Link>
                ))}
            </div>
                
        </div>
    );
};
