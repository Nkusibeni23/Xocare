import feature1 from "../assets/images/ZZM_6332.jpg";

export default function Feature() {
  return (
    <div className="md:px-14 px-4 max-w-screen-3xl mx-auto bg-white">
      <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
        <div className="lg:w-1/2 w-full">
          <h3 className="text-3xl font-bold mb-3 text-black">
            Get the help YOU need
          </h3>
          <p className="text-base text-gray-500 font-normal leading-relaxed">
            The Single Parent Project specifically helps working single parents
            who make too much for government assistance, but not enough to
            thrive. We offer financial assistance for day-to-day expenses like
            utilities, rent/mortgage payments, gas, groceries, child care
            expenses, and car repairs.
          </p>
          <p className="text-base text-gray-600 mt-4">
            Once we offer financial assistance, we offer a variety of resources,
            to help single parents better their financial, personal, and
            emotional well-being.
          </p>
          <div className="flex justify-center items-center mt-7">
            <img
              src="https://lh3.googleusercontent.com/pw/ABLVV84nJ6fn7uu2pxMuLST543ZKExOA-XIcLOHhtusFSltuW_tCy_ZuL2QplrqCJmO4oWAo1NKsOdyzdbLrXFOI1wwZ5gyRXf3L4XJgPCgSwrK-APOTQ9Mte7tRCFRGB6B9Su1dBPDbLV9FjuPmuKNCxzw=w2334-h1558-s-no-gm?authuser=0"
              alt="features1"
              className="w-full rounded-lg"
            />
          </div>
        </div>
        {/* image for about */}
        <div className="lg:w-1/2 w-full">
          <div className="flex justify-center items-center mt-7">
            <img src={feature1} alt="features1" className="w-full rounded-lg" />
          </div>
          <p className="text-base text-gray-500 font-normal leading-relaxed mt-4">
            The Single Parent Project specifically helps working single parents
            who make too much for government assistance, but not enough to
            thrive. We offer financial assistance for day-to-day expenses like
            utilities, rent/mortgage payments, gas, groceries, child care
            expenses, and car repairs.
          </p>
          <p className="text-base text-gray-600 mt-4">
            Once we offer financial assistance, we offer a variety of resources,
            to help single parents better their financial, personal, and
            emotional well-being.
          </p>
          <button className="border-2 mt-6 mb-6 p-3 rounded-lg border-black font-medium hover:bg-black hover:text-white transition-all duration-500 text-black">
            Learn More &rarr;
          </button>
        </div>
      </div>
    </div>
  );
}
