"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Users, FileText,Mail } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserTie, faHeadset } from "@fortawesome/free-solid-svg-icons";
import './Navbar.css';

const menuItems = [
  { icon: Home, text: "Home", href: "/" },
  { icon: Home, text: "Speakers", href: "/speakers" },
  { icon: Home, text: "Team", href: "/team" },
  { icon: Home, text: "Contact Us", href: "/contact_us" },
];

const externalLinks = [
  {
    icon: Home,
    text: "Brochure",
    href: "https://drive.google.com/file/d/15BaNpr183a3iDsV_jktonEzrGsOJ1CwH/view?usp=drivesdk",
  },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const underlineRef = useRef(null);
  const [isHover, setIsHover] = useState(false);
  const result = pathname === "/" ? "/" : pathname.match(/^\/[^/]+/)?.[0] || "";
  const activeIndex = menuItems.findIndex((item) => item.href === result);

  useEffect(() => {
    if (underlineRef.current) {
      const targetIndex = hoveredIndex !== null ? hoveredIndex : activeIndex;
      const offset = targetIndex * 120;
      underlineRef.current.style.transform = `translateX(${offset}px)`;
    }
  }, [hoveredIndex, activeIndex]);

  return (
    <>
      <div className="hidden justify-center items-center md:flex z-50">
        <nav className="w-screen shadow-xl items-center justify-between h-[70px] flex bg-[#0C223F] backdrop-blur-lg z-50 transition-all duration-300 top-[60px]">
          <div className="ml-7 flex items-center">
            <Link href="/">
              <img src="/eml1.png" className="spin-slow h-[50px] w-[50px]" alt="logo" />
            </Link>
            {["E", "M", "L"].map((letter, i) => (
              <Link key={i} href="/">
                <div
                  key={i}
                  onMouseEnter={() => setIsHover(true)}
                  onMouseLeave={() => setIsHover(false)}
                  className={`transition-opacity font-[merriweather] duration-1000 ease-in-out font-bold text-5xl lg:flex hidden ${
                    isHover ? "opacity-100" : "opacity-0"
                  } ${
                    i === 0
                      ? "text-black pl-4"
                      : i === 1
                      ? "text-blue-500"
                      : "text-red-600"
                  }`}
                >
                  {letter}
                </div>
              </Link>
            ))}
          </div>
          <div className="m-4 flex">
            <ul className="flex relative">
              {menuItems.map((item, index) => (
                <li
                  key={item.text}
                  className="relative w-[120px]"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <Link
                    href={item.href}
                    className={`font-[merriweather] hover:-translate-y-1 flex items-center justify-center h-full py-2 px-4 text-[19px] transition-all duration-300 ${
                      activeIndex === index
                        ? "bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-yellow-200"
                        : "text-white"
                    }`}
                  >
                    {item.text}
                  </Link>
                </li>
              ))}
              {externalLinks.map((item, index) => (
                <li
                  key={item.text}
                  className="relative w-[120px]"
                  onMouseEnter={() => setHoveredIndex(index + 4)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-[merriweather] hover:-translate-y-1 flex items-center justify-center h-full py-2 px-4 text-[19px] transition-all duration-300 text-white"
                  >
                    {item.text}
                  </a>
                </li>
              ))}
              <span
                ref={underlineRef}
                className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-yellow-500 to-yellow-200 transition-all duration-300 ease-in-out"
                style={{
                  width: "120px",
                  transform: "translateX(0px)",
                }}
              />
            </ul>
          </div>
        </nav>
      </div>

      
      <div className="flex justify-between items-center md:hidden h-[60px] w-screen">
        <Link href="/">
          <img
            src="/emllogo.png"
            className="ml-3 z-20"
            width={200}
            alt="logo"
          />
        </Link>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="z-50 relative w-12 h-12 rounded-full transition-all duration-300 flex items-center justify-center group"
        >
          <span
            className={`absolute h-0.5 rounded-full bg-gradient-to-r from-blue-400 to-red-500  transition-all duration-300 ease-in-out
            ${
              isOpen
                ? "w-6 rotate-45 translate-y-0"
                : "w-5 -translate-y-2 group-hover:w-6"
            }`}
          />
          <span
            className={`absolute h-0.5 w-6 rounded-full bg-gradient-to-r from-blue-400 to-red-500  transition-all duration-300 ease-in-out
            ${isOpen ? "opacity-0 translate-x-3" : "opacity-100"}`}
          />
          <span
            className={`absolute h-0.5 rounded-full bg-gradient-to-r from-blue-400 to-red-500  transition-all duration-300 ease-in-out
            ${
              isOpen
                ? "w-6 -rotate-45 translate-y-0"
                : "w-5 translate-y-2 group-hover:w-6"
            }`}
          />
        </button>
      </div>
      <div
        className={`fixed w-screen h-screen inset-y-0 right-0 bg-gradient-to-t from-red-400 rounded-tl-[0px] rounded-bl-[0px] to-blue-300 transform transition-transform duration-500 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden z-40 `}
      >
        <nav>
          <ul className="ml-6 flex flex-col items-start justify-center h-screen w-screen space-y-8">
            <Link
              href={"/"}
              onClick={() => {
                setIsOpen(false);
              }}
              className={`flex items-center hover:text-black/50 transform transition-all duration-500 ease-out text-black/80 font-[merriweather] text-[20px] font-semibold hover:scale-95 ${
                isOpen
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-16 opacity-0"
              }`}
              style={{ transitionDelay: `${1 * 100}ms` }}
            >
              <span className="p-3 rounded-xl text-black bg-black/10  mr-4">
                <Home size={24} />
              </span>
              Home
            </Link>
            <Link
              href={"/speakers"}
              onClick={() => {
                isOpen;
              }}
              className={`flex items-center text-black/80 hover:text-black/50 transform transition-all duration-500 ease-out font-[merriweather] text-[20px] font-semibold hover:scale-95 ${
                isOpen
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-16 opacity-0"
              }`}
              style={{ transitionDelay: `${2 * 100}ms` }}
            >
              <span className="p-3 rounded-xl bg-black/10  mr-4">
                {" "}
                <FontAwesomeIcon
                  icon={faUserTie}
                  style={{ fontSize: "24px" }}
                  className="text-black"
                />{" "}
              </span>
              Speakers
            </Link>
            <Link
              href={"/team"}
              onClick={() => {
                setIsOpen(false);
              }}
              className={`flex items-center hover:text-black/50 transform transition-all duration-500 ease-out text-black/80 font-[merriweather] text-[20px] font-semibold hover:scale-95 ${
                isOpen
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-16 opacity-0"
              }`}
              style={{ transitionDelay: `${3 * 100}ms` }}
            >
              <span className="p-3 rounded-xl bg-black/10  mr-4 text-black">
                <Users size={24} />
                
              </span>
              Team
            </Link>
            <Link
              href={"/contact_us"}
              onClick={() => {
                setIsOpen(false);
              }}
              className={`flex items-center hover:text-black/50 transform transition-all duration-500 ease-out text-black/80 font-[merriweather] text-[20px] font-semibold hover:scale-95 ${
                isOpen
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-16 opacity-0"
              }`}
              style={{ transitionDelay: `${4 * 100}ms` }}
            >
              <span className="p-3 rounded-xl bg-black/10  mr-4">
                <Mail
                  className="text-black"
                  size={24}
                />
              </span>
              Contact Us
            </Link>
            <a
              onClick={() => {
                setIsOpen(false);
              }}
              href={
                "https://drive.google.com/file/d/15BaNpr183a3iDsV_jktonEzrGsOJ1CwH/view?usp=drivesdk"
              }
              className={`hover:text-black/50 transform transition-all duration-500 ease-outhover:scale-95 font-semibold flex items-center text-black/80 font-[merriweather] text-[20px] ${
                isOpen
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-16 opacity-0"
              }`}
              style={{ transitionDelay: `${5 * 100}ms` }}
            >
              <span className="p-3 text-black rounded-xl bg-black/10 mr-4">
                <FileText size={24} />
              </span>
              Brochure
            </a>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Navbar;