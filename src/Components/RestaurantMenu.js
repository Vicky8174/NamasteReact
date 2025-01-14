import { useEffect,useState } from "react";
import { Shimmer } from "./Shimmer";
import { useParams } from "react-router";
import { menuApi } from "../utils/Constants";


const RestaurantMenu = () =>{

    const[resMenu,setResMenu] = useState(null);

    const {resId} = useParams();
    

    useEffect(()=>{
        fetchMenu();
    },[]);

    const fetchMenu = async () =>{
        const data = await fetch(menuApi + resId);
        
        const json = await data.json();
        console.log(json);
        setResMenu(json.data);
    }

    if(resMenu===null) return <Shimmer/>;

    const resInfo = resMenu?.cards[2]?.card?.card?.info;

    const itemcards = resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;
    console.log(itemcards);

    



    return(
        <div className="Menu">
           <h1>{resInfo?.name}</h1>
           <p>{resInfo?.cuisines.join(", ") +" "+resInfo?.costForTwoMessage}</p>
          
           
           <h2>Menu</h2>
           <ul>
            {itemcards.map(
                item => <li key = {item.card?.info?.id} >
                    {item.card?.info?.name} - Rs.{item.card?.info?.defaultPrice/100}</li>
                )
            }
           
            
           </ul>
            
        </div>
    )
}
export default RestaurantMenu;