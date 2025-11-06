import { useState, useRef } from "react";
import { useOnClickOutside } from "usehooks-ts";
import Input from "../../../components/Input";
import Filter from "../../../components/filter";
import PageSection from "../../../components/PagesSection";
import ClientDropdownMenu from "../../../components/clientdropdownMenu";
import { filteredByDays } from "../../../components/utils/dateFIlter";
export default function Product() {
  const productData = [
    {
      productName: "Client Strategy Template",
      type: "Template",
      date: "Jan 16, 2025",
      totalRevenue: 245000,
      rating: 4.6,
      status: "Published",
      icon: "/Icons/Dropdown.svg",
    },
    {
      productName: "Client Strategy Template",
      type: "E-book",
      date: "Jan 16, 2025",
      totalRevenue: 245000,
      rating: 4.8,
      status: "Published",
      icon: "/Icons/Dropdown.svg",
    },
    {
      productName: "Client Strategy Template",
      type: "E-book",
      date: "Jan 16, 2025",
      totalRevenue: 245000,
      rating: 3.8,
      status: "Suspended",
      icon: "/Icons/Dropdown.svg",
    },
    {
      productName: "Client Strategy Template",
      type: "E-book",
      date: "Jan 16, 2025",
      totalRevenue: 245000,
      rating: 4.6,
      status: "Draft",
      icon: "/Icons/Dropdown.svg",
    },
    {
      productName: "Client Strategy Template",
      type: "Video",
      date: "Oct 16, 2025",
      totalRevenue: 245000,
      rating: 4.0,
      status: "Draft",
      icon: "/Icons/Dropdown.svg",
    },
  ];
  const items = ["View", "Unpublish", "Edit", "Flag"];
  const [input, setInput] = useState("");
  const [openDropdown, setOpenDropdown] = useState(null);
  const [filterType, setFilterType] = useState("all");
  const filteredDate = filteredByDays(filterType, productData);
  const filteredTable = filteredDate.filter(({ productName }) =>
    productName.toLowerCase().includes(input.toLowerCase())
  );
  const dropdownRef = useRef(null);
  useOnClickOutside(dropdownRef, () => setOpenDropdown(null));

  return (
    <>
      <div className="flex flex-col gap-4 md:flex-row md:gap-0 md:items-center justify-between pt-8">
        <div className="w-full mid:w-1/2">
          <Input
            input={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Search for registered clients"
          />
        </div>
        <Filter currentFilter={filterType} onChange={setFilterType} />
      </div>
      <div className="pt-8 overflow-x-auto w-full">
        <table className="min-w-full table-auto border-collapse">
          <thead>
            <tr className="text-left  border-b border-b-[#E9EAEB] text-xs text-[#717680] font-semibold">
              <th className="px-4  py-6 ">Product Name</th>
              <th className="px-5  py-6 ">Type</th>
              <th className="px-4  py-6 ">Date Published</th>
              <th className="px-4  py-6 ">Total Revenue</th>
              <th className="px-4  py-6 ">Rating</th>
              <th className="px-5  py-6 ">Status</th>
              <th className="px-2  py-6 ">
                <img src="/Icons/Dropdown.svg" alt="" />
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredTable.length > 0 ? (
              filteredTable.map(
                (
                  {
                    productName,
                    type,
                    date,
                    totalRevenue,
                    rating,
                    status,
                    icon,
                  },
                  index
                ) => (
                  <tr
                    key={index}
                    className="border-b border-b-[#E9EAEB] text-left"
                  >
                    <td className=" py-6 px-6 text-left sm:font-medium  text-sm text-[#030712]">
                      {productName}
                    </td>
                    <td className=" py-6 px-6 text-left sm:font-medium  text-sm text-[#030712]">
                      {type}
                    </td>
                    <td className=" py-6 px-6 text-left sm:font-medium  text-sm text-[#030712]">
                      {date}
                    </td>
                    <td className=" py-6 px-6 text-left sm:font-medium  text-sm text-[#030712]">
                      {totalRevenue}
                    </td>
                    <td className=" py-6 px-6 text-left sm:font-medium  text-sm text-[#030712]">
                      {rating}
                    </td>
                    <td
                      className={`py-6 px-6 text-left sm:font-medium  text-sm`}
                    >
                      <span
                        className={` rounded-2xl px-2 py-0.5 ${
                          status === "Published"
                            ? "text-[#067647] border border-[#ABEFC6] bg-[#ECFDF3]"
                            : null
                        } ${
                          status === "Suspended"
                            ? "text-[#B42318] border border-[#FECDCA] bg-[#FEF3F2]"
                            : null
                        } ${
                          status === "Draft"
                            ? "text-[#414651] border border-[#E9EAEB] bg-[#FAFAFA]"
                            : null
                        }`}
                      >
                        {" "}
                        {status}{" "}
                      </span>{" "}
                    </td>
                    <td className=" py-6 px-2 min-w-[65px] cursor-pointer relative">
                      <img
                        src={icon}
                        alt=""
                        className="hover:bg-[#E9EAEB] hover:rounded-sm"
                        onClick={() =>
                          setOpenDropdown(openDropdown === index ? null : index)
                        }
                      />
                      {openDropdown === index && (
                        <div ref={dropdownRef}>
                          <ClientDropdownMenu
                            menuItems={items}
                            className="bottom-0 right-8"
                          />
                        </div>
                      )}
                    </td>
                  </tr>
                )
              )
            ) : (
              <tr>
                <td colSpan="8" className=" text-center pt-4">
                  No results found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <PageSection />
    </>
  );
}
