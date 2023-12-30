import cover1 from "../assets/images/ZZM_5988.jpg";
import cover2 from "../assets/images/ZZM_5981.jpg";
export default function Home() {
  return (
    <div className="md:px-12 p-4 max-w-screen-3xl mx-auto mt-32">
      <div>
        <div className=" flex flex-col md:flex-row justify-between items-center gap-10">
          {/* banner content */}
          <div className=" md:w-3/5">
            <h2>We are The Single Parent Project</h2>
            <p>
              we are dedicated to providing support, stability, and community
              for single Parent families
            </p>
            <p>Help us Restore Single Parent Families in need.</p>
            <button>Make a Donation</button>
          </div>
          <div className="flex">
            <div className=" flex items-center mt-20">
              <img
                src={cover1}
                alt="Image"
                className="h-64 w-80 md:w-64 object-cover shadow-lg"
              />
            </div>
            <div className="flex">
              <img
                src={cover2}
                alt="Image"
                className="w-80 h-64 md:w-64 object-cover shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
