import React from 'react'
import LaptopFinderBody from '../Body/LaptopFinderBody'
import LaptopFinderHeader from '../Header/LaptopFinderHeader'
import LaptopFinderNavBar from '../NavBar/LaptopFinderNavBar'

const LaptopFinder = ({setLaptopFinder}) => {
  return (
    <>
    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
      <div className="relative w-full my-6 mx-auto max-w-screen-2xl">
        {/*content*/}
        <div className="border-0 shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
          {/*header*/}
          <LaptopFinderHeader setLaptopFinder={setLaptopFinder}/>
          {/*nav*/}
          <LaptopFinderNavBar />
          {/*body*/}
          <LaptopFinderBody />
          {/*footer*/}
          <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
            <button
              className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
              onClick={() => setLaptopFinder(false)}
            >
              Close
            </button>
            <button
              className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
              onClick={() => setLaptopFinder(false)}
            >
              ?
            </button>
          </div>
        </div>
      </div>
    </div>
    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
  </>
  )
}

export default LaptopFinder