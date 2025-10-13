import logo from "../assets/Icons/Frame.svg";
import favouriteIcon from "../assets/Icons/Heart.svg";
import notificationIcon from "../assets/Icons/Notification.svg";
import avatar from "../assets/Icons/Avatars.svg";
import ProfileModal from "./ProfileModal";
import { useState } from "react";


export default function Header() {
  const [openDropdown, setOpenDropdown] = useState(false);
  function handleOpenDropdown() {
    setOpenDropdown((prev) => !prev);
  }
  return (
    <header className="flex font-sans justify-between items-center pt-5 pb-4 px-4 mid:px-12 mid:pt-6.25 mid:pb-10">
      <div>
        <img
          src={logo}
          alt="logo"
          className="cursor-pointer w-24 h-8 mid:w-36 mid:h-10"
        />
      </div>
      <div className="flex items-center gap-5">
        <img
          src={favouriteIcon}
          alt="icon"
          className="cursor-pointer w-4.5 h-4.5 mid:w-5.5 mid:h-5.5"
        />
        <img
          src={notificationIcon}
          alt="n-icon"
          className="border-[#3B82F6] bg-[#3B82F6] w-6 h-6 mid:w-10 mid:h-10  p-1 mid:p-2.5 rounded-md cursor-pointer"
        />
        <div className="relative">
          <img
            src={avatar}
            alt="avatar"
            className="cursor-pointer w-8 h-8 mid:w-12 mid:h-12 "
            onClick={handleOpenDropdown}
          />
        </div>
      </div>
      {openDropdown && (
        <div className="absolute right-0 mt-3">
          <ProfileModal />
        </div>
      )}
    </header>
  );
}
