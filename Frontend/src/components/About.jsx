import image1 from "../assets/images/we fund.png";
import hand1 from "../assets/images/handshake.jpg";

export default function About() {
  return (
    <div className="px-4 sm:px-8 md:px-16 max-w-screen-3xl mx-auto mt-8">
      <div className="flex sm:flex-col flex-row items-center justify-center text-center">
        <h2 className="text-3xl font-bold">
          Our Mission Is Succinctly Captured in
          <p className="text-center">Three Pillars</p>
        </h2>
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-between py-12">
        <div className="mb-4 sm:mb-0 w-full sm:w-auto">
          <div className="rounded-full border-2 w-20 h-20 sm:w-28 sm:h-28 flex items-center justify-center">
            <img
              src="https://static.vecteezy.com/system/resources/previews/000/512/459/original/vector-fund-glyph-black-icon.jpg"
              alt=""
              className="w-10 h-10 sm:w-14 sm:h-14"
            />
          </div>
          <div className="mt-4">
            <h2 className="text-lg font-bold uppercase mb-2">We fund</h2>
            <p className="w-full sm:w-40">
              We believe that every project has a story to tell and deserves the
              opportunity to be heard.
            </p>
          </div>
        </div>
        <div className="mb-4 sm:mb-0 w-full sm:w-auto">
          <div className="rounded-full border-2 border-emerald-400 w-20 h-20 sm:w-28 sm:h-28 flex items-center justify-center bg-emerald-400">
            <img
              src={image1}
              alt="We fund"
              className="w-10 h-10 sm:w-14 sm:h-14"
            />
          </div>
          <div className="mt-4">
            <h2 className="text-lg font-bold uppercase mb-2">
              We Provide Care
            </h2>
            <p className="w-full sm:w-40">
              When you’re part of our community, you can count on us for support
              and guidance whenever you need it.
            </p>
          </div>
        </div>

        <div className="w-full sm:w-auto">
          <div className="rounded-full border-2 w-20 h-20 sm:w-28 sm:h-28 flex items-center justify-center border-black">
            <img src={hand1} alt="" className="w-10 h-10 sm:w-14 sm:h-14" />
          </div>
          <div className="mt-4">
            <h2 className="text-lg font-bold uppercase mb-2">We Empower</h2>
            <p className="w-full sm:w-52">
              We invest in people who are passionate about creating positive
              change in their communities – so they can create even more impact.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
