import { Outlet, NavLink, useLocation } from "react-router-dom";
import DashboardHeader from "../../components/DashboardHeader";

export default function ClientSection() {
  const location = useLocation();
  const showExpertBtn = location.pathname === "/home/clients/experts";
  const isProfileRoute =
    location.pathname.includes("/home/clients/client") ||
    location.pathname.includes("/home/clients/profile-expert");
  return (
    <div>
      {!isProfileRoute ? (
        <>
          <DashboardHeader
            title="Clients & Experts"
            className={`flex-row items-start gap-3  mid:gap-8`}
            extra={
              <button
                className={`flex gap-0.5 mid:gap-1.5 items-center bg-[#3B82F6] py-1 px-2  mid:py-2 mid:px-4 rounded-md hover:bg-blue-600 cursor-pointer ${
                  showExpertBtn ? "block" : "hidden"
                }`}
              >
                <img
                  src="/Icons/Plus 4.svg"
                  alt=""
                  className="w-3 h-3 md:w-6 mid:h-6"
                />
                <span className="font-normal mid:font-semibold text-sm text-white">
                  Add new expert
                </span>
              </button>
            }
          >
            <div className="px-1 py-0.5 flex items-center w-fit gap-3 mt-4 bg-[#E9EAEB] border-[#E9EAEB] rounded-md">
              <NavLink
                end
                to=""
                className={({ isActive }) =>
                  ` py-2 px-14 text-sm font-semibold rounded-md cursor-pointer ${
                    isActive
                      ? "bg-white text-[#414651] border border-white shadow-sm"
                      : "text-[#717680] hover:bg-[#FAFAFA] "
                  }`
                }
              >
              <span>Clients</span>  
              </NavLink>

              <NavLink
                to="experts"
                className={({ isActive }) =>
                  ` py-2 px-14 text-sm font-semibold rounded-md cursor-pointer ${
                    isActive
                      ? "bg-white text-[#414651] border border-white shadow-sm"
                      : "text-[#717680] hover:bg-[#FAFAFA] "
                  }`
                }
              >
               <span>Experts</span> 
              </NavLink>
            </div>
          </DashboardHeader>
          <section>
            <Outlet />
          </section>
        </>
      ) : (
        <div className="w-full bg-white">
          <Outlet />
        </div>
      )}
    </div>
  );
}
