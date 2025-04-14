import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import RestaurantMenuCard from "../ui/RestaurantMenuCard";
import ShimmerEffect from "../ui/ShimmerEffect";

const RestautrantMenu = () => {
    const {resId} = useParams();

    const [restaurant, setrestaurant] = useState({});
    

    useEffect(() => {
        getRestaurantInfo();
    }, []);

    async function getRestaurantInfo() {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.38430&lng=78.45830&restaurantId=" + resId);
        const json = await data.json();
        setrestaurant(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards);

    }
    console.log(restaurant);

    return (Object.keys(restaurant).length == 0) ? <ShimmerEffect /> :(
        <>
            <div className="menuCards flex flex-wrap">
                {
                    restaurant[1]?.card?.card?.itemCards.map((res) => {
                        return <RestaurantMenuCard key={res.card.info.id} {...res.card.info} />
                    })
                }
            </div>
        </>
    );
}

export default RestautrantMenu;