import { useRef, useState } from "react";
import { useOnClickOutside } from "usehooks-ts";
import Input from "../../../components/Input";
import Filter from "../../../components/filter";
import PageSection from "../../../components/PagesSection";
import ClientDropdownMenu from "../../../components/clientdropdownMenu";
import { filteredByDays } from "../../../components/utils/dateFIlter";

export default function ExpertWorkshop() {
  const [input, setInput] = useState("");
  const trainingSessions = [
    {
      productName: "Pricing for Consultants",
      date: "Oct 12, 2023 | 09:32AM",
      bookedSeats: "18 / 20",
      price: "₦5,000 per seat",
      status: "Upcoming",
      rating: "-",
      icon: "/Icons/Dropdown.svg",
    },
    {
      productName: "Pricing for Consultants",
      date: "Apr 12, 2023 | 09:32AM",
      bookedSeats: "18 / 20",
      price: "₦5,000 per seat",
      status: "Upcoming",
      rating: "-",
      icon: "/Icons/Dropdown.svg",
    },
    {
      productName: "Pricing for Consultants",
      date: "Apr 12, 2023 | 09:32AM",
      bookedSeats: "18 / 20",
      price: "₦5,000 per seat",
      status: "Cancelled",
      rating: "N/A",
      icon: "/Icons/Dropdown.svg",
    },
    {
      productName: "Pricing for Consultants",
      date: "Apr 12, 2023 | 09:32AM",
      bookedSeats: "18 / 20",
      price: "₦5,000 per seat",
      status: "Cancelled",
      rating: "N/A",
      icon: "/Icons/Dropdown.svg",
    },
    {
      productName: "Pricing for Consultants",
      date: "Apr 12, 2023 | 09:32AM",
      bookedSeats: "18 / 20",
      price: "₦5,000 per seat",
      status: "Completed",
      rating: "4.6",
      icon: "/Icons/Dropdown.svg",
    },
  ];
  const [filterType, setFilterType] = useState("all")
  const filteredDate = filteredByDays(filterType, trainingSessions)
  const filteredTrainingSession = filteredDate.filter(({ productName }) =>
    productName.toLowerCase().includes(input.toLowerCase())
  );
  const items = ["View details", "Flag", "Cancel"]
  const [openDropdown, setOpenDropdown] = useState(null)
  const dropdownRef = useRef()
  useOnClickOutside(dropdownRef,()=> setOpenDropdown(null))
  return (
    <>
      <div className="flex flex-col gap-4 md:flex-row md:gap-0 md:items-center justify-between pt-8">
        <div className="w-full mid:w-1/2">
          <Input
            input={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Search for registered"
          />
        </div>
        <Filter currentFilter={filterType} onChange={setFilterType}/>
      </div>
      <div className="pt-8 overflow-x-auto w-full ">
        <table className="min-w-full table-auto border-collapse ">
          <thead>
            <tr className="text-left  border-b border-b-[#E9EAEB] text-xs text-[#717680] font-semibold">
              <th className="px-4  py-6 ">Product Name</th>
              <th className="px-4  py-6 ">Date Published</th>
              <th className="px-4  py-6 ">Booked Series</th>
              <th className="px-4  py-6">Price</th>
              <th className="px-4  py-6">Status</th>
              <th className="px-4  py-6 ">Review</th>
              <th className="px-4  py-6">
                <img src="/Icons/Dropdown.svg" alt="" />
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredTrainingSession.length > 0 ? (
              filteredTrainingSession.map(
                ({
                  productName,
                  date,
                  bookedSeats,
                  price,
                  status,
                  rating,
                  icon,
                },index) => (
                  <tr key={index} className="border-b border-b-[#E9EAEB] text-left">
                    <td className=" py-6 px-4 text-left sm:font-medium  text-sm text-[#030712]">
                      {productName}
                    </td>
                    <td className=" py-6 px-4 text-left sm:font-medium  text-sm text-[#030712]">
                      {date}
                    </td>
                    <td className=" py-6 px-2 text-left sm:font-medium  text-sm text-[#030712]">
                      {bookedSeats}
                    </td>
                    <td className=" py-6 px-4 text-left sm:font-medium  text-sm text-[#030712]">
                      {price}
                    </td>
                    <td
                      className={`py-6 px-4 text-left sm:font-medium  text-sm`}
                    >
                      <span
                        className={` rounded-2xl px-2 py-0.5 ${
                          status === "Upcoming"
                            ? "text-[#067647] border border-[#ABEFC6] bg-[#ECFDF3]"
                            : null
                        } ${
                          status === "Cancelled"
                            ? "text-[#B42318] border border-[#FECDCA] bg-[#FEF3F2]"
                            : null
                        } ${
                          status === "Completed"
                            ? "text-[#414651] border border-[#E9EAEB] bg-[#FAFAFA]"
                            : null
                        }`}
                      >
                        {status}
                      </span>
                    </td>
                    <td className=" py-6 px-4 text-left sm:font-medium  text-sm text-[#030712]">
                      {rating}
                    </td>
                    <td className="py-6 px-4 min-w-[65px] relative cursor-pointer">
                      <img src={icon} alt="" onClick={()=>setOpenDropdown(openDropdown === index ? null : index)} />
                      {openDropdown === index && (
                        <div ref={dropdownRef}>
                          <ClientDropdownMenu menuItems={items} className="right-8 bottom-0"/>
                        </div>
                       )}
                    </td>
                  </tr>
                )
              )
            ) : (
              <p>No results found</p>
            )}
          </tbody>
        </table>
      </div>
      <PageSection />
    </>
  );
}
