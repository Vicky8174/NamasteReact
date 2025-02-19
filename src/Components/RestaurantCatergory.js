import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex}) => {
  
  const handleClick = () => {
    setShowIndex();
  };

  return (
    <div className="centerContainer">
      {/* Accordion Header: Click here to toggle */}
      <div className="accordionHeader" onClick={handleClick}>
        <div className="headerContent">
          <span>{data.title} ({data.itemCards.length})</span>
          <span> ∨ </span>
        </div>
      </div>

      {/* Item List: Prevent click propagation */}
      {showItems && (
        <div className="itemListContainer" onClick={(e) => e.stopPropagation()}>
          <ItemList items={data.itemCards} />
        </div>
      )}
    </div>
  );
};

export default RestaurantCategory;
