/* eslint-disable react/prop-types */
import { useState, useRef, useEffect } from "react";
import { LuPlusCircle } from "react-icons/lu";
import "./onTime.css";
import * as React from "react";
import dayjs from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { FiMinusCircle } from "react-icons/fi";

export default function DonateOnTime() {
  const [startDate, setStartDate] = React.useState(dayjs());
  const [endDate, setEndDate] = React.useState(null);
  const [customAmount, setCustomAmount] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    if (customAmount) {
      inputRef.current.focus();
    }
  }, [customAmount]);

  function handleAmount() {
    setCustomAmount(!customAmount);
  }

  function toggleDatePicker() {
    setShowDatePicker(!showDatePicker);
  }

  return (
    <>
      <div className="-mt-5">
        <div className="flex text-center gap-2 mb-5 cursor-pointer">
          <label className=" text-lg">Give:</label>
          <select className="select w-[100px] max-w-xs font-semibold text-lg cursor-pointer">
            <option>Weekly</option>
            <option>Monthly</option>
            <option>Quarterly</option>
            <option>Annually</option>
          </select>
        </div>
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
        <div className="mt-6 w-full h-full flex items-center justify-center rounded-md bg-gray-300 text-black font-medium">
          <div>
            <div className="text-center py-4 border-b border-gray-900">
              <p className="font-medium text-lg"> Greatest Impact </p>
              <p className="text-gray-500 font-normal py-2">
                Thanks for giving AnyTime!
              </p>
            </div>
            <div className="mt-2 text-center">
              <p className="font-normal text-base text-gray-950">
                Your gift starts today. Cancel anytime
              </p>
              <button
                onClick={toggleDatePicker}
                className="flex text-center justify-center items-center gap-2 py-6 ml-10 cursor-pointer"
              >
                {showDatePicker ? (
                  <FiMinusCircle className="w-7 h-7" />
                ) : (
                  <LuPlusCircle className="w-7 h-7" />
                )}
                <p className="font-semibold">Customize Dates</p>
              </button>
              {/*  */}

              {showDatePicker && (
                <div className=" py-5 -mt-5">
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={["DatePicker", "DatePicker"]}>
                      <DatePicker
                        label="Start Date"
                        defaultValue={startDate}
                        onChange={(newValue) => setStartDate(newValue)}
                      />
                      <DatePicker
                        label="End Date"
                        value={endDate}
                        onChange={(newValue) => setEndDate(newValue)}
                        format="YYYY-MM-DD"
                      />
                    </DemoContainer>
                  </LocalizationProvider>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="mt-8">
          <label className=" text-gray-600">Please direct my support:</label>
          <select className="select select-bordered border rounded-md h-[60px] bg-transparent text-gray-600 w-full hover:border-4 hover:border-gray-950 transition-all duration-500 hover:outline-none mt-2">
            <option>Education</option>
            <option>Extra Curricular Activates</option>
            <option>Community Space Build</option>
            <option>
              Single Parent Assistance(Rent, Utilities, Bills, Groceries)
            </option>
            <option>Therapy or Additional Support Resources</option>
          </select>
        </div>
      </div>
    </>
  );
}
