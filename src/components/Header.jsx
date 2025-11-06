import ProfileModal from "./ProfileModal";
import { useState, useRef } from "react";
import { useOnClickOutside } from "usehooks-ts";

export default function Header() {
  const [openDropdown, setOpenDropdown] = useState(false);
  const dropdownRef = useRef();
  useOnClickOutside(dropdownRef, () => setOpenDropdown(false));

  function handleOpenDropdown() {
    setOpenDropdown((prev) => !prev);
  }
  return (
    <header className="flex font-sans justify-between items-center pt-5 pb-4 px-4 mid:px-12 mid:pt-6.25 mid:pb-10">
      <div>
        <img
          src="/Icons/Frame.svg"
          alt="logo"
          className="cursor-pointer w-24 h-8 mid:w-36 mid:h-10"
        />
      </div>
      <div className="flex items-center gap-4">
        <div className="hover:bg-[#E9EAEB] p-2 hover:rounded-sm">
          <img
            src="/Icons/Heart.svg"
            alt="icon"
            className="cursor-pointer w-4.5 h-4.5 mid:w-5.5 mid:h-5.5 "
          />
        </div>
        <div>
          <img
            src="/Icons/Notification.svg"
            alt="n-icon"
            className="border-[#3B82F6] bg-[#3B82F6] w-6 h-6 mid:w-10 mid:h-10  p-1 mid:p-2.5 rounded-md cursor-pointer"
          />
        </div>
        <div className="relative">
          <img
            src="/Icons/Avatars.svg"
            alt="avatar"
            className="cursor-pointer w-8 h-8 mid:w-12 mid:h-12 "
            onClick={handleOpenDropdown}
          />
        </div>
      </div>
      {openDropdown && (
        <>
          <div ref={dropdownRef} className="absolute right-0 mt-3">
            <ProfileModal />
          </div>
        </>
      )}
    </header>
  );
}
