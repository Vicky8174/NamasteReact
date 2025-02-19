import { Shimmer } from "./Shimmer";
import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCatergory";
import { useState } from "react";


const RestaurantMenu = () => {

    const[showIndex, setShowIndex] = useState(null);

    
    const { resId } = useParams();
    const resMenu = useRestaurantMenu(resId);

    if (resMenu === null) return <Shimmer />;

    const resInfo = resMenu?.cards[2]?.card?.card?.info;
    const itemCards = resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;
    
    console.log(itemCards);

    const categories = resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => c.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

    return (
        <div className="Menu">
            <h1 className="restaurantName">{resInfo?.name}</h1>
            <p>{resInfo?.cuisines?.join(", ") + " " + resInfo?.costForTwoMessage}</p>

            {categories.map((category,index) => 
            <RestaurantCategory
             key ={category?.card?.card.title} 
             data = {category?.card?.card}

             showItems={index===showIndex ? true : false}

             setShowIndex = {() =>setShowIndex(index === showIndex?null:index)}
             
             />
             )}

            
        </div>
    );
};

export default RestaurantMenu;
