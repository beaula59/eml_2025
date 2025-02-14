"use client";

import { usePathname, useRouter } from "next/navigation";

const menuItems = [
  { name: "Overall Head", path: "/" },  
  { name: "Design and PR", path: "/design-pr" },  
  { name: "Speaker Curator", path: "/speaker-curator" },
  { name: "Logistics and Hospitality", path: "/logistics-hospitality" },
  { name: "Web Development", path: "/web-development" },
  { name: "Multimedia", path: "/multimedia" },
];

const Menu = () => {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div className="absolute top-[190px] left-[70px] w-[280px] h-[400px] bg-red-700 rounded-[50px] flex flex-col items-center py-6 space-y-4">
      {menuItems.map((item, index) => {
        // Strictly check if the pathname matches the current button
        const isActive = pathname === item.path;

        return (
          <button
            key={index}
            onClick={() => router.push(item.path)}
            className={`w-[220px] py-2 text-center text-lg font-semibold rounded-full transition-all duration-300 ${
              isActive ? "bg-red-500 text-white" : "bg-gray-300 text-red-700 hover:bg-gray-400"
            }`}
          >
            {item.name}
          </button>
        );
      })}
    </div>
  );
};

export default Menu;
