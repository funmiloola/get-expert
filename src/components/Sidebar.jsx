import { useState } from "react";
import { menuItems, menuSettings } from "../data";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { auth } from "../firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";
import LogoutModal from "./LogoutModal";

export default function Sidebar() {
  const [openSidebar, setOpenSidebar] = useState(false);
  const [user, setUser] = useState({});
  const [openLogoutModal, setOpenLogoutModal] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  function handleOpenSidebar() {
    setOpenSidebar(true);
  }
  function handleCloseSidebar() {
    setOpenSidebar(false);
  }
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  return (
    <div className="font-sans px-0 mid:px-2  lg:px-8">
      <aside className="block mid:hidden">
        <img
          src="/Icons/hamburger-menu-more-svgrepo-com (1).svg"
          alt=""
          className="w-7 h-7 "
          onClick={handleOpenSidebar}
        />
      </aside>
      <aside
        className={
          openSidebar
            ? "fixed z-10 top-0 left-0 w-[60%] shadow-lg px-3 bg-white inset-0"
            : "hidden mid:block mid:h-full"
        }
      >
        <div className="flex flex-col gap-20 justify-between">
          <img
            src="/Icons/icons8-close.svg"
            alt=""
            className="absolute top-2 right-4 mid:hidden border border-gray-300 px-1 py-0.25 rounded-md cursor-pointer"
            onClick={handleCloseSidebar}
          />
          <ul className="pt-10 mid:pt-0">
            {menuItems.map(({ name, id, icon, to }) => (
              <Link to={to}>
                <li
                  key={id}
                  onClick={handleCloseSidebar}
                  className={`flex gap-1 lg:gap-3 py-3.5 px-2 cursor-pointer  ${
                    location.pathname === to ||
                    (location.pathname.startsWith(to + "/") && to !== "/home")
                      ? "bg-[#3B82F6] text-white rounded-md"
                      : "bg-white hover:bg-[#E9EAEB] hover:rounded-md"
                  }`}
                >
                  <div
                    className={` w-4 h-4 md:w-5 md:h-5} ${
                      location.pathname === to ||
                      (location.pathname.startsWith(to + "/") && to !== "/home")
                        ? "stroke-white"
                        : "stroke-[#030712]"
                    }`}
                  >
                    {icon}
                  </div>
                  <span className="text-xs lg:text-sm block mid:hidden lg:block">
                    {name}
                  </span>
                </li>
              </Link>
            ))}
          </ul>
          <ul>
            {menuSettings.map(({ name, icon, id, to }) => (
              <Link to={to}>
                <li
                  key={id}
                  className={`flex gap-3  py-3.5 px-2 cursor-pointer ${
                    location.pathname === to ||
                    (location.pathname.startsWith(to + "/") && to !== "/home")
                      ? "bg-[#3B82F6] text-white rounded-md"
                      : "bg-white hover:bg-[#E9EAEB] hover:rounded-md"
                  }`}
                  onClick={handleCloseSidebar}
                >
                  <div
                    className={`w-4 h-4 md:w-5 md:h-5  ${
                      location.pathname === to ||
                      (location.pathname.startsWith(to + "/") && to !== "/home")
                        ? "stroke-white"
                        : "stroke-[#030712]"
                    }`}
                  >
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
        <div className="flex gap-3   items-center pt-2 mid:pt-4.25">
          <img
            src="/Icons/Avatars.svg"
            alt="avatar"
            className="cursor-pointer w-6 h-6 lg:w-12 lg:h-12"
          />
          <div className="flex flex-col gap-2">
            <h2 className="text-xs lg:text-sm block mid:hidden lg:block">
              {user?.displayName}
            </h2>
            <p className="text-xs lg:text-sm block mid:hidden lg:block">
              {user?.email}
            </p>
          </div>
          <img
            src="/Icons/Logout.svg"
            alt="logout-icon"
            className="cursor-pointer hover:bg-[#E9EAEB] p-1 hover:rounded-sm block mid:hidden lg:block"
            onClick={() => setOpenLogoutModal(!openLogoutModal)}
          />
        </div>
      </aside>
      {openLogoutModal && <LogoutModal />}
    </div>
  );
}
