import React from "react";

const LaptopFinderNavBar = () => {
  return (
    <div>
      <div className="bg-white flex flex-row justify-evenly text-black w-full text-center">
        <a className="border border-solid rounded-r-lg border-slate-300 w-full">
          FIND ME A LAPTOP
        </a>
        <a className="border border-solid rounded-r-lg border-slate-300 w-full">
          ACTIVITIES
        </a>
        <a className="border border-solid rounded-r-lg border-slate-300 w-full">
          FEATURES
        </a>
        <a className="border border-solid rounded-r-lg border-slate-300 w-full">
          OUR TOP CHOICES
        </a>
      </div>
    </div>
  );
};

export default LaptopFinderNavBar;
