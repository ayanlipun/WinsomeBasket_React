import ReasturantCard from "./ReasturantCard";
import { useEffect, useState } from "react";
import resList from "../Utills/mockData";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../Utills/useOnlineStatus"; 

const Body = () => {
  const [listOfRestuarant, setListOfRestuarant] = useState(resList);
  const [filteredResturant, setFilteredResturant] = useState(resList); //useState([]);
  const [searchText, setSearchText] = useState("");

  console.log("Body Rendered.");

  useEffect(() => {
    fetchData();
    console.log("useEffect called");
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0048356&lng=77.7215005&collection=83649&isNewCollectionFlow=true&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
    );

    const jsonData = await data.json();
    //setListOfRestuarant(jsonData.data.cards[3].card.card);
    console.log(jsonData);
  };

  // Conditional rendering
  // if (listOfRestuarant.length === 0) {
  //   return <Shimmer />;
  // }

  return listOfRestuarant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="serach-btn"
            onClick={() => {
              // Filter the resturant card and update the UI.
              console.log(searchText);
              const filteredResturant = listOfRestuarant.filter((res) =>
                res.data.data.name.toLowerCase().includes(searchText)
              );
              setFilteredResturant(filteredResturant);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestuarant.filter(
              (res) => res.data.data.avgRating > 4.0
            );
            setListOfRestuarant(filteredList);
            console.log("Button clicked.");
          }}
        >
          Top Rated Resturant
        </button>
      </div>
      <div className="res-container">
        {filteredResturant.map((restaurant) => (
          <ReasturantCard key={restaurant.data.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
