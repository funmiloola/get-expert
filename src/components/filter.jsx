export default function Filter({ currentFilter, onChange }) {
  return (
    <div className="flex items-center justify-between sm:gap-2 border border-[#E9EAEB] bg-[#FAFAFA] rounded-md pr-2 pl-0.5 py-0.5 text-[#717680] text-xs sm:text-sm font-semibold">
      <h4
        className={`cursor-pointer ${
          currentFilter === "all"
            ? "border border-white bg-white px-3 py-1"
            : "hover:bg-[#E9EAEB] p-1"
        }  rounded-md`}
        onClick={() => onChange("all")}
      >
        12 months
      </h4>
      <h4
        className={`cursor-pointer  rounded-lg ${
          currentFilter === "30days"
            ? "border border-white bg-white px-3 py-1"
            : "hover:bg-[#E9EAEB] p-1"
        }`}
        onClick={() => onChange("30days")}
      >
        30 days
      </h4>
      <h4
        className={`cursor-pointer  rounded-lg ${
          currentFilter === "7days"
            ? "border border-white bg-white px-3 py-1"
            :  "hover:bg-[#E9EAEB] p-1"
        }`}
        onClick={() => onChange("7days")}
      >
        7 days
      </h4>
      <h4
        className={`cursor-pointer  rounded-lg ${
          currentFilter === "24hours"
            ? "border border-white bg-white px-3 py-1"
            :  "hover:bg-[#E9EAEB] p-1"
        }`}
        onClick={() => onChange("24hours")}
      >
        24 hours
      </h4>
    </div>
  );
}
