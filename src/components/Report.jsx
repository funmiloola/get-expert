import Input from "./Input";
import { NavLink,Outlet} from "react-router-dom";
import dropdown from "../assets/Icons/Dropdown.svg";
import { useState } from "react";

export default function Report() {
  
  return (
    <>
      <h2 className="text-xl mid:text-2xl text-[#181D27] font-bold pl-2 mid:pl-0">Reports & Reviews</h2>
      <div className="flex items-center  xl:w-[40%] mt-4 bg-[#E9EAEB] border-[#E9EAEB] rounded-md">
        <NavLink
          end
          to=""
          className={({ isActive }) =>
            `px-15 xl:px-20 py-2 text-sm font-semibold rounded-md cursor-pointer ${
              isActive
                ? "bg-white ml-1  my-0.5 text-[#414651] border border-white shadow-sm"
                : "text-[#717680]"
            }`
          }
        >
          Reports
        </NavLink>

        <NavLink
          to="reviews"
          className={({ isActive }) =>
            `px-12 xl:px-17.5 py-2 text-sm font-semibold rounded-md cursor-pointer ${
              isActive
                ? "bg-white  my-0.5 text-[#414651] border border-white shadow-sm"
                : "text-[#717680]"
            }`
          }
        >
          Reviews
        </NavLink>
      </div>
      <Outlet/>
    </>
  );
}
