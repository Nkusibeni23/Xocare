/* eslint-disable react/prop-types */
import { useState, useRef, useEffect } from "react";
import { LiaHandHoldingHeartSolid } from "react-icons/lia";
import "../components/pages/onTime.css";

export default function DonateOnTime() {
  const [customAmount, setCustomAmount] = useState(false);
  const [checked, setChecked] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    if (customAmount) {
      inputRef.current.focus();
    }
  }, [customAmount]);

  function handleAmount() {
    setCustomAmount(!customAmount);
  }

  function handleCheck() {
    setChecked(!checked);
  }

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 justify-center gap-4 text-center cursor-pointer text-gray-600">
        <button className="border rounded-md border-gray-400 w-[200px] md:w-[200px] h-[50px] flex items-center justify-center hover:border-4 hover:border-gray-950 transition-all duration-500">
          $10
        </button>
        <button className="border rounded-md border-gray-400 w-full h-[50px] flex items-center justify-center hover:border-4 hover:border-gray-950 transition-all duration-500">
          $25
        </button>
        <button className="border rounded-md border-gray-400 w-full h-[50px] flex items-center justify-center hover:border-4 hover:border-gray-950 transition-all duration-500">
          $50
        </button>
        <button className="border rounded-md border-gray-400 w-full h-[50px] flex items-center justify-center hover:border-4 hover:border-gray-950 transition-all duration-500">
          $100
        </button>
        <button className="border rounded-md border-gray-400 w-full h-[50px] flex items-center justify-center hover:border-4 hover:border-gray-950 transition-all duration-500">
          $500
        </button>
        <button className="border rounded-md border-gray-400 w-full h-[50px] flex items-center justify-center hover:border-4 hover:border-gray-950 transition-all duration-500">
          $1000
        </button>
      </div>
      <div
        onClick={handleAmount}
        className="mt-6 border rounded-md border-gray-400 w-full h-[60px] text-gray-500 hover:border-4 hover:border-gray-950 transition-all duration-500 flex items-center justify-center text-xl cursor-pointer"
      >
        {customAmount ? (
          <input
            ref={inputRef}
            type="number"
            className="bg-transparent h-full w-full flex justify-center items-center text-center hover:outline-none"
          />
        ) : (
          "Custom Amount"
        )}
      </div>
      <button className=" mt-6 w-full h-[60px] rounded-md bg-gray-300 text-black font-medium flex items-center justify-center gap-2 hover:bg-gray-400 transition-all duration-500">
        <LiaHandHoldingHeartSolid /> Multiply your impact. Make it Monthly!
      </button>
      <div className="mt-8">
        <label className=" text-gray-600">Please direct my support:</label>
        <select className="select select-bordered border border-gray-400 rounded-md h-[60px] bg-transparent text-gray-600 w-full hover:border-4 hover:border-gray-950 transition-all duration-500 hover:outline-none">
          <option>Education</option>
          <option>Extra Curricular Activates</option>
          <option>Community Space Build</option>
          <option>
            Single Parent Assistance(Rent, Utilities, Bills, Groceries)
          </option>
          <option>Therapy or Additional Support Resources</option>
        </select>
      </div>
      <div className="mt-6">
        <div className="flex gap-3 items-center cursor-pointer">
          <input type="checkbox" className="custom" onClick={handleCheck} />

          <span className="text-gray-500">Dedicate this gift</span>
        </div>
        {checked && (
          <div className="mt-6">
            <label className=" text-gray-600">What type of dedication?</label>
            <select className=" mt-2 select select-bordered border border-gray-400 rounded-md h-[60px] bg-transparent text-gray-600 w-full hover:border-4 hover:border-gray-950 transition-all duration-500 hover:outline-none">
              <option>In Honor Of</option>
              <option>In Memory Of</option>
            </select>
            <div className="mt-2">
              <label className=" text-gray-600">What type of dedication?</label>
              <input
                className="w-full px-3 p-4 mt-2 bg-transparent rounded-md border border-gray-400 hover:border-4 hover:border-gray-950 hover:outline-none"
                placeholder="Dedication name"
                type="text"
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
}
