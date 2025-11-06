import PageSection from "../../../components/PagesSection";
import { useState } from "react";

export default function Table() {
  const attendeeData = [
    {
      name: "Tolu Ajayi",
      email: "tolu@email.com",
      amount: "₦40,000",
      confirmed: "Yes",
      rating: [
        "/Icons/Star icon.svg",
        "/Icons/Star icon.svg",
        "/Icons/Star icon.svg",
        "/Icons/Star icon.svg",
        "/Icons/Star.svg",
      ],
      icon: "/Icons/Dropdown.svg",
    },
    {
      name: "Tolu Ajayi",
      email: "tolu@email.com",
      amount: "₦40,000",
      confirmed: "Yes",
      rating: [
        "/Icons/Star icon.svg",
        "/Icons/Star icon.svg",
        "/Icons/Star icon.svg",
        "/Icons/Star icon.svg",
      ],
      icon: "/Icons/Dropdown.svg",
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
                src="/Icons/Vector (13).svg"
                alt=""
                onClick={() => setShowAttendees(false)}
                className="cursor-pointer"
              />
            ) : (
              <img
                src="/Icons/Stroke-1.svg"
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
                        <img
                          src="/Icons/chevron-selector-vertical.svg"
                          alt=""
                        />
                      </div>
                    </th>
                    <th className="text-left py-3 px-4 text-[#717680] text-xs font-semibold">
                      <div className="flex items-center gap-1">
                        <span>Host</span>
                        <img
                          src="/Icons/chevron-selector-vertical.svg"
                          alt=""
                        />
                      </div>
                    </th>
                    <th className="text-left py-3 px-4 text-[#717680] text-xs font-semibold">
                      <div className="flex items-center gap-1">
                        <span>Paid amount</span>
                        <img
                          src="/Icons/chevron-selector-vertical.svg"
                          alt=""
                        />
                      </div>
                    </th>
                    <th className="text-left py-3 px-4 text-[#717680] text-xs font-semibold">
                      <div className="flex items-center gap-1">
                        <span>Attended</span>
                        <img
                          src="/Icons/chevron-selector-vertical.svg"
                          alt=""
                        />
                      </div>
                    </th>
                    <th className="text-left py-3 px-4 text-[#717680] text-xs font-semibold">
                      <div className="flex items-center gap-1">
                        <span>Feedback</span>
                        <img
                          src="/Icons/chevron-selector-vertical.svg"
                          alt=""
                        />
                      </div>
                    </th>
                    <th className="py-3 px-4">
                      <img src="/Icons/Dropdown.svg" alt="" />
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
  );
}
