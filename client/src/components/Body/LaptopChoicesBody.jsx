import React from "react";
import PriceSlider from "../Slider/PriceSlider";
import businessImg from "../../images/business.png";
import ChoicesSwiper from "../Carousel/ChoicesSwiper";

const LaptopChoicesBody = ({ prevStep, nextStep }) => {
  return (
    <div className="relative flex flex-row px-24 mb-5 mt-8">
      <div className="w-4/6 bg-pb-container-bg rounded-l-3xl">
        <button onClick={prevStep} className="flex gap-1 mt-6">
          <span className="text-pb-dark-gray pl-6 mb-11">Restart</span>
        </button>
        <div className="">
          <h1 className="text-pb-text text-4xl ml-20 mb-10">
            Our top recommendation is...
          </h1>
        </div>
        <div className="mx-auto text-pb-dark-blue text-2xl leading-relaxed flex flex-col w-full gap-4">
          <div className="flex flex-center w-full gap-6 mb-4 pl-20">
            <div className="w-[700px] h-52 bg-white border border-black rounded-lg"></div>
          </div>
          <div className="flex flex-around w-full gap-6 mb-24 pl-20">
            <div className="w-[400px] h-[200px] bg-white border border-black rounded-lg">
                <h3 className="pl-3.5 pt-3.5 text-lg font-bold">Frequently bought together</h3>
                <ChoicesSwiper />
            </div>
            <div>
              <div className="w-[280px] h-[170px] bg-white border border-black rounded-t-lg">
                <img className="w-max" src={businessImg} alt="business-gift-card" />
              </div>
              <div className="w-[280px] h-[30px] bg-pb-text text-white font-bold text-base text-center bg-white border-b border-l border-r border-black rounded-b-lg">
                Gift card offer for businesses
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-2/6 bg-pb-light-gray rounded-r-3xl">
        <h2 className="text-pb-text text-3xl mt-8 mb-3 ml-[90px]">
          Our top picks
        </h2>
        <h3 className="text-pb-orange text-xl ml-[92px]">
          We found 5 products for you!
        </h3>
        <PriceSlider />
      </div>
    </div>
  );
};

export default LaptopChoicesBody;
