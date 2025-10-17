import Input from "./Input";
import plusIcon from "../assets/Icons/Plus 4.svg";
import picOlivia from "../assets/Images/Avatar.svg";
import phoenixPic from "../assets/Images/Avatar (5).svg";
import lanaPic from "../assets/Images/Image (6).svg";
import drewPic from "../assets/Images/Avatar (3).svg";
import deleteIcon from "../assets/Icons/trash-01.svg";
import editIcon from "../assets/Icons/EditIcon.svg";
import { useState } from "react";
import PageSection from "./PagesSection";
export default function Team() {
  const users = [
    {
      avatar: picOlivia,
      name: "Olivia Rhye",
      email: "olivia@untitledui.com",
      role: "Owner",
      lastActive: "Apr 12, 2023",
      dateAdded: "Apr 12, 2023",
      status: "Active",
      statusIcon: [deleteIcon, editIcon],
    },
    {
      avatar: phoenixPic,
      name: "Phoenix Baker",
      email: "phoenix@untitledui.com",
      role: "Admin",
      lastActive: "Apr 24, 2023",
      dateAdded: "Apr 24, 2023",
      status: "Offline",
      statusIcon: [deleteIcon, editIcon],
    },
    {
      avatar: lanaPic,
      name: "Lana Steiner",
      email: "lana@untitledui.com",
      role: "Moderator",
      lastActive: "Apr 25, 2023",
      dateAdded: "Apr 25, 2023",
      status: "Offline",
      statusIcon: [deleteIcon, editIcon],
    },
    {
      avatar: drewPic,
      name: "Drew Cano",
      email: "drew@untitledui.com",
      role: "Super Admin",
      lastActive: "Apr 29, 2023",
      dateAdded: "Apr 29, 2023",
      status: "Active",
      statusIcon: [deleteIcon, editIcon],
    },
  ];
  const [input, setInput] = useState("");
  const filteredUsers = users.filter(({ name }) =>
    name.toLowerCase().includes(input.toLowerCase())
  );

  return (
    <section>
      <header className="flex items-center gap-4.5">
        <h2 className="text-xl mid:text-2xl pl-2 mid:pl-0 font-bold text-[#181D27]">Team management</h2>
        <h3 className="border border-[#D5D7DA] text-[#414651] text-xs font-medium px-2 py-0.25 mid:py-0.75 rounded-md ">
          48 members
        </h3>
      </header>
      <div>
        <p className="pt-2 text-[#535862] text-sm mid:text-base">
          Manage your team members and their account permissions here.
        </p>
        <div className="flex flex-col mid:flex-row items-start mid:items-center gap-4 mid:gap-0 mid:justify-between pt-8">
          <div className="w-full mid:w-1/2">
            <Input
              placeholder="Search for products"
              input={input}
              onChange={(e) => setInput(e.target.value)}
            />
          </div>
          <div className="flex gap-2 items-center px-4 py-2 border border-[#3B82F6] bg-[#3B82F6] rounded-lg cursor-pointer">
            <img src={plusIcon} alt="" />
            <span className="text-[#FFFFFF] font-semibold text-sm">
              Add member
            </span>
          </div>
        </div>
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
                                <div className={`flex gap-1 items-center justify-center border rounded-md px-1 py-0.5 ${status === "Active" ? "text-[#067647] border-[#ABEFC6] bg-[#ECFDF3]":"border-[#E9EAEB] text-[#414651] bg-[#FAFAFA]"}`}>
                                    <span className={`w-1.5 h-1.5 rounded-full  ${status === "Active" ? "bg-[#17B26A]":"bg-[#717680]"}`}></span>
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
                <p>No results found</p>
              )}
            </tbody>
          </table>
              </div>
              <PageSection/>
      </div>
    </section>
  );
}
