import React, { useState } from "react";
import PriceSlider from "../Slider/PriceSlider";
import businessImg from "../../images/business.png";
import ChoicesSwiper from "../Carousel/ChoicesSwiper";
import RestartButton from "../Buttons/RestartButton";
import LaptopFinderCard from "../LaptopFinderCard/LaptopFinderCard";
import QuantitySelector from "../QuantitySelector/QuantitySelector";
import addToCartBtn from "../../images/add-to-cart-btn.png";
import seeDetailsBtn from "../../images/see-details-btn.png";
import onlyImgIco from "../../images/button-with-icon only.png";

const LaptopChoicesBody = ({ laptopsArray, restartModal }) => {
  const filteredItems = laptopsArray.filter(item => item.category.includes('Work,2in1'))
  return (
    <div className="relative flex flex-row px-24 mb-5 mt-8">
      <div className="w-4/6 bg-pb-container-bg rounded-l-3xl">
        <RestartButton restartModal={restartModal} />
        <div className="">
          <h1 className="text-pb-text text-4xl ml-20 mb-10">
            Our top recommendation is...
          </h1>
        </div>
        <div className="mx-auto text-pb-dark-blue text-2xl leading-relaxed flex flex-col w-full gap-4">
          <div className="flex flex-center w-full gap-6 mb-4 pl-20">
            <div className="w-[700px] h-72 flex bg-white border border-black rounded-lg shadow-lg">
              <div className="my-auto">
              <img className="ml-4 my-auto w-48 h-40" src={filteredItems[0].imgUrl} />
              </div>
              <div className="p-10">
                <div className="text-3xl text-pb-dark-blue pt-2.5 pb-6 font-bold">{filteredItems[0].name}</div>
                <div className="text-4xl text-pb-orange flex gap-8 font-bold">
                  <div className="pb-10">
                  <span>$</span>{filteredItems[0].price}
                  </div>
                  <QuantitySelector />
                </div>
                <div className="flex gap-4">
                  <button>
                  <img src={onlyImgIco} />
                  </button>
                  <button>
                  <img src={seeDetailsBtn} />
                  </button>
                  <button>
                  <img src={addToCartBtn} />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-around w-full gap-6 mb-24 pl-20">
            <div className="w-[400px] h-[200px] bg-white border border-pb-gray2 rounded-lg shadow-2xl">
              <h3 className="pl-3.5 pt-3.5 text-lg font-bold">
                Frequently bought together
              </h3>
              <ChoicesSwiper />
            </div>
            <div>
              <div className="w-[280px] h-[170px] bg-white border border-pb-gray2 rounded-t-lg shadow-2xl">
                <img
                  className="min-w-[280px] min-h-[170px]"
                  src={businessImg}
                  alt="business-gift-card"
                />
              </div>
              <div className="w-[280px] h-[30px] bg-pb-text text-white font-bold text-base text-center border-b border-l border-r border-pb-gray2 rounded-b-lg shadow-2xl">
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
          We found {filteredItems.length} products for you!
        </h3>
        <PriceSlider />
        <div className="mx-auto h-[360px] w-72 scrollbar-thin scrollbar-thumb-pb-scroll-thumb scrollbar-track-pb-scroll overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
          <div className="h-[720px] bg-pb-light-gray">
            {filteredItems.map((filteredItem, index) => {
              return <LaptopFinderCard item={filteredItem} index={index} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LaptopChoicesBody;
