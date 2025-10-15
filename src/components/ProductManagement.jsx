import Input from "./Input";
import dropdown from "../assets/Icons/Dropdown.svg";
import PageSection from "./PagesSection";
import { useState } from "react";
import ProductMenu from "./ProductMenu";
import ProductModal from "./ProductModal";

export default function ProductManagement() {
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
      icon: dropdown,
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
      icon: dropdown,
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
      icon: dropdown,
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
      icon: dropdown,
    },
  ];
 const [input,setInput] = useState("")
 const filteredProduct = products.filter(({productName})=>productName.toLowerCase().includes(input.toLowerCase()))
 const [openOptions,setOpenOptions] = useState(false)
 const [openModal,setOpenModal] = useState(false)  
 const handleModal = () => {
     setOpenModal(true)
   setOpenOptions(false)  
 } 
  return (
    <section className="pl-2 mid:pl-0">
          <h2 className="pb-6 font-bold text-2xl text-[#181D27]">Product Management</h2>
          <div className="w-full md:w-1/2">
              <Input placeholder="Search for products" input={input} onChange={(e) => setInput(e.target.value)}/>
              </div>
      <div className="overflow-x-auto pt-6">
        <table className="min-w-full table-auto border-collapse">
          <thead className="border-b border-b-[#E9EAEB]  text-xs text-[#717680] font-semibold">
            <tr className="text-left">
              <th className="px-4 py-6">Product Name</th>
              <th className="px-4 py-6">Type</th>
              <th className="px-4 py-6">Consultant</th>
              <th className="px-4 py-6">Sales</th>
              <th className="px-4 py-6">Rating</th>
              <th className="px-4 py-6">Reviews</th>
              <th className="px-4 py-6">Created On</th>
              <th className="px-4 py-6">Payout Status</th>
              <th className="px-4 py-6">
                <img src={dropdown} alt="" />
              </th>
            </tr>
          </thead>
                  <tbody>
                      {filteredProduct.length  > 0 ? (
                        filteredProduct.map(
              ({
                productName,
                type,
                consultant,
                sales,
                rating,
                reviews,
                createdOn,
                payoutStatus,
                icon,
              }) => (
                <tr className="text-left border-b border-b-[#E9EAEB] font-medium text-sm text-[#030712]">
                  <td className="px-4 py-6">{productName}</td>
                  <td className="px-4 py-6">{type}</td>
                  <td className="px-4 py-6">{consultant}</td>
                  <td className="px-4 py-6">{sales}</td>
                  <td className="px-4 py-6">{rating}</td>
                  <td className="px-4 py-6">{reviews}</td>
                  <td className="px-4 py-6">{createdOn}</td>
                  <td className="px-4 py-6">
                    <span
                      className={`  py-0.5 px-2 border  rounded-2xl ${
                        payoutStatus === "Published" ||
                        payoutStatus === "Approved"
                          ? "text-[#067647] border-[#ABEFC6] bg-[#ECFDF3]"
                          : null
                      } 
                      ${
                        payoutStatus === "Under review"
                          ? "text-[#B54708] border-[#FEDF89] bg-[#FFFAEB]"
                          : null
                      }
                      ${payoutStatus === "Removed" ? "text-[#363F72] border-[#D5D9EB] bg-[#F8F9FC]":null}`}
                    >
                      {payoutStatus}
                    </span>
                  </td>
                  <td className="px-4 py-6 min-w-[88px] cursor-pointer relative">
                    <img src={icon} alt=""  onClick={()=> setOpenOptions((prev) => !prev)}/>
                  </td>
                </tr>
              )
            )  
                      ):(
                  <p>No results found</p>
                      )}
            
          </tbody>
              </table>
              {openOptions && (
                  <ProductMenu onClick={handleModal} />
              )}
              {openModal && (
                  <ProductModal onClick={ ()=> setOpenModal(false)} />
              )}
          </div>
          <PageSection/>
    </section>
  );
}
