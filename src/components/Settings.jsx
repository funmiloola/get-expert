import { NavLink,Outlet } from "react-router-dom"
export default function Settings() {
   
    const menuItems = [
        { name: "Profile", path:"" }, { name: "Password",path:"password" }, { name: "Wallet",path:"wallet" }, { name: "Notifications" ,count:"2",path:"notification"}]
    return (
        <section className="font-sans">
            <h2 className="text-[rgb(3,7,18)] text-xl mid:text-2xl font-semibold pl-2 sm:pl-0">Settings</h2>
            <h3 className="pt-2 text-base text-[#535862]">Manage your team and preferences here</h3>
            <ul className="pt-8 flex items-center justify-between mid:justify-start gap-0 mid:gap-20 border-b border-[#E9EAEB] ">
                {menuItems.map(({ name, count,path }) => (
                    <li>
                        <NavLink to={path} end className={({isActive}) => `flex mid:gap-2 items-center text-xs mid:text-sm text-[#717680] font-semibold px-4 pb-4 ${isActive ? "border-b-4 border-b-[#1E55AF] pb-2 text-[#1E55AF]":''}` 
                  }>
                        {name}
                        {count && (
                            <span className="px-2 py-0.5 border border-[#E9EAEB] bg-[#FAFAFA] rounded-full">{ count}</span>
                            )}
                            </NavLink>
                    </li>
                ))}
            </ul>
            <Outlet/>
        </section>
    )
}