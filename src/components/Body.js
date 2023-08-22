import ReasturantCard from "./ReasturantCard";
import { useState } from "react";
import resList from "../Utills/mockData";

const Body = () => {
  const [listOfRestuarant, setListOfRestuarant] = useState(resList);

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestuarant.filter(
              (res) => res.data.data.avgRating > 4.0
            );
            setListOfRestuarant(filteredList);
            // console.log("Button clicked.");
          }}
        >
          Top Rated Resturant
        </button>
      </div>
      <div className="res-container">
        {listOfRestuarant.map((restaurant) => (
          <ReasturantCard key={restaurant.data.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
