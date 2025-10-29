import ReactFlagsSelect from "react-flags-select";
import { useState } from "react";

export default function Form() {
  const [selected, setSelected] = useState("NG");
  return (
    <form className="pt-4 md:pt-11.25">
      <div className="flex flex-col md:flex-row gap-2 md:gap-68   md:border-b border-b-[#E9EAEB] md:pb-5">
        <label className="font-semibold text-sm text-[#414651]">Name</label>
        <div className="flex flex-col md:flex-row gap-4 md:gap-6">
          <input
            type="text"
            className="outline-none p-3 border border-[#DEE3E7] text-[#98A2B3] text-sm rounded-md"
            placeholder="Placeholder"
          />
          <input
            type="text"
            className="outline-none p-3 border border-[#DEE3E7] text-[#98A2B3] text-sm  rounded-md"
            placeholder="Placeholder"
          />
        </div>
      </div>
      <div className=" flex flex-col md:flex-row gap-2 md:gap-55 pt-5  md:border-b border-b-[#E9EAEB] md:pb-5">
        <label className="font-semibold text-sm text-[#414651]">
          Email address
        </label>
        <div className="w-full md:w-[42%] flex items-center justify-between p-3 border border-[#DEE3E7] text-[#98A2B3] rounded-md">
          <input
            type="text"
            className="outline-none text-sm w-full pr-3"
            placeholder="Placeholder"
          />
          <img src="/Icons/Right Content.svg" alt="" />
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-4 md:gap-18 pt-5 md:border-b border-b-[#E9EAEB] md:pb-5">
        <div>
          <h4 className="text-sm text-[#414651] font-semibold">Your Photo</h4>
          <p className="text-sm text-[#535862]">
            This will be displayed on your profile.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-2 md:gap-5 items-start w-full md:w-[50%]">
          <img src="/Images/Avatar (6).svg" alt="" />
          <label
            htmlFor="file-upload"
            className="flex flex-col items-center justify-center w-full md:w-[68%] h-40 border-2  border-[#E9EAEB] rounded-2xl bg-white cursor-pointer"
          >
            <div className="flex flex-col items-center justify-center gap-3 text-center">
              <div className="border border-[#D5D7DA] p-2.5 rounded-lg">
                <img src="/Icons/Icon (4).svg" alt="" />
              </div>
              <div>
                <p className="text-sm text-[#535862]">
                  <span className="text-[#1E55AF] font-semibold">
                    Click to upload
                  </span>{" "}
                  or drag and drop
                </p>
                <p className="text-xs text-[#535862]">
                  SVG, PNG, JPG or GIF (max. 800×400px)
                </p>
              </div>
              <input
                id="file-upload"
                type="file"
                className="hidden"
                accept=".svg,.png,.jpg,.jpeg,.gif"
              />
            </div>
          </label>
        </div>
      </div>
      <div className=" flex flex-col md:flex-row gap-2 md:gap-72 pt-5  md:border-b border-b-[#E9EAEB] md:pb-5">
        <label className="font-semibold text-sm text-[#414651]">Role</label>
        <input
          type="text"
          placeholder="Product Designer"
          className="outline-none p-3 border border-[#DEE3E7] placeholder:text-[#181D27] text-sm rounded-md w-[42%]"
        />
      </div>
      <div className=" flex flex-col md:flex-row gap-2 md:gap-66 pt-5  md:border-b border-b-[#E9EAEB] md:pb-5">
        <label className="font-semibold text-sm text-[#414651]">Country</label>
        <div className="w-full md:w-[42%] text-[#414651]">
          <ReactFlagsSelect
            selected={selected}
            onSelect={(code) => setSelected(code)}
            selectButtonClassName="!border-[#E9EAEB] !text-[#181D27] !bg-white  !w-full"
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-2 md:gap-57 pt-5  md:border-b border-b-[#E9EAEB] md:pb-5">
        <label className="flex gap-2 items-center">
          <span className="font-semibold text-sm text-[#414651]">Timezone</span>
          <img src="/Icons/Icon (6).svg" alt="" />
        </label>
        <div className="flex justify-between p-3 border border-[#DEE3E7]  rounded-md w-full md:w-[42%] ">
          <div className="flex gap-2 items-center">
            <img src="/Icons/clock.svg" alt="" />
            <select
              className="appearance-none w-full outline-none text-[#181D27] text-sm"
              defaultValue="pst"
            >
              <option value="pst">Pacific Standard Time (PST) UTC−08:00</option>
              <option value="Africa/Lagos">
                Nigeria (West Africa Time, WAT) UTC+01:00
              </option>
              <option value="America/Toronto">
                Canada (Eastern Time, ET) UTC−05:00
              </option>
              <option value="America/New_York">
                USA (Eastern Time, ET) UTC−05:00
              </option>
              <option value="America/Chicago">
                USA (Central Time, CT) UTC−06:00
              </option>
              <option value="Europe/London">
                United Kingdom (GMT) UTC+00:00
              </option>
              <option value="Europe/Berlin">
                Germany (Central European Time, CET) UTC+01:00
              </option>
              <option value="Australia/Sydney">
                Australia (Australian Eastern Time, AET) UTC+10:00
              </option>
              <option value="Africa/Johannesburg">
                South Africa (South Africa Standard Time, SAST) UTC+02:00
              </option>
              <option value="Europe/Moscow">
                Russia (Moscow Standard Time, MSK) UTC+03:00
              </option>
            </select>
          </div>
          <img src="/Icons/Icon (5).svg" alt="" />
        </div>
      </div>
      <div className="flex items-center gap-3 pt-5 pb-5">
        <button className="px-4 py-2 text-[#344054] text-sm font-semibold rounded-lg border border-[#D0D5DD] hover:bg-[#E9EAEB] cursor-pointer">
          Cancel
        </button>
        <button className="px-4 py-2 text-white text-sm font-semibold rounded-lg border border-[#3B82F6] bg-[#3B82F6] hover:bg-blue-600 cursor-pointer">
          Save
        </button>
      </div>
    </form>
  );
}
