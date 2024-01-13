/* eslint-disable no-unused-vars */
import { useState } from "react";
import { TiTick } from "react-icons/ti";
import { TbCalendarHeart } from "react-icons/tb";
import "./donate.css";
import DonateOnTime from "./pages/DonateOnTime";
import DonateOnGoing from "./pages/DonateOnGoing";

const Stepper = () => {
  const steps = [
    "Choose Your Gift",
    "Your Details",
    "Additional Details",
    "Payment Details",
  ];

  const [currentStep, setCurrentStep] = useState(1);
  const [complete, setComplete] = useState(false);
  const [tab, setTab] = useState("onTime");

  const handleNext = () => {
    setCurrentStep((prev) => (prev === steps.length ? prev : prev + 1));
  };

  const handleBack = () => {
    setCurrentStep((prev) => (prev === 1 ? prev : prev - 1));
  };

  return (
    <>
      <div className="max-w-screen-3xl mx-auto bg-white min-h-screen">
        <div className="min-h-[430px] bg-black">
          <div className="flex flex-col items-center justify-center text-white py-10 gap-10">
            <div className="text-center">
              <h2 className="font-semibold mb-3 text-3xl">Xocare</h2>
              <p className="font-normal text-lg text-gray-200">
                Your gift supports our mission. Make a donation today.
              </p>
            </div>
            <div className="rounded-xl bg-white shadow-lg border border-gray-500 w-full md:w-[730px] h-auto py-10">
              <div className="flex flex-col items-center justify-center">
                <div className="flex w-full md:w-[500px] justify-center items-start mb-10">
                  {steps.map((step, index) => (
                    <div
                      key={index}
                      className={`step-item ${
                        currentStep === index + 1 && "active"
                      } ${(index + 1 < currentStep || complete) && "complete"}`}
                    >
                      <div className="step">
                        {index + 1 < currentStep || complete ? (
                          <TiTick size={24} />
                        ) : (
                          index + 1
                        )}
                      </div>
                      <p className="text-gray-500">{step}</p>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-2 w-full items-center text-black border-b-2 text-xl font-light">
                  <button
                    onClick={() => setTab("onTime")}
                    className={`${
                      tab === "onTime"
                        ? "text-black border-b-4 border-black font-medium"
                        : null
                    }`}
                  >
                    One Time
                  </button>
                  <button
                    onClick={() => setTab("OnGoing")}
                    className={`${
                      tab === "OnGoing"
                        ? "text-black border-b-4 border-black font-medium flex items-center justify-center gap-2"
                        : "flex items-center justify-center gap-2"
                    }`}
                  >
                    <TbCalendarHeart />
                    Ongoing
                  </button>
                </div>
                <div className="mt-4 md:mt-[40px]">
                  {tab === "onTime" && <DonateOnTime />}
                  {tab === "OnGoing" && <DonateOnGoing />}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between md:items-center">
        <button
          className="btn mb-4 md:mb-0"
          onClick={handleBack}
          disabled={currentStep === 1}
        >
          Back
        </button>
        {!complete && (
          <button className="btn" onClick={handleNext}>
            {currentStep === steps.length ? "Finish" : "Next"}
          </button>
        )}
      </div>
    </>
  );
};

export default Stepper;
