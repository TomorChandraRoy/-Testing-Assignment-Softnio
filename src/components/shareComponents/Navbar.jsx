
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";  // Enable useState
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import "./NavCss.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="fixed top-0 left-0 w-full z-50">
      <header className="font-[sans-serif] min-h-[60px]">

        {/* Header section */}
        <div className="flex flex-wrap items-center justify-between py-3 px-4 sm:px-10 gap-y-4">

          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src="https://i.ibb.co/8s8qJ2D/Group.png" alt="logo" className="w-10 h-10 sm:w-12 sm:h-12"/>
            <h4 className="font-semibold text-xl sm:text-2xl text-gray-200 ml-2">Restau</h4>
            <span className="font-normal text-xl sm:text-2xl text-gray-200">rant</span>
          </Link>

          {/* Menu Links */}
          <div className={`${isMenuOpen ? "block" : "hidden"} lg:flex lg:items-center lg:space-x-8 fixed lg:static inset-0 lg:inset-auto bg-[#151d20] lg:bg-transparent p-6 lg:p-0 lg:mr-[16rem]`}>
            {/* Close button for mobile view */}
            <button
              onClick={handleToggle}
              className="lg:hidden absolute top-4 right-6 z-50 text-white p-2"
            >
              <MdClose className="w-6 h-6" />
            </button>

            {/* Menu Items */}
            <ul className="flex flex-col lg:flex-row lg:space-x-6 space-y-4 lg:space-y-0 ">
              <li>
                <NavLink to="/" className="text-gray-200 hover:text-[#FEBF00] text-lg font-medium">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className="text-gray-200 hover:text-[#FEBF00] text-lg font-medium">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/portfolio" className="text-gray-200 hover:text-[#FEBF00] text-lg font-medium">
                  Portfolio
                </NavLink>
              </li>
              <li>
                <NavLink to="/clients" className="text-gray-200 hover:text-[#FEBF00] text-lg font-medium">
                  Clients
                </NavLink>
              </li>
              <li>
                <NavLink to="/blog" className="text-gray-200 hover:text-[#FEBF00] text-lg font-medium">
                  Blog
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="text-gray-200 hover:text-[#FEBF00] text-lg font-medium">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Book a table button and menu toggle for mobile */}
          <div className="flex items-center space-x-4">
            <button className="hidden lg:block bg-[#FEBF00] h-[44px] w-[157px] text-black font-bold uppercase font-roboto border border-none">
              Book a Table
            </button>
            {/* Mobile Toggle Button */}
            <button onClick={handleToggle} className="lg:hidden text-white">
              <FiMenu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
