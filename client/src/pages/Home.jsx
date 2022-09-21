import React, { useEffect, useState } from "react";
import api from "../api";
import LaptopFinder from "../components/LaptopFinder/LaptopFinder";

const Home = () => {
  const [laptopsArray, setLaptopsArray] = useState([])

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

  const restartModal = () => {
    setStep(1);
  };

  const laptopsApi = async () => {
    try {
      const laptop = await api.getAllLaptops();
      setLaptopsArray(laptop.data.data)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    laptopsApi();
    console.log(laptopsArray)
  }, []);

  return (
    <div>
      Home
      <button
        to="/laptop-finder"
        className="mt-4 block w-full md:w-auto text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
        onClick={nextStep}
      >
        Laptop Finder
      </button>
        <LaptopFinder laptopsArray={laptopsArray} closeModal={closeModal} restartModal={restartModal} setStep={setStep} step={step} prevStep={prevStep} nextStep={nextStep}/>
    </div>
  );
};

export default Home;
