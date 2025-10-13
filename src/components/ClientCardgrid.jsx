
export default function ClientCardGrid({data,className}) {
    return (
        <>
            <div className={`pt-8 ${className}`}> 
                {data.map(({ title, value, icon, change,index }) => (
                    <div key={index} className="border border-[#E9EAEB] rounded-xl p-5">
                        <h2 className="text-sm font-medium text-[#535862] pb-2">{title}</h2>
                        <div className="flex justify-between items-center">
                            <p className="text-2xl font-semibold text-[#181D27]">{value}</p>
                            <div className="flex gap-0.5 items-center ">
                                <img src={icon} alt="" />
                                <span>{ change}</span>
                            </div>
                        </div>
                    </div>
                ))}
        </div>
        </>
    )
}