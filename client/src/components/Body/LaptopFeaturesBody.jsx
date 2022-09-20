import React from 'react'
import PriceSlider from '../Slider/PriceSlider'

const LaptopFeaturesBody = ({nextStep,prevStep}) => {
  return (
    <div className="relative flex flex-row px-24 mb-5 mt-8">
    <div className="w-4/6 bg-pb-container-bg rounded-l-3xl">
      <button onClick={prevStep} className="flex gap-1 mt-3 mb-5">
        <span className="text-pb-dark-gray pl-7">Back</span>
      </button>
      <div className="">
        <h1 className="text-pb-text text-4xl mb-20 text-center">Which features would you like to include?</h1>
      </div>
      <div className="mx-auto text-pb-dark-blue text-2xl leading-relaxed flex flex-col w-full gap-4">
        <div className="flex flex-center w-full gap-6 mb-9 pl-48">
          <button onClick={nextStep} className="bg-white w-56 h-40 rounded-lg fill-pb-orange">
            <span>
              <svg
                className="h-10 mx-auto"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M224 256c70.7 0 128-57.31 128-128s-57.3-128-128-128C153.3 0 96 57.31 96 128S153.3 256 224 256zM224 32c52.94 0 96 43.06 96 96c0 52.93-43.06 96-96 96S128 180.9 128 128C128 75.06 171.1 32 224 32zM274.7 304H173.3C77.61 304 0 381.6 0 477.3c0 19.14 15.52 34.67 34.66 34.67h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304zM413.3 480H34.66C33.2 480 32 478.8 32 477.3C32 399.4 95.4 336 173.3 336h101.3C352.6 336 416 399.4 416 477.3C416 478.8 414.8 480 413.3 480z" />
              </svg>
            </span>
            <h3>2-in1 Device</h3>
          </button>
          <button className="bg-white w-56 h-40 rounded-lg fill-pb-orange">
            <span>
              <svg
                className="h-10 mx-auto"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
              >
                <path d="M617.8 136.7l-286.3-102.7C324 31.33 315.9 31.36 308.5 33.98L22.22 136.7C8.719 141.5 0 153.8 0 167.1s8.719 26.47 22.22 31.31L48 208.6v113.1l-31.59 138.8c-1.094 4.75 .0469 9.719 3.078 13.53S27.13 480 32.01 480h63.98c4.859 0 9.461-2.219 12.49-6c3.047-3.781 4.188-8.75 3.125-13.5L80 319.6V220l228.5 81.99c3.703 1.313 7.578 1.938 11.47 1.938c3.906 0 7.812-.6563 11.56-1.969l286.2-102.7C631.3 194.5 640 182.2 640 167.1S631.3 141.5 617.8 136.7zM52.08 447.1l12.09-52.75l11.84 52.75H52.08zM319.3 271.9L129.5 203.8l195.2-60.5c8.438-2.625 13.2-11.55 10.57-20.02c-2.609-8.407-11.49-13.23-20.01-10.55L79.4 185.8L32 168l288.7-103.9L608 168L319.3 271.9zM482.3 288.1c-8.766 1.156-14.94 9.188-13.78 17.97l11.36 86.63c1.156 8.907-4.656 17.66-14.8 22.34c-43.91 20.31-93.56 31.72-143.2 32.94H318.5c-50.02-1.219-99.67-12.63-143.6-32.94c-10.14-4.688-15.95-13.44-14.8-22.31L171.5 306.1c1.156-8.782-5.016-16.81-13.78-17.97C148.8 286.9 140.9 293.2 139.8 301.9l-11.36 86.69c-3.016 23.03 9.969 44.85 33.08 55.53C209.4 466.2 263.4 478.7 318.1 480h4.141c54.36-1.344 108.4-13.75 156.2-35.88c23.11-10.69 36.09-32.5 33.08-55.56l-11.36-86.66C499.1 293.2 491.1 286.9 482.3 288.1z" />
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
          We found 10 products for you!
      </h3>
      <PriceSlider />
    </div>
  </div>
  )
}

export default LaptopFeaturesBody