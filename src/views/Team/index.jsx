import Footer from "./Footer";
import Header from "./Header";
import InputSection from "./Input";
import Table from "./Table";
import picOlivia from "../../assets/Images/Avatar.svg";
import phoenixPic from "../../assets/Images/Avatar (5).svg";
import lanaPic from "../../assets/Images/Image (6).svg";
import drewPic from "../../assets/Images/Avatar (3).svg";
import deleteIcon from "../../assets/Icons/trash-01.svg";
import editIcon from "../../assets/Icons/EditIcon.svg";
import { useState } from "react";
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
        <>
            <Header />
            <InputSection input={ input} onChange={(e)=>setInput(e.target.value)} />
            <Table filteredUsers={filteredUsers} />
            <Footer/>
        </>
    )
}