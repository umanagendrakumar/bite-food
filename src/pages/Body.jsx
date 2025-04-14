import { useEffect, useState } from "react";
import RestaurantCard from "../ui/RestaurantCard";
import ShimmerEffect from "../ui/ShimmerEffect";
import NoRestaurants from "../ui/NoRestaurants";
import {Link} from "react-router-dom";

const Body = () => {
    const [searchText, setSearchText] = useState("");
    const [allRestaurants, setAllRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([])

    useEffect(() => {
        getRestaurants();
    }, []);

    async function getRestaurants() {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.971599&lng=77.594566&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        setAllRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    return (allRestaurants?.length === 0) ? <ShimmerEffect /> : (
        <main className="main">
            <section className="pt-8 flex justify-center">
                <div className="flex flex-row gap-4 max-[366px]:flex-col justify-center items-center w-max">
                    <div className="search-container">
                        <input
                            type="text"
                            className="border px-4  py-2"
                            placeholder="search for...."
                            value={searchText}
                            onChange={(e) => setSearchText(e.target.value)}
                        />
                    </div>

                    <button className="border w-full px-4 py-2 cursor-pointer"
                        onClick={() => {
                            const data = allRestaurants.filter((restaurant) => restaurant.info.name.toLowerCase().includes(searchText.toLowerCase()));
                            setFilteredRestaurants(data);
                        }}
                    >Search</button>
                </div>
            </section>
            <section className="restaurantCards flex flex-wrap justify-center gap-4 py-8">
                {
                    (filteredRestaurants.length === 0) ? <NoRestaurants /> :
                        filteredRestaurants.map((restaurant) => {
                            return (
                                <Link to={"/restaurant/" + restaurant.info.id} key={restaurant.info.id}>
                                    <RestaurantCard {...restaurant.info} />
                                </Link>
                            );
                        })
                }
            </section>
        </main>
    );
};

export default Body;