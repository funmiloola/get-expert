import Input from "../../components/Input"
import PageSection from "../../components/PagesSection"
import Table from "./Table";
import { useState } from "react";
export default function ProductManagement() {
    const [input, setInput] = useState("")
    const products = [
        {
          productName: "Client Strategy Template",
          type: "Template",
          consultant: "@coachlola",
          sales: 42,
          rating: 4.7,
          reviews: 13,
          createdOn: "Apr 12, 2023",
          payoutStatus: "Under review",
          icon: "/Icons/Dropdown.svg",
        },
        {
          productName: "Client Strategy Template",
          type: "Video",
          consultant: "@coachlola",
          sales: 24,
          rating: 4.7,
          reviews: 13,
          createdOn: "Apr 24, 2023",
          payoutStatus: "Published",
          icon: "/Icons/Dropdown.svg",
        },
        {
          productName: "Client Strategy Template",
          type: "eBook",
          consultant: "@coachlola",
          sales: 35,
          rating: 4.7,
          reviews: 13,
          createdOn: "Apr 25, 2023",
          payoutStatus: "Removed",
          icon: "/Icons/Dropdown.svg",
        },
        {
          productName: "Client Strategy Template",
          type: "Strategy",
          consultant: "@coachlola",
          sales: 14,
          rating: 4.7,
          reviews: 13,
          createdOn: "Apr 29, 2023",
          payoutStatus: "Approved",
          icon: "/Icons/Dropdown.svg",
        },
    ];
     const filteredProduct = products.filter(({productName})=>productName.toLowerCase().includes(input.toLowerCase()))
    return (
        <>
                  <h2 className="pb-6 font-bold text-xl mid:text-2xl text-[#181D27] pl-2 mid:pl-0">Product Management</h2>
                  <div className="w-full mid:w-1/2">
                      <Input placeholder="Search for products" input={input} onChange={(e) => setInput(e.target.value)}/>
            </div>
            <Table filteredProduct={ filteredProduct} />
            <PageSection/>
        </>
    )
}