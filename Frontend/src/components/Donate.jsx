/* eslint-disable no-unused-vars */
import { useState } from "react";
import { TiTick } from "react-icons/ti";
import "../components/donate.css";
import ChooseGift from "../Donationpage/ChooseGift";
import Details from "../Donationpage/Details";
import AdditionalDetails from "../Donationpage/AdditionalDetails";
import Payment from "../Donationpage/Payment";
import DonateOnGoing from "./pages/DonateOnGoing";
import { BsCalendarHeartFill } from "react-icons/bs";
import { FaArrowCircleLeft } from "react-icons/fa";

const Stepper = () => {
  const steps = [
    "Choose Gift",
    "Details",
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

  const renderCurrentStepPage = () => {
    if (tab === "OnGoing") {
      return <DonateOnGoing />;
    }
    switch (currentStep) {
      case 1:
        return <ChooseGift handleNext={handleNext} />;
      case 2:
        return <Details handleNext={handleNext} />;
      case 3:
        return <AdditionalDetails handleNext={handleNext} />;
      case 4:
        return <Payment handleNext={handleNext} />;
      default:
        return null;
    }
  };

  return (
    <>
      <div className="max-w-screen-3xl mx-auto bg-white min-h-screen">
        <div className="min-h-[430px] bg-black">
          <div className=" absolute flex flex-col items-center justify-center text-white my-14 gap-6 w-full h-full">
            <div className=" text-center">
              <h2 className="font-semibold text-3xl">Xocare</h2>
              <p className=" font-normal text-lg text-gray-200">
                Your gift supports our mission. Make a donation today.
              </p>
            </div>
            <div className="rounded-xl bg-white shadow-lg border border-gray-500 w-[800px] h-auto py-10">
              <div className="flex flex-col items-center justify-center">
                <div className="flex w-[700px] justify-center items-start mb-10">
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

                {currentStep === 1 ? (
                  <div className="grid grid-cols-2 w-[650px] items-center text-black border-b-2 text-xl font-light">
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
                      <BsCalendarHeartFill />
                      Ongoing
                    </button>
                  </div>
                ) : null}

                <div className=" mt-[60px] text-black">
                  {renderCurrentStepPage()}
                </div>
              </div>
              <div className="w-full flex justify-around items-center">
                {currentStep !== 1 && (
                  <button
                    className="flex items-center gap-3 bg-gray-800 px-5 p-4 mt-8 rounded-lg"
                    onClick={handleBack}
                  >
                    <FaArrowCircleLeft />
                    Back
                  </button>
                )}
                {!complete && (
                  <button
                    className={
                      currentStep !== 1
                        ? ` w-[270px] p-4 bg-gray-800 px-4 mt-8 rounded-lg hover:bg-gray-950 transition-all duration-300 font-medium`
                        : `w-[620px] p-4 bg-gray-800 px-4 mt-8 rounded-lg hover:bg-gray-950 transition-all duration-300 font-medium`
                    }
                    onClick={handleNext}
                  >
                    {currentStep === steps.length ? "Finish" : "Give"}
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Stepper;
