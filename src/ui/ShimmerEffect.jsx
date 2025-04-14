import ShimmerCard from "./ShimmerCard";

const ShimmerEffect = () => {
    return (
        <>
            <div className="flex flex-row gap-4 max-[366px]:flex-col justify-center items-center py-8">
                <div className="bg-gray-100 w-[250px] h-[40px]"></div>
                <div className="bg-gray-100 w-[100px] h-[40px]"></div>
            </div>

            <div className="flex flex-wrap justify-center gap-4 py-8">
                <ShimmerCard />
                <ShimmerCard />
                <ShimmerCard />
                <ShimmerCard />
                <ShimmerCard />
                <ShimmerCard />
                <ShimmerCard />
                <ShimmerCard />
            </div>
        </>
    );
};

export default ShimmerEffect;