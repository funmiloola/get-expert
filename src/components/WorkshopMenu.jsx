import { NavLink } from "react-router-dom";
export default function WorkshopMenu() {
  const menuItems = [
    { name: "View Details", path: "workshop-details" },
    { name: "Cancel", path: "workshop-cancel" },
    { name: "Flag", path: "workshop-flag" },
    { name: "Message Host", path: "workshop-message" },
  ];
  return (
    <>
      <section className="font-sans absolute right-8 bottom-20 w-42 md:w-[235px] z-50 bg-white border border-white rounded-xl shadow-xs px-1 pt-1.5 pb-3">
        <ul className="">
          {menuItems.map((menu, index) => (
            <li
              key={index}
              className={`text-sm text-[#030712] py-2  pl-6 cursor-pointer ${
                menu.name === "View Details" ? "bg-[#E9EAEB]" : ""
              }`}
            >
              <NavLink to={menu.path}>{menu.name}</NavLink>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
