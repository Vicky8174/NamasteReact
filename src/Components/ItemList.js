import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/Constants";
import { addItem } from "../utils/cartSlice";


const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));


  };


  return (
    <div className="itemList">
      {items.map((item) => (
        <div key={item.card.info.name} className="itemCard">
          {/* Left Side: Text Content */}
          <div className="itemDetails">
            <div className="itemTitle">
              <span className="itemName">{item.card.info.name}</span>
            </div>
            <span className="itemPrice">₹{item.card.info.price / 100 || item.card.info.defaultPrice / 100}</span>
            <p className="itemDescription">{item.card.info.description}</p>
          </div>

          {/* Right Side: Image & Button */}
          <div className="itemImageContainer">
            <img src={CDN_URL + item.card.info.imageId} className="itemImage" alt={item.card.info.name} />
            <button className="addButton" onClick={()=>handleAddItem(item)}>ADD</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;

  