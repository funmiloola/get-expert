import closeIcon from "../assets/Icons/icons8-close.svg";
import image from "../assets/Images/Image (6).svg";

export default function ReportModal({onClick}) {
  const reportData = [
    { name: "Report Type", data: "Product" },
    { name: "Item Type", data: "Digital Product" },
    { name: "Name", data: "The Ultimate Pitch Deck Template" },
    {
      name: "Description",
      data: "This template is not as advertised. It's missing key slides shown in the preview and has several broken elements.",
    },
    { name: "Expert", pic: image, data: "@slidepro" },
    { name: "Reported By", pic: image, data: "@temilolu" },
    { name: "Date Reported", data: "June 12, 2025 • 4:22 PM" },
    { name: "Status", data: "Resolved" },
  ];

  return (
    <section className="fixed inset-0 bg-black/70 z-10 backdrop-blur-sm">
      <div className="px-6 pt-5.5 pb-8 bg-white w-70 md:w-137.5 absolute right-8 top-8 rounded-[18px]">
        <header className="flex justify-between border-b border-b-[#BFD7FE] pb-5.5">
          <h2 className="text-[20px] text-[#030712] font-semibold">
            Report ID RPT_00492
          </h2>
          <img src={closeIcon} alt="" className="cursor-pointer" onClick={onClick}/>
        </header>
        <ul className="flex flex-col gap-4 pt-6">
          {reportData.map(({ name, data, pic }) => (
            <li className="flex justify-between items-center">
              <span className="text-sm text-[#030712]">{name}</span>
              {pic ? (
                <div className="flex gap-2">
                  <img src={pic} alt="pic" />
                  <span className="text-sm text-[#030712] font-semibold">
                    {data}
                  </span>
                </div>
              ) : (
                <span
                  className={`text-sm text-[#030712]  font-semibold  ${
                    data === "Resolved"
                      ? "border px-2 py-0.5 text-[#067647] bg-[#ECFDF3] border-[#ABEFC6] rounded-2xl"
                      : null
                  } ${data === reportData[3].data ? "text-[#535862] font-normal  text-right":null}`}
                >
                  {data}
                </span>
              )}
            </li>
          ))}
              </ul>
              <div className="flex flex-col gap-1.5 pt-30">
                  <label className="text-sm text-[#414651]">Notes</label>
                  <textarea className="w-full px-3 pt-3 pb-8 border border-[#D5D7DA] text-[#717680] text-base rounded-lg outline-none" placeholder="Add a few notes to help you later"/>
              </div>
      </div>
    </section>
  );
}
