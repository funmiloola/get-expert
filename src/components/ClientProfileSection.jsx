import ClientProfile from "./ClientProfile"
import ClientCardGrid from "./ClientCardgrid"
import { Outlet,NavLink } from "react-router-dom"
import { stats } from "../data"



export default function ClientProfileSection() {
   
    const tableHeader = [
        { name: "Purchase History",path:""},
        { name: "Workshops",path:"workshop" },
        { name: "Reviews", count: 2,path:"review" },
        {name:"Flags",path:"flags"},
        {name:"Notes",path:"notes"}
    ]
    return (
        <section>
            <ClientProfile />
            <ClientCardGrid data={stats} className="grid grid-cols-1 mid:grid-cols-2 lg:grid-cols-4 gap-6"/>
            <ul className="flex justify-between mid:justify-start mid:gap-20 lg:gap-26 xl:gap-36 items-center pt-8 border-b border-b-[#E9EAEB] pb-4 ">
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
          </section>
    )
}