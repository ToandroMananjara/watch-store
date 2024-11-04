import React from "react";
import { FaCaretDown } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import logo from "../assets/logo.png";
const Menu = [
  {
    id: 0,
    name: "Home",
    link: "/",
  },
  {
    id: 1,
    name: "Best seller",
    link: "/#services",
  },
];

const DropdownLinks = [
  {
    name: "Top Sellers",
    link: "/#",
  },
  {
    name: "New Arrivals",
    link: "/#",
  },
  {
    name: "Trending Now",
    link: "/#",
  },
];

function Navbar({ handleOrderPopup }) {
  return (
    <div className="dark:bg-gray-900 dark:text-white shadow-md flex justify-between px-5  sm:px-10 md:px-14 lg:px-32 py-5 ">
      <div className="navbar-left">
        <div className="logo flex text-2xl gap-1 ">
          <div className="logo-img">
            <img src={logo} alt="logo" className="w-10" />
          </div>

          <div className="logo-text">
            <strong>Watch</strong> Store
          </div>
        </div>
      </div>

      <div className="navbar-right flex gap-2 md:gap-12">
        <div className="dark-mode flex items-center"> Dark mode </div>

        <div className="menu-container hidden md:flex  items-center">
          <div className="menu-link">
            <ul className="flex gap-10">
              {Menu.map((menu) => (
                <li id={menu.id} className="cursor-pointer">
                  <a href={menu.link} className="hover:text-orange-500">
                    {menu.name}
                  </a>
                </li>
              ))}
              <li className="group relative flex items-center cursor-pointer">
                Quick Links{" "}
                <span className="flex items-center">
                  <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                </span>
                <div className="absolute bg-white p-4 hidden top-6 w-[140px] z-10 text-black  group-hover:block">
                  <ul className="space-y-2">
                    {DropdownLinks.map((dropLink) => (
                      <li className="cursor-pointer ">
                        <a
                          href={dropLink.link}
                          className="hover:text-orange-500"
                        >
                          {dropLink.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="cart flex items-center">
          <FaCartShopping
            className="cursor-pointer"
            onClick={handleOrderPopup}
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
