export default function Table({ filteredUsers }) {
  return (
    <div className="overflow-x-auto pt-4 mid:pt-8">
      <table className="min-w-full table-auto border-collapse">
        <thead className="border-b border-b-[#E9EAEB]  text-xs text-[#717680] font-semibold">
          <tr className="text-left">
            <th className="px-4 py-6">Name</th>
            <th className="px-4 py-6">Email Address</th>
            <th className="px-4 py-6">Role</th>
            <th className="px-4 py-6">Last Active</th>
            <th className="px-4 py-6">Date Added</th>
            <th className="px-4 py-6">Status</th>
            <th className="px-4 py-6">Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.length > 0 ? (
            filteredUsers.map(
              ({
                avatar,
                name,
                email,
                role,
                lastActive,
                dateAdded,
                status,
                statusIcon,
              }) => (
                <tr className="text-left border-b border-b-[#E9EAEB] font-medium text-sm text-[#030712]">
                  <td className="flex gap-1 items-center px-4 py-6">
                    <img src={avatar} alt="" />
                    <span>{name}</span>
                  </td>
                  <td className="px-4 py-6">{email}</td>
                  <td className="px-4 py-6">{role}</td>
                  <td className="px-4 py-6">{lastActive}</td>
                  <td className="px-4 py-6">{dateAdded}</td>
                  <td className="px-4 py-6">
                    <div
                      className={`flex gap-1 items-center justify-center border rounded-md px-1 py-0.5 ${
                        status === "Active"
                          ? "text-[#067647] border-[#ABEFC6] bg-[#ECFDF3]"
                          : "border-[#E9EAEB] text-[#414651] bg-[#FAFAFA]"
                      }`}
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full  ${
                          status === "Active" ? "bg-[#17B26A]" : "bg-[#717680]"
                        }`}
                      ></span>
                      <span className={``}>{status}</span>
                    </div>
                  </td>
                  <td className="px-4 py-6">
                    <div className="flex gap-2 items-center">
                      {statusIcon.map((icon, index) => (
                        <img key={index} src={icon} alt="" />
                      ))}
                    </div>
                  </td>
                </tr>
              )
            )
          ) : (
              <tr>
               <td colSpan="8" className="text-center pt-4">No results found</td> 
              </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
