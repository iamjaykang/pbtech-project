import React, { useState } from "react";
import LaptopFinder from "../components/LaptopFinder/LaptopFinder";

const Home = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      Home
      <button
        class="block w-full md:w-auto text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Laptop Finder
      </button>
      {showModal ? <LaptopFinder setShowModal={setShowModal}/> : null}
    </div>
  );
};

export default Home;
