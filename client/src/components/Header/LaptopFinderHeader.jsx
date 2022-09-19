import React from "react";
import logo from "../../images/logo.png";
import xMarkIco from "../../images/circle-xmark-light.svg";

const LaptopFinderHeader = ({ setShowModal }) => {
  return (
    <div className="flex items-start justify-between gap-4 p-5 border-b border-solid border-slate-200 bg-sky-900 w-full">
      <div className="">
        <a href="/">
          <span className="sr-only">Your Company</span>
          <img className="h-auto w-24 sm:h-10" src={logo} alt="" />
        </a>
      </div>
      <span className="my-auto text-white">Laptop Finder</span>
      <button
        className="p-1 ml-auto bg-transparent border-0 text-white opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
        onClick={() => setShowModal(false)}
      >
        <img className="text-white" src={xMarkIco} />
      </button>
    </div>
  );
};

export default LaptopFinderHeader;
