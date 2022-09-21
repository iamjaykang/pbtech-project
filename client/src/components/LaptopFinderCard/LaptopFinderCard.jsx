import React from "react";

const LaptopFinderCard = ({ item, index }) => {
  return (
    <div className="flex flex-row mb-6">
      <div className="bg-white min-w-[100px] min-h-[100px] border rounded-lg shadow-lg">
        <img className="mx-auto mt-3.5" src={item.imgUrl} />
      </div>
      <div className="px-4">
        <div className="text-pb-text text-base">{item.name}</div>
        <div className="text-pb-orange text-2xl">{item.price}</div>
        <button className="text-pb-sky-blue text-sm underline">View Details</button>
      </div>
    </div>
  );
};

export default LaptopFinderCard;
