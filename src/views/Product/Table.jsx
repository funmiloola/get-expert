import dropdown from "../../assets/Icons/Dropdown.svg";
import ProductModal from "./ProductModal";
import ProductMenu from "./ProductMenu";
import { useRef, useState } from "react";
import { useOnClickOutside } from "usehooks-ts";

export default function Table({ filteredProduct }) {
     const [openOptions,setOpenOptions] = useState(null)
     const [openModal,setOpenModal] = useState(false)  
     const handleModal = () => {
         setOpenModal(true)
       setOpenOptions(false)  
      }
      const dropdownRef = useRef() 
      useOnClickOutside(dropdownRef,()=> setOpenOptions(null))
    return (
        <>
              <div className="overflow-x-auto pt-3 mid:pt-6">
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
                      },index) => (
                        <tr key={index} className="text-left border-b border-b-[#E9EAEB] font-medium text-sm text-[#030712]">
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
                                        <img src={icon} alt="" onClick={() => setOpenOptions(openOptions === index ? null : index)} />
                                        {openOptions === index && (
                          <div ref={dropdownRef}>
                              <ProductMenu onClick={handleModal} />
                          </div>
                          
                      )}
                          </td>
                        </tr>
                      )
                    )  
                              ):(
                          <p>No results found</p>
                              )}
                    
                  </tbody>
                      </table>
                      {openModal && (
                          <ProductModal onClick={ ()=> setOpenModal(false)} />
                      )}
                  </div>
        </>
    )
}