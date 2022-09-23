import React from "react";
import LaptopFinderCard from "../LaptopFinderCard/LaptopFinderCard";

const ScrollBar = ({ laptopsArray }) => {
  return (
    <div className="mx-auto h-96 w-72 scrollbar-thin scrollbar-thumb-pb-scroll-thumb scrollbar-track-pb-scroll overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
      <div className="h-54 bg-pb-light-gray">
        {laptopsArray.map((item, index) => (
          <LaptopFinderCard item={item} index={index} />
        ))}
      </div>
    </div>
  );
};

export default ScrollBar;
