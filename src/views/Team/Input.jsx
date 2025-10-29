import Input from "../../components/Input"

export default function InputSection({input,onChange}) {
    return (
        <div className="flex flex-col mid:flex-row items-start mid:items-center gap-4 mid:gap-0 mid:justify-between pt-8">
                  <div className="w-full mid:w-1/2">
                    <Input
                      placeholder="Search for products"
                      input={input}
                      onChange={onChange}
                    />
                  </div>
                  <div className="flex gap-2 items-center px-4 py-2  bg-[#3B82F6] rounded-lg cursor-pointer hover:bg-blue-600">
                    <img src="/Icons/Plus 4.svg" alt="" />
                    <span className="text-[#FFFFFF] font-semibold text-sm">
                      Add member
                    </span>
                  </div>
                </div>
    )
}