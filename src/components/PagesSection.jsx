import prevIcon from "../assets/Icons/arrow-left.svg";
import nextIcon from "../assets/Icons/arrow-right.svg";
import pageIcon from "../assets/Icons/Number.svg";


export default function PageSection() {
  const pages = ["1", "2", "3", pageIcon, "8", "9", "10"];
  return (
    <footer className="flex items-center justify-between pr-5 pt-8.25">
      <div className="flex gap-1 items-center cursor-pointer border border-[#C9C0D8] rounded-md px-1 py-0.5 mid:px-3 mid:py-2">
        <img src={prevIcon} alt="" />
        <span className="text-sm text-[#414651]  mid:font-semibold">Previous</span>
      </div>
      <ul className="flex gap-2 md:gap-6 items-center ">
        {pages.map((page, index) => (
          <li key={index}>
            {index === 3 ? <img src={page} /> : <span className="text-xs md:text-sm text-[#717680]">{page}</span>}
          </li>
        ))}
      </ul>
      <div className="flex gap-1 items-center cursor-pointer border border-[#C9C0D8] rounded-md px-1 py-0.5 mid:px-3 mid:py-2">
        <img src={nextIcon} alt="" />
        <span className="text-sm text-[#414651]  mid:font-semibold">Next</span>
      </div>
    </footer>
  );
}
