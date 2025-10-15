import closeIcon from "../assets/Icons/Icon (3).svg"

export default function TransactionModal({onClick}) {
    const transactionData = [
        { name: "Transaction ID", data: "TXN_203194" },
        { name: "Buyer Info", data: "Dain Aestos" },
        { name: "Consultant Info", data: "Roxana Michelson" },
        { name: "Purchase", data: "Custom Job" },
        { name: "Amount Paid", data: "$20000.00" },
        { name: "Platform Fee", data: "$2000.00" },
        { name: "Payment Method", data: "Bank Transfer" },
        {name:"Status",data:"Approved"}
];


    return (
    <section className="fixed bg-black/75 z-10 inset-0 backdrop-blur-sm">
            <div className="bg-white w-70 md:w-100  shadow-xl absolute right-8 top-8 rounded-[18px] px-6  py-8">
                <header className="flex justify-between items-center pb-[18px] border-b border-b-[#BFD7FE]">
                    <h2 className="text-[20px] text-[#030712] font-semibold ">Transactions details</h2>
                    <img src={closeIcon} alt="" className="cursor-pointer" onClick={onClick}/>
                </header>
                <h3 className="pt-4 text-[20px] text-[#030712] font-semibold">Details</h3>
                <ul className="flex flex-col gap-[17px] pt-[17px]">
                    {transactionData.map(({ name, data }, index) => (
                        <li key={index} className="flex justify-between">
                            <span className="text-sm text-[#030712]">{name}</span>
                            <span className={`text-sm text-[#030712] font-semibold ${data === "Approved" ? 'border border-[#ABEFC6] bg-[#ECFDF3] px-2 py-0.5 rounded-2xl text-[#067647] font-medium':null}`}>{ data}</span>
                        </li>
                    ))}
                </ul>
                <div className="flex flex-col gap-1.5 pt-30">
                    <label className="text-sm text-[#414651]">Notes</label>
                    <textarea className="w-full px-3 pt-3 pb-8 border border-[#D5D7DA] text-[#717680] text-base rounded-lg outline-none" placeholder="Add a few notes to help you later"/>
                </div>
            </div>
        </section>
    )
}