import React, { useState, useEffect } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaArrowUp,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

function Footer() {
  const [showArrow, setShowArrow] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      const pageHeight = window.innerHeight;
      if (window.scrollY > pageHeight) {
        setShowArrow(true);
      } else {
        setShowArrow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Arrow to scroll to top */}
      {showArrow && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8  text-white p-4 rounded-full shadow-lg hover:bg-[#0a72bf] bg-[#0D92F4] transition duration-300 ease-in-out transform hover:scale-110 z-50"
          aria-label="Scroll to top"
        >
          <FaArrowUp size={28} />
        </button>
      )}

      <footer className="footer bg-[#073686] text-neutral-content py-4 flex flex-col items-start">
        <div className="container md:flex justify-left 2xl:justify-between items-end mx-auto px-4 ">
          <div className="flex md:hidden mb-4 mt-4">
            <div className="">
              <a
                className="items-center  text-white  transition duration-300 hover:text-blue-400   cursor-pointer flex"
                href="mailto:info@bizimcati.com.tr"
              >
                <a href="" className=" ">
                  <FaEnvelope size={32} />
                </a>
                <div className="ml-2  font-semibold text-lg">
                  {" "}
                  info@bizimcati.com
                </div>
              </a>
              <a className="items-center  mt-4 text-white   flex">
                <a className=" ">
                  <FaPhoneAlt size={32} />
                </a>
                <div className="ml-2  font-semibold text-lg">
                  <div className=" ">+90 312 498 2121</div>
                  <div className="">+90 555 800 9261</div>
                </div>
              </a>
            </div>
          </div>
          <div>
            <img src="/images/logo_white.png" alt="Logo" className={`h-16  `} />

            <aside className="flex items-center mb-4 ">
              <p className="text-white">
                Copyright © {new Date().getFullYear()} - All rights reserved
              </p>
            </aside>
            <nav className="flex w-full    justify-left items-center">
              <div className="flex space-x-2">
                <a
                  target="_blank"
                  href="https://www.facebook.com/clubbizimcati/"
                  className="text-white hover:text-blue-600 transition duration-300"
                >
                  <FaFacebookF size={24} />
                </a>
                <a
                  target="_blank"
                  href="https://twitter.com/bizimcati"
                  className="text-white hover:text-blue-400 transition duration-300"
                >
                  <FaTwitter size={24} />
                </a>
                <a
                  target="_blank"
                  href="https://www.instagram.com/clubbizimcati/"
                  className="text-white hover:text-pink-600 transition duration-300"
                >
                  <FaInstagram size={24} />
                </a>
              </div>
            </nav>
          </div>
          <div className="hidden md:flex">
            <div className=" ml-20">
              <a
                className="items-center  text-white  transition duration-300 hover:text-blue-400   cursor-pointer flex"
                href="mailto:info@bizimcati.com.tr"
              >
                <a href="" className=" ">
                  <FaEnvelope size={24} />
                </a>
                <div className="ml-2  font-semibold text-md">
                  {" "}
                  info@bizimcati.com
                </div>
              </a>
              <a className="items-center  mt-4 text-white   flex">
                <a className=" ">
                  <FaPhoneAlt size={24} />
                </a>
                <div className="ml-2  font-semibold text-md">
                  <div className=" ">+90 312 498 2121</div>
                  <div className="">+90 555 800 9261</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
