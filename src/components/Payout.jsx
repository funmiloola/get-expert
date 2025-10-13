import dropdown from "../assets/Icons/Dropdown.svg"
import PageSection from "./PagesSection";

export default function Payout() {
  const payouts = [
    {
      date: "Apr 12, 2023 | 08:32AM",
      amount: "$20,000.00",
      paymentMethod: "Bank Transfer",
          status: "Paid",
      icon:dropdown
    },
    {
      date: "Apr 28, 2023 | 11:32AM",
      amount: "$11,000.00",
      paymentMethod: "Bank Transfer",
        status: "Failed",
      icon:dropdown
    },
    {
      date: "Apr 31, 2023 | 06:32AM",
      amount: "$5,000.00",
      paymentMethod: "Bank Transfer",
        status: "Failed",
      icon:dropdown
    },
    {
      date: "Apr 12, 2023 | 08:32AM",
      amount: "$20,000.00",
      paymentMethod: "Bank Transfer",
        status: "Paid",
      icon:dropdown
    },
    {
      date: "Apr 24, 2023 | 07:32AM",
      amount: "$2,000.00",
      paymentMethod: "Bank Transfer",
        status: "Paid",
      icon:dropdown
    },
  ];

  return (
    <section className="">
      <h2 className="text-base text-[#030712] font-semibold pt-8">Payouts Summary</h2>
      <div className="pt-3 overflow-x-auto lg:overflow-x-hidden">
        <table>
          <thead>
            <tr className="text-left  border-b border-b-[#E9EAEB] text-xs text-[#717680] font-semibold">
              <th className="px-15  py-6  ">Date</th>
              <th className="px-2  py-6 text-center">Amount</th>
              <th className="px-2  py-6 text-center">Payment Method</th>
              <th className="px-2  py-6 text-center">Status</th>
              <th className="px-15  py-6">
                <img src={dropdown} alt="" />
              </th>
            </tr>
                  </thead>
                  <tbody>
                      {payouts.map(({ date, amount, paymentMethod, status, icon }) => (
                          <tr className="border-b border-b-[#E9EAEB] text-left">
                              <td className=" py-6 px-15 text-left sm:font-medium  text-sm text-[#030712]">{date}</td>
                              <td className=" py-6 px-15 text-left sm:font-medium  text-sm text-[#030712]">{amount}</td>
                              <td className=" py-6 px-15 text-left sm:font-medium  text-sm text-[#030712]">{paymentMethod}</td>
                              <td  className={`py-6 px-15 text-left sm:font-medium  text-sm`}>
                                  <span className={` rounded-2xl px-2 py-0.5 ${status === 'Paid' ? 'text-[#067647] border border-[#ABEFC6] bg-[#ECFDF3]' : null} ${status === 'Failed' ? "text-[#B42318] border border-[#FECDCA] bg-[#FEF3F2]" : null}`}>{status}</span></td>
                              <td className=" py-6 px-15">
                                  <img src={dropdown} alt="" />
                              </td>
                          </tr>
                      ))}
                  </tbody>
        </table>
          </div>
          <PageSection/>
    </section>
  );
}
