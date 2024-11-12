// import { Link, NavLink } from "react-router-dom";
// // import { useState } from "react";
// import { FiMenu } from "react-icons/fi";
// import { MdClose } from "react-icons/md";
// import "./NavCss.css";
// const Navbar = () => {
// //   const [isMenuOpen, setIsMenuOpen] = useState(false);

// //   const handleToggle = () => {
// //     setIsMenuOpen(!isMenuOpen);
// //   };

//   return (
//     <div className="fixed top-0 left-0 w-full">
//       <header className="font-[sans-serif] min-h-[60px]  relative z-50">

//         {/*  Header section */}
//         <div className="flex flex-wrap items-center justify-between py-3 px-4 sm:px-10 lg:gap-y-4 gap-y-6 gap-x-4 ">

//           {/* logo */}
//           <Link to="/">
//           <div className="flex gap-2 font-poppins justify-center items-center" >
//                 <img src="https://i.ibb.co.com/8s8qJ2D/Group.png" alt="logo" className="w-12 h-12"/>
//                  <h4 className="font-semibold text-2xl text-gray-200">Restaurant</h4>
//             </div>
//           </Link>

//             <div style={{ display: isMenuOpen ? "block" : "none" }} className="max-lg:hidden lg:!flex lg:items-center max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-40 max-lg:before:inset-0 max-lg:before:z-50">

//             {/* Toggle close Button */}
//             <button
//               onClick={handleToggle}
//               className="lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white  p-3">
//               <MdClose className="w-4" />
//             </button>

//             {/* Manu Section*/}
//             <ul className="lg:!flex lg:gap-x-6 max-lg:space-y-3 max-lg:fixed max-lg:bg-[#151d20] max-lg:w-2/3 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:px-10 max-lg:py-4 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50 font-raleway mr-52">
//                 <li className="mb-6 hidden max-lg:block">
//                     <Link to="/">
//                     <div className="flex gap-0" >
//                      <img src="https://i.ibb.co.com/Y2tRLX6/Vector-1.png" alt="logo" className="w-36 h-9"/>
//                      </div>
//                     </Link>
//                 </li>
//               {/* Manu List*/}
//                 <li id="aetive" className="max-lg:border-b  max-lg:px-3 max-lg:py-3  font-raleway text-gray-200">
//                   <NavLink to="/" className="hover:text-[#FEBF00]  font-medium text-lg">Home</NavLink>
//                 </li>
//                 <li id="aetive" className="max-lg:border-b  max-lg:px-3 max-lg:py-3  font-raleway text-gray-200">
//                   <NavLink to="/" className="hover:text-[#FEBF00]  font-medium text-lg">About</NavLink>
//                 </li>
//                 <li id="aetive" className="max-lg:border-b  max-lg:px-3 max-lg:py-3  font-raleway text-gray-200">
//                   <NavLink to="/" className="hover:text-[#FEBF00]  font-medium text-lg">Portfolio</NavLink>
//                 </li>
//                 <li id="aetive" className="max-lg:border-b  max-lg:px-3 max-lg:py-3  font-raleway text-gray-200">
//                   <NavLink to="/" className="hover:text-[#FEBF00]  font-medium text-lg">Clients</NavLink>
//                 </li>
//                 <li id="aetive" className="max-lg:border-b  max-lg:px-3 max-lg:py-3  font-raleway text-gray-200">
//                   <NavLink to="/" className="hover:text-[#FEBF00]  font-medium text-lg">Blog</NavLink>
//                 </li>
//                 <li id="aetive" className="max-lg:border-b  max-lg:px-3 max-lg:py-3  font-raleway text-gray-200">
//                   <NavLink to="/" className="hover:text-[#FEBF00]  font-medium text-lg">Contact</NavLink>
//                 </li>
//             </ul>
//             </div>

//           <div className="flex items-center max-sm:ml-auto">
//             {/* Nav Button */}
//             <div className="flex space-x-4 items-center justify-center">
//               <button className="bg-[#FEBF00] h-[44px] w-[157px] gap-[10px] border border-none uppercase font-roboto font-bold">
//                 Book a table
//               </button>
//             </div>

//             {/* Toggle Button */}
//             <button onClick={handleToggle} className="lg:hidden ml-6">
//               <FiMenu className="w-7 h-7 text-slate-100" />
//             </button>
//           </div>
//         </div>
//       </header>
//     </div>
//   );
// };

// export default Navbar;


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
