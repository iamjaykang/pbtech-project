import React from "react";
import PriceSlider from "../Slider/PriceSlider";
import LaptopFinderCard from "../LaptopFinderCard/LaptopFinderCard";

const LaptopFeaturesBody = ({value, setValue, laptopsArray, nextStep, prevStep }) => {
  const filteredItems = laptopsArray.filter(item => item.category.includes('Work,Business'))
  const filteredByPrice = filteredItems.filter(item => item.price < value)
  return (
    <div className="relative flex flex-row px-24 mb-5 mt-8">
      <div className="w-4/6 bg-pb-container-bg rounded-l-3xl">
        <button onClick={prevStep} className="flex gap-1 mt-3 mb-5">
          <span className="text-pb-dark-gray pl-7">Back</span>
        </button>
        <div className="">
          <h1 className="text-pb-text text-4xl mb-20 text-center">
            Which features would you like to include?
          </h1>
        </div>
        <div className="mx-auto text-pb-dark-blue text-2xl leading-relaxed flex flex-col w-full gap-4">
          <div className="flex flex-center w-full gap-6 mb-9 pl-48">
            <button
              onClick={nextStep}
              className="bg-white w-56 h-40 rounded-lg fill-pb-orange shadow-2xl"
            >
              <span>
                <svg
                  className="h-10 mx-auto"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 512"
                >
                  <path d="M624 383.1h-608c-8.75 0-16 7.25-16 16v16c0 35.25 28.75 64 64 64h512c35.25 0 64-28.75 64-64v-16C640 391.2 632.8 383.1 624 383.1zM576 448H64c-17.64 0-32-14.36-32-32h576C608 433.6 593.6 448 576 448zM80 352C88.84 352 96 344.8 96 336V96c0-17.66 14.36-32 32-32h384c17.64 0 32 14.34 32 32v240c0 8.844 7.156 16 16 16s16-7.156 16-16V96c0-35.28-28.7-64-64-64H128C92.7 32 64 60.72 64 96v240C64 344.8 71.16 352 80 352z" />
                </svg>
              </span>
              <h3>2-in1 Device</h3>
            </button>
            <button className="bg-white w-56 h-40 rounded-lg fill-pb-orange shadow-2xl">
              <span>
                <svg
                  className="h-10 mx-auto"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 512"
                >
                  <path d="M514.7 23.11C539.6-2.142 580.4-2.267 605.5 22.83L617.4 34.75C642.4 59.74 642.4 100.3 617.4 125.3L424.9 317.8C416.1 326.6 404.9 332.7 392.8 335.2L307.3 353.2C301.1 354.3 296.5 352.6 292.7 348.8C288.9 344.1 287.2 339.5 288.3 334.2L306.3 248.6C308.8 236.5 314.8 225.5 323.4 216.7L514.7 23.11zM582.8 45.46C570.3 32.91 549.9 32.97 537.4 45.6L510.1 72.37L568 129.4L594.8 102.6C607.3 90.13 607.2 69.87 594.8 57.38L582.8 45.46zM337.6 255.1L324.7 316.8L386.2 303.9C392.3 302.6 397.9 299.6 402.3 295.2L545.4 152L488.5 95.14L346.2 239.2C341.9 243.6 338.9 249.1 337.6 255.1L337.6 255.1zM304 128C312.8 128 320 135.2 320 144C320 152.8 312.8 160 304 160H64C46.33 160 32 174.3 32 192V448C32 465.7 46.33 480 64 480H512C529.7 480 544 465.7 544 448V272C544 263.2 551.2 256 560 256C568.8 256 576 263.2 576 272V448C576 483.3 547.3 512 512 512H64C28.65 512 0 483.3 0 448V192C0 156.7 28.65 128 64 128H304zM104 320C104 306.7 114.7 296 128 296C141.3 296 152 306.7 152 320C152 333.3 141.3 344 128 344C114.7 344 104 333.3 104 320zM248 320C248 333.3 237.3 344 224 344C210.7 344 200 333.3 200 320C200 306.7 210.7 296 224 296C237.3 296 248 306.7 248 320z" />
                </svg>
              </span>
              <h3>Touch Screen</h3>
            </button>
          </div>
          <div className="text-xl w-full text-right mb-40 pr-40">
            <button onClick={nextStep} className="text-pb-text">
              <h3>Skip</h3>
            </button>
          </div>
        </div>
      </div>
      <div className="w-2/6 bg-pb-light-gray rounded-r-3xl">
        <h2 className="text-pb-text text-3xl mt-8 mx-auto mb-3 ml-[90px]">
          You may also like...
        </h2>
        <h3 className="text-pb-orange text-xl ml-[92px]">
          We found {filteredByPrice.length} products for you!
        </h3>
        <PriceSlider value={value} setValue={setValue}/>
        <div className="mx-auto h-96 w-72 scrollbar-thin scrollbar-thumb-pb-scroll-thumb scrollbar-track-pb-scroll overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
          <div className="h-[60rem] bg-pb-light-gray">
            {filteredByPrice.map((filteredItem, index) => (
              <LaptopFinderCard item={filteredItem} index={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LaptopFeaturesBody;
