import React, { useState, useRef, useEffect } from "react";
import logo from "../assets/logo.png";
import { Link, animateScroll as scroll } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";

const NavBar = () => {

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {

    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };

  }, []);

  return (
    <header className="fixed top-0 w-full z-50 bg-white shadow-md">

      <div className="flex justify-between items-center px-12 py-3">

        {/* LEFT SIDE */}

        <div className="flex items-center gap-2">

          <Link
            to="home"
            smooth={true}
            duration={500}
            offset={-80}
            onClick={scrollToTop}
          >
            <img
              src={logo}
              alt="logo"
              className="h-11 cursor-pointer"
            />
          </Link>

          <h3 className="text-xl font-semibold text-orange-500">
            DarshanEase
          </h3>

        </div>

        {/* MENU */}

        <nav className="flex items-center gap-8 text-gray-700 font-medium whitespace-nowrap">

          <Link
            className="cursor-pointer hover:text-orange-500 transition"
            to="home"
            smooth
            duration={500}
            offset={-80}
          >
            Home
          </Link>

          <Link
            className="cursor-pointer hover:text-orange-500 transition"
            to="temples"
            smooth
            duration={500}
            offset={-120}
          >
            Temples
          </Link>

          <Link
            className="cursor-pointer hover:text-orange-500 transition"
            to="about"
            smooth
            duration={500}
            offset={-120}
          >
            About
          </Link>

          <Link
            className="cursor-pointer hover:text-orange-500 transition"
            to="services"
            smooth
            duration={500}
            offset={-120}
          >
            Services
          </Link>

          <Link
            className="cursor-pointer hover:text-orange-500 transition"
            to="contact"
            smooth
            duration={500}
            offset={-100}
          >
            Contact
          </Link>

          {/* DROPDOWN */}

          <div className="relative" ref={dropdownRef}>

            <button
              onClick={toggleDropdown}
              className="bg-orange-500 text-dark px-4 py-2 rounded-md hover:bg-orange-600 transition"
            >
              Login
            </button>

            {isDropdownOpen && (

              <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg flex flex-col">

                <RouterLink
                  to="/ulogin"
                  className="px-4 py-2 hover:bg-gray-100"
                >
                  User Login
                </RouterLink>

                <RouterLink
                  to="/ologin"
                  className="px-4 py-2 hover:bg-gray-100"
                >
                  Organizer Login
                </RouterLink>

                <RouterLink
                  to="/alogin"
                  className="px-4 py-2 hover:bg-gray-100"
                >
                  Admin Login
                </RouterLink>

              </div>

            )}

          </div>

        </nav>

      </div>

    </header>
  );
};

export default NavBar;