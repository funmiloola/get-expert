import Icon from "../assets/Icons/Stroke-1.svg"


export default function Flag() {
const reports = [
  {
    date: "May 30, 2025",
    comment: `"This user was abusive in workshop Q&A chat."`,
    reportBy: "@CoachMuna",
    status: "Warning issued",
    handledBy: "Admin Jane",
    actions: ["View Details", "Dismiss Report", "Warn Client"]
  },
  {
    date: "May 30, 2025",
    comment: `"This user was abusive in workshop Q&A chat."`,
    reportBy: "@CoachMuna",
    status: "Warning issued",
    handledBy: "Admin Jane",
    actions: ["View Details", "Dismiss Report", "Warn Client"]
  }
];
    return (
        <section className="pt-8 font-sans">
            <div className="flex gap-2.5">
                <h2 className="text-sm text-[#030712] font-medium">Sort by:</h2>
                <div className="flex gap-3 items-center">
                    <span className="text-sm font-bold text-[#030712]">Most relevant</span>
                    <img src={Icon} alt="" />
                </div>
            </div>
            <div className="flex flex-col gap-6 pt-6">
            {reports.map(({ date, comment, reportBy, status, handledBy, actions }) => (
                <div className="border border-[#C9D0D8] p-6 rounded-xl" >
                    <h3 className="font-medium text-sm text-[#030712] pb-4">{date}</h3>
                    <p className="text-sm text-[#030712] font-bold">Comment: <span className="font-normal">{comment}</span></p>
                    <div className="flex flex-col md:flex-row gap-2 md:gap-8 py-4">
                        <p className="flex flex-col justify-center text-xs font-semibold text-[#030712]">Report By<span className="font-bold text-base">{ reportBy}</span></p>
                        <p className="flex flex-col justify-center text-xs font-semibold text-[#030712]">Status<span className="font-bold text-base">{ status}</span></p>
                        <p className="flex flex-col justify-center text-xs font-semibold text-[#030712]">Handle By<span className="font-bold text-base">{ handledBy}</span></p>
                    </div>
                    <div className="flex flex-col md:flex-row gap-2 md:gap-4.25">
                        {actions.map((action) => (
                            <p className={`font-semibold text-sm ${action === "View Details" ? 'text-[#1E55AF]':null} ${action === "Dismiss Report" ? 'text-[#5F6574]':null} ${action === "Warn Client" ? "text-[#DC2626]":null}`}>{ action}</p>
                        ))}
                    </div>
               </div>
            ))}
                </div>
        </section>
    )
}