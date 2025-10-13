import ExpertProfile from "./ExpertProfile";
import ClientCardGrid from "./ClientCardgrid";
import upgreenArrow from '../assets/Icons/arrow-up.svg';
import downredArrow from '../assets/Icons/arrow-down.svg'
import { NavLink,Outlet } from "react-router-dom";
export default function ExpertProfileSection() {
  
    const dashboardStats = [
  {
    title: "Total Earnings",
    value: "₦235,000",
    icon:downredArrow,
    change: "100%",
  },
  {
    title: "Products Sold",
      value: "20",
    icon:upgreenArrow,
    change: "100%",
  },
  {
    title: "Workshops Hosted",
      value: "6",
    icon:upgreenArrow,
    change: "100%",
  },
];
    const tableHeader = [ { name: "Products",path:""},
    { name: "Workshops", path: "workshop" },
        {name:"Payout",path:"payout"},
        { name: "Reviews", count: 2,path:"review" },
        {name:"Flags",path:"flags"},
        {name:"Notes",path:"notes"}]

    return (
        <>
            <ExpertProfile />
            <ClientCardGrid data={dashboardStats} className="grid grid-cols-1 md:grid-cols-3 gap-6" />
             <ul className="flex justify-between mid:justify-start mid:gap-20 lg:gap-26 xl:gap-32 items-center pt-8 border-b border-b-[#E9EAEB] pb-4 ">
                {tableHeader.map(({ name, count, index, path }) => (
                    <li key={index} className="text-[10px] mid:text-sm text-[#717680] font-medium mid:font-semibold cursor-pointer">
                        <NavLink to={path} end className={({ isActive }) => isActive ? 'border-b-2 border-b-[#1E55AF] pb-4  text-[#1E55AF]' : ''}>
                            {({ isActive }) => (
                            <>
                                {name}
                        {count && (
                                        <span className={`ml-2 py-0.5 px-2 border border-[#E9EAEB] rounded-full ${isActive
                                            ? 'hidden' : 'inline-block'}`}>{count}</span>
                                    )}
                                    </>
                            )}
                        
                            </NavLink>
                    </li>
                ))}
            </ul>
             <Outlet/>
        </>
    )
}