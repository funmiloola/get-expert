import { NavLink } from "react-router-dom";
import { useLocation,useNavigate } from "react-router-dom";
export default function Menu() {
    const location = useLocation()
    const navigate = useNavigate()
  const menuItems = [
    { name: "View", path: "client" },
    { name: "Suspend" },
    { name: "Reset Password" },
    { name: "Delete" },
    ];
    const path = () => { 
        if (location.pathname.includes("/clients/experts")) {
            navigate("/clients/profile-expert")
        }
         else if (location.pathname.includes("/clients")) {
            navigate("/clients/client")
        }
        else {
            return "/"
        }
 }   
  return (
    <section className="font-sans absolute right-8 bottom-20 w-42 md:w-[235px] z-50 bg-white border border-white rounded-xl shadow-xs px-1 pt-1.5 pb-3">
      <ul className="">
        {menuItems.map((menu, index) => (
          <li
            key={index}
            className={`text-sm text-[#030712] py-2  pl-6 cursor-pointer ${
              menu === "View" ? "bg-[#E9EAEB]" : ""
            }`}
          >
            <NavLink to={path()}>{menu.name}</NavLink>
          </li>
        ))}
      </ul>
    </section>
  );
}
