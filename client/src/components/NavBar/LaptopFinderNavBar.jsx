import React from "react";
import findLaptopBtn from "../../images/find-me-a-laptop-start.png";
import findLaptopBtnActive from "../../images/find-me-a-laptop-active.png";
import activitiesBtn from "../../images/activities-non-active.png";
import activitiesBtnActive from "../../images/activities-active.png";
import featuresBtn from "../../images/features-non-active.png";
import featuresBtnActive from "../../images/features-active.png";
import choicesBtn from "../../images/choices-non-active.png";
import choicesBtnActive from "../../images/choices-active.png";

const LaptopFinderNavBar = ({ setStep, step }) => {
  return (
    <div>
      <div className="pt-4 px-24 bg-white flex flex-row text-black w-full text-center mx-auto items-end">
        <button onClick={() => setStep(1)} className="w-full">
          <img
            className="w-full"
            src={step === 1 ? findLaptopBtn : findLaptopBtnActive}
          />
        </button>
        <button onClick={() => setStep(2)} className="w-full">
          <img
            className="w-full"
            src={step < 2 ? activitiesBtn : activitiesBtnActive}
          />
        </button>
        <button onClick={() => setStep(3)} className="w-full">
          <img className="w-full" src={step < 3 ? featuresBtn : featuresBtnActive} />
        </button>
        <button onClick={() => setStep(4)} className="w-full">
          <img className="w-full" src={step < 4 ? choicesBtn : choicesBtnActive} />
        </button>
      </div>
    </div>
  );
};

export default LaptopFinderNavBar;
