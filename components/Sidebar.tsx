"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { AiOutlineHome } from "react-icons/ai";
import { BsPeople } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { SideBarContext } from "./SideBarContext";
import { usePathname } from "next/navigation";

const sidebarItems = [
  {
    name: "Home",
    href: "/",
    icon: <AiOutlineHome />,
  },
  {
    name: "About",
    href: "/about",
    icon: <BsPeople />,
  },
];

function Sidebar() {
  const { isVisible, toggleSideBarVisibility } = useContext(SideBarContext);
  const path = usePathname();

  return (
    <div className="relative transition">
      <button
        onClick={toggleSideBarVisibility}
        className="items-center justify-center flex translate-x-1/2 absolute right-0 top-[4.6rem] bg-white w-6 h-6 border border-[#e5e7eb] rounded-full"
      >
        <div
          style={{
            rotate: isVisible ? "none" : "180deg",
            transition: "all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.01)",
          }}
        >
          <MdOutlineKeyboardArrowLeft />
        </div>
      </button>
      <aside
        data-collapse={!isVisible}
        className="w-64 h-full bg-white p-4  overflow-hidden customtansition"
      >
        <div className="w-max flex items-center content-center gap-4 pb-4 mb-4 border-b border-solid border-[#e5e7eb]">
          <Image
            alt="logo"
            src="/logo.png"
            width={80}
            height={80}
            className="w-[3.4rem] object-cover"
          />
          <p className="title_name">Some Title</p>
        </div>
        <ul
          title="sideBarList"
          className="flex flex-col justify-evenly gap-8 list-none"
        >
          {sidebarItems.map((item, index) => (
            <li key={index}>
              <Link
                href={item.href}
                className={`flex flex-row w-full px-4 transition-colors duration-300 items-center py-2 rounded-lg ${
                  path === item.href
                    ? "bg-orange-500 text-white"
                    : "bg-gray-100"
                }`}
              >
                <span className="py-1">{item.icon}</span>
                <span className="sidebaritem">{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
}

export default Sidebar;
