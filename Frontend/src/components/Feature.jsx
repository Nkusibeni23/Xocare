import feature1 from "../assets/images/ZZM_6332.jpg";
import feature2 from "../assets/images/ZZM_6047.jpg";

export default function Feature() {
  return (
    <div className=" my-16 md:px-14 px-4 max-w-screen-2xl mx-auto">
      <div className=" flex flex-col lg:flex-row justify-between items-start gap-10">
        <div className=" lg:w-2/4">
          <h3 className="text-3xl font-bold lg:w-full mb-3">
            Get the help YOU need
          </h3>
          <p className=" text-base text-gray-500 font-normal leading-relaxed">
            The Single Parent Project specifically helps working single parents
            who make too much for government assistance, but not enough to
            thrive. We offer financial assistance for day-to-day expenses like
            utilities, rent/mortgage payments, gas, groceries, child care
            expenses, and car repairs.{" "}
          </p>
          <p className=" text-base text-gray-600 mt-4">
            Once we offer financial assistance, we offer a variety of resources,
            to help single parents better their financial, personal, and
            emotional well-being.
          </p>
          <div className=" mt-7">
            <img src={feature1} alt="features1" className="rounded-lg" />
          </div>
        </div>
        {/* image for about */}
        <div className="w-full lg:w-3/4">
          <div>
            <div>
              <img src={feature2} alt="features1" className="rounded-lg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
