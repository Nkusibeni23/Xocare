import Logo from "../assets/images/logo.png";
import Background from "../assets/images/home.jpg";
import { FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";

export default function LandingPage() {
  return (
    <div className="mx-auto w-full lg:grid lg:grid-cols-2 lg:items-center ">
      <div className="hidden lg:block w-full mx-auto max-w-screen-3xl items-center justify-center min-h-screen lg:order-1 text-center bg-white py-48">
        <figure className="mb-8">
          <img src={Logo} alt="Logo" className="w-[500px] h-36 mx-auto" />
        </figure>
        <div className="w-[450px] mx-auto">
          <p className="py-6 text-left text-3xl text-gray-500 font-light">
            Empowering Single Mothers to cope with the impact of divorce;
            <br />
            through Psychological Counseling and Financial Coaching.
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
  );
}
