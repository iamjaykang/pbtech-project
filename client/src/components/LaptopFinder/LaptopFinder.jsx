import React, { useState } from "react";
import LaptopChoices from "./LaptopChoices";
import LaptopFeatures from "./LaptopFeatures";
import LaptopFinderActivities from "./LaptopFinderActivities";
import LaptopFinderHome from "./LaptopFinderHome";

// go back to previous step

export default function LaptopFinder({ setStep, step, prevStep, nextStep, closeModal }) {
  const conditionalComponent = () => {
    switch (step) {
      case 1:
        return <LaptopFinderHome setStep={setStep} step={step} closeModal={closeModal} prevStep={prevStep} nextStep={nextStep} />;
      case 2:
        return <LaptopFinderActivities closeModal={closeModal} prevStep={prevStep} nextStep={nextStep} />;
      case 3:
        return <LaptopFeatures closeModal={closeModal} prevStep={prevStep} nextStep={nextStep} />;
      case 4:
        return <LaptopChoices closeModal={closeModal} prevStep={prevStep} nextStep={nextStep} />;
      default:
        return null;
    }
  };
  return <>{conditionalComponent()}</>;
}
