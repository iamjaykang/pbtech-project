import React from "react";
import findLaptopBtn from "../../images/find-me-a-laptop-start.png";
import findLaptopBtnActive from "../../images/find-me-a-laptop-active.png";
import activitiesBtn from "../../images/activities-non-active.png";
import activitiesBtnActive from "../../images/activities-active.png";
import featuresBtn from "../../images/features-non-active.png";
import featuresBtnActive from "../../images/features-active.png";
import choicesBtn from "../../images/choices-non-active.png";
import choicesBtnActive from "../../images/choices-active.png";

const LaptopFinderNavBar = ({setStep, step}) => {
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
