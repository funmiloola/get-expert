import PageSection from "../../../components/PagesSection"
import dropdown from "../../../assets/Icons/Dropdown.svg";
import starIcon from "../../../assets/Icons/Star icon.svg";
import halfStar from "../../../assets/Icons/Star.svg";
import arrowDown from "../../../assets/Icons/Vector (13).svg";
import arrowUp from "../../../assets/Icons/Stroke-1.svg"
import upDownArrow from "../../../assets/Icons/chevron-selector-vertical.svg";
import { useState } from "react";

export default function Table() {
    const attendeeData = [
        {
          name: "Tolu Ajayi",
          email: "tolu@email.com",
          amount: "₦40,000",
          confirmed: "Yes",
          rating: [starIcon, starIcon, starIcon, starIcon, halfStar],
          icon: dropdown,
        },
        {
          name: "Tolu Ajayi",
          email: "tolu@email.com",
          amount: "₦40,000",
          confirmed: "Yes",
          rating: [starIcon, starIcon, starIcon, starIcon],
          icon: dropdown,
        },
      ];
      const [showAttendees, setShowAttendees] = useState(false);
    
    return (
        <>
        <div className="pt-8 mid:pt-16.25">
                <div className="flex justify-between items-center">
                  <h5 className="text-sm font-semibold text-[#1E55AF]  uppercase">
                    View attendee list
                  </h5>
                  <div>
                    {showAttendees ? (
                      <img
                        src={arrowDown}
                        alt=""
                        onClick={() => setShowAttendees(false)}
                        className="cursor-pointer"
                      />
                    ) : (
                      <img
                        src={arrowUp}
                        alt=""
                        onClick={() => setShowAttendees(true)}
                        className="cursor-pointer"
                      />
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
                          {attendeeData.map(
                            (
                              { name, email, amount, confirmed, rating, icon },
                              index
                            ) => (
                              <tr key={index} className="border-b border-b-[#E9EAEB]">
                                <td className="py-4 px-4 text-sm text-[#030712] font-medium">
                                  {name}
                                </td>
                                <td className="py-4 px-4 text-[#1E55AF] text-sm font-medium ">
                                  {email}
                                </td>
                                <td className="py-4 px-4 text-sm text-[#030712] font-medium">
                                  {amount}
                                </td>
                                <td className="py-4 px-4 text-sm text-[#030712] font-medium">
                                  {confirmed}
                                </td>
                                <td className="py-4 px-4">
                                  <div className="flex gap-1">
                                    {rating.map((rate) => (
                                      <img src={rate} alt="" />
                                    ))}
                                  </div>
                                </td>
                                <td className="py-4 px-4">
                                  <img src={icon} alt="" />
                                </td>
                              </tr>
                            )
                          )}
                        </tbody>
                      </table>
                      <footer>
                        <PageSection />
                      </footer>
                    </div>
                  )}
                </div>
              </div>
        </>
    )
}