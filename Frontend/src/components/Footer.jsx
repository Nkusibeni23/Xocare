import { useEffect, useState } from "react";
import Logo from "../assets/images/logo.png";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoMail } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentYear(new Date().getFullYear());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="flex-cols max-w-screen-3xl mx-auto">
        <footer className="footer p-10 lg:px-40 text-base-content bg-black">
          <nav>
            <header className="footer-title">Non Profit</header>
            <a className="link link-hover">Donate For Single Parent</a>
            <a className="link link-hover">Help Single Parent</a>
            <a className="link link-hover">Educate a Child</a>
            <a className="link link-hover">Feed Child</a>
          </nav>
          <nav>
            <header className="footer-title">Links</header>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Donate</a>
            <a className="link link-hover">Our Community</a>
          </nav>
          <nav>
            <header className="footer-title">Address</header>
            <a className="link link-hover flex gap-2">
              <FaLocationDot />
              Kicukiro-Kigali
            </a>
            <a className="link link-hover flex gap-2">
              <IoMail />
              xocare@gmail.com
            </a>
            <a className="link link-hover flex gap-2">
              <BsFillTelephoneFill />
              250-789-900-69
            </a>
          </nav>
          <nav>
            <header className="footer-title">
              Join Us in Making a <br />
              Difference . Sign Up <br />
              For Newsletter
            </header>
            <button className="p-3 bg-orange-500 mt-4 rounded-lg font-semibold hover:bg-orange-600 transition-all duration-500 w-[150px] lg:w-[200px] mb-3 uppercase text-white">
              Subscribe
            </button>
          </nav>
        </footer>

        <footer className="footer px-10 py-4 border-t bg-stone-200 text-base-content border-base-300">
          <aside className="items-center grid-flow-col">
            <img src={Logo} alt="" className=" w-36 h-16" />
          </aside>
          <nav className="md:place-self-center md:justify-self-end text-black">
            <div className="grid grid-flow-col gap-4 cursor-pointer">
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                </svg>
              </a>
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                </svg>
              </a>
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                </svg>
              </a>
            </div>
          </nav>
        </footer>
        <footer className="footer px-10 items-center py-3 border-t bg-stone-200 text-base-content border-base-200">
          <aside className="inset-x-0 bottom-4 text-center z-50">
            <p className="text-black">
              Copyright © {currentYear} - All rights reserved by xocare
            </p>
          </aside>
        </footer>
      </div>
    </>
  );
}
