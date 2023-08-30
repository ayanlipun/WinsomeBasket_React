import { useEffect, useState } from "react";
import { json, useParams } from "react-router-dom";

const RestaurantMnu = () => {
  const [restInfo, setRestInfo] = useState(null);

  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;

  const { itemsCards } =
    resInfo?.cards[2]?.groupCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  console.log(itemsCard);

  return (
    <div className="menu">
      <h1>{name}</h1>
      <h2>
        {cuisines.join(", ")}-{costForTwoMessage}
      </h2>
      <h2>Menu</h2>
      <ul>
        {itemsCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - {"Rs."}{" "}
            {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMnu;
