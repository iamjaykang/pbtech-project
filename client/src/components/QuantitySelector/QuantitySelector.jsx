import React, { useState } from "react";

const QuantitySelector = () => {
  const [quantity, setQuantity] = useState(0);

  const plusQuantity = () => {
    setQuantity(quantity + 1);
  };

  const minusQuantity = () => {
    setQuantity(quantity - 1);
  };
  return (
    <div className="custom-number-input h-10 w-32 flex gap-4">
      <label
        for="custom-input-number"
        className="my-auto w-full text-black text-base font-semibold"
      >
        Quantity
      </label>
      <div className="flex flex-row h-10 w-full border border-pb-gray2 rounded-lg relative bg-transparent mt-1">
        <button
          data-action="decrement"
          onClick={minusQuantity}
          className=" bg-white text-gray-600 hover:text-gray-300 hover:bg-gray-200 h-full w-20 rounded-l cursor-pointer outline-none"
        >
          <span className="align-top text-2xl font-thin text-pb-gray2">−</span>
        </button>
        <input
          type="number"
          className="text-lg outline-none focus:outline-none text-center w-full bg-white font-semibold text-md hover:text-pb-orange focus:text-pb-orange  md:text-basecursor-default flex items-center text-pb-orange outline-none"
          name="custom-input-number"
          value={quantity}
        ></input>
        <button
          data-action="increment"
          onClick={plusQuantity}
          className="bg-white text-gray-600 hover:text-gray-300 hover:bg-gray-200 h-full w-20 rounded-r cursor-pointer"
        >
          <span className="align-top text-2xl font-thin text-pb-gray2">+</span>
        </button>
      </div>
    </div>
  );
};

export default QuantitySelector;
