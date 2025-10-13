import ProfilePic from "../assets/Images/Content.svg";
import profileIcon from "../assets/Icons/Profile (1).svg";
import communityIcon from "../assets/Icons/user.svg";
import cartIcon from "../assets/Icons/Buy.svg";
import logout from "../assets/Icons/Logout.svg";


export default function ProfileModal() {
  const menus = [
    { img: profileIcon, name: "View Profile" },
    { img: communityIcon, name: "Community" },
    { img: cartIcon, name: "My Cart" },
  ];
  return (
    <section className="font-sans absolute right-8 top-7 w-45 md:w-64 z-50 bg-gray-50 rounded-xl">
      <div className="flex items-center md:items-start gap-1 pt-3 border-b border-b-gray-200">
        <div>
          <img src={ProfilePic} alt="" className="w-9 h-9 md:w-18 md:h-18" />
        </div>
        <div className="">
          <h1 className="font-semibold text-[#181D27] text-[10px] md:text-sm">
            Talent Adeoye
          </h1>
          <p className="pt-1 text-[10px] md:text-sm text-[#535862]">
            talented@untitledui.com
          </p>
        </div>
      </div>
      <ul className="bg-white flex flex-col gap-3 py-3 pl-4 border-b border-b-[#E9EAEB]  rounded-b-2xl">
        {menus.map(({ img, name, index }) => (
          <li key={index} className="flex gap-2 cursor-pointer">
            <img src={img} alt="" className="w-3 h-3 md:w-6 md:h-6" />
            <span className="font-semibold text-[#414651] text-[10px] md:text-sm">
              {name}
            </span>
          </li>
        ))}
      </ul>
      <div className="flex gap-2 pl-4 pt-3 pb-3.5 cursor-pointer">
        <img src={logout} alt="" className="w-3 h-3 md:w-6 md:h-6" />
        <span className="font-semibold text-[#414651] text-[10px] md:text-sm">
          Sign Out
        </span>
      </div>
    </section>
  );
}
