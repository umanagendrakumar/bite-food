import { RES_IMG_URL } from "../config/constants";

const RestaurantCard = ({ cloudinaryImageId, name, cuisines, avgRating, areaName }) => (
    <div className="card w-2xs p-2">
        <div className="imgWrapper h-40 w-full aspect-[16/9]">
            <img
                className="h-full w-full object-cover"
                src={RES_IMG_URL + cloudinaryImageId}
            />
        </div>
        <h2 className="text-xl font-bold truncate">{name}</h2>
        <h3 className="font-medium">{avgRating} star</h3>
        <h3 className="truncate">{cuisines.join(", ")}</h3>
        <h3 >{areaName}</h3>

    </div>
);

export default RestaurantCard;