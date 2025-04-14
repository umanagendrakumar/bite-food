import { RES_IMG_URL } from "../config/constants";

const RestaurantMenuCard = ({ name, price, ratings, description, imageId }) => {
    return (
        <div className="menuCard border-y-1 border-gray-100 px-2 py-8  mx-auto flex gap-16">
        
            <div className="max-w-[600px] p-1">
                <h1 className="text-xl font-bold">{name}</h1>
                <h3 className="font-medium">{price/100}/-</h3>
                <p>{ratings?.aggregatedRating?.rating}</p>
                <p className="text-gray-500">{description}</p>
            </div>
            <div className="imgWrapper h-40 w-40 aspect-[16/9]">
                <img
                    className="h-full w-full object-cover"
                    src={RES_IMG_URL + imageId}
                />
            </div>
            

        </div>
    );
};

export default RestaurantMenuCard;