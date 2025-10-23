import dropdown from "../../assets/Icons/Dropdown.svg";
import starIcon from "../../assets/Icons/Star icon.svg";
import halfStar from "../../assets/Icons/Star.svg";
import { useState } from "react";
import PageSection from "../../components/PagesSection";
import Input from "../../components/Input";
import { Outlet, useLocation } from "react-router-dom";
import Table from "./Table";

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
                  <Table filteredWorkshop={filteredWorkshop} />
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