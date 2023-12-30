import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css";
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";
import cover1 from "../assets/images/ZZM_5988.jpg";
import cover2 from "../assets/images/ZZM_5981.jpg";
import cover3 from "../assets/images/ZZM_6156.jpg";
import cover4 from "../assets/images/ZZM_6002.jpg";
import cover5 from "../assets/images/ZZM_6036.jpg";
export default function Home() {
  return (
    <>
      <Swiper
        className="relative group"
        spaceBetween={50}
        slidesPerView={1}
        navigation={{
          nextEl: ".button-next-slide",
          prevEl: ".button-prev-slide",
        }}
        modules={[Navigation]}
      >
        <SwiperSlide>
          <div className="md:px-12 p-4 max-w-screen-3xl mx-auto mt-[90px] bg-black">
            <div className=" rounded-xl rounded-br-[150px] gradientBg md:p-9 px-4 py-9">
              <div className=" flex flex-col md:flex-row-reverse justify-between items-center gap-2">
                {/* banner image */}
                <div className="flex">
                  <div className=" flex items-center mt-20">
                    <img
                      src={cover1}
                      alt="Image"
                      className="h-[386px] w-96 md:w-72 object-cover shadow-lg rounded-md"
                    />
                  </div>
                  <div className="flex">
                    <img
                      src={cover2}
                      alt="Image"
                      className="w-96 h-[386px] md:w-72 object-cover shadow-lg rounded-md"
                    />
                  </div>
                </div>
                {/* banner content */}
                <div className=" md:w-3/5 text-white">
                  <h2 className=" lg:text-7xl text-4xl font-bold text-white mb-6">
                    We are The Single Parent Project
                  </h2>
                  <div className=" text-[#EBEBEB] text-xl mb-8 leading-relaxed">
                    <p>
                      we are dedicated to providing support, stability, and
                      community for single Parent families
                    </p>
                    <p>Help us Restore Single Parent Families in need.</p>
                  </div>

                  <button className=" py-2 px-8 bg-gray-300 rounded-lg text-black font-semibold cursor-pointer hover:bg-white transition-all duration-300">
                    Make a Donation
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="md:px-12 p-4 max-w-screen-3xl mx-auto mt-[90px] bg-black ">
            <div>
              <div className=" flex flex-col md:flex-row-reverse justify-between items-center gap-2">
                {/* banner image */}

                <div className=" flex items-center mt-20">
                  <img
                    src={cover3}
                    alt="Image"
                    className="h-[386px] w-96 md:w-72 object-cover shadow-lg  rounded-t-full"
                  />
                </div>

                {/* banner content */}
                <div className=" md:w-3/5 text-white">
                  <div className=" w-[250px] lg:w-[500px]">
                    <h2 className="lg:text-7xl text-4xl font-bold text-white mb-6 border-b-2">
                      Our Mission
                    </h2>
                  </div>

                  <p className=" text-gray-100 font-normal text-base lg:text-2xl leading-7">
                    Empowering Single Mothers to cope with the impact of
                    divorce;{" "}
                    <span className=" font-bold">
                      through Psychological Counseling, Promote Positive
                      Parenting and Financial couching.
                    </span>{" "}
                  </p>

                  <button className=" flex items-center gap-2 py-2 px-8 bg-gray-200 rounded-lg text-black font-semibold cursor-pointer hover:bg-white transition-all duration-300 mt-10">
                    Learn More{" "}
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
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="md:px-12 p-4 max-w-screen-3xl mx-auto mt-[90px] bg-black">
            <div className=" rounded-xl rounded-br-[150px] gradientBg md:p-9 px-4 py-9">
              <div className=" flex flex-col md:flex-row-reverse justify-between items-center gap-2">
                {/* banner image */}
                <div className="flex">
                  <div className=" flex items-center mt-20">
                    <img
                      src={cover5}
                      alt="Image"
                      className="h-[386px] w-96 md:w-72 object-cover shadow-lg rounded-xl"
                    />
                  </div>
                  <div className="flex">
                    <img
                      src={cover4}
                      alt="Image"
                      className="w-96 h-[386px] md:w-72 object-cover shadow-lg rounded-xl"
                    />
                  </div>
                </div>
                {/* banner content */}
                <div className=" md:w-3/5 text-white">
                  <h2 className=" lg:text-7xl text-4xl font-bold text-white mb-6">
                    Our Values
                  </h2>
                  <h3 className=" font-semibold leading-7 text-xl mb-4">
                    Compassion. Community.Service.Respect.Equality.
                  </h3>

                  <p className="text-[#EBEBEB] lg:text-lg mb-8 leading-relaxed">
                    we value the well-being of others. We recognize and
                    appreciate our community and strive to give back. We aim to
                    address the public &apos; s needs and value the opportunity
                    to be a positive solution for change. We admire the
                    difference and individuality of each person &apos; s
                    strengths, weakness, and perspective. we accept all. All are
                    welcome. All are loved
                  </p>

                  <button className=" py-2 px-8 bg-gray-300 rounded-lg text-black font-semibold cursor-pointer hover:bg-white transition-all duration-300">
                    Our Impact
                  </button>
                </div>
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
    </>
  );
}
