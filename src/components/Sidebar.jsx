import { useState } from "react";
import avatar from "../assets/Icons/Avatars.svg";
import logoutIcon from "../assets/Icons/Logout.svg";
import hamburgerIcon from "../assets/Icons/hamburger-menu-more-svgrepo-com (1).svg";
import closeIcon from "../assets/Icons/icons8-close.svg";
import { menuItems, menuSettings } from "../data";
import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {
  const [openSidebar, setOpenSidebar] = useState(false);
  const location = useLocation();
  function handleOpenSidebar() {
    setOpenSidebar(true);
  }
  function handleCloseSidebar() {
    setOpenSidebar(false);
  }
  
  return (
    <div className="font-sans px-0 mid:px-2  lg:px-8">
      <aside className="block mid:hidden">
        <img
          src={hamburgerIcon}
          alt=""
          className="w-7 h-7 "
          onClick={handleOpenSidebar}
        />
      </aside>
      <aside
        className={
          openSidebar
            ? "fixed z-10 top-0 left-0 w-1/2 shadow-lg px-3 bg-white h-screen"
            : "hidden mid:block mid:h-full"
        }
      >
        <div className="flex flex-col gap-20 justify-between">
          <img
            src={closeIcon}
            alt=""
            className="absolute top-2 right-4 mid:hidden border border-gray-300 px-1 py-0.25 rounded-md cursor-pointer"
            onClick={handleCloseSidebar}
          />
          <ul className="pt-10 mid:pt-0">
            {menuItems.map(({ name, id, icon, to }) => (
              <li
                key={id}
                onClick={handleCloseSidebar}
                className={`flex gap-1 lg:gap-3 items-center py-3.5 px-2 cursor-pointer  ${
                  location.pathname === to ||
                  location.pathname.startsWith(to + "/")
                    ? "bg-[#1E55AF] text-white rounded-md"
                    : "bg-white "
                }`}
              >
                <Link to={to} className="flex items-center gap-2">
                  <div
                    className={` w-4 h-4 md:w-5 md:h-5} ${
                      location.pathname === to ||
                      location.pathname.startsWith(to + "/")
                        ? "stroke-white"
                        : "stroke-[#030712]"
                    }`}
                  >
                    {icon}
                  </div>
                  <span className="text-xs lg:text-sm block mid:hidden lg:block">
                    {name}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <ul>
            {menuSettings.map(({ name, icon, id, to }) => (
              <Link to={to}>
                <li
                  key={id}
                  className={`flex gap-3 items-center py-3.5 px-2 cursor-pointer ${location.pathname === to || location.pathname.startsWith(to + "/") ? "bg-[#1E55AF] text-white rounded-md" : "bg-white "}`}
                  onClick={handleCloseSidebar}
                >
                  <div className={`w-4 h-4 md:w-5 md:h-5  ${location.pathname === to || location.pathname.startsWith(to + "/") ? "stroke-white"
                        : "stroke-[#030712]"}`}>
                    {icon}
                  </div>
                  <span className="text-xs lg:text-sm block mid:hidden lg:block">
                    {name}
                  </span>
                </li>
              </Link>
            ))}
          </ul>
        </div>
        <div className="flex gap-3 items-center pt-2 mid:pt-4.25">
          <img
            src={avatar}
            alt="avatar"
            className="cursor-pointer w-6 h-6 lg:w-12 lg:h-12"
          />
          <div className="flex flex-col gap-2">
            <h2 className="text-xs lg:text-sm block mid:hidden lg:block">
              Alison Eyo
            </h2>
            <p className="text-xs lg:text-sm block mid:hidden lg:block">
              alison.e@rayna.ui
            </p>
          </div>
          <img
            src={logoutIcon}
            alt="logout-icon"
            className="cursor-pointer block mid:hidden lg:block"
          />
        </div>
      </aside>
    </div>
  );
}
