import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { useState } from "react";
import LogoutModal from "./LogoutModal";
export default function ProfileModal() {
  const menus = [
    { img: "/Icons/Profile (1).svg", name: "View Profile" },
    { img: "/Icons/user.svg", name: "Community" },
    { img: "/Icons/Buy.svg", name: "My Cart" },
  ];
  const [user, setUser] = useState({});
  const [openModal, setOpenModal] = useState(false);
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  return (
    <section className="font-sans absolute right-8 top-7 w-45 md:w-64 z-50 bg-gray-50 rounded-xl">
      <div className="flex items-center md:items-start gap-1 pt-3 border-b border-b-gray-200">
        <div>
          <img
            src="/Images/Content.svg"
            alt=""
            className="w-9 h-9 md:w-18 md:h-18"
          />
        </div>
        <div className="">
          <h1 className="font-semibold text-[#181D27] text-[10px] md:text-sm">
            {user?.displayName}
          </h1>
          <p className="pt-1 text-[10px] md:text-sm text-[#535862]">
            {user?.email}
          </p>
        </div>
      </div>
      <ul className="bg-white flex flex-col gap-3 py-3 pl-4 border-b border-b-[#E9EAEB]  rounded-b-2xl">
        {menus.map(({ img, name, index }) => (
          <li key={index} className="flex gap-2 cursor-pointer">
            <img src={img} alt="" className="w-3 h-3 md:w-6 md:h-6" />
            <span className="font-semibold text-[#414651] text-[10px] md:text-sm">
              {name}
            </span>
          </li>
        ))}
      </ul>
      <div
        className="flex gap-2 pl-4 pt-3 pb-3.5 cursor-pointer"
        onClick={() => setOpenModal(!openModal)}
      >
        <img src="/Icons/Logout.svg" alt="" className="w-3 h-3 md:w-6 md:h-6" />
        <span className="font-semibold text-[#414651] text-[10px] md:text-sm">
          Sign Out
        </span>
      </div>
      {openModal && <LogoutModal />}
    </section>
  );
}
