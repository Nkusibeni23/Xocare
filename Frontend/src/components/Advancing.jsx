import background6 from "../assets/images/background6.jpg";
import background7 from "../assets/images/background7.jpg";

export default function Advancing() {
  return (
    <div className="flex flex-col max-w-screen-3xl mx-auto bg-black px-6">
      <div className="flex flex-col sm:flex-row items-center justify-center">
        <div className="flex flex-wrap justify-center items-center py-8 text-center space-y-8 sm:space-y-0 sm:space-x-8">
          <div
            className="w-full sm:w-1/2 md:w-2/5 lg:w-4/12 p-6 rounded-lg"
            style={{
              backgroundImage: `url(${background6})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              loading: "lazy",
            }}
          >
            <div className="bg-black bg-opacity-20 p-6 rounded-lg">
              <h3 className="font-extrabold mb-3 text-white border-b">
                Advancing Women&apos;s Right:
              </h3>
              <p className="text-sm lg:text-lg text-white font-medium">
                Through our advocacy efforts, we work tirelessly to uphold the
                rights and overall well-being of women on a global scale.
              </p>
              <button className="p-3 bg-orange-500 w-full mt-4 rounded-lg font-semibold hover:bg-orange-600 transition-all duration-500 lg:w-[220px] text-white">
                Donate
              </button>
            </div>
          </div>
          <div
            className="w-full sm:w-1/2 md:w-2/5 lg:w-4/12 p-6 rounded-lg"
            style={{
              backgroundImage: `url(${background7})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              loading: "lazy",
            }}
          >
            <div className="bg-black bg-opacity-20 p-6 rounded-lg">
              <h3 className="font-extrabold mb-3 text-white text-nowrap border-b">
                Empowering Through Education:
              </h3>
              <p className="text-sm lg:text-lg text-white font-medium">
                Our mission encompasses raising awareness about pressing human
                rights issues, shedding light on injustices.
              </p>
              <button className="p-3 bg-orange-500 w-full mt-4 rounded-lg font-semibold hover:bg-orange-600 transition-all duration-500 lg:w-[220px] text-white">
                Donate
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
