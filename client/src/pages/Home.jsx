import React, { useState } from "react";
import LaptopFinder from "../components/LaptopFinder/LaptopFinderHome";
import LaptopSelector from "../components/LaptopSelector/LaptopSelectorHome";

const Home = () => {
  const [showLaptopSelector, setLaptopSelector] = useState(false);
  const [showLaptopFinder, setLaptopFinder] = useState(false);

  return (
    <div>
      Home
      <button
        class="block w-full md:w-auto text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
        onClick={() => setLaptopSelector(true)}
      >
        Laptop Selector
      </button>
      <button
        to="/laptop-finder"
        class="mt-4 block w-full md:w-auto text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
        onClick={() => setLaptopFinder(true)}
      >
        Laptop Finder
      </button>
      {showLaptopSelector ? (
        <LaptopSelector setLaptopSelector={setLaptopSelector} />
      ) : null}
      {showLaptopFinder ? (
        <LaptopFinder setLaptopFinder={setLaptopFinder} />
      ) : null}
    </div>
  );
};

export default Home;
