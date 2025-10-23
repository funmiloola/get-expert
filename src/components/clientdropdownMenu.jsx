export default function ClientDropdownMenu({ menuItems,className}) {

    return (
            <>
            <section className={`font-sans absolute w-42 md:w-[235px] z-50 bg-white border border-white rounded-xl shadow-xs px-1 pt-1.5 pb-3 ${className}`}>
        <ul className="">
          {menuItems.map((menu, index) => (
            <li
              key={index}
              className={`text-sm text-[#030712] py-2  pl-6 cursor-pointer ${
                 index === 0  ? "bg-[#E9EAEB]" : ""
              }`} 
        >
              {menu}
            </li>
          ))}
        </ul>
      </section>
    </>
    )
}