import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MdOutlinePhoneEnabled } from "react-icons/md";
import logo from "../assets/logo.png"; 

const NavBar = () => {
  const [isTransparent, setIsTransparent] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setIsTransparent(false);
      } else {
        setIsTransparent(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed z-50 top-0 left-0 backdrop-blur-lg right-0 items-center p-4 ${isTransparent ? 'bg-transparent text-white' : 'bg-white text-black'} transition-colors duration-300 shadow-2xl`}>
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between lg:px-40">
        <Link to="/">
          <div className="flex items-center gap-4">
            <div className="w-[50px] lg:w-[100%]">
              <img height="60" width="60" src={logo} alt="logo" />
            </div>

            <div>
              <h2 className="font-semibold text-2xl lg:text-4xl">MIAMI</h2>
              <p className="w-[200px] text-sm font-semibold">PROPERTY TEXAS</p>
            </div>
          </div>
        </Link>
        <a href="tel:7864538127"> {/* Use `a` tag for the phone link */}
          <ul className="hidden lg:flex items-center gap-5">
            <li><MdOutlinePhoneEnabled className={`border-2 p-2 ${isTransparent ? "border-white" : "border-black"} rounded-full`} size={50} color={`${isTransparent ? "white" : "black"}`} /></li>
            <li className="grid gap-0 items-center">
              <p>Do not Hesitate to Call Us!</p>
              <p>786-453-8127</p>
            </li>
          </ul>
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
