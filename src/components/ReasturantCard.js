import { CDN_URL } from "../Utills/constants";

const ReasturantCard = (props) => {
  const { resData } = props;
  // console.log(props);

  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    deliveryTime,
    costForTwo,
  } = resData?.data.data;

  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      ></img>
      <h3>{name}</h3>
      <h5>{cuisines.join(", ")}</h5>
      <h5>{avgRating} stars</h5>
      <h5>In {deliveryTime} Mins</h5>
      <h5>{costForTwo / 100} FOR TWO </h5>
    </div>
  );
};

export default ReasturantCard;
