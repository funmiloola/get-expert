import plusIcon from "../assets/Icons/button-icon.svg";
import dropdown from "../assets/Icons/Dropdown.svg";
import profilePicture from "../assets/Images/Avatar.svg";
import PageSection from "./PagesSection";


export default function Note() {
  const adminReports = [
    {
      img: profilePicture,
      adminName: "Alison Ogaga",
      note: "User received 1 refund this month for a duplicate purchase",
      datePublished: "Apr 12, 2023 | 09:32AM",
      icon: dropdown,
    },
    {
      img: profilePicture,
      adminName: "Jennifer Johnson",
      note: "Frequent buyer. Engages in the forum",
      datePublished: "Apr 12, 2023 | 09:32AM",
      icon: dropdown,
    },
    {
      img: profilePicture,
      adminName: "Samuel Smith",
      note: "Warned once in April for abusive language — no follow-ups since.",
      datePublished: "Apr 12, 2023 | 09:32AM",
      icon: dropdown,
    },
  ];

  return (
    <section className="font-sans pt-8 md:px-3">
      <div className="flex justify-between ">
        <h2 className="text-lg font-bold text-[#030712]">Notes</h2>
        <div className="flex gap-2 items-center border border-[#C9D0D8] rounded-lg px-6.5 py-2 cursor-pointer">
          <img src={plusIcon} alt="" />
          <p className="text-sm font-semibold text-[#030712]">Add note</p>
        </div>
      </div>
      <div className="flex flex-col gap-2 pb-6">
        <label className="text-sm text-[#414651] font-medium">Note</label>
        <textarea
          name=""
          id=""
          className="w-full pt-2.5 px-3.5 pb-4 border border-[#D5D7DA] rounded-lg text-sm text-[#535862] outline-none"
          placeholder="User received 1 refund this month for a duplicate purchase"
        />
        <p className="text-sm text-[#414651] font-medium">433/600 characters</p>
      </div>
      <button className="bg-[#667185] text-white text-sm px-10.25 py-2 rounded-md cursor-pointer">
        Add
      </button>
      <div className="pt-6 overflow-x-auto lg:overflow-x-hiddden w-full">
        <table>
          <thead>
            <tr className="text-left border-b border-b-[#C9D0D8] text-sm text-[#717680] font-semibold">
              <th className="py-4">Admin Name</th>
              <th className="px-20 py-4">Date Published</th>
              <th className="py-4 px-4">Date and time</th>
              <th className="px-6 py-4">
                <img src={dropdown} alt="" />
              </th>
            </tr>
          </thead>
          <tbody>
            {adminReports.map(({img, adminName, note, datePublished, icon }) => (
              <tr className="border-b border-b-[#C9C0D8]">
                    <td className="flex items-center gap-2 text-sm text-[#101928] py-4">
                       <img src={img} alt="" /> <span>{adminName}</span>
                    </td>
                <td className="px-18 py-4 text-sm text-[#101928]">{note}</td>
                <td className="px-4 py-4 text-sm text-[#101928]">{datePublished}</td>
                <td className="md:px-6 py-4 text-sm text-[#101928] cursor-pointer ">
                  
                  <img src={icon} alt="" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
          </div>
          <footer>
              <PageSection/>
          </footer>
    </section>
  );
}
