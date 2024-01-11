export default function OurFamily() {
  return (
    <div className="flex flex-col max-w-screen-3xl mx-auto items-center justify-center text-center bg-white">
      <div className="py-6">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-black">
          Your Donation Empowers Our Families
        </h1>
        <p className="text-gray-500 py-3 w-full md:w-[450px] lg:w-[550px] text-center mx-auto px-3">
          It’s already January, and we need your support more than ever. Our
          single-parent families have been impacted over the last two years
          badly. They need your help. Together, we can raise awareness, funds,
          and resources to ensure our single-parent families have everything
          they need to grow and thrive in 2024!
        </p>
        <button className="p-3 bg-orange-500 mt-4 rounded-lg font-semibold hover:bg-orange-600 transition-all duration-500 w-[220px] lg:w-[350px] mb-3 uppercase text-white">
          Donate Now
        </button>
      </div>
    </div>
  );
}
