import Input from "./Input";
import starIcon from "../assets/Icons/Star icon.svg"
import oneStar from "../assets/Icons/Star (1).svg"
import halfIcon from "../assets/Icons/Star.svg"
import dropdown from "../assets/Icons/Dropdown.svg"
import { useState } from "react";
import PageSection from "./PagesSection";
import ReviewMenu from "./ReviewMenu";

export default function ReviewSection() {
    const reviews = [
  {
    itemType: "Product",
    title: "Client Toolkit",
    reviewer: "@coachlola",
    stars: [starIcon,starIcon,starIcon,starIcon,halfIcon],
    textPreview: "So detailed and clear!",
    dateSubmitted: "Apr 12, 2023",
            status: "Published",
    icon:dropdown
  },
  {
    itemType: "Workshop",
    title: "Client Toolkit",
    reviewer: "@coachlola",
    stars: [starIcon,starIcon,starIcon,starIcon],
    textPreview: "Misleading info",
    dateSubmitted: "Apr 24, 2023",
      status: "Published",
    icon:dropdown
  },
  {
    itemType: "Workshop",
    title: "Client Toolkit",
    reviewer: "@coachlola",
    stars: [starIcon,starIcon,starIcon,starIcon],
    textPreview: "Total waste of time",
    dateSubmitted: "Apr 25, 2023",
    status: "Flagged",
    icon:dropdown
  },
  {
    itemType: "Product",
    title: "Growth Strategy...",
    reviewer: "@coachlola",
    stars: [starIcon,starIcon,oneStar],
    textPreview: "Total waste of time",
    dateSubmitted: "Apr 29, 2023",
    status: "Published",
    icon:dropdown
  }
    ];
const [input,setInput] = useState("")
    const filteredReview = reviews.filter(({ title }) => title.toLowerCase().includes(input.toLowerCase()))
    const [openOptions,setOpenOptions] = useState(false)

    return (
        <>
            <div className="w-full mid:w-1/2 pt-8">
                <Input input={input} onChange={(e)=>setInput(e.target.value)} placeholder="Search for products"/>
                </div>
            <div className="overflow-x-auto pt-4 mid:pt-6">
                <table className="min-w-full table-auto border-collapse">
                    <thead className="border-b border-b-[#E9EAEB]  text-xs text-[#717680] font-semibold">
                        <tr className="text-left">
                            <th className="px-4 py-6">Item Type</th>
                            <th className="px-4 py-6">Title</th>
                            <th className="px-4 py-6">Reviewer</th>
                            <th className="px-4 py-6">Stars</th>
                            <th className="px-4 py-6" >Text Preview</th>
                            <th className="px-4 py-6">Date Submitted</th>
                            <th className="px-4 py-6">Status</th>
                            <th className="px-4 py-6">
                                <img src={dropdown} alt="" />
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredReview.map(({ itemType, title, reviewer, stars, textPreview, dateSubmitted, status,icon }) =>
                        (
                            <tr className="text-left border-b border-b-[#E9EAEB] font-medium text-sm text-[#030712]">
                                <td className="px-4 py-6">{itemType}</td>
                                <td className="px-4 py-6">{title}</td>
                                <td className="px-4 py-6">{reviewer}</td>
                                <td className="flex gap-1 px-4 py-6">{stars.map((star) => (
                                    <img src={star} alt="star"/>
                                )
                                )}</td>
                                <td className="px-4 py-6">{textPreview}</td>
                                <td className="px-4 py-6">{dateSubmitted}</td>
                                <td className="px-4 py-6">
                                  <span className={`border px-2 py-0.5 rounded-2xl ${status === "Published" ? "text-[#067647] bg-[#ECFDF3] border-[#ABEFC6]":"text-[#B42318] bg-[#FEF3F2] border-[#FECDCA]"}`}>{status}</span>  
                                </td>
                                <td className="px-4 py-6 min-w-[50px] cursor-pointer">
                                    <img src={icon} alt="" onClick={()=> setOpenOptions(!openOptions)} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {openOptions && (
                <div>
                    <div className="inset-0 fixed z-20" onClick={()=>setOpenOptions(false)}></div>
                    <ReviewMenu/>
                </div>
            )}
            <PageSection/>
        </>
    )
}