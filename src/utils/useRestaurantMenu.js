import { useEffect,useState } from "react";
import { menuApi } from "../utils/Constants";

const useRestaurantMenu = (resId) =>{
    const[resMenu,setResMenu] = useState(null);
    useEffect(()=>{
        fetchMenu();
    },[]);

    const fetchMenu = async () =>{
        const data = await fetch(menuApi + resId);
        
        const json = await data.json();
        console.log(json);
        setResMenu(json.data);
    };

    return resMenu;

};
export default useRestaurantMenu;
