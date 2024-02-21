import { useState } from "react";
import Individual from "./DetailsStep/Individual";
import Company from "./DetailsStep/company";

export default function Details() {
  const [tab, setTab] = useState("Individual");

  return (
    <div className="w-full mx-auto max-w-screen-2xl">
      <div className="-mt-12">
        <p className=" text-gray-900 font-medium text-lg mr-[400px]">
          What&apos;s your name?
        </p>
        <div className=" w-full grid grid-cols-2 items-center text-black border-b-2 text-xl font-light mt-8">
          <button
            onClick={() => setTab("Individual")}
            className={`${
              tab === "Individual"
                ? "text-black border-b-4 border-black font-medium"
                : null
            }`}
          >
            Individual
          </button>
          <button
            onClick={() => setTab("Company")}
            className={`${
              tab === "Company"
                ? "text-black border-b-4 border-black font-medium flex items-center justify-center gap-2"
                : "flex items-center justify-center gap-2"
            }`}
          >
            I&apos;m Company
          </button>
        </div>
      </div>

      <div className="mt-8">
        {tab === "Individual" && <Individual />}
        {tab === "Company" && <Company />}
      </div>
    </div>
  );
}
