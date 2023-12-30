export default function Feature() {
  return (
    <div className=" my-16 md:px-14 px-4 max-w-screen-2xl mx-auto">
      <div className=" flex flex-col lg:flex-row justify-between items-start gap-10">
        <div className=" lg:w-2/4">
          <h3 className=" text-3xl font-bold lg:w-1/2 mb-3">
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
        </div>
        {/* image for about */}
        <div>Right Side</div>
      </div>
    </div>
  );
}
