import { CDN_URL } from "../utils/Constants";

export const RestaurantCard = ({ resData }) => (
  <div className="card">
      <img
          className="card-logo"
          src={
              CDN_URL +
              resData.info.cloudinaryImageId
          }
          alt={resData.info.name}
      />
      <h3 style={{ textDecoration: "none", color: "inherit", margin: "10px 0" }}>
          {resData.info.name}
      </h3>
      <h4 style={{ textDecoration: "none", color: "inherit", margin: "5px 0" }}>
          Rating: {resData.info.avgRating}
      </h4>
      <p style={{ textDecoration: "none", color: "inherit", margin: "5px 0" }}>
          Cuisines: {resData.info.cuisines.join(", ")}
      </p>
      <p style={{ textDecoration: "none", color: "inherit", margin: "5px 0" }}>
          Cost for Two: {resData.info.costForTwo}
      </p>
  </div>
);


export const withPromotedLabel = (RestaurantCard) =>
{
  return(props) =>{
    return(
      <div>
        <label>Promoted</label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};