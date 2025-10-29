import WorkshopMenu from "./WorkshopMenu";
import { useState, useRef } from "react";
import { useOnClickOutside } from "usehooks-ts";

export default function Table({ filteredWorkshop }) {
  const [openOptions, setOpenOptions] = useState(null);
  const dropdownRef = useRef();
  useOnClickOutside(dropdownRef, () => setOpenOptions(null));
  return (
    <div className="overflow-x-auto pt-4 mid:pt-6 w-full ">
      <table className=" min-w-full table-auto  border-collapse">
        <thead className="border-b border-b-[#E9EAEB]  text-xs text-[#717680] font-semibold">
          <tr className="text-left">
            <th className="py-6 px-4">Workshop Title</th>
            <th className="py-6 px-4">Host</th>
            <th className="py-6 px-4">Date</th>
            <th className=" px-3 py-4">Seats booked</th>
            <th className="px-6 py-4">Avg Rating</th>
            <th className="py-6 px-10 md:px-4">Status</th>
            <th className="py-6 px-4">
              <img src="/Icons/Dropdown.svg" alt="" />
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredWorkshop.length > 0 ? (
            filteredWorkshop.map(
              (
                { title, handle, dateTime, progress, ratings, status, icon },
                index
              ) => (
                <tr
                  key={index}
                  className="text-left border-b border-b-[#E9EAEB] font-medium text-sm text-[#030712]"
                >
                  <td className="py-6  px-4">{title}</td>
                  <td className="py-6 px-4">{handle}</td>
                  <td className="py-6 px-4">{dateTime}</td>
                  <td className=" py-6 px-4">{progress}</td>
                  <td className=" flex gap-0.5 justify-center md:justify-start  md:gap-1 py-10 md:py-6 px-4">
                    {Array.isArray(ratings) ? (
                      ratings.map((rating) => (
                        <img src={rating} alt="" className="" />
                      ))
                    ) : (
                      <span>{ratings}</span>
                    )}
                  </td>
                  <td className="py-6 px-8 md:px-4">
                    <span
                      className={`px-2 py-0.5 border rounded-2xl ${
                        status === "Due" || status === "Completed"
                          ? "border-[#ABEFC6] text-[#067647] bg-[#ECFDF3]"
                          : null
                      } ${
                        status === "Cancelled"
                          ? "text-[#B42318] border-[#FECDCA] bg-[#FEF3F2]"
                          : null
                      }`}
                    >
                      {status}
                    </span>
                  </td>
                  <td className="py-6 px-4 relative cursor-pointer min-w-[88px]">
                    <img
                      src={icon}
                      alt=""
                      className="hover:bg-[#E9EAEB] hover:rounded-sm"
                      onClick={() =>
                        setOpenOptions(openOptions === index ? null : index)
                      }
                    />
                    {openOptions === index && (
                      <div ref={dropdownRef}>
                        <WorkshopMenu />
                      </div>
                    )}
                  </td>
                </tr>
              )
            )
          ) : (
            <tr>
              <td colSpan="6" className="text-center pt-4">
                No results found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
