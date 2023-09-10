import logo from "../assets/logo.png";
import { BiSearch } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { PiBag } from "react-icons/pi";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isFixed, setIsFixed] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 30) {
      setIsFixed(true);
    } else {
      setIsFixed(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={` ${
        isFixed
          ? "fixed h-20 text-black flex justify-center items-center  top-0 left-0 right-0 z-20  bg-white/50  backdrop-filter backdrop-blur bg-opacity-50 opacity-100  shadow-sm shadow-slate-100 transition-all duration-300"
          : "absolute top-3 left-0 right-0 z-20"
      }`}
    >
      <header className=" container mx-auto">
        <nav className="flex justify-between items-center">
          {/* logo */}
          <div>
            <img
              className={`w-14 h-auto ${isFixed && "filter brightness-0"}`}
              src={logo}
              alt=""
            />
          </div>
          {/* icons */}
          <div className="text-white flex items-center space-x-4 text-2xl ">
            <span className={` ${isFixed && "filter brightness-0"}`}>
              {" "}
              <BiSearch />
            </span>
            <span className={` ${isFixed && "filter brightness-0"}`}>
              {" "}
              <AiOutlineHeart />
            </span>
            <span className="relative z-10">
              {" "}
              <PiBag
                className={`z-10 opacity-100 ${
                  isFixed && "filter brightness-0"
                }`}
              />
              <div
                className={` ${
                  isFixed
                    ? "h-5 w-5 rounded-full bg-black text-white  text-xs flex justify-center items-center opacity-100 z-50 absolute top-4  left-1 right-0"
                    : "h-5 w-5 rounded-full bg-gray-200 text-black  text-xs flex justify-center items-center opacity-100 z-50 absolute top-4  left-1 right-0"
                }`}
              >
                0
              </div>
            </span>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
