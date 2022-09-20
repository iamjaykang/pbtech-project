import React from "react";
import PriceSlider from "../Slider/PriceSlider";

const LaptopActivitiesBody = ({ prevStep, nextStep }) => {
  return (
    <div className="relative flex flex-row px-24 mb-5 mt-8">
      <div className="w-4/6 bg-pb-container-bg rounded-l-3xl">
        <button onClick={prevStep} className="flex gap-1 mt-3 mb-5">
          <span className="text-pb-dark-gray pl-7 mb-10">Back</span>
        </button>
        <div className="">
          <h1 className="text-pb-text text-4xl mb-10 text-center">
            Which activities does your work invole?
          </h1>
        </div>
        <div className="mx-auto text-pb-dark-blue text-2xl leading-relaxed flex flex-col w-full gap-4">
          <div className="flex flex-center w-full gap-6 mb-6 pl-20">
            <button className="bg-white w-56 h-40 rounded-lg fill-pb-orange">
              <span>
                <svg
                  className="h-10 mx-auto"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 512"
                >
                  <path d="M415.2 21.06L255.2 501.1C252.4 509.4 243.3 513.1 234.9 511.2C226.6 508.4 222 499.3 224.8 490.9L384.8 10.94C387.6 2.554 396.7-1.977 405.1 .8175C413.4 3.612 417.1 12.67 415.2 21.06L415.2 21.06zM170.6 139.9L40.08 256L170.6 372C177.2 377.9 177.8 388 171.1 394.6C166.1 401.2 155.1 401.8 149.4 395.9L5.371 267.1C1.955 264.9 .0003 260.6 0 256C-.0003 251.4 1.954 247.1 5.37 244L149.4 116C155.1 110.2 166.1 110.8 171.1 117.4C177.8 123.1 177.2 134.1 170.6 139.9L170.6 139.9zM490.6 116L634.6 244C638 247.1 640 251.4 640 255.1C640 260.6 638 264.9 634.6 267.1L490.6 395.9C484 401.8 473.9 401.2 468 394.6C462.2 388 462.8 377.9 469.4 372L599.9 255.1L469.4 139.9C462.8 134.1 462.2 123.1 468 117.4C473.9 110.8 484 110.2 490.6 116H490.6z" />
                </svg>
              </span>
              <h3>Programming</h3>
            </button>
            <button className="bg-white w-56 h-40 rounded-lg fill-pb-orange">
              <span>
                <svg
                  className="h-10 mx-auto"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                >
                  <path d="M320.5 409.1C325.4 449.5 359.1 480 399.9 480H539.1C517.9 480 501.6 468.5 491.1 455.1C482.5 441.9 477.8 425 479.5 408.3C479.8 405.6 479.9 402.8 479.9 400C479.9 359.2 449.4 325.5 409.9 320.6L436.4 294.1C480.4 309.2 511.9 350.9 511.9 400C511.9 403.9 511.7 407.8 511.3 411.6C509.5 429.1 521.5 448 539.1 448H543.9C561.6 448 575.9 462.3 575.9 480C575.9 497.7 561.6 512 543.9 512H399.9C350.8 512 309.1 480.4 294 436.5L320.5 409.1zM18.75 109.3C-6.248 84.26-6.248 43.74 18.75 18.75C43.74-6.248 84.26-6.248 109.3 18.75L224 133.5L201.4 156.1L86.63 41.37C74.13 28.88 53.87 28.88 41.37 41.37C28.88 53.87 28.88 74.13 41.37 86.63L156.1 201.4L133.5 223.1L18.75 109.3zM405.2 16.97C427.1-4.899 462.5-4.899 484.4 16.97L527 59.6C548.9 81.47 548.9 116.9 527 138.8L214.3 451.6C202.9 462.9 188.9 471.2 173.5 475.8L52.51 511.4C46.9 513 40.83 511.5 36.69 507.3C32.55 503.2 30.1 497.1 32.65 491.5L68.23 370.5C72.76 355.1 81.09 341.1 92.44 329.7L405.2 16.97zM461.8 39.6C452.4 30.23 437.2 30.23 427.8 39.6L373 94.4L449.6 170.1L504.4 116.2C513.8 106.8 513.8 91.6 504.4 82.23L461.8 39.6zM98.93 379.6L71.63 472.4L164.4 445.1C174.7 442.1 184.1 436.5 191.6 428.9L426.1 193.6L350.4 117L115.1 352.4C107.5 359.9 101.9 369.3 98.93 379.6V379.6z" />
                </svg>
              </span>
              <h3>Design</h3>
            </button>
            <button className="bg-white w-56 h-40 rounded-lg fill-pb-orange">
              <span>
                <svg
                  className="h-10 mx-auto"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M386.7 23.11C411.6-2.142 452.4-2.267 477.5 22.83L489.4 34.75C514.4 59.74 514.4 100.3 489.4 125.3L296.9 317.8C288.1 326.6 276.9 332.7 264.8 335.2L179.3 353.2C173.1 354.3 168.5 352.6 164.7 348.8C160.9 344.1 159.2 339.5 160.3 334.2L178.3 248.6C180.8 236.5 186.8 225.5 195.4 216.7L386.7 23.11zM454.8 45.46C442.3 32.91 421.9 32.97 409.4 45.6L382.1 72.37L440 129.4L466.8 102.6C479.3 90.13 479.2 69.87 466.8 57.38L454.8 45.46zM209.6 255.1L196.7 316.8L258.2 303.9C264.3 302.6 269.9 299.6 274.3 295.2L417.4 152L360.5 95.14L218.2 239.2C213.9 243.6 210.9 249.1 209.6 255.1L209.6 255.1zM301.1 52.89C286.5 49.69 271.5 48 256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C264.8 464 272 471.2 272 480C272 488.8 264.8 496 256 496C123.5 496 16 388.5 16 256C16 123.5 123.5 16 256 16C280.7 16 304.5 19.73 326.1 26.67L301.1 52.89zM496 256C496 335.5 431.5 400 352 400C339.6 400 327.5 398.4 316 395.5C307.5 393.3 302.3 384.5 304.5 375.1C306.7 367.4 315.4 362.3 323.1 364.5C332.9 366.8 342.3 368 352 368C413.9 368 464 317.9 464 256C464 240.9 462.4 226.1 459.3 211.9L485.5 185.7C492.3 207.9 496 231.5 496 256V256z" />
                </svg>
              </span>
              <h3>Editing</h3>
            </button>
          </div>
          <div className="flex flex-around w-full gap-6 mb-24 pl-52">
            <button className="bg-white w-56 h-40 rounded-lg fill-pb-orange">
              <span>
                <svg
                  className="h-10 mx-auto"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 512"
                >
                  <path d="M240 208c-4.094 0-8.188 1.562-11.31 4.688c-6.25 6.25-6.25 16.38 0 22.62l80 80c6.25 6.25 16.38 6.25 22.62 0l80-80c6.25-6.25 6.25-16.38 0-22.62s-16.38-6.25-22.62 0l-52.69 52.69V48c0-8.844-7.167-16-16.01-16S304 39.16 304 48v217.4L251.3 212.7C248.2 209.6 244.1 208 240 208zM400 64H512c17.67 0 32 14.33 32 32v240c0 8.844 7.156 16 16 16s16-7.156 16-16V96c0-35.35-28.65-64-64-64h-112C391.2 32 384 39.16 384 48C384 56.84 391.2 64 400 64zM80 352C88.84 352 96 344.8 96 336V96c0-17.67 14.33-32 32-32h112C248.8 64 256 56.84 256 48C256 39.16 248.8 32 240 32H128C92.65 32 64 60.65 64 96v240C64 344.8 71.16 352 80 352zM624 384h-608C7.25 384 0 391.3 0 400V416c0 35.25 28.75 64 64 64h512c35.25 0 64-28.75 64-64v-16C640 391.3 632.8 384 624 384zM576 448H64c-17.64 0-32-14.36-32-32h576C608 433.6 593.6 448 576 448z" />
                </svg>
              </span>
              <h3>Working with Data Files</h3>
            </button>
            <button
              onClick={nextStep}
              className="bg-white w-56 h-40 rounded-lg fill-pb-orange"
            >
              <span>
                <svg
                  className="h-10 mx-auto"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 512"
                >
                  <path d="M80 160C88.84 160 96 152.8 96 144V64c0-17.67 14.33-32 32-32h256c17.67 0 32 14.33 32 32h32c0-35.35-28.65-64-64-64H128C92.65 0 64 28.65 64 64v80C64 152.8 71.16 160 80 160zM576 96H256C220.7 96 192 124.7 192 160h32c0-17.67 14.33-32 32-32h320c17.67 0 32 14.33 32 32v192c0 17.67-14.33 32-32 32h-144c-8.836 0-16 7.162-16 16c0 8.836 7.164 16 16 16H576c35.35 0 64-28.65 64-64V160C640 124.7 611.3 96 576 96zM560 256C568.9 256 576 248.9 576 240v-64C576 167.1 568.9 160 560 160h-64C487.1 160 480 167.1 480 176v64C480 248.9 487.1 256 496 256H560zM512 192h32v32h-32V192zM320 192H64C28.65 192 0 220.7 0 256v192c0 35.35 28.65 64 64 64h256c35.35 0 64-28.65 64-64V256C384 220.7 355.3 192 320 192zM352 448c0 17.67-14.33 32-32 32H64c-17.67 0-32-14.33-32-32V313.6C44.75 323.3 64 339.3 128 384c12.75 9.625 38.38 32 64 32s51.25-22.38 64-32c64-44.75 83.25-60.75 96-70.38V448zM352 275.3c-25.62 19.12-22.38 19.12-115.3 86.38C227.3 364.8 208 384 192 384s-35.25-19.25-44.75-25.62C54.38 291.3 57.63 291.3 32 272V256c0-17.67 14.33-32 32-32h256c17.67 0 32 14.33 32 32V275.3z" />
                </svg>
              </span>
              <h3>General Business Task</h3>
            </button>
          </div>
        </div>
      </div>
      <div className="w-2/6 bg-pb-light-gray rounded-r-3xl">
        <h2 className="text-pb-text text-3xl mt-8 mb-3 ml-[90px]">
          You may also like...
        </h2>
        <h3 className="text-pb-orange text-xl ml-[92px]">
          We found 15 products for you!
        </h3>
        <PriceSlider />
      </div>
    </div>
  );
};

export default LaptopActivitiesBody;
