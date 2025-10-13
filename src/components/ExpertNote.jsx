import plusIcon from "../assets/Icons/button-icon.svg";
import profilePicture from "../assets/Images/Avatar.svg";
import dropdown from "../assets/Icons/Dropdown.svg";
import PageSection from "./PagesSection";


export default function ExpertNote() {
 const adminData = [
     {
      profilePicture:profilePicture,
    name: "Alison Ogaga",
    message: "Consultant was warned about pricing structure on April 22.",
    date: "Apr 12, 2023 | 09:32AM",
    icon:dropdown
  },
     {
      profilePicture:profilePicture,
    name: "Jennifer Johnson",
    message: "Consultant was warned about pricing structure on April 22.",
         date: "Apr 12, 2023 | 09:32AM",
    icon:dropdown
  },
     {
      profilePicture:profilePicture,
    name: "Samuel Smith",
    message: "Flagged twice for identical product uploads — under monitoring.",
    date: "Apr 12, 2023 | 09:32AM",
    icon:dropdown
  },
     {
      profilePicture:profilePicture,
    name: "Alison Ogaga",
    message: "Flagged twice for identical product uploads — under monitoring.",
         date: "Apr 12, 2023 | 09:32AM",
    icon:dropdown
  },
     {
      profilePicture:profilePicture,
    name: "Jennifer Johnson",
    message: "Flagged twice for identical product uploads — under monitoring.",
         date: "Apr 12, 2023 | 09:32AM",
    icon:dropdown
  },
     {
      profilePicture:profilePicture,
    name: "Samuel Smith",
    message: "Flagged twice for identical product uploads — under monitoring.",
         date: "Apr 12, 2023 | 09:32AM",
    icon:dropdown
  }
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
                  placeholder="Flagged twice for identical product uploads — under monitoring."
                />
                <p className="text-sm text-[#414651] font-medium">433/600 characters</p>
              </div>
              <button className="bg-[#667185] text-white text-sm px-10.25 py-2 rounded-md cursor-pointer">
                Add
            </button>
            <div className="flex flex-col gap-2 pb-6">
                <table>
                    <thead>
                        <tr  className="text-left border-b border-b-[#C9D0D8] text-sm text-[#717680] font-semibold">
                            <th  className="py-4">Admin name</th>
                            <th className="px-20 py-4">Details</th>
                            <th className="py-4 px-4">Date and Time</th>
                            <th className="px-6 py-4">
                                <img src={dropdown} alt="" />
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {adminData.map(({ profilePicture, name, message, date, icon }) => (
                            <tr className="border-b border-b-[#C9C0D8]">
                                <td className="flex items-center gap-2 text-sm text-[#101928] py-4"><img src={profilePicture} alt="" />
                                    <span>{ name}</span></td>
                                <td  className="px-18 py-4 text-sm text-[#101928]">{message}</td>
                                <td className="px-4 py-4 text-sm text-[#101928]">{date}</td>
                                <td className="md:px-6 py-4 text-sm text-[#101928] cursor-pointer "><img src={icon} alt="" /></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <PageSection/>
        </section>
    )
}