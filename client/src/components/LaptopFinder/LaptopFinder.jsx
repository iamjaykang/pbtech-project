import React, { useState } from "react";
import LaptopFeatures from "./LaptopFeatures";
import LaptopFinderActivities from "./LaptopFinderActivities";
import LaptopFinderHome from "./LaptopFinderHome";

// go back to previous step

export default function LaptopFinder({ step, prevStep, nextStep, closeModal }) {
  const conditionalComponent = () => {
    switch (step) {
      case 1:
        return <LaptopFinderHome closeModal={closeModal} prevStep={prevStep} nextStep={nextStep} />;
      case 2:
        return <LaptopFinderActivities closeModal={closeModal} prevStep={prevStep} nextStep={nextStep} />;
      case 3:
        return <LaptopFeatures closeModal={closeModal} prevStep={prevStep} nextStep={nextStep} />;
      default:
        return null;
    }
  };
  return <>{conditionalComponent()}</>;
}
