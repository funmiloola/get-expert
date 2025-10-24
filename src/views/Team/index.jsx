import Footer from "./Footer";
import Header from "./Header";
import InputSection from "./Input";
import Table from "./Table";
import { useState } from "react";
export default function Team() {
     const users = [
        {
          avatar: "/Images/Avatar.svg",
          name: "Olivia Rhye",
          email: "olivia@untitledui.com",
          role: "Owner",
          lastActive: "Apr 12, 2023",
          dateAdded: "Apr 12, 2023",
          status: "Active",
          statusIcon: ["/Icons/trash-01.svg", "/Icons/EditIcon.svg"],
        },
        {
          avatar:"/Images/Avatar (5).svg",
          name: "Phoenix Baker",
          email: "phoenix@untitledui.com",
          role: "Admin",
          lastActive: "Apr 24, 2023",
          dateAdded: "Apr 24, 2023",
          status: "Offline",
          statusIcon: ["/Icons/trash-01.svg", "/Icons/EditIcon.svg"],
        },
        {
          avatar: "/Images/Image (6).svg",
          name: "Lana Steiner",
          email: "lana@untitledui.com",
          role: "Moderator",
          lastActive: "Apr 25, 2023",
          dateAdded: "Apr 25, 2023",
          status: "Offline",
          statusIcon: ["/Icons/trash-01.svg", "/Icons/EditIcon.svg"],
        },
        {
          avatar: "/Images/Avatar (3).svg",
          name: "Drew Cano",
          email: "drew@untitledui.com",
          role: "Super Admin",
          lastActive: "Apr 29, 2023",
          dateAdded: "Apr 29, 2023",
          status: "Active",
          statusIcon: ["/Icons/trash-01.svg", "/Icons/EditIcon.svg"],
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