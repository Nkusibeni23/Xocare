/* eslint-disable no-undef */
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css";
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";

import background1 from "../assets/images/background2.jpg";
import About from "./About";
import Feature from "./Feature";
import Outreach from "./Outreach";
import Advancing from "./Advancing";
import Background from "./Background";
import Our_Family from "./Our-Family";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Home() {
  const backgroundImageUrl = `url(https://lh3.googleusercontent.com/pw/ABLVV84E_itgbVaqBfzJDhnT3EOUhBExokL-_IMytu-QazaLQ0QcJ1Ci_qXDFYZiq9-85sh6iM865r4YRx54_Ovgln4iCfRSrT4LbBZkt8F6d6cQUV7TIocSUormxhRZur2NYKjmEny0DqORWBdDsCsVgKs=w2334-h1558-s-no-gm?authuser=0)`;
  const backgroundImageUrl1 = `url(${background1})`;
  const backgroundImageUrl2 = `url(https://lh3.googleusercontent.com/pw/ABLVV859WuiICwSwCahER6yvWG37Dr_v4vap-qpWYMFiGJdUKDLrtulGeNEIplb26VeqVkisqMOJftGoZOuHnGcW8N3Ke4pYGhZ1Rok3sQmV_eCGYVUZDBBMQJZ06bKQPZEwCbcmtHfuBwPKd67O_gQp5rQ=w2334-h1558-s-no-gm?authuser=0)`;

  const containerStyle = {
    backgroundImage: backgroundImageUrl,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "550px",
    loading: "lazy",
  };

  const containerStyle1 = {
    backgroundImage: backgroundImageUrl1,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "550px",
    loading: "lazy",
  };

  const containerStyle2 = {
    backgroundImage: backgroundImageUrl2,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "550px",
    loading: "lazy",
  };

  return (
    <>
      <Navbar />
      <Swiper
        className="relative group"
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        navigation={{
          nextEl: ".button-next-slide",
          prevEl: ".button-prev-slide",
        }}
        modules={[Navigation]}
      >
        <SwiperSlide>
          <div
            style={containerStyle}
            className=" px-16 max-w-screen-3xl mx-auto mt-[90px] bg-white"
          >
            <div className="flex items-start justify-start py-32">
              <div className=" flx-cols w-[350px]">
                <h2 className="text-3xl font-bold text-white mb-6 border-b">
                  We are The Single Parent Project
                </h2>

                <p className=" text-white font-medium text-base lg:text-lg">
                  Empowering Single Mothers to cope with the impact of divorce;{" "}
                  <span className="font-bold">
                    through Psychological Counseling, Promote Positive Parenting
                    and Financial couching.
                  </span>{" "}
                </p>
                <button className=" flex items-center gap-2 py-2 px-8 border-2 border-gray-100 shadow-lg rounded-lg text-gray-100 font-bold cursor-pointer hover:bg-white hover:text-stone-950 transition-all duration-300 mt-10">
                  Make a Donate
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={containerStyle1}
            className=" px-16 max-w-screen-3xl mx-auto mt-[90px]"
          >
            <div className="flex items-start justify-start py-32">
              <div className=" flx-cols w-[250px]">
                <h3 className="text-3xl font-bold text-teal-600 mb-6 border-b">
                  Join Us In Making a Difference
                </h3>
                <p className="font-medium text-base lg:text-lg">
                  Become part of our community by donating or volunteering your
                  time.
                </p>
                <button className="flex items-center gap-2 py-2 px-8 border-2 border-black shadow-lg rounded-lg text-black font-bold cursor-pointer hover:bg-black hover:text-white transition-all duration-300 mt-10">
                  Learn More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={containerStyle2}
            className=" px-16 max-w-screen-3xl mx-auto mt-[90px]"
          >
            <div className="flex items-start justify-start py-32">
              <div className=" flx-cols w-[250px]">
                <h3 className="text-3xl font-bold  mb-6 border-b text-black">
                  Get Involved with Our Cause
                </h3>
                <p className="font-medium text-base lg:text-lg text-white">
                  See how you can contribute to our mission and make a real
                  difference in the lives of those we serve.
                </p>
                <button className=" flex items-center gap-2 py-2 px-8 border-2 border-white shadow-lg rounded-lg text-white font-bold cursor-pointer hover:bg-white hover:text-stone-950 transition-all duration-300 mt-10">
                  Our Impact
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <div className="absolute top-[50%] z-10 -left-[23rem] text-black w-[40px] h-[40px] bg-white grid place-items-center cursor-pointer button-prev-slide group-hover:left-0 font-semibold rounded-full">
          <IoIosArrowRoundBack />
        </div>
        <div className="absolute top-[50%] z-10 -right-[23rem] text-black w-[40px] h-[40px] bg-white grid place-items-center cursor-pointer button-next-slide group-hover:right-0 font-semibold rounded-full">
          <IoIosArrowRoundForward />
        </div>
      </Swiper>
      <About />
      <Feature />
      <Outreach />
      <Background />
      <Advancing />
      <Our_Family />
      <Footer />
    </>
  );
}
