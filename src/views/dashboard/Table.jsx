export default function Table() {
     const users = [
      {
        name: "Rhiannon Matthaias",
        email: "rhimat@com",
        joinedDate: "Jan 16, 2025",
        status: "Client",
      },
      {
        name: "Dain Aetos",
        email: "dainaetos@com",
        joinedDate: "Jan 16, 2025",
        status: "Client",
      },
      {
        name: "Garrick Matthews",
        email: "garrick@com",
        joinedDate: "Jan 16, 2025",
        status: "Expert",
      },
    ];
    const purchases = [
      {
        name: "@emekaTech",
        product: "AI Startup Kit",
        type: "Template",
        amount: "₦40,000",
      },
      {
        name: "@sadeSparks",
        product: "AI Startup Kit",
        type: "Template",
        amount: "₦40,000",
      },
      {
        name: "@sadeSparks",
        product: "Pitch Mastery",
        type: "Template",
        amount: "₦50,000",
      },
    ];
    return (
        <div className="flex flex-col gap-4 justify-center items-center xl:flex-row xl:justify-between pt-4 sm:pt-12 ">
                <div className="w-full xl:w-1/2">
                  <table className="w-full table-auto border-collapse">
                    <thead>
                      <tr>
                        <th className="text-left mid:py-3 text-sm sm:text-lg font-semibold">
                          Latest Users
                        </th>
                      </tr>
        
                      <tr className="text-left border-b border-b-[#E9EAEB] text-xs text-[#717680] font-semibold">
                        <th className=" py-3 px-4 ">Name</th>
                        <th className=" py-3  sm:px-2  ">Email Address</th>
                        <th className=" py-3  sm:px-2 ">Joined Date</th>
                        <th className=" py-3  sm:px-2">Client Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {users.map(({ name, email, joinedDate, status, index }) => (
                        <tr key={index} className="border-b border-b-[#E9EAEB]">
                          <td className=" py-3 px-2 sm:font-medium text-[9px] sm:text-sm text-[#030712]">
                            {name}
                          </td>
                          <td className=" py-3 px-2 sm:font-medium text-[9px] sm:text-sm text-[#030712]">
                            {email}
                          </td>
                          <td className=" py-3 px-2 sm:font-medium  text-[9px] sm:text-sm text-[#030712]">
                            {joinedDate}
                          </td>
                          <td className=" py-3 px-2  sm:font-medium text-[9px] sm:text-sm text-[#030712]">
                            {status}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="xl:border-l xl:border-l-[#E9EAEB]  xl:pl-2 w-full xl:w-1/2">
                  <table className="w-full table-auto border-collapse">
                    <thead>
                      <tr>
                        <th className="text-left mid:py-3  text-sm sm:text-lg font-semibold">
                          Recent Purchases
                        </th>
                      </tr>
        
                      <tr className="text-left border-b border-b-[#E9EAEB] text-xs text-[#717680] font-semibold">
                        <th className=" py-3 px-4">Name</th>
                        <th className=" py-3 px-2 sm:px-4">Email Address</th>
                        <th className=" py-3 px-4">Type</th>
                        <th className=" py-3 px-4">Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      {purchases.map(({ name, product, type, amount, index }) => (
                        <tr key={index} className="border-b border-b-[#E9EAEB]">
                          <td className=" py-3 px-2 xs:px-4 sm:font-medium text-[9px] sm:text-sm text-[#030712]">
                            {name}
                          </td>
                          <td className=" py-3 px-2 xs:px-4 sm:font-medium text-[9px] sm:text-sm text-[#030712]">
                            {product}
                          </td>
                          <td className=" py-3 px-2 xs:px-4 sm:font-medium text-[9px] sm:text-sm text-[#030712]">
                            {type}
                          </td>
                          <td className=" py-3 px-2 xs:px-4 sm:font-medium text-[9px] sm:text-sm text-[#030712]">
                            {amount}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
    )
}