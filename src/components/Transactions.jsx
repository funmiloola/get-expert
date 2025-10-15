import downArrow from "../assets/Icons/arrow-down.svg";
import upArrow from "../assets/Icons/arrow-up.svg";
import ClientCardGrid from "./ClientCardgrid";
import dropdown from "../assets/Icons/Dropdown.svg";
import PageSection from "./PagesSection";
import arrowUp from "../assets/Icons/Stroke-1.svg"
import upDownArrow from "../assets/Icons/chevron-selector-vertical.svg"
import { useState } from "react";
import TransactionMenu from "./TransactionMenu";
import TransactionModal from "./TransactionModal";



export default function Transactions() {
  const summary = [
    {
      title: "Total in escrow",
      value: "₦1,254,000",
      icon: downArrow,
      change: "100%",
    },
    {
      title: "Funds released",
      value: "₦394,000",
      icon: upArrow,
      change: "100%",
    },
    { title: "Payouts requested", value: 7, icon: upArrow, change: "+65%" },
    { title: "Flagged transactions", value: 3, icon: downArrow, change: "50%" },
  ];
  const transactions = [
    {
      transactionId: "TXN_203194",
      type: "Product",
      buyer: "Dain Aetos",
      consultant: "Roxana Michelson",
      amount: "$20,000.00",
      date: "Apr 12, 2023",
      status: "Escrow",
      payoutStatus: "Pending",
      icon: dropdown,
    },
    {
      transactionId: "TXN_203194",
      type: "Workshop",
      buyer: "Dain Aetos",
      consultant: "Roxana Michelson",
      amount: "$2,000.00",
      date: "Apr 24, 2023",
      status: "Paid",
      payoutStatus: "Approved",
      icon: dropdown,
    },
    {
      transactionId: "TXN_203194",
      type: "Custom Job",
      buyer: "Dain Aetos",
      consultant: "Roxana Michelson",
      amount: "$6,000.00",
      date: "Apr 25, 2023",
      status: "Requested",
      payoutStatus: "On Hold",
      icon: dropdown,
    },
    {
      transactionId: "TXN_203194",
      type: "Custom Job",
      buyer: "Dain Aetos",
      consultant: "Roxana Michelson",
      amount: "$11,000.00",
      date: "Apr 29, 2023",
      status: "Refunded",
      payoutStatus: "Approved",
      icon: dropdown,
    },
  ];
    const [openOptions, setOpenOptions] = useState(false)
    const [openModal, setOpenModal] = useState(false)
    const handleOpenModal = () => {
        setOpenModal(true)
        setOpenOptions(false)
    }

  return (
    <section className="pl-2 md:pl-0">
      <h2 className="text-[#181D27] text-2xl font-bold">Transactions</h2>
      <ClientCardGrid
        data={summary}
        className="grid grid-cols-1 mid:grid-cols-2 lg:grid-cols-4 gap-6"
      />
      <h3 className="text-lg font-semibold text-[#030712] pt-8">
        Transactions
      </h3>
      <div className="overflow-x-auto pt-4">
        <table className="min-w-full table-auto border-collapse" >
            <thead className="border-b border-b-[#E9EAEB]">
            <tr>
              <th className="text-left py-3 px-4 text-[#717680] text-xs font-semibold">
                Transaction ID
              </th>
              <th className="text-left py-3 px-4 text-[#717680] text-xs font-semibold">
                Type
              </th>
              <th className="text-left py-3 px-4 text-[#717680] text-xs font-semibold">
                Buyer
              </th>
              <th className="text-left py-3 px-4 text-[#717680] text-xs font-semibold">
                Consultant
              </th>
              <th className="text-left py-3 px-4 text-[#717680] text-xs font-semibold">
                Amount
              </th>
              <th className="text-left py-3 px-4 text-[#717680] text-xs font-semibold">
                Date
              </th>
              <th className="text-left py-3 px-4 text-[#717680] text-xs font-semibold">
                Status
              </th>
              <th className="text-left py-3 px-4 text-[#717680] text-xs font-semibold">
                Payout Status
              </th>
              <th className="py-3 px-4">
                <img src={dropdown} alt="" />
              </th>
            </tr>
          </thead>
          <tbody>
            {transactions.map(
              ({
                transactionId,
                type,
                buyer,
                consultant,
                amount,
                date,
                status,
                payoutStatus,
                icon,
                }) => (
                
                <tr>
                  <td className="py-6 px-4 text-sm text-[#030712] font-medium">
                    {transactionId}
                  </td>
                  <td className="py-6 px-4 text-sm text-[#030712] font-medium">
                    {type}
                  </td>
                  <td className="py-6 px-4 text-sm text-[#030712] font-medium">
                    {buyer}
                  </td>
                  <td className="py-6 px-4 text-sm text-[#030712] font-medium">
                    {consultant}
                  </td>
                  <td className="py-6 px-4 text-sm text-[#030712] font-medium">
                    {amount}
                  </td>
                  <td className="py-6 px-4 text-sm text-[#030712] font-medium">
                    {date}
                  </td>
                  <td className={`py-6 px-4 text-sm font-medium `}>
                    <span
                      className={`px-2 py-0.5 border rounded-2xl ${
                        status === "Escrow"
                          ? "text-[#1E55AF] border-[#BFD7FE] bg-[#EFF5FF]"
                          : null
                      } ${
                        status === "Paid"
                          ? "text-[#067647] border-[#ABEFC6] bg-[#ECFDF3]"
                          : null
                      } ${
                        status === "Requested"
                          ? "text-[#5925DC] border-[#D9D6FE] bg-[#F4F3FF]"
                          : null
                                    }
                       ${status === "Refunded" ? "text-[#363F72] border-[#D5D9EB] bg-[#F8F9FC]" : null}
                                    `}
                    >
                      {status}
                    </span>
                  </td>
                  <td className="py-6 px-4 text-sm text-[#030712] font-medium">
                    {payoutStatus}
                  </td>
                  <td className="py-6 px-4 cursor-pointer relative min-w-[50px]">
                            <img src={icon} alt="" onClick={() => setOpenOptions((prev) => !prev)} />
                        </td>
                    </tr>
                                                
                        
              )
            )}
          </tbody>
          </table>
         </div>
         <PageSection />
          <div>
              <div className="flex justify-between items-center  pt-8">
                  <h4 className="text-sm text-[#1E55AF] font-semibold">PAYOUT REQUESTS</h4>
                  <img src={arrowUp} alt="" />
              </div>
              <div className="overflow-x-auto">
                  <table className="min-w-full table-auto border-collapse">
                      <thead className="border-b border-b-[#E9EAEB]">
                          <tr>
                              <th className="text-left py-3 px-2 mid:px-4 text-[#717680] text-xs font-semibold">
                                  <div className="flex items-center gap-1">
                                  <span>Consultant</span>
                                  <img src={upDownArrow} alt="" />
                                  </div>
                              </th>
                              <th className="text-left py-3 px-4 text-[#717680] text-xs font-semibold">
                                   <div className="flex items-center gap-1">
                                  <span>Requested On</span>
                                      <img src={upDownArrow} alt="" />
                                      </div>
                              </th>
                              <th className="text-left py-3 px-4 text-[#717680] text-xs font-semibold">
                                  <div className="flex items-center gap-1">
                                  <span>Amount</span>
                                      <img src={upDownArrow} alt="" />
                                      </div>
                              </th>
                              <th className="text-left py-3 px-4 text-[#717680] text-xs font-semibold">
                                  <div className="flex items-center gap-1">
                                  <span>Amount</span>
                                      <img src={upDownArrow} alt="" />
                                      </div>
                              </th>
                              <th className="text-left py-3 px-4 text-[#717680] text-xs font-semibold">
                                  <div className="flex items-center gap-1">
                                  <span>Attended</span>
                                      <img src={upDownArrow} alt="" />
                                      </div>
                              </th>
                              <th className="text-left py-3 px-4 ">
                                  <img src={dropdown} alt="" />
                              </th>
                          </tr>
                      </thead>
                      <tbody>
                          <tr className="border-b border-b-[#E9EAEB]">
                              <td className="py-4 px-2 mid:px-4 text-xs md:text-sm text-[#030712] font-medium">@coachlola</td>
                              <td className="py-4 px-2 mid:px-4 text-xs md:text-sm text-[#030712] font-medium">June 13</td>
                              <td className="py-4 px-2 mid:px-4 text-xs md:text-sm text-[#030712] font-medium">₦40,000</td>
                              <td className="py-4 px-2 mid:px-4 text-xs md:text-sm text-[#030712] font-medium">Bank Transfer</td>
                              <td className="py-4 px-2 mid:px-4"><span className="border border-[#ABEFC6] bg-[#ECFDF3] rounded-2xl text-[9px] mid:text-sm text-[#067647] px-2 py-0.5 font-medium">Pending</span></td>
                              <td className="py-4 px-2 mid:px-4 min-w-[50px]">
                                  <img src={dropdown} alt="" />
                              </td>
                          </tr>
                      </tbody>
                  </table>
                   <div>
                            {openOptions && (
                                <TransactionMenu onClick={handleOpenModal} />
                            )}
                        </div>
              </div>
          </div>
          {openModal && (
              <TransactionModal onClick={ ()=> setOpenModal(false)} />
          )}
          
    </section>
  );
}
