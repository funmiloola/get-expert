import ClientTableDetail from "./ClientTableDetails";
import { useState } from "react";
import Filter from "./filter";
import Input from "./Input";
import PageSection from "./PagesSection";
import dropdown from "../assets/Icons/Dropdown.svg"

export default function Product() {
   
   const productData = [
  {
    productName: "Client Strategy Template",
    type: "Template",
    datePublished: "Jan 16, 2025",
    totalRevenue: 245000,
    rating: 4.6,
           status: "Published",
    icon:dropdown
  },
  {
    productName: "Client Strategy Template",
    type: "E-book",
    datePublished: "Jan 16, 2025",
    totalRevenue: 245000,
    rating: 4.8,
      status: "Published",
    icon:dropdown
  },
  {
    productName: "Client Strategy Template",
    type: "E-book",
    datePublished: "Jan 16, 2025",
    totalRevenue: 245000,
    rating: 3.8,
      status: "Suspended",
    icon:dropdown
    
  },
  {
    productName: "Client Strategy Template",
    type: "E-book",
    datePublished: "Jan 16, 2025",
    totalRevenue: 245000,
    rating: 4.6,
      status: "Draft",
    icon:dropdown
    
  },
  {
    productName: "Client Strategy Template",
    type: "Video",
    datePublished: "Jan 16, 2025",
    totalRevenue: 245000,
    rating: 4.0,
      status: "Draft",
    icon:dropdown
    
  }
];

    const [input, setInput] = useState("")
  const filteredTable = productData.filter(({productName})=> productName.toLowerCase().includes(input.toLowerCase()))
   

    return (
        <>
            <div className="flex flex-col gap-4 md:flex-row md:gap-0 md:items-center justify-between pt-8">
                <div className="w-full md:w-1/2">
                <Input input={input} onChange={(e)=>setInput(e.target.value)} placeholder="Search for registered clients" />
                </div>
                <Filter />
            </div>
            <div className="pt-8 overflow-x-auto lg:overflow-x-hidden">
                <table>
                    <thead>
                        <tr className="text-left  border-b border-b-[#E9EAEB] text-xs text-[#717680] font-semibold">
                            <th className="px-2  py-6 text-center">Product Name</th>
                            <th className="px-2  py-6 text-center">Type</th>
                            <th className="px-2  py-6 text-center">Date Published</th>
                            <th className="px-2  py-6 text-center">Total Revenue</th>
                            <th className="px-2  py-6 text-center">Rating</th>
                            <th className="px-2  py-6 text-center">Status</th>
                            <th className="px-2  py-6 "><img src={dropdown} alt="" /></th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredTable.length > 0 ? (
                            filteredTable.map(({ productName, type, datePublished, totalRevenue, rating, status, icon }) => (
                                <tr className="border-b border-b-[#E9EAEB] text-left">
                                    <td className=" py-6 px-10 text-left sm:font-medium  text-sm text-[#030712]">{productName}</td>
                                    <td className=" py-6 px-10 text-left sm:font-medium  text-sm text-[#030712]" >{type}</td>
                                    <td className=" py-6 px-10 text-left sm:font-medium  text-sm text-[#030712]">{datePublished}</td>
                                    <td className=" py-6 px-10 text-left sm:font-medium  text-sm text-[#030712]">{totalRevenue}</td>
                                    <td className=" py-6 px-10 text-left sm:font-medium  text-sm text-[#030712]">{rating}</td>
                                    <td className={`py-6 px-10 text-left sm:font-medium  text-sm`}>
                                   <span className={` rounded-2xl px-2 py-0.5 ${status === 'Published' ? 'text-[#067647] border border-[#ABEFC6] bg-[#ECFDF3]' : null} ${status === 'Suspended' ? "text-[#B42318] border border-[#FECDCA] bg-[#FEF3F2]" : null} ${status === 'Draft' ? "text-[#414651] border border-[#E9EAEB] bg-[#FAFAFA]" : null}`}> {status} </span>    </td>
                                    <td className=" py-6 px-2"><img src={icon} alt="" /></td>
                                </tr>
                            ))
                        ) : (
                                <p>No results found</p>
                        )}
                    </tbody>
                </table>
            </div>
            <PageSection/>
        </>
    )
}