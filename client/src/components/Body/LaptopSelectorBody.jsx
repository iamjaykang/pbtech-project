import React from "react";
import educationIco from "../../images/education.png";
import gamingIco from "../../images/gaming.png";
import workIco from "../../images/work.png";
import arrowLeftIco from "../../images/arrow-left-light.svg";
import categoryImg from "../../images/categoryImg.png";
import personalUseImg from "../../images/personal-use.png";

const LaptopFinderBody = () => {
  return (
    <div className="relative flex flex-row">
      <div className="w-2/5 bg-pb-container-bg pl-28">
        <a className="flex gap-1 mt-3 mb-5"><img className="w-2.5" src={arrowLeftIco} /><span className="text-pb-dark-gray">Back</span></a>
        <div className="">
          <h1 className="text-pb-text text-4xl mb-10">Laptop Selector</h1>
          <h3 className="text-pb-text/50 text-2xl mb-1">Step 1</h3>
          <h3 className="text-pb-dark-blue text-2xl mb-6">
            What do you mainly use your laptop for?
          </h3>
        </div>
        <div className="mx-auto text-pb-dark-blue text-2xl leading-relaxed flex flex-col w-full gap-4">
          <div className="flex flex-center w-full gap-6 mb-6">
            <button className="bg-white w-48 h-32 rounded-lg">
              <h3>Personal Use</h3>
              <span>
                <img className="mx-auto" src={personalUseImg} />
              </span>
            </button>
            <button className="bg-white w-48 h-32 rounded-lg">
              <h3>Work</h3>
              <span>
                <img className="mx-auto" src={workIco} />
              </span>
            </button>
          </div>
          <div className="flex flex-around w-full gap-6 mb-24">
            <button className="bg-white w-48 h-32 rounded-lg">
              <h3>Education</h3>
              <span>
                <img className="mx-auto" src={educationIco} />
              </span>
            </button>
            <button className="bg-white w-48 h-32 rounded-lg">
              <h3>Gaming</h3>
              <span>
                <img className="mx-auto" src={gamingIco} />
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="w-3/5">
        <h2 className="text-pb-text text-3xl mt-24 mx-28 mb-11">Let us help you find the perfect laptop!</h2>
        <div className="bg-pb-container-bg mx-28 my-auto h-[21rem] rounded-lg">
        <div className="pt-16 pb-4"><img className="mx-auto" src={categoryImg} /></div>
        <h1 className="text-pb-text text-4xl text-center pb-4">Choose a category</h1>
        <h3 className="text-pb-text text-2xl text-center">on the left and see our suggestions!</h3>
        </div>
      </div>
    </div>
  );
};

export default LaptopFinderBody;
