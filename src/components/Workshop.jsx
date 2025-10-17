import Input from "./Input";
import dropdown from "../assets/Icons/Dropdown.svg";
import starIcon from "../assets/Icons/Star icon.svg";
import halfStar from "../assets/Icons/Star.svg";
import { useState } from "react";
import PageSection from "./PagesSection";
import WorkshopMenu from "./WorkshopMenu";
import { Outlet, useLocation } from "react-router-dom";

export default function Workshop() {
  const workshopData = [
    {
      title: "Monetize Your Expertise",
      handle: "@CoachLade",
      dateTime: "May 30, 2025 | 09:32AM",
      progress: "18/20",
      ratings: [starIcon, starIcon, starIcon, starIcon],
      status: "Completed",
      icon: dropdown,
    },
    {
      title: "How to Build a Winni...",
      handle: "@TemplateKing",
      dateTime: "June 5, 2025 | 09:32AM",
      progress: "8/20",
      ratings: [starIcon, starIcon, starIcon, halfStar],
      status: "Due",
      icon: dropdown,
    },
    {
      title: "Pricing Masterclass",
      handle: "@DesignBoss",
      dateTime: "Apr 12, 2023 | 09:32AM",
      progress: "34/50",
      ratings: "-",
      status: "Cancelled",
      icon: dropdown,
    },
  ];
  const [openOptions, setOpenOptions] = useState(false);
  const [input, setInput] = useState("");
  const location = useLocation();
  const filteredWorkshop = workshopData.filter(({ title }) =>
    title.toLowerCase().includes(input.toLowerCase())
  );
  const isWorkshopRoute = location.pathname.includes(
    "/workshops/workshop-details"
  );

  return (
    <>
      {!isWorkshopRoute ? (
        <section className="">
          <h2 className="text-[#181D27] text-xl mid:text-2xl font-bold pl-2 mid:pl-0">Workshops</h2>
          <div className="pt-8 w-full mid:w-1/2">
            <Input
              placeholder="Search for workshops"
              input={input}
              onChange={(e) => setInput(e.target.value)}
            />
          </div>
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
                    <img src={dropdown} alt="" />
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredWorkshop.length > 0 ? (
                  filteredWorkshop.map(
                    ({
                      title,
                      handle,
                      dateTime,
                      progress,
                      ratings,
                      status,
                      icon,
                    }) => (
                      <tr className="text-left border-b border-b-[#E9EAEB] font-medium text-sm text-[#030712]">
                        <td className="py-6  px-4">{title}</td>
                        <td className="py-6 px-4">{handle}</td>
                        <td className="py-6 px-4">{dateTime}</td>
                        <td className=" py-6 px-4">{progress}</td>
                        <td className=" flex gap-0.5 justify-center md:justify-start  md:gap-1 py-10 md:py-6 px-4">
                          {Array.isArray(ratings) ? (
                            ratings.map((rating) => <img src={rating} alt="" className="" />)
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
                            onClick={() => setOpenOptions((prev) => !prev)}
                          />
                        </td>
                      </tr>
                    )
                  )
                ) : (
                  <p> No results found</p>
                )}
              </tbody>
            </table>
          </div>
                  {openOptions && (
                      <>
                      <div
        className="fixed inset-0 z-10"
        onClick={() => setOpenOptions(false)}
      ></div>
            <div>
              <WorkshopMenu />
                          </div>
                          </>
          )}
          <PageSection />
        </section>
      ) : (
        <div className="w-full">
          <Outlet />
        </div>
      )}
    </>
  );
}
