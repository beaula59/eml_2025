"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; 

const menuItems = [
  { text: "Home", href: "/" },
  { text: "Speakers", href: "/" },
  { text: "Team", href: "/team" },
  { text: "Brochure", href: "/" },
  { text: "Contact Us", href: "/contact_us" },
];

function Navbar() {
  const pathname = usePathname();
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const underlineRef = useRef(null);
  const [isHover, setIsHover] = useState(false);
  const activeIndex = menuItems.findIndex((item) => item.href === pathname);

  useEffect(() => {
    if (underlineRef.current) {
      const targetIndex = hoveredIndex !== null ? hoveredIndex : activeIndex;
      const offset = targetIndex * 120;
      underlineRef.current.style.transform = `translateX(${offset}px)`;
    }
  }, [hoveredIndex, activeIndex]);

  return (
    <div className="hidden justify-center items-center md:flex z-50">
      <nav className="w-screen shadow-xl items-center justify-between h-[85px] flex bg-[#0C223F] backdrop-blur-lg z-50 transition-all duration-300 top-[60px]">
        <div className="m-7 flex items-center">
          <Link href="/">
            <img src="/eml1.png" className="h-[60px] w-[60px]" alt="logo" />
          </Link>
          {["E", "M", "L"].map((letter, i) => (
            <div
              key={i}
              onMouseEnter={() => setIsHover(true)}
              onMouseLeave={() => setIsHover(false)}
              className={`transition-opacity font-[merriweather] duration-1000 ease-in-out font-bold text-5xl ${
                isHover ? "opacity-100" : "opacity-0"
              } ${i === 0 ? "text-black pl-4" : i === 1 ? "text-blue-500" : "text-red-600"}`}
            >
              {letter}
            </div>
          ))}
        </div>
        <div className="px-4 flex">
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
                    activeIndex === index ? "bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-yellow-200" : "text-white"
                  }`}
                >
                  {item.text}
                </Link>
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
  );
}

export default Navbar;
