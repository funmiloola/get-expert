import DashboardHeader from "./DashboardHeader";
import plusIcon from "../assets/Icons/Plus 4.svg";
import { Outlet, NavLink, useLocation } from "react-router-dom";
import { useState } from "react";


export default function ClientSection() {
  const location = useLocation();
  const showExpertBtn = location.pathname === "/clients/experts";
  const isProfileRoute = location.pathname.includes("/clients/client") || location.pathname.includes("/clients/profile-expert");
    return (
        <div>
            {!isProfileRoute ? (
                <>
                     <DashboardHeader
        title="Clients & Experts"
        className={`flex-row items-start gap-3 pl-2 sm:pl-0 mid:gap-8`}
        extra={
          <button
            className={`flex gap-0.5 mid:gap-1.5 items-center bg-[#3B82F6] py-1 px-2  mid:py-2 mid:px-4 rounded-md ${
              showExpertBtn ? "block" : "hidden"
            }`}
          >
            <img src={plusIcon} alt="" className="w-3 h-3 md:w-6 mid:h-6"/>
            <span className="font-normal mid:font-semibold text-sm text-white">
              Add new expert
            </span>
          </button>
        }
      >
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
            Clients
          </NavLink>

          <NavLink
            to="experts"
            className={({ isActive }) =>
              `px-12 xl:px-17.5 py-2 text-sm font-semibold rounded-md cursor-pointer ${
                isActive
                  ? "bg-white  my-0.5 text-[#414651] border border-white shadow-sm"
                  : "text-[#717680]"
              }`
            }
          >
            Experts
          </NavLink>
        </div>
      </DashboardHeader>
      <section>
        <Outlet />
      </section>
                </>
            ) : (
             <div className="w-full h-full bg-white">
          <Outlet />
        </div>
      )}       
    </div>
  );
}
