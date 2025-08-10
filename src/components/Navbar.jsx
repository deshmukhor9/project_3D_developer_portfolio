import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom"; 
import { styles } from "../styles";
import { navLinks } from "../constants";
import { menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-[50] ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src="/logo.png" alt="logo" className="w-10 h-10 object-contain" />
          <p className="text-white text-[24px] font-bold cursor-pointer flex ">
            Omkar &nbsp; Deshmukh
          </p>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden sm:flex items-center gap-10">
          {/* ✅ View Resume Button (hidden on /resume) */}
          {location.pathname !== "/resume" && (
            <button
              onClick={() => navigate("/resume")}
              className="bg-gray-300 text-black text-lg px-5 py-2 rounded-lg shadow-md 
                         hover:bg-gray-500 hover:text-white transition-all duration-300"
            >
              View Resume
            </button>
          )}

          {/* Nav Links */}
          {location.pathname !== "/resume" && (
            <ul className="list-none flex flex-row gap-10">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`${
                    active === nav.title ? "text-white" : "text-secondary"
                  } hover:text-white text-[18px] font-medium cursor-pointer`}
                  onClick={() => setActive(nav.title)}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />
        </div>

        {/* Mobile Navigation */}
        {toggle && (
          <div
            className="p-6 black-gradient absolute top-20 right-0 mx-4 my-2 
                       min-w-[160px] z-10 rounded-xl"
          >
            <ul className="list-none flex flex-col gap-4">
              {/* ✅ Mobile View Resume Button */}
              {location.pathname !== "/resume" && (
                <li>
                  <button
                    onClick={() => {
                      setToggle(false);
                      navigate("/resume");
                    }}
                    className="bg-gray-300 text-black text-lg px-5 py-2 rounded-lg shadow-md 
                               hover:bg-gray-500 hover:text-white transition-all duration-300 w-full text-left"
                  >
                    View Resume
                  </button>
                </li>
              )}

              {/* Nav Links */}
              {location.pathname !== "/resume" &&
                navLinks.map((nav) => (
                  <li
                    key={nav.id}
                    className={`font-poppins font-medium cursor-pointer text-[16px] ${
                      active === nav.title ? "text-white" : "text-secondary"
                    }`}
                    onClick={() => {
                      setToggle(false);
                      setActive(nav.title);
                    }}
                  >
                    <a href={`#${nav.id}`}>{nav.title}</a>
                  </li>
                ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
