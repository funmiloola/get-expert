

export default function TransactionMenu({onClick}) {
    const menuItems = ["View", "Release Funds", "Flag", "Refund"]

    return (
            <>
      <section className="font-sans absolute right-8 bottom-20 w-42 md:w-[235px] z-50 bg-white border border-white rounded-xl shadow-xs px-1 pt-1.5 pb-3">
        <ul className="">
          {menuItems.map((menu, index) => (
            <li
              key={index}
              className={`text-sm text-[#030712] py-2  pl-6 cursor-pointer ${
                menu === "View" ? "bg-[#E9EAEB]" : ""
              }`}
            onClick={index === 0 ? onClick : undefined}>
              {menu}
            </li>
          ))}
        </ul>
      </section>
    </>
    )
}