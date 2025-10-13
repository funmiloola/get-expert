import profilePicture from "../assets/Images/Content.svg";
import flag from "../assets/Icons/Vector (9).svg";
import deleteIcon from "../assets/Icons/Delete.svg";
import dropdownIcon from "../assets/Icons/Dropdown.svg";


export default function ClientProfile() {
  return (
    <section className="border border-[#DBE8FE] rounded-xl ml-3 mt-1 mid:ml-0 mid:mt-0 py-2 mid:py-6 mid:pr-6 ">
      <div className="flex flex-col mid:flex-row px-4 pb-2 mid:px-0 mid:pb-0 gap-0 xl:gap-8 items-start">
        <div>
          <img src={profilePicture} alt="" className="w-16 h-16 lg:w-36 lg:h-36"/>
        </div>
        <div className="flex flex-col lg:flex-row items-start gap-3 lg:gap-20 justify-between">
          <div>
            <h2 className="text-base mid:text-lg lg:text-2xl text-[#030712] font-semibold">
              Dain Aetos
            </h2>
            <h3 className="text-[10px] mid:text-sm text-[#475367] ">
              Role:
              <span className="font-semibold text-[#030712] text-xs mid:text-base">
                Client
              </span>
            </h3>
            <div className="pt-3 md:pt-7.5 flex flex-col md:flex-row gap-2 md:gap-9">
              <p className="flex flex-col gap-1 text-[10px] mid:text-sm text-[#475367]">
                Email address
                <span className="font-semibold text-[#030712] text-xs mid:text-base">
                  roxannamic@untitled.com
                </span>
              </p>
              <p className="flex flex-col gap-1 text-[10px] mid:text-sm text-[#475367]">
                Username
                <span className="font-semibold text-[#030712] text-xs mid:text-base">
                  @roxanam
                </span>
              </p>
              <p className="flex flex-col gap-1 text-[10px] mid:text-sm text-[#475367]">
                Phone number
                <span className="font-semibold text-[#030712] text-xs mid:text-base">
                  01234567890
                </span>
              </p>
            </div>
            <div className="pt-3 mid:pt-7.5 flex flex-col mid:flex-row gap-2 mid:gap-12 mid:items-center">
              <p className="flex flex-col gap-1 text-sm text-[#475367]">
                Status <span className="text-[#067647] border border-[#ABEFC6] font-medium bg-[#ECFDF3] rounded-2xl py-0.5 px-2.5">Active</span>
              </p>
              <p className="flex flex-col gap-1 text-[10px] mid:text-sm text-[#475367]">
                Joined
                <span className="font-semibold text-[#030712] text-xs mid:text-base">
                  Jan 16, 2025
                </span>
              </p>
              <div className="flex flex-col gap-1  ">
                <p className="text-[10px] mid:text-sm text-[#475367]">Country</p>
                <div className="flex gap-3 items-center">
                  <img src={flag} alt="" className="rounded-full" />
                  <span className="font-semibold text-[#030712] text-xs mid:text-base">Lagos, Nigeria</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-3">
            <button className="flex items-center gap-2 py-1 mid:py-2 px-4 mid:px-10 bg-[#DC2626] rounded-lg cursor-pointer">
                          <img src={deleteIcon} alt="" />
                          <span className="font-semibold text-white text-[10px] mid:text-sm"> Delete</span>
             
            </button>
            <div className="px-1 py-1 mid:px-3.25 mid:py-2 border border-[#D0D5DD] rounded-lg cursor-pointer">
              <img src={dropdownIcon} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
