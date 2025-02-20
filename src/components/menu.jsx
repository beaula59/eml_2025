"use client";

import { usePathname, useRouter } from "next/navigation";

const menuItems = [
  { name: "Overall Head", path: "/team" },
  { name: "Design and PR", path: "/team/design-pr" },
  { name: "Speaker Curator", path: "/team/speaker-curator" },
  { name: "Logistics and Hospitality", path: "/team/logistics-hospitality" },
  { name: "Web Development", path: "/team/web-development" },
  { name: "Multimedia", path: "/team/multimedia" },
];


const Menu = () => {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div
      className="hidden md:flex flex-col items-center absolute top-[140px] left-[60px] 
      w-[280px] h-[420px] bg-[#AB1D1E] rounded-[40px] py-6 space-y-4"
    >
      {menuItems.map(({ name, path }, index) => {
        const isActive = pathname === path;

        return (
          <button
            key={index}
            onClick={() => router.push(path)}
            className={`w-[220px] py-2.5 text-lg font-semibold rounded-full transition-all duration-300 
              ${isActive ? "bg-[#E63946] text-white" : "bg-gray-300 text-red-700 hover:bg-gray-400"}
            `}
          >
            {name}
          </button>
        );
      })}
    </div>
  );
};

export default Menu;
