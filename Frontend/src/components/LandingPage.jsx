import Logo from "../assets/images/logo.png";

export default function LandingPage() {
  return (
    <div className=" max-w-screen-3xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="hidden lg:block bg-white">
          <figure className="flex object-fill">
            <img src={Logo} alt="Logo" />
          </figure>
          <p>
            Empowering Single Mothers to cope with the impact of divorce;
            through Psychological Counseling and Financial Couching.
          </p>
        </div>
        <div className="">
          <h1>Background</h1>
        </div>
      </div>
    </div>
  );
}
