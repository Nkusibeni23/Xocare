import { useState } from "react";
// import Logo from "../assets/images/logo 1.png";
import Logo from "../assets/images/logo 1.png";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    console.log("Toggle menu clicked");
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    {
      link: "About us",
      path: "about",
    },
    {
      link: "Discover",
      path: "discover",
    },
    {
      link: "Whom we help",
      path: "help",
    },
    {
      link: "Contact us",
      path: "contact",
    },
  ];

  return (
    <>
      <nav className="bg-black border-b border-gray-500 md:px-14 p-5 max-w-screen-3xl mx-auto shadow-xl fixed top-0 right-0 left-0">
        <div className="text-xl container mx-auto flex justify-between items-center font-medium">
          <div className="flex items-center lg:space-x-10 space-x-0 text-nowrap">
            <figure>
              <a href="/">
                <img
                  src={Logo}
                  alt="Logo image"
                  className="w-40 h-14 inline-block"
                />
              </a>
            </figure>
            <ul className="md:flex space-x-12 lg:text-[18px] text-[15px] hidden">
              {navItems.map(({ link, path }) => (
                <a
                  key={link}
                  href={path}
                  className="block hover:text-gray-400 text-white"
                >
                  {link}
                </a>
              ))}
            </ul>
          </div>
          {/* donate */}
          <div className=" flex items-center gap-4">
            <button className="bg-white text-black font-semibold text-[14px] lg:text-[20px] rounded-lg p-4 flex lg:w-[180px] w-[100px] text-center items-center justify-center">
              Donate
            </button>
            {/* menu only display on mobile devices */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className=" text-white focus:outline-none focus:text-gray-400"
              >
                {/* <FontAwesomeIcon icon={faBars} color="#fff" size="lg" /> */}

                {isMenuOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18 18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="white"
                    className="w-6 h-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>
      {/* nav items for mobile devices */}
      <div
        className={`space-y-4 py-4 px-4 pt-32 bg-gray-300 text-xl z-10 ${
          isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"
        }`}
      >
        {navItems.map(({ link, path }) => (
          <a
            key={link}
            href={path}
            className="block hover:text-gray-500 text-black"
          >
            {link}
          </a>
        ))}
      </div>
    </>
  );
}
