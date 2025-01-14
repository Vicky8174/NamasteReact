


export const RestaurantCard = ({ resData }) => (
    <div className="card">
        <img
            className="card-logo"
            src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + resData.info.cloudinaryImageId}
            alt={resData.info.name}
        />
        <h3>{resData.info.name}</h3>
        <h4 >Rating: {resData.info.avgRating}</h4>
        <p>Cuisines: {resData.info.cuisines.join(", ")}</p>
        <p>Cost for Two: {resData.info.costForTwo}</p>
    </div>
);