import dropdown from "../assets/Icons/Dropdown.svg";
import { useState } from "react";
import Input from "./Input";
import PageSection from "./PagesSection";
import ReportMenu from "./ReportMenu";
import ReportModal from "./ReportModal";

export default function ReportSection() {
  const reports = [
    {
      reportType: "Product",
      reportedItem: '"Pricing for Creators" (Worksho...',
      reportedBy: "@coachlola",
      against: "@coachlola",
      reason: "Misleading info",
      dateSubmitted: "Apr 12, 2023",
      status: "Open",
      icon: dropdown,
    },
    {
      reportType: "Workshop",
      reportedItem: '"Pricing for Creators" (Worksho...',
      reportedBy: "@coachlola",
      against: "@coachlola",
      reason: "Misleading info",
      dateSubmitted: "Apr 24, 2023",
      status: "Resolved",
      icon: dropdown,
    },
    {
      reportType: "Comment",
      reportedItem: '"Pricing for Creators" (Worksho...',
      reportedBy: "@coachlola",
      against: "@coachlola",
      reason: "Misleading info",
      dateSubmitted: "Apr 25, 2023",
      status: "Escalated",
      icon: dropdown,
    },
    {
      reportType: "Product",
      reportedItem: '"Pricing for Creators" (Worksho...',
      reportedBy: "@coachlola",
      against: "@coachlola",
      reason: "Misleading info",
      dateSubmitted: "Apr 29, 2023",
      status: "Resolved",
      icon: dropdown,
    },
  ];
  const [input, setInput] = useState("");
  const filteredReport = reports.filter(({ reportedItem }) =>
    reportedItem.toLowerCase().includes(input.toLowerCase())
  );
    const [openOptions, setOpenOptions] = useState(false);
    const [openModal, setOpenModal] = useState(false)
    const handleModal = () => {
        setOpenModal(true)
        setOpenOptions(false)
    }
  return (
    <>
      <div className="w-full mid:w-1/2 pt-8">
        <Input
          input={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Search for products"
        />
      </div>
      <div className="overflow-x-auto pt-4 mid:pt-6">
        <table className="min-w-full table-auto border-collapse">
          <thead className="border-b border-b-[#E9EAEB]  text-xs text-[#717680] font-semibold">
            <tr className="text-left">
              <th className="px-2 py-6">Report Type</th>
              <th className="px-2 py-6">Reported Items</th>
              <th className="px-2 py-6">Reported By</th>
              <th className="px-2 py-6">Against</th>
              <th className="px-2 py-6">Reason</th>
              <th className="px-2 py-6">Date Submitted</th>
              <th className="px-3 py-6">Status</th>
              <th className="px-3 py-6">
                <img src={dropdown} alt="" />
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredReport.length > 0 ? (
              filteredReport.map(
                ({
                  reportType,
                  reportedItem,
                  reportedBy,
                  against,
                  reason,
                  dateSubmitted,
                  status,
                  icon,
                }) => (
                  <tr className="text-left border-b border-b-[#E9EAEB] font-medium text-sm text-[#030712]">
                    <td className="px-2 py-6">{reportType}</td>
                    <td className="px-2 py-6">{reportedItem}</td>
                    <td className="px-2 py-6">{reportedBy}</td>
                    <td className="px-2 py-6">{against}</td>
                    <td className="px-2 py-6">{reason}</td>
                    <td className="px-2 py-6">{dateSubmitted}</td>
                    <td className="px-2 py-6">
                      <span
                        className={`px-2 py-0.5 border rounded-2xl ${
                          status === "Resolved"
                            ? "text-[#067647] border-[#ABEFC6] bg-[#ECFDF3]"
                            : null
                                      } ${
                                      status === "Open" ? "text-[#B54708] border-[#FEDF89] bg-[#FFFAEB]":null
                        }  ${status === "Escalated" ? "text-[#B42318] border-[#FECDCA] bg-[#FEF3F2]":null}`}
                      >
                       {status}
                      </span>
                    </td>
                    <td className="px-4 py-6 cursor-pointer min-w-[88px]">
                      <img
                        src={icon}
                        alt=""
                        onClick={() => setOpenOptions(!openOptions)}
                      />
                    </td>
                  </tr>
                )
              )
            ) : (
              <p>No results Found</p>
            )}
          </tbody>
        </table>
      </div>
          {openOptions &&(
              <>
              <div className="fixed inset-0 z-20" onClick={()=>setOpenOptions(false)}></div>
               <ReportMenu onClick={handleModal} />
              </>
          )
          }
          {
              openModal && (
                  <ReportModal onClick={ ()=> setOpenModal(false)} />
              )
          }
      <PageSection />
    </>
  );
}
