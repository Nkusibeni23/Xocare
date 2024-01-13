import { useState, useRef, useEffect } from "react";
import { LiaHandHoldingHeartSolid } from "react-icons/lia";

export default function DonateOnTime() {
  const [customAmount, setCustomAmount] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    if (customAmount) {
      inputRef.current.focus();
    }
  }, [customAmount]);

  function handleAmount() {
    setCustomAmount(!customAmount);
  }

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 justify-center gap-4 text-center cursor-pointer text-gray-600">
        <div className="border rounded-md border-gray-400 w-[200px] md:w-[200px] h-[50px] flex items-center justify-center hover:border-4 hover:border-gray-950 transition-all duration-500">
          $10
        </div>
        <div className="border rounded-md border-gray-400 w-full h-[50px] flex items-center justify-center hover:border-4 hover:border-gray-950 transition-all duration-500">
          $25
        </div>
        <div className="border rounded-md border-gray-400 w-full h-[50px] flex items-center justify-center hover:border-4 hover:border-gray-950 transition-all duration-500">
          $50
        </div>
        <div className="border rounded-md border-gray-400 w-full h-[50px] flex items-center justify-center hover:border-4 hover:border-gray-950 transition-all duration-500">
          $100
        </div>
        <div className="border rounded-md border-gray-400 w-full h-[50px] flex items-center justify-center hover:border-4 hover:border-gray-950 transition-all duration-500">
          $500
        </div>
        <div className="border rounded-md border-gray-400 w-full h-[50px] flex items-center justify-center hover:border-4 hover:border-gray-950 transition-all duration-500">
          $1000
        </div>
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
    </>
  );
}
