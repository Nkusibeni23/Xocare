import image1 from "../assets/images/we fund.png";
import hand1 from "../assets/images/handshake.jpg";

export default function About() {
  return (
    <div>
      <div className="px-4 sm:px-8 md:px-16 max-w-screen-3xl bg-white">
        <div className="flex flex-col sm:flex-row items-center justify-center text-center">
          <h2 className="text-3xl font-bold text-black mt-6">
            Our Mission Is Succinctly Captured in
            <p className="text-center">Three Pillars</p>
          </h2>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-between py-12 lg:w-[1000px] lg:mx-auto lg:text-center">
          <div className="mb-4 sm:mb-0 w-full sm:w-auto">
            <div className="rounded-full border-2 w-20 h-20 sm:w-28 sm:h-28 flex items-center justify-center mx-auto">
              <img
                src="https://static.vecteezy.com/system/resources/previews/000/512/459/original/vector-fund-glyph-black-icon.jpg"
                alt=""
                className="w-10 h-10 sm:w-14 sm:h-14"
              />
            </div>
            <div className="mt-4 text-center">
              <h2 className="text-lg font-bold uppercase mb-2 text-black">
                We fund
              </h2>
              <p className="w-full sm:w-40 text-stone-500 font-medium">
                We believe that every project has a story to tell and deserves
                the opportunity to be heard.
              </p>
            </div>
          </div>
          <div className="mb-4 sm:mb-0 w-full sm:w-auto">
            <div className="rounded-full border-2 border-emerald-400 w-20 h-20 sm:w-28 sm:h-28 flex items-center justify-center bg-emerald-400 mx-auto">
              <img
                src={image1}
                alt="We fund"
                className="w-10 h-10 sm:w-14 sm:h-14"
                loading="lazy"
              />
            </div>
            <div className="mt-4 text-center">
              <h2 className="text-lg font-bold uppercase mb-2 text-black">
                We Provide Care
              </h2>
              <p className="w-full sm:w-40 text-stone-500 font-medium">
                When you’re part of our community, you can count on us for
                support and guidance whenever you need it.
              </p>
            </div>
          </div>

          <div className="w-full sm:w-auto">
            <div className="rounded-full border-2 w-20 h-20 sm:w-28 sm:h-28 flex items-center justify-center border-black mx-auto">
              <img
                src={hand1}
                alt=""
                className="w-10 h-10 sm:w-14 sm:h-14"
                loading="lazy"
              />
            </div>
            <div className="mt-4 text-center">
              <h2 className="text-lg font-bold uppercase mb-2 text-black">
                We Empower
              </h2>
              <p className="w-full sm:w-52 text-stone-500 font-medium">
                We invest in people who are passionate about creating positive
                change in their communities – so they can create even more
                impact.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
