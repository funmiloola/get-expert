import dropdown from "../assets/Icons/Dropdown.svg";

export default function ClientTableDetail({
  data,
  title,
  type,
  consultant,
  date,
  amount,
  stats,
}) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full table-auto border-collapse">
        <thead className="text-left border-b border-b-[#E9EAEB] text-xs text-[#717680] font-semibold">
          <tr className="">
            <th className="px-4  py-6 ">{title}</th>
            <th className="px-4 py-6 ">{type}</th>
            <th className="px-4 py-6 ">{consultant}</th>
            <th className="px-4 py-6 ">{date}</th>
            <th className="px-4 py-6 ">{amount}</th>
            <th className="px-4 py-6 ">{stats}</th>
            <th className="py-4 px-12">
              <img src={dropdown} alt="" />
            </th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map(
              ({
                title,
                type,
                seller,
                date,
                time,
                price,
                status,
                action,
                secondActions,
              }) => (
                <tr className="border-b border-b-[#E9EAEB] text-left">
                  <td className=" py-6 px-4 sm:font-medium  text-sm text-[#030712]">
                    {title}
                  </td>
                  <td className=" py-6 px-4  sm:font-medium  text-sm text-[#030712]">
                    {type}
                  </td>
                  <td className=" px-4 py-6 sm:font-medium text-sm text-[#030712]">
                    {seller}
                  </td>
                  <td className=" py-6 px-4  sm:font-medium text-sm text-[#030712]">
                    {date} {time}
                  </td>
                  <td className=" py-6 px-4 sm:font-medium text-sm text-[#030712]">
                    {price}
                  </td>
                  <td className=" py-6 px-4">
                    <span className="sm:font-medium text-[9px] sm:text-xs text-[#067647] border border-[#ABEFC6] bg-[#ECFDF3] rounded-2xl px-2 py-0.5">
                      {status}
                    </span>
                  </td>
                  <td className="flex gap-3 py-6 px-4 sm:font-medium text-sm">
                    <span className="text-[#535862]">{action}</span>
                    <span className="text-[#1E55AF]">{secondActions}</span>
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
  );
}
