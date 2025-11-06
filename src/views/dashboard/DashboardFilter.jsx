export default function DashboardFilter({ selected, onChange }) {
  return (
    <section className="flex items-center gap-2 sm:gap-4">
      <div className="flex items-center justify-between sm:gap-2 border border-[#E9EAEB] bg-[#FAFAFA] rounded-md pr-2 pl-0.5 py-0.5 text-[#717680] text-xs sm:text-sm font-semibold">
        <h4
          className={`cursor-pointer px-1 py-0.5 ${
            selected === "all"
              ? "border border-white bg-white "
              : "hover:bg-[#E9EAEB]"
          }  rounded-md`}
          onClick={() => onChange("all")}
        >
          12 months
        </h4>
        <h4
          className={`cursor-pointer px-1 py-0.5 rounded-md ${
            selected === "30days"
              ? "border border-white bg-white"
              : "hover:bg-[#E9EAEB] "
          }`}
          onClick={() => onChange("30days")}
        >
          30 days
        </h4>
        <h4
          className={`cursor-pointer px-1 py-0.5 rounded-md ${
            selected === "7days"
              ? "border border-white bg-white "
              : "hover:bg-[#E9EAEB] "
          }`}
          onClick={() => onChange("7days")}
        >
          7 days
        </h4>
        <h4
          className={`cursor-pointer px-1 py-0.5 rounded-md ${
            selected === "24hours"
              ? "border border-white bg-white "
              : "hover:bg-[#E9EAEB] "
          }`}
          onClick={() => onChange("24hours")}
        >
          24 hours
        </h4>
      </div>
      <div className="flex gap-1 border border-[#D5D7DA] py-1 px-1.5 sm:py-2 sm:px-3 rounded-lg cursor-pointer hover:bg-[#FAFAFA]">
        <img
          src="/Icons/filter-lines.svg"
          alt=""
          className="w-4 h-4 sm:w-6 sm:h-6"
        />
        <h4 className="text-xs sm:text-sm text-[#414651] font-semibold ">
          Filters
        </h4>
      </div>
    </section>
  );
}
