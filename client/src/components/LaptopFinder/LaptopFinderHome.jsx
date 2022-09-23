import React from 'react'
import LaptopFinderBody from '../Body/LaptopFinderBody'
import LaptopFinderHeader from '../Header/LaptopFinderHeader'
import LaptopFinderNavBar from '../NavBar/LaptopFinderNavBar'

const LaptopFinder = ({value, setValue, laptopsArray, setStep,step, closeModal,nextStep,prevStep}) => {
  return (
    <>
    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-[100] outline-none focus:outline-none">
      <div className="relative w-full my-6 mx-auto max-w-screen-2xl">
        {/*content*/}
        <div className="border-0 shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
          {/*header*/}
          <LaptopFinderHeader closeModal={closeModal}/>
          {/*nav*/}
          <LaptopFinderNavBar setStep={setStep} step={step} />
          {/*body*/}
          <LaptopFinderBody value={value} setValue={setValue} laptopsArray={laptopsArray} nextStep={nextStep} prevStep={prevStep}/>
          {/*footer*/}
        </div>
      </div>
    </div>
    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
  </>
  )
}

export default LaptopFinder