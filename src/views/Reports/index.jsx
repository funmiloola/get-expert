import { NavLink, Outlet } from "react-router-dom";

export default function Reports() {
  return (
    <>
      <h2 className="text-xl mid:text-2xl text-[#181D27] font-bold pl-2 mid:pl-0">
        Reports & Reviews
      </h2>
      <div className="px-1 py-0.5 flex items-center gap-3 w-fit mt-4 bg-[#E9EAEB] border-[#E9EAEB] rounded-md">
        <NavLink
          end
          to=""
          className={({ isActive }) =>
            `px-14 py-2 text-sm font-semibold rounded-md cursor-pointer ${
              isActive
                ? "bg-white text-[#414651] border border-white shadow-sm"
                : "text-[#717680] hover:bg-[#FAFAFA]"
            }`
          }
        >
          <span>Reports</span>
        </NavLink>

        <NavLink
          to="reviews"
          className={({ isActive }) =>
            `px-14 py-2 text-sm font-semibold rounded-md cursor-pointer ${
              isActive
                ? "bg-white  my-0.5 text-[#414651] border border-white shadow-sm"
                : "text-[#717680] hover:bg-[#FAFAFA]"
            }`
          }
        >
          <span>Reviews</span>
        </NavLink>
      </div>
      <Outlet />
    </>
  );
}
