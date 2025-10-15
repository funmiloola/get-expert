import { useState } from "react"
import closeIcon from "../assets/Icons/Icon (3).svg"
import image from "../assets/Images/Frame 427319045.svg"
import profilePic from "../assets/Images/Image (5).svg"

export default function ProductModal({onClick}) {
    
    const text = "Navigating business taxes can often feel like a daunting task for many entrepreneurs. Understanding the various tax obligations that come with running a business is crucial for maintaining compliance and avoiding penalties. From income tax to sales tax, each type of tax has its own set of rules and regulations that must be adhered to. It's essential for business owners to familiarize themselves with these requirements to ensure they are meeting their legal obligations while also optimizing their tax situation.One of the first steps in navigating business taxes is to determine the structure of your business. Whether you operate as a sole proprietorship, partnership, corporation, or LLC, each structure has different tax implications. For instance, corporations may face double taxation on profits, while sole proprietors report business income on their personal tax returns. Understanding these distinctions can help you make informed decisions about your business structure and tax strategy.Additionally, keeping accurate records throughout the year can significantly ease the tax filing process. This includes tracking income, expenses, and any deductions you may be eligible for. Utilizing accounting software or hiring a professional accountant can streamline this process and ensure that you are not missing out on potential savings. By staying organized and informed, you can navigate the complexities of business taxes with confidence and focus on growing your enterprise."
    const [isExpanded, setIsExpanded] = useState(false)
    const maxlength = 258
    const displayText = isExpanded ? text : text.slice(0,maxlength) + '...'
    return (
        <section className="fixed inset-0 bg-black/75 backdrop-blur-sm z-10">
            <div className="bg-white w-70 md:w-137.5  shadow-xl absolute right-8 top-8 rounded-[18px] px-6  py-8">
                <header>
                <img src={closeIcon} alt="" className="absolute top-4 right-10 cursor-pointer" onClick={onClick}/>
                </header> 
                <div>
                <img src={image} alt=""  className="pt-4"/>
                    <h2 className="text-[18px] mid:text-[20px] font-semibold text-[#030712] pt-6">From Idea to Launch: A Founder’s Handbook</h2>
                    <h3 className="text-base font-semibold pt-6 text-[#030712]">Description</h3>
                    <p className="text-xs text-[#535862] pt-2">{displayText }</p>
                    <button onClick={() => setIsExpanded(!isExpanded)} className={`pt-2 text-sm font-semibold ${isExpanded ? 'text-gray-400':'text-[#383BCA]'}`}>{isExpanded ? "READ LESS" : "READ MORE" }</button>
                </div>
                <h4 className="text-base text-[#030712] font-semibold pt-6">Product information</h4>
                <div className="flex flex-col mid:flex-row gap-2 mid:gap-4 pt-2"> 
                    <div>
                        <img src={profilePic} alt="" />
                    </div>
                    <div>
                        <div>
                            <h5 className="text-lg mid:text-2xl text-[#030712] font-semibold">Roxanna Michealson</h5>
                        </div>
                        <div className="flex gap-9 pt-2">
                            <div className="flex flex-col gap-1">
                                <p className="text-[11px] text-[#475367]">Reviews</p>
                                <p className="text-[11px] text-[#101928] font-semibold ">4.9 (210 reviews)</p>
                            </div>
                            <div className="flex flex-col gap-1">
                                <p className="text-[11px] text-[#475367]">Sessions hosted</p>
                                <p className="text-[11px] text-[#101928] font-semibold ">25</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col mid:flex-row gap-2 mid:gap-4 pt-6">
                    <p className="text-sm text-[#030712] font-semibold flex gap-2">Upload Date: <span className="font-medium">May 30, 2025</span></p>
                    <p className="text-sm text-[#030712] font-semibold flex gap-2">Type: <span  className="font-medium">PDF</span></p>
                    <p className="text-sm text-[#030712] font-semibold flex gap-2">Price: <span  className="font-medium">$45,000</span></p>
                </div>
                <div className="flex flex-col mid:flex-row gap-2 mid:gap-4 pt-1">
                    <p className="text-sm text-[#030712] font-semibold flex gap-2">Language: <span className="font-medium">English</span></p>
                    <p className="text-sm text-[#030712] font-semibold flex gap-2">Sales: <span className="font-medium">25</span></p>
                    <p className="text-sm text-[#030712] font-semibold flex gap-2">Rating: 48 <span className="font-medium">(1,059 reviews)</span></p>
                </div>
                <div className="flex flex-col gap-1.5 pt-30">
                    <label  className="text-sm text-[#414651]">Notes</label>
                    <textarea className="pt-3 px-3.5 pb-8 border border-[#D5D7DA] outline-none rounded-lg" placeholder="Add a few notes to help you later"/>
                </div>
            </div>
            
        </section>
    )
}