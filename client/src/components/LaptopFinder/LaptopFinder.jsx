import React, { useState } from "react";
import LaptopFinderActivities from "./LaptopFinderActivities";
import LaptopFinderActivities from "./LaptopFinderHome";

const [step, setStep] = useState(0);

// go back to previous step
const prevStep = () => {
  setStep(step - 1);
};

// proceed to the next step
const nextStep = () => {
  setStep(step + 1);
};

export default function LaptopFinder() {
  const conditionalComponent = () => {
    switch (page) {
      case 1:
        return <LaptopFinderHome prevStep={prevStep} nextStep={nextStep} />;
      case 2:
        return <LaptopFinderActivities prevStep={prevStep} nextStep={nextStep} />;
    //   case 3:
    //     return <ThirdStep />;
      default:
        return null;
    }
  };
  return <>{conditionalComponent()}</>;
}
