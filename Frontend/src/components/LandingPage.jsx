import { useEffect, useState } from "react";
import Logo from "../assets/images/logo.png";
import Background from "../assets/images/home.jpg";
import Background1 from "../assets/images/White.png";
import { FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";

export default function LandingPage() {
  const [isLargeScreen, setIsLargeScreen] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 1024); // Set your desired breakpoint
    };

    // Initial check on component mount
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="mx-auto w-full">
      {isLargeScreen ? (
        <div className="hidden lg:block mx-auto max-w-screen-3xl min-h-screen lg:order-1 text-center bg-white w-full">
          {/* Content for large screens */}
          <div className="flex items-center justify-between">
            {/* Content on the left side for large screens */}

            <div className="w-full">
              <figure className="mb-8">
                <img src={Logo} alt="Logo" className="w-[400px] mx-auto" />
              </figure>
              <div className="w-[450px] mx-auto">
                <p className="py-6 text-left text-3xl text-gray-500 font-light">
                  Empowering Single Mothers to cope with the impacts of divorce;
                  <br />
                  through Psychological Counseling and Financial Couching
                </p>
                <div className="flex justify-center gap-x-28 py-8">
                  <button className="p-2 bg-black text-white rounded-lg cursor-pointer w-[180px]">
                    Full site
                  </button>
                  <button className="p-2 border-2 border-black text-black rounded-lg cursor-pointer w-[180px] hover:bg-black hover:text-white transition-all duration-500">
                    Donate
                  </button>
                </div>
              </div>
            </div>

            {/* Content on the right side */}
            <div className="w-full">
              <div
                className="relative min-h-screen"
                style={{
                  backgroundImage: `url(${Background})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  loading: "lazy",
                }}
              >
                <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex justify-between items-center w-[300px] text-white cursor-pointer">
                  <div>
                    <FaXTwitter className="w-10 h-10" />
                  </div>
                  <div>
                    <FaInstagram className="w-10 h-10" />
                  </div>
                  <div>
                    <FaLinkedin className="w-10 h-10" />
                  </div>
                  <div>
                    <MdOutlineMail className="w-10 h-10" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        // Content for small screens on the right side
        <div className="min-h-screen items-center justify-center bg-black lg:order-1 lg:col-span-1 relative">
          <div className="w-full">
            <div
              className="relative min-h-screen"
              style={{
                backgroundImage: `url(${Background})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                loading: "lazy",
              }}
            >
              <div className=" px-16">
                <figure className=" py-20">
                  <img src={Background1} alt="Logo" className="w-[300px]" />
                </figure>
                <div className="w-[300px]">
                  <p className="text-left text-3xl text-gray-200 font-light">
                    Empowering Single Mothers to cope with the impacts of
                    divorce;
                    <br />
                    through Psychological Counseling and Financial Couching
                  </p>
                  <div className="flex justify-center gap-10 py-14">
                    <button className="p-2 bg-black text-white rounded-lg cursor-pointer w-full">
                      Full site
                    </button>
                    <button className="p-2 text-black rounded-lg cursor-pointer bg-white w-full hover:bg-black hover:text-white transition-all duration-500">
                      Donate
                    </button>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex justify-between items-center w-[300px] text-white cursor-pointer">
                <div>
                  <FaXTwitter className="w-10 h-10" />
                </div>
                <div>
                  <FaInstagram className="w-10 h-10" />
                </div>
                <div>
                  <FaLinkedin className="w-10 h-10" />
                </div>
                <div>
                  <MdOutlineMail className="w-10 h-10" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
