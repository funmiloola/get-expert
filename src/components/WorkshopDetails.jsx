import { useState } from "react";
import arrow from "../assets/Icons/Arrow---Right-2.svg";
import dateIcon from "../assets/Icons/Icon Set.svg";
import durationIcon from "../assets/Icons/Icon Set (1).svg";
import priceIcon from "../assets/Icons/Dollar circle 2.svg";
import userIcon from "../assets/Icons/user.svg";
import cameraIcon from "../assets/Icons/Camera video.svg"
import hostPicture from "../assets/Images/Image (5).svg"
import arrowUp from "../assets/Icons/Stroke-1.svg"
import arrowDown from "../assets/Icons/Vector (13).svg"
import upDownArrow from "../assets/Icons/chevron-selector-vertical.svg"
import dropdown from "../assets/Icons/Dropdown.svg"
import starIcon from "../assets/Icons/Star icon.svg"
import halfStar from "../assets/Icons/Star.svg"
import PageSection from "./PagesSection";

export default function WorkshopDetails() {
  const [isExpanded, setIsExpanded] = useState(false);
  const text =
    "Navigating business taxes can often feel like a daunting task for many entrepreneurs. Understanding the various tax obligations that come with running a business is crucial for maintaining compliance and avoiding penalties. From income tax to sales tax, each type of tax has its own set of rules and regulations that must be adhered to. It's essential for business owners to familiarize themselves with these requirements to ensure they are meeting their legal obligations while also optimizing their tax situation.One of the first steps in navigating business taxes is to determine the structure of your business. Whether you operate as a sole proprietorship, partnership, corporation, or LLC, each structure has different tax implications. For instance, corporations may face double taxation on profits, while sole proprietors report business income on their personal tax returns. Understanding these distinctions can help you make informed decisions about your business structure and tax strategy.Additionally, keeping accurate records throughout the year can significantly ease the tax filing process. This includes tracking income, expenses, and any deductions you may be eligible for. Utilizing accounting software or hiring a professional accountant can streamline this process and ensure that you are not missing out on potential savings. By staying organized and informed, you can navigate the complexities of business taxes with confidence and focus on growing your enterprise.";
  const maxlength = 439;
  if (text.length <= maxlength) {
    return <p>{text}</p>;
  }
  const displayText = isExpanded ? text : text.slice(0, maxlength) + "...";
  const attendeeData = [
  {
    name: "Tolu Ajayi",
    email: "tolu@email.com",
    amount: "₦40,000",
    confirmed: "Yes",
    rating:[starIcon,starIcon,starIcon,starIcon,halfStar],
    icon:dropdown
  },
  {
    name: "Tolu Ajayi",
    email: "tolu@email.com",
    amount: "₦40,000",
    confirmed: "Yes",
    rating:[starIcon,starIcon,starIcon,starIcon],
    icon:dropdown
  }
    ];
    const [showAttendees,setShowAttendees] = useState(false)

  return (
    <section className="font-sans pt-1 pl-2 mid:pl-0 mid:pt-4">
      <header className="flex gap-1 mid:gap-2.5 items-center">
        <h2 className="text-[10px] mid:text-sm text-[#667185]  mid:font-medium">Workshops</h2>
        <div className="flex gap-1.5 mid:gap-3 items-center">
          <img src={arrow} alt="" />
          <p className="text-[10px] mid:text-sm text-[#383BCA] font-medium">
            How to Build a Winning Pitch Deck{" "}
            <span className="text-[#98A2B3]">/</span>
          </p>
        </div>
      </header>
      <h3 className="text-lg mid:text-[28px] font-bold text-[#030712] pt-2.5 mid:pt-5">
        How to Build a Winning Pitch Deck
      </h3>
      <h4 className="text-sm mid:text-[18px] font-semibold text-[#030712] pt-2.5 mid:pt-5">
        Workshop Summary
      </h4>
      <p className="text-base text-[#535862] pt-2 mid:pt-4.5 mid:pr-4">{displayText}</p>
      <button
        className={`text-sm font-semibold pt-3 cursor-pointer ${
          isExpanded ? "text-gray-400" : "text-[#1E55AF]"
        }`}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? "READ LESS" : "READ MORE"}
          </button>
          <div className="flex flex-col mid:flex-row gap-4 mid:items-center pt-6">
              <div className="flex gap-2 items-center">
                  <img src={dateIcon} alt="" />
                  <p className="text-base font-semibold text-[#030712] flex gap-2 items-center">Date & Time:<span className="text-sm font-medium">May 30, 2025 | 09:32AM</span></p>
              </div>
              <div className="flex gap-2 items-center">
                  <img src={durationIcon} alt="" />
                  <p className="text-base font-semibold text-[#030712] flex gap-2 items-center">Duration:<span className="text-sm font-medium">4h 30min</span></p>
              </div>
              <div className="flex gap-2 items-center">
                  <img src={priceIcon} alt="" />
                  <p className="text-base font-semibold text-[#030712] flex gap-2 items-center">Price:<span className="text-sm font-medium">$45,000</span></p>
              </div>
          </div>
          <div className="flex gap-4 items-center pt-2">
              <div className="flex gap-2 items-center">
                  <img src={userIcon} alt="" />
                  <p className="text-base font-semibold text-[#030712] flex gap-2 items-center">Class size: <span className="text-sm font-medium">25</span></p>
              </div>
              <div className="flex gap-2 items-center">
                  <img src={cameraIcon} alt="" />
                  <p className="text-base font-semibold text-[#030712] flex gap-2 items-center">App : <span className="text-sm font-medium">Goggle Meet</span></p>
              </div>
          </div>
          <h5 className="text-[18px] font-semibold text-[#030712] pt-8">Host Information</h5>
          <div className="flex flex-col  md:flex-row gap-4 md:gap-10.5 pt-4.5">
              <div className="flex gap-4.5">
                  <img src={hostPicture} alt="" />
                  <div className="flex flex-col gap-1">
                      <h6 className="text-lg mid:text-2xl text-[#030712] font-semibold" >Roxanna Michealson</h6>
                      <p className="text-[#475367] text-sm">Role: <span className="text-sm mid:text-base text-[#101928] font-semibold">Startup Strategist & Pitch Coach</span></p>
                      </div>
              </div>
              <div className="flex flex-col mid:flex-row gap-4 mid:gap-9 mid:items-center">
              <div className="flex flex-col gap-4">
                  <h6 className="text-[#475367] text-sm">Reviews</h6>
                  <p className="text-base text-[#101928] font-semibold">4.9 (210 reviews)</p>
              </div>
              <div className="flex flex-col gap-4">
                  <h6 className="text-[#475367] text-sm">Sessions Hosted</h6>
                  <p className="text-base text-[#101928] font-semibold">25</p>
              </div>
              <div className="flex flex-col items-start gap-4">
                  <h6 className="text-[#475367] text-sm">Status</h6>
                  <p className="text-[#067647] text-sm font-medium border border-[#ABEFC6] bg-[#ECFDF3] px-2.5 py-0.5 rounded-2xl">Active</p>
                  </div>
                  </div>
              </div>
             <div className="pt-8 mid:pt-16.25">
              <div className="flex justify-between items-center">
                  <h5 className="text-sm font-semibold text-[#1E55AF]  uppercase">View attendee list</h5>
                  <div>
                  {showAttendees ? (
                      <img src={arrowDown} alt="" onClick={()=> setShowAttendees(false)} className="cursor-pointer"/>
                  ) : (
                          <img src={arrowUp} alt="" onClick={()=> setShowAttendees(true)} className="cursor-pointer"/>
                  )}
                      <img src="" alt="" />
                      </div>
              </div>
              <div className="overflow-x-auto pt-8">
                  {showAttendees && (
                      <div>
                       <table className="min-w-full border-collapse">
    <thead className="border-b border-b-[#E9EAEB]">
      <tr className="">
        <th className="text-left py-3 px-4 text-[#717680] text-xs font-semibold">
          <div className="flex items-center gap-1">
            <span>Name</span>
            <img src={upDownArrow} alt="" />
          </div>
        </th>
        <th className="text-left py-3 px-4 text-[#717680] text-xs font-semibold">
          <div className="flex items-center gap-1">
            <span>Host</span>
            <img src={upDownArrow} alt="" />
          </div>
        </th>
        <th className="text-left py-3 px-4 text-[#717680] text-xs font-semibold">
          <div className="flex items-center gap-1">
            <span>Paid amount</span>
            <img src={upDownArrow} alt="" />
          </div>
        </th>
        <th className="text-left py-3 px-4 text-[#717680] text-xs font-semibold">
          <div className="flex items-center gap-1">
            <span>Attended</span>
            <img src={upDownArrow} alt="" />
          </div>
        </th>
        <th className="text-left py-3 px-4 text-[#717680] text-xs font-semibold">
          <div className="flex items-center gap-1">
            <span>Feedback</span>
            <img src={upDownArrow} alt="" />
          </div>
        </th>
        <th className="py-3 px-4">
          <img src={dropdown} alt="" />
        </th>
      </tr>
    </thead>

    <tbody>
      {attendeeData.map(({ name, email, amount, confirmed, rating, icon }, index) => (
        <tr key={index} className="border-b border-b-[#E9EAEB]">
          <td className="py-4 px-4 text-sm text-[#030712] font-medium">{name}</td>
          <td className="py-4 px-4 text-[#1E55AF] text-sm font-medium ">{email}</td>
          <td className="py-4 px-4 text-sm text-[#030712] font-medium">{amount}</td>
          <td className="py-4 px-4 text-sm text-[#030712] font-medium">{confirmed}</td>
          <td className="py-4 px-4">
            <div className="flex gap-1">
              {
                rating.map((rate) => <img src={rate} alt="" />)}
            </div>
          </td>
          <td className="py-4 px-4">
            <img src={icon} alt="" />
          </td>
        </tr>
      ))}
    </tbody>
                      </table>
                      <footer>
              <PageSection/>
                          </footer>
                          </div>
                  )}
 
</div>

          </div>
          
    </section>
  );
}
