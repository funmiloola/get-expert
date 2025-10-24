export default function PayoutTable() {
  return (
    <>
      <div>
        <div className="flex justify-between items-center  pt-8">
          <h4 className="text-sm text-[#1E55AF] font-semibold">
            PAYOUT REQUESTS
          </h4>
          <img src="/Icons/Stroke-1.svg" alt="" />
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border-collapse">
            <thead className="border-b border-b-[#E9EAEB]">
              <tr>
                <th className="text-left py-3 px-2 mid:px-4 text-[#717680] text-xs font-semibold">
                  <div className="flex items-center gap-1">
                    <span>Consultant</span>
                    <img src="/Icons/chevron-selector-vertical.svg" alt="" />
                  </div>
                </th>
                <th className="text-left py-3 px-4 text-[#717680] text-xs font-semibold">
                  <div className="flex items-center gap-1">
                    <span>Requested On</span>
                    <img src="/Icons/chevron-selector-vertical.svg" alt="" />
                  </div>
                </th>
                <th className="text-left py-3 px-4 text-[#717680] text-xs font-semibold">
                  <div className="flex items-center gap-1">
                    <span>Amount</span>
                    <img src="/Icons/chevron-selector-vertical.svg" alt="" />
                  </div>
                </th>
                <th className="text-left py-3 px-4 text-[#717680] text-xs font-semibold">
                  <div className="flex items-center gap-1">
                    <span>Amount</span>
                    <img src="/Icons/chevron-selector-vertical.svg" alt="" />
                  </div>
                </th>
                <th className="text-left py-3 px-4 text-[#717680] text-xs font-semibold">
                  <div className="flex items-center gap-1">
                    <span>Attended</span>
                    <img src="/Icons/chevron-selector-vertical.svg" alt="" />
                  </div>
                </th>
                <th className="text-left py-3 px-4 ">
                  <img src="/Icons/Dropdown.svg" alt="" />
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-b-[#E9EAEB]">
                <td className="py-4 px-2 mid:px-4 text-xs md:text-sm text-[#030712] font-medium">
                  @coachlola
                </td>
                <td className="py-4 px-2 mid:px-4 text-xs md:text-sm text-[#030712] font-medium">
                  June 13
                </td>
                <td className="py-4 px-2 mid:px-4 text-xs md:text-sm text-[#030712] font-medium">
                  ₦40,000
                </td>
                <td className="py-4 px-2 mid:px-4 text-xs md:text-sm text-[#030712] font-medium">
                  Bank Transfer
                </td>
                <td className="py-4 px-2 mid:px-4">
                  <span className="border border-[#ABEFC6] bg-[#ECFDF3] rounded-2xl text-[9px] mid:text-sm text-[#067647] px-2 py-0.5 font-medium">
                    Pending
                  </span>
                </td>
                <td className="py-4 px-2 mid:px-4 min-w-[50px] ">
                  <img src="/Icons/Dropdown.svg" alt="" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
