import { useState } from "react";
import arrow from "../../../assets/Icons/Arrow---Right-2.svg";
import dateIcon from "../../../assets/Icons/Icon Set.svg";
import durationIcon from "../../../assets/Icons/Icon Set (1).svg";
import priceIcon from "../../../assets/Icons/Dollar circle 2.svg";
import userIcon from "../../../assets/Icons/user.svg";
import cameraIcon from "../../../assets/Icons/Camera video.svg";

export default function Header() {
      const [isExpanded, setIsExpanded] = useState(false);
      const text =
        "Navigating business taxes can often feel like a daunting task for many entrepreneurs. Understanding the various tax obligations that come with running a business is crucial for maintaining compliance and avoiding penalties. From income tax to sales tax, each type of tax has its own set of rules and regulations that must be adhered to. It's essential for business owners to familiarize themselves with these requirements to ensure they are meeting their legal obligations while also optimizing their tax situation.One of the first steps in navigating business taxes is to determine the structure of your business. Whether you operate as a sole proprietorship, partnership, corporation, or LLC, each structure has different tax implications. For instance, corporations may face double taxation on profits, while sole proprietors report business income on their personal tax returns. Understanding these distinctions can help you make informed decisions about your business structure and tax strategy.Additionally, keeping accurate records throughout the year can significantly ease the tax filing process. This includes tracking income, expenses, and any deductions you may be eligible for. Utilizing accounting software or hiring a professional accountant can streamline this process and ensure that you are not missing out on potential savings. By staying organized and informed, you can navigate the complexities of business taxes with confidence and focus on growing your enterprise.";
      const maxlength = 439;
      if (text.length <= maxlength) {
        return <p>{text}</p>;
      }
      const displayText = isExpanded ? text : text.slice(0, maxlength) + "...";
   
    return (
        <>
        <header className="flex gap-1 mid:gap-2.5 items-center">
                <h2 className="text-[10px] mid:text-sm text-[#667185]  mid:font-medium">
                  Workshops
                </h2>
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
              <p className="text-base text-[#535862] pt-2 mid:pt-4.5 mid:pr-4">
                {displayText}
              </p>
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
                  <p className="text-base font-semibold text-[#030712] flex gap-2 items-center">
                    Date & Time:
                    <span className="text-sm font-medium">May 30, 2025 | 09:32AM</span>
                  </p>
                </div>
                <div className="flex gap-2 items-center">
                  <img src={durationIcon} alt="" />
                  <p className="text-base font-semibold text-[#030712] flex gap-2 items-center">
                    Duration:<span className="text-sm font-medium">4h 30min</span>
                  </p>
                </div>
                <div className="flex gap-2 items-center">
                  <img src={priceIcon} alt="" />
                  <p className="text-base font-semibold text-[#030712] flex gap-2 items-center">
                    Price:<span className="text-sm font-medium">$45,000</span>
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-center pt-2">
                <div className="flex gap-2 items-center">
                  <img src={userIcon} alt="" />
                  <p className="text-base font-semibold text-[#030712] flex gap-2 items-center">
                    Class size: <span className="text-sm font-medium">25</span>
                  </p>
                </div>
                <div className="flex gap-2 items-center">
                  <img src={cameraIcon} alt="" />
                  <p className="text-base font-semibold text-[#030712] flex gap-2 items-center">
                    App : <span className="text-sm font-medium">Goggle Meet</span>
                  </p>
                </div>
              </div>
        </>
    )
}