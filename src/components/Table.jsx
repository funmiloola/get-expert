import { useState } from "react";
import dropdown from "../assets/Icons/Dropdown.svg";
import Menu from "./Menu";
import { Outlet } from "react-router-dom";

export default function Table({ filteredTable }) {
  const [openOptions, setOpenOptions] = useState(false);
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full table-auto border-collapse">
        <thead className="text-left border-b border-b-[#E9EAEB] text-xs text-[#717680] font-semibold">
          <tr className="">
            <th className=" py-6 px-4 ">Name</th>
            <th className=" py-6 px-4 ">Email Address</th>
            <th className=" py-6 px-4 ">Booking History</th>
            <th className=" py-6 px-4 ">Joined date</th>
            <th className=" py-6 px-4 ">Purchases</th>
            <th className=" py-6 px-4 ">Client Status</th>
            <th className=" py-6 px-4 ">
              <img src={dropdown} alt="" className="" />
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredTable.length > 0 ? (
            filteredTable.map(
              ({
                pic,
                name,
                email,
                bookingHistory,
                joinedDate,
                purchases,
                status,
                menu,
              }) => (
                <tr className="border-b border-b-[#E9EAEB] text-left">
                  <td className="flex items-center gap-2 py-6 px-4 ">
                    <img src={pic} alt="" />
                    <span className="sm:font-medium text-[9px] sm:text-sm text-[#030712]">
                      {name}
                    </span>
                  </td>
                  <td className=" py-6 px-4 sm:font-medium text-[9px] sm:text-sm text-[#030712]">
                    {email}
                  </td>
                  <td className=" py-6 px-4 text-center sm:font-medium text-[9px] sm:text-sm text-[#030712] ">
                    {bookingHistory}
                  </td>
                  <td className=" py-6 px-4  sm:font-medium text-[9px] sm:text-sm text-[#030712]">
                    {joinedDate}
                  </td>
                  <td className=" py-6 px-4  sm:font-medium text-[9px] sm:text-sm text-[#030712]">
                    {purchases}
                  </td>
                  <td
                    className={`py-6 px-4  sm:font-medium text-[9px] sm:text-sm`}
                  >
                    <span
                      className={`px-2 py-0.5 rounded-2xl  border   ${
                        status === "Suspended"
                          ? "text-[#B42318] border-[#FECDCA] bg-[#FEF3F2]"
                          : ""
                      } ${
                        status === "Active"
                          ? "text-[#067647] border-[#ABEFC6] bg-[#ECFDF3]"
                          : ""
                      } ${
                        status === "Flagged"
                          ? "text-[#B54708] border-[#FEDF89] bg-[#FFFAEB]"
                          : ""
                      }`}
                    >
                      {status}
                    </span>
                  </td>
                  <td className="py-6 relative  px-4 cursor-pointer min-w-[85px]">
                    <img
                      src={menu}
                      alt=""
                      className=""
                      onClick={() => setOpenOptions((prev) => !prev)}
                    />
                  </td>
                        {openOptions && (
                            <>
                                <div className="inset-0 z-20 fixed" onClick={()=>setOpenOptions(false)}></div>
                    <div>
                      <Menu />
                                </div>
                                </>
                  )}
                </tr>
              )
            )
          ) : (
            <p>No result found</p>
          )}
        </tbody>
      </table>
    </div>
  );
}
