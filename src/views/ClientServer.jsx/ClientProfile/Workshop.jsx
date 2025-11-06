import Input from "../../../components/Input";
import { consultations } from "../../../data";
import PageSection from "../../../components/PagesSection";
import { useState } from "react";

export default function ClientWorkshop() {
  const [input, setInput] = useState("");
  const filteredTable = consultations.filter(({ title }) =>
    title.toLowerCase().includes(input.toLowerCase())
  );
  return (
    <section>
      <div className="w-full mid:w-1/2 pt-8">
        <Input
          placeholder="Search for registered clients"
          input={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
      <div className="overflow-x-auto lg:overflow-x-hidden pt-4">
        <table>
          <thead className="text-left border-b border-b-[#E9EAEB] text-xs text-[#717680] font-semibold">
            <tr>
              <th className="px-8  py-6 ">Title</th>
              <th className="px-8  py-6 ">Consultants</th>
              <th className="px-8  py-6 ">Date</th>
              <th className="px-8  py-6 ">Amount Paid</th>
              <th className="px-8 py-6">Rating</th>
              <th className="px-8 py-6">Status</th>
              <th className="px-8 py-6">
                <img src="/Icons/Dropdown.svg" alt="" />
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredTable.length > 0 ? (
              filteredTable.map(
                ({
                  title,
                  type,
                  date,
                  price,
                  rating,
                  status,
                  action,
                  secondActions,
                }) => (
                  <tr className="border-b border-b-[#E9EAEB] text-left">
                    <td className=" py-6 px-6  sm:font-medium  text-sm text-[#030712]">
                      {title}
                    </td>
                    <td className=" py-6 px-6 text-center sm:font-medium  text-sm text-[#030712]">
                      {type}
                    </td>
                    <td className="  px-6 py-6 sm:font-medium text-sm text-[#030712]">
                      {date}
                    </td>
                    <td className=" py-6 px-6  sm:font-medium text-sm text-[#030712]">
                      {price}
                    </td>
                    <td className="py-6 px-6 sm:font-medium text-sm text-[#030712]">
                      {rating}
                    </td>
                    <td className=" py-6 px-6">
                      <span className="sm:font-medium text-[9px] sm:text-xs text-[#067647] border border-[#ABEFC6] bg-[#ECFDF3] rounded-2xl px-2 py-0.5">
                        {status}
                      </span>
                    </td>
                    <td className="flex gap-3 py-6 px-6 sm:font-medium text-sm">
                      <span className="text-[#535862]">{action}</span>
                      <span className="text-[#1E55AF]">{secondActions}</span>
                    </td>
                  </tr>
                )
              )
            ) : (
              <tr>
                <td colSpan="8" className="text-center pt-4">
                  No results found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <PageSection />
    </section>
  );
}
