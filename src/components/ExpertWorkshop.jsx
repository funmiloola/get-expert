import Input from "./Input"
import Filter from "./filter"
import dropdown from "../assets/Icons/Dropdown.svg"
import { useState } from "react"
import PageSection from "./PagesSection"

export default function ExpertWorkshop() {
    const [input, setInput] = useState("")
    const trainingSessions = [
        {
            productName: "Pricing for Consultants",
            datePublished: "Apr 12, 2023 | 09:32AM",
            bookedSeats: "18 / 20",
            price: "₦5,000 per seat",
            status: "Upcoming",
            rating: "-",
            icon: dropdown
        },
        {
            productName: "Pricing for Consultants",
            datePublished: "Apr 12, 2023 | 09:32AM",
            bookedSeats: "18 / 20",
            price: "₦5,000 per seat",
            status: "Upcoming",
            rating: "-",
            icon: dropdown
        },
        {
            productName: "Pricing for Consultants",
            datePublished: "Apr 12, 2023 | 09:32AM",
            bookedSeats: "18 / 20",
            price: "₦5,000 per seat",
            status: "Cancelled",
            rating: "N/A",
            icon: dropdown
        },
        {
            productName: "Pricing for Consultants",
            datePublished: "Apr 12, 2023 | 09:32AM",
            bookedSeats: "18 / 20",
            price: "₦5,000 per seat",
            status: "Cancelled",
            rating: "N/A",
            icon: dropdown
        },
        {
            productName: "Pricing for Consultants",
            datePublished: "Apr 12, 2023 | 09:32AM",
            bookedSeats: "18 / 20",
            price: "₦5,000 per seat",
            status: "Completed",
            rating: "4.6",
            icon: dropdown
        }
    ];
    const filteredTrainingSession = trainingSessions.filter(({productName})=> productName.toLowerCase().includes(input.toLowerCase()))
    return (
        <>
          <div className="flex flex-col gap-4 md:flex-row md:gap-0 md:items-center justify-between pt-8">
                        <div className="w-full md:w-1/2">
                        <Input input={input} onChange={(e)=>setInput(e.target.value)} placeholder="Search for registered"/>
                        </div>
                        <Filter />
            </div>
            <div className="pt-8 overflow-x-auto lg:overflow-x-hidden">
                <table>
                    <thead>
                        <tr className="text-left  border-b border-b-[#E9EAEB] text-xs text-[#717680] font-semibold">
                            <th className="px-2  py-6 text-center">Product Name</th>
                            <th className="px-2  py-6 text-center">Date Published</th>
                            <th className="px-2  py-6 text-center">Booked Series</th>
                            <th className="px-2  py-6 text-center">Price</th>
                            <th className="px-2  py-6 text-center">Status</th>
                            <th className="px-2  py-6 text-center">Review</th>
                            <th className="px-0  py-6">
                                <img src={dropdown} alt="" />
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredTrainingSession.length > 0 ? (
                            filteredTrainingSession.map(({ productName, datePublished, bookedSeats, price, status, rating, icon }) => (
                            <tr className="border-b border-b-[#E9EAEB] text-left">
                                <td  className=" py-6 px-8 text-left sm:font-medium  text-sm text-[#030712]">{productName}</td>
                                <td  className=" py-6 px-8 text-left sm:font-medium  text-sm text-[#030712]">{datePublished}</td>
                                <td  className=" py-6 px-8 text-left sm:font-medium  text-sm text-[#030712]">{bookedSeats}</td>
                                <td  className=" py-6 px-8 text-left sm:font-medium  text-sm text-[#030712]">{price}</td>
                                    <td className={`py-6 px-8 text-left sm:font-medium  text-sm`}>
                                 <span  className={` rounded-2xl px-2 py-0.5 ${status === 'Upcoming' ? 'text-[#067647] border border-[#ABEFC6] bg-[#ECFDF3]' : null} ${status === 'Cancelled' ? "text-[#B42318] border border-[#FECDCA] bg-[#FEF3F2]" : null} ${status === 'Completed' ? "text-[#414651] border border-[#E9EAEB] bg-[#FAFAFA]" : null}`}>{status}</span></td>
                                <td  className=" py-6 px-8 text-left sm:font-medium  text-sm text-[#030712]">{rating}</td>
                                <td>
                                    <img src={icon} alt="" />
                                </td>
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