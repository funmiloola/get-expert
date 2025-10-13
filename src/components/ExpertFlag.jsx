import profilePicture from "../assets/Images/Avatars (1).svg"
import Icon from "../assets/Icons/Stroke-1.svg"
import flag from "../assets/Icons/Vector (12).svg"
import { act } from "react";


export default function ExpertFlag() {
const reports = [
    {
          profilePicture:profilePicture,
        reportedBy: "@LayoTech",
          flag:flag,
    location: "Lagos, Nigeria",
    date: "May 30, 2025",
    comment: `"This consultant misrepresented what was in the product."`,
    reportType: "Misleading Info",
    status: "Open",
    actions: ["View Details", "Dismiss Report", "Warn Consultant"]
  },
  {    profilePicture:profilePicture,
      reportedBy: "@LayoTech",
          flag:flag,
    location: "Lagos, Nigeria",
    date: "May 30, 2025",
    comment: `"This consultant misrepresented what was in the product."`,
    reportType: "Misleading Info",
    status: "Open",
    actions: ["View Details", "Dismiss Report", "Warn Consultant"]
  }
];

    return (
        <>
        <div className="flex gap-2.5 pt-12">
                        <h2 className="text-sm text-[#030712] font-medium">Sort by:</h2>
                        <div className="flex gap-3 items-center">
                            <span className="text-sm font-bold text-[#030712]">Most relevant</span>
                            <img src={Icon} alt="" />
                        </div>
            </div>
            <div className="flex flex-col gap-4 py-6">
                {reports.map(({ profilePicture, reportedBy, flag, location, date, comment, reportType, status, actions }) => (
                    <div className="border border-[#C9D0D8] rounded-xl p-6">
                        <div className="flex gap-7.5 items-center">
                        <img src={profilePicture} alt="" />
                        <div className="flex flex-col gap-2">
                            <h2 className="text-sm font-bold">{reportedBy}</h2>
                            <div className="flex gap-2">
                                <img src={flag} alt="" />
                                <p>{ location}</p>
                            </div>
                            </div>
                            </div>
                        <h3 className="text-sm pt-4">{date}</h3>
                        <h4  className="pt-5 text-[#030712] text-sm font-bold">Comment: <span className="font-normal">{comment}</span></h4>
                        <div className="flex gap-4 pt-5">
                            <h5 className="flex flex-col justify-center text-xs font-semibold text-[#030712] md:border-r md:border-r-[#F0F2F5] pr-4">REPORT TYPE<span className="text-base">{reportType}</span></h5>
                            <h5 className="flex flex-col justify-center text-xs font-semibold text-[#030712]">STATUS <span className="text-base">{ status}</span></h5>
                        </div>
                        <div className="flex flex-col md:flex-row gap-2 md:gap-4.25 pt-5">
                            {actions.map((action) => (
                                <p className={`font-semibold text-sm ${action === "View Details" ? 'text-[#1E55AF]':null} ${action === "Dismiss Report" ? 'text-[#5F6574]':null} ${action === "Warn Consultant" ? "text-[#DC2626]":null}`}>{action }</p>
                            ))}
                        </div>
                    </div>
                    
                ))}
            </div>
        </>
    )
}