import TransactionMenu from "./TransactionMenu";
import TransactionModal from "./TransactionModal";
import PageSection from "../../components/PagesSection";
import { useState, useRef } from "react";
import { useOnClickOutside } from "usehooks-ts";

export default function TransactionTable() {
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
      icon: "/Icons/Dropdown.svg",
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
      icon: "/Icons/Dropdown.svg",
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
      icon: "/Icons/Dropdown.svg",
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
      icon: "/Icons/Dropdown.svg",
    },
  ];

  const [openOptions, setOpenOptions] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = () => {
    setOpenModal(true);
    setOpenOptions(false);
  };
  const dropdownRef = useRef();
  useOnClickOutside(dropdownRef, () => setOpenOptions(null));
  return (
    <>
      <h3 className="text-lg font-semibold text-[#030712] pt-8">
        Transactions
      </h3>
      <div className="overflow-x-auto pt-4">
        <table className="min-w-full table-auto border-collapse">
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
                <img src="/Icons/Dropdown.svg" alt="" />
              </th>
            </tr>
          </thead>
          <tbody>
            {transactions.map(
              (
                {
                  transactionId,
                  type,
                  buyer,
                  consultant,
                  amount,
                  date,
                  status,
                  payoutStatus,
                  icon,
                },
                index
              ) => (
                <tr key={index}>
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
                               ${
                                 status === "Refunded"
                                   ? "text-[#363F72] border-[#D5D9EB] bg-[#F8F9FC]"
                                   : null
                               }
                                            `}
                    >
                      {status}
                    </span>
                  </td>
                  <td className="py-6 px-4 text-sm text-[#030712] font-medium">
                    {payoutStatus}
                  </td>
                  <td className="py-6 px-4 cursor-pointer relative min-w-[50px]">
                    <img
                      src={icon}
                      alt=""
                      className="hover:bg-[#E9EAEB] hover:rounded-sm"
                      onClick={() =>
                        setOpenOptions(openOptions === index ? null : index)
                      }
                    />
                    {openOptions === index && (
                      <div ref={dropdownRef}>
                        <TransactionMenu onClick={handleOpenModal} />
                      </div>
                    )}
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
      <PageSection />
      {openModal && <TransactionModal onClick={() => setOpenModal(false)} />}
    </>
  );
}
