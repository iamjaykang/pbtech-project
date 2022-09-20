import React, { useState } from "react";
import LaptopFinder from "../components/LaptopFinder/LaptopFinder";
import LaptopSelector from "../components/LaptopSelector/LaptopSelectorHome";

const Home = () => {
  const [showLaptopSelector, setLaptopSelector] = useState(false);

  const [step, setStep] = useState(0);

  // proceed to the previous step
  const prevStep = () => {
    setStep(step - 1);
  };

  // proceed to the next step
  const nextStep = () => {
    setStep(step + 1);
  };

  // close Modal
  const closeModal = () => {
    setStep(0);
  };

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
        onClick={nextStep}
      >
        Laptop Finder
      </button>
      {showLaptopSelector ? (
        <LaptopSelector setLaptopSelector={setLaptopSelector} />
      ) : null}
        <LaptopFinder closeModal={closeModal} step={step} prevStep={prevStep} nextStep={nextStep}/>
    </div>
  );
};

export default Home;
